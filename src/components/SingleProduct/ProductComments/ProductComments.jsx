import Comment from "./Comment";
import ReplyComment from "./ReplyComment";
const ProductComments = ({ product, replyComment, setReplyComment }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <div className="flex w-full items-center">
        <p className="w-full text-xl  font-bold text-violet-700 lg:w-[25%] lg:text-3xl">
          نظرات کاربران
        </p>
        <hr className="h-[1px] bg-black lg:h-[2px]" />
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
