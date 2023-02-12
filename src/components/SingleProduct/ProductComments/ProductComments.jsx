import Comment from "./Comment/Comment";
import styles from "./productComments.module.css";
import ReplyComment from "./ReplyComment/ReplyComment";
const ProductComments = ({ product, replyComment, setReplyComment }) => {
  return (
    <div className={styles.usersCommentsBlock}>
      <div className={styles.userCommentsTitle}>
        <p>نظرات کاربران</p>
        <hr />
      </div>
      {replyComment ? (
        <ReplyComment
          replyComment={replyComment}
          setReplyComment={setReplyComment}
        />
      ) : (
        ""
      )}
      {product.comments.map((comment) => {
        return (
          <Comment
            id={product.id}
            key={comment.date}
            comment={comment}
            setReplyComment={setReplyComment}
          />
        );
      })}
    </div>
  );
};

export default ProductComments;
