import UserComment from "./UserComment/UserComment";
import styles from "./productComments.module.css";
const ProductComments = ({ product }) => {
  return (
    <div className={styles.usersCommentsBlock}>
      <div className={styles.userCommentsTitle}>
        <p>نظرات کاربران</p>
        <hr />
      </div>
      {product.comments.map((comment) => {
        return (
          <UserComment id={product.id} key={comment.date} comment={comment} />
        );
      })}
    </div>
  );
};

export default ProductComments;
