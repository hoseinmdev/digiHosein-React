import styles from "./comment.module.css";
import {
  AiFillStar,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsReply, BsStarHalf } from "react-icons/bs";
import ReplyComment from "../ReplyComment/ReplyComment";

const Comment = ({ id, comment, setReplyComment }) => {
  const {
    userName,
    date,
    reply,
    star,
    text,
    like,
    dislike,
    positivePoints,
    negativePoints,
  } = comment;
  const [likes, setLikes] = useState(like);
  const [dislikes, setDislikes] = useState(dislike);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  useEffect(() => {
    setLikes(like);
    setDislikes(dislike);
  }, []);

  const likeProduct = () => {
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };
  const dislikeProduct = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    }
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };
  const renderLikeComponent = () => {
    const className = !liked ? styles.likeProduct : styles.liked;
    return (
      <span className={className} onClick={likeProduct}>
        <p>{likes}</p>
        <AiOutlineLike />
      </span>
    );
  };
  const renderDislikeComponent = () => {
    const className = !disliked ? styles.dislikeProduct : styles.disliked;
    return (
      <span className={className} onClick={dislikeProduct}>
        <p>{dislikes}</p>
        <AiOutlineDislike />
      </span>
    );
  };
  const renderStarOfProduct = () => {
    if (star <= 3) {
      return <BsStarHalf className={styles.starOfProductIcon} />;
    } else {
      return <AiFillStar className={styles.starOfProductIcon} />;
    }
  };
  const renderPositivePoints = () => {
    return positivePoints?.map((p) => {
      return (
        <div key={p}>
          <AiOutlinePlusCircle className={styles.pisitivePointIcon} />
          <p>{p}</p>
        </div>
      );
    });
  };
  const renderNegativePoints = () => {
    return negativePoints?.map((p) => {
      return (
        <div key={p}>
          <AiOutlineMinusCircle className={styles.negativePointIcon} />
          <p>{p}</p>
        </div>
      );
    });
  };
  return (
    <section className={styles.commentBlock}>
      <section className={styles.headerOfCommentBlock}>
        <section className={styles.commentInformation}>
          {renderStarOfProduct()}
          <span className={styles.starOfProductText}>{star} امتیاز</span>
          <span>{date}</span>
          <span>{userName}</span>
        </section>
        <section className={styles.likeDislikeProductBlock}>
          <button
            onClick={() => setReplyComment(1)}
            className={styles.replyToUserBtn}
          >
            پاسخ دهید
            <BsReply />
          </button>
          {renderLikeComponent()}
          {renderDislikeComponent()}
        </section>
      </section>
      <section className={styles.commentText}>
        <span>{text}</span>
        <div className={styles.positiveAndNegativePoints}>
          <div className={styles.positivePoints}>{renderPositivePoints()}</div>
          <div className={styles.NegativePoints}>{renderNegativePoints()}</div>
        </div>
        <section className={styles.replyComment}>
          <div>
            <FaUserCircle className={styles.adminIcon} />
            <span>حسین محمودی</span>
          </div>
          <p>{reply}</p>
        </section>
      </section>
    </section>
  );
};

export default Comment;
