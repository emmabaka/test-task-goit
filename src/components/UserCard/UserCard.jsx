import { useState } from "react";
import { updateFollowUser, updateUnfollowUser } from "../../api/usersApi";
import { formatNumber } from "../../helpers/formatNumber";
import image from "../../assets/logo-goit.png";
import css from "./UserCard.module.css";

const UserCard = ({
  user: { id, avatar, user, tweets, followers, follow },
}) => {
  const [isFollow, setFollow] = useState(follow);

  const handleFollow = () => {
    updateFollowUser(id);
    setFollow(true);
  };
  const handleUnfollow = () => {
    updateUnfollowUser(id);
    setFollow(false);
  };

  return (
    <li className={css.cardContainer}>
      <div className={css.upperCard}>
        <img className={css.logo} src={image} alt="logo" />
      </div>
      <div className={css.line}>
        <div className={css.imageBorder}>
          <img
            className={css.avatar}
            src={avatar}
            alt=""
            width={62}
            height={62}
          />
        </div>
      </div>
      <div className={css.lowerCard}>
        <p className={css.cardInfo}>{user}</p>
        <p className={css.cardInfo}> {`${tweets} tweets`}</p>
        <p className={css.cardInfo}>{`${formatNumber(followers)} followers`}</p>
        {isFollow ? (
          <button
            className={css.followButton + " " + css.followingButton}
            type="button"
            onClick={handleUnfollow}
          >
            Following
          </button>
        ) : (
          <button
            className={css.followButton}
            type="button"
            onClick={handleFollow}
          >
            Follow
          </button>
        )}
      </div>
    </li>
  );
};

export default UserCard;
