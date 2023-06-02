import image from "../../assets/logo-goit.png";
import css from "./UserCard.module.css";

const UserCard = ({ user }) => {
  return (
    <li className={css.cardContainer}>
      <div className={css.upperCard}>
        <img className={css.logo} src={image} alt="logo" />
      </div>
      <div className={css.line}>
        <div className={css.imageBorder}>
          <img
            className={css.avatar}
            src={user.avatar}
            alt=""
            width={62}
            height={62}
          />
        </div>
      </div>
      <div className={css.lowerCard}>
        <p className={css.cardInfo}>{user.user}</p>
        <p className={css.cardInfo}> {`${user.tweets} tweets`}</p>
        <p className={css.cardInfo}>{`${user.followers} followers`}</p>
        <button className={css.followButton} type="button">
          Follow
        </button>
      </div>
    </li>
  );
};

export default UserCard;
