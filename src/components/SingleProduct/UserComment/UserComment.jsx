import styles from "./userComment.module.css";
import {
  AiFillStar,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const UserComment = ({ comment }) => {
  const { userName, date, reply, star, text, like, disLike } = comment;
  console.log(comment);
  return (
    <section style={{ marginBottom: "1rem" }} className={styles.commentBlock}>
      <section className={styles.headerOfCommentBlock}>
        <section className={styles.commentInformation}>
          <AiFillStar style={{ color: "#facc15", fontSize: "1.7rem" }} />
          <span style={{ fontSize: "1.3rem" }}>{star} امتیاز</span>
          <span>{date}</span>
          <span>{userName}</span>
        </section>
        <section className={styles.likeDislikeProductBlock}>
          <span className={styles.likeProduct}>
            <p>{like}</p>
            <AiOutlineLike />
          </span>
          <span className={styles.disLikeProduct}>
            <p>{disLike}</p>
            <AiOutlineDislike />
          </span>
        </section>
      </section>
      <section className={styles.commentText}>
        <span>{text}</span>
        <div className={styles.prosAndCons}>
          <div>
            <AiOutlinePlusCircle style={{ color: "#22c55e" }} />
            <p>باطری</p>
          </div>
          <div>
            <AiOutlineMinusCircle style={{ color: "#f43f5e" }} />
            <p>صفحه نمایش</p>
          </div>
        </div>
        <section className={styles.replyComment}>
          <div>
            <FaUserCircle style={{ color: "#64748b", fontSize: "1.1rem" }} />
            <span>حسین محمودی</span>
          </div>
          <p>{reply}</p>
        </section>
      </section>
    </section>
  );
};

export default UserComment;
