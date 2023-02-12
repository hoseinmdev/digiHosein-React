import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import { toast } from "react-toastify";
import styles from "./replyComment.module.css";

const ReplyComment = ({ setReplyComment }) => {
  const [fadeShow, setFadeShow] = useState(0);
  const [inputText, setInputText] = useState({
    userName: "",
    userAnswer: "",
  });
  useEffect(() => {
    setTimeout(() => setFadeShow(1), 100);
    document.body.classList.toggle(styles.bodyStyles);
  }, []);

  const inputHandler = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = () => {
    if (inputText.userName && inputText.userAnswer) {
      closeReplyBox();
      toast.success("نظر شما بعد از بررسی منتشر میشود", {
        icon: <FaRegSmileWink style={{ fontSize: "2rem" }} />,
      });
    }
  };
  const closeReplyBox = () => {
    setFadeShow(0);
    setTimeout(() => {
      setReplyComment(0);
      document.body.classList.remove(styles.bodyStyles);
    }, 200);
  };
  return (
    <div className={styles.backdrop} style={{ opacity: fadeShow }}>
      <div className={styles.replyCommentBlock}>
        <div className={styles.answerUser}>
          به کاربر پاسخ دهید
          <div className={styles.closeReplyBox}>
            <AiOutlineCloseCircle onClick={closeReplyBox} />
          </div>
        </div>
        <hr />
        <div className={styles.userInformation}>
          نام و نام خانوادگی شما :
          <input
            type="text"
            name="userName"
            placeholder="نام خود را وارد کنید ..."
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className={styles.answerText}>
          متن پاسخ شما :
          <textarea
            placeholder="پاسخ خود را بنویسید"
            name="userAnswer"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className={styles.submit}>
          <button
            onClick={submitHandler}
            disabled={
              !inputText.userName | !inputText.userAnswer ? true : false
            }
            className={
              !inputText.userName | !inputText.userAnswer
                ? styles.notActive
                : styles.active
            }
          >
            ثبت پاسخ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
