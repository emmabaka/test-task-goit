import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  getSortedUsers,
  getUsers,
  getAllUsers,
  getAllSortedUsers,
} from "../../api/usersApi";
import { ThreeDots } from "react-loader-spinner";
import { VscTriangleLeft } from 'react-icons/vsc';
import UserCard from "../UserCard/UserCard";
import css from "./UsersList.module.css";

const UsersList = () => {
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const [isLoad, setLoad] = useState(false);
  const [params, setParams] = useSearchParams();

  const selectedTweets = params.get("select") ?? "";

  useEffect(() => {
    getAllUsers().then((res) => setLastPage(res.length / 6));
  }, []);

  useEffect(() => {
    setLoad(true);
    if (selectedTweets === "follow") {
      getAllSortedUsers(false).then((res) => setLastPage(res.length / 6));
      getSortedUsers(false, page)
        .then((res) => {
          if (page === 1) {
            setVisibleUsers(res);
          } else {
            setVisibleUsers((prev) => [...prev, ...res]);
          }
        })
        .finally(() => setLoad(false));
    } else if (selectedTweets === "followings") {
      getAllSortedUsers(true).then((res) => setLastPage(res.length / 6));
      getSortedUsers(true, page)
        .then((res) => {
          if (page === 1) {
            setVisibleUsers(res);
          } else {
            setVisibleUsers((prev) => [...prev, ...res]);
          }
        })
        .finally(() => setLoad(false));
    } else {
      getAllUsers().then((res) => setLastPage(res.length / 6));
      getUsers(page)
        .then((res) => {
          if (page === 1) {
            setVisibleUsers(res);
          } else {
            setVisibleUsers((prev) => [...prev, ...res]);
          }
        })
        .finally(() => setLoad(false));
    }
  }, [page, selectedTweets]);

  const handleSelectChange = (e) => {
    setPage(1);
    setParams({ select: e.target.value });
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className={css.tweets}>
      <div className="container">
        <div className={css.wrapper}>
          <Link className={css.backButton} to="/" > <VscTriangleLeft />Back</Link>
          <select
            name="tweets"
            id="tweets-select"
            onChange={handleSelectChange}
            value={selectedTweets}
            className={css.tweetsSelect}
          >
            <option value="all">All</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </select>
        </div>
        <ul className={css.tweetsList}>
          {visibleUsers.map((item) => (
            <UserCard key={item.id} user={item} />
          ))}
        </ul>
        {isLoad ? (
          <div className={css.threeDots}>
            <ThreeDots
              height="70"
              width="70"
              radius="9"
              color="#535bf2"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          </div>
        ) : (
          page !== lastPage &&
          page <= lastPage && (
            <button className={css.moreButton} type="button" onClick={loadMore}>
              Load More
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default UsersList;
