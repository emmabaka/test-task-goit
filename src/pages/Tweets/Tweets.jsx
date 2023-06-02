import UserCard from "../../components/UserCard/UserCard";
import { fetchUsers, getAllUsers } from "../../api/fetchUsers";
import { useEffect, useState } from "react";
import css from "./Tweets.module.css";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {
    getAllUsers().then((res) => setLastPage(res.length / 6));
  }, []);

  useEffect(() => {
    fetchUsers(page)
      .then((res) => {
        setUsers((prev) => [...prev, ...res]);
      })
      .catch(console.log);
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className={css.tweets}>
      <div className={`${css.tweetsContainer} container`}>
        <ul className={css.tweetsList}>
          {users.map((item) => (
            <UserCard key={item.id} user={item} />
          ))}
        </ul>
        {page !== lastPage && (
          <button className={css.moreButton} type="button" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Tweets;
