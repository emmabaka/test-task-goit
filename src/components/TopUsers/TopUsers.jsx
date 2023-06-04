import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/usersApi";
import { ThreeDots } from "react-loader-spinner";
import UserCard from "../../components/UserCard/UserCard";
import css from "./TopUsers.module.css";

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    getAllUsers()
      .then((res) => {
        const sorted = res
          .sort((a, b) => b.followers - a.followers)
          .slice(0, 5);
        setUsers(sorted);
      })
      .catch((e) => console.log(e))
      .finally(setLoad(false));
  }, []);

  return (
    <section className={css.topUsers}>
      <div className="container">
        <h2 className={css.title}>Top-5 users</h2>
        {isLoad && (
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
        )}
        <ul className={css.usersList}>
          {users.map((item) => (
            <UserCard key={item.id} user={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopUsers;
