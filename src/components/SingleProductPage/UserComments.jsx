import { useState } from "react";
import {
  AiFillStar,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import ReplyComment from "./ReplyComment";
const UserComments = ({ product }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <div className="flex w-full items-center">
        <p className="w-full font-EstedadFont text-xl text-violet-700 dark:text-violet-400 lg:w-[25%] lg:text-3xl">
          نظرات کاربران
        </p>
        <hr className="h-[1px] w-full bg-black lg:h-[2px]" />
      </div>
      {product.comments.map((comment) => {
        return <Comment id={product.id} key={comment.date} comment={comment} />;
      })}
    </div>
  );
};

const Comment = ({ comment }) => {
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
  return (
    <div className="flex w-full flex-col items-start justify-center gap-5 rounded-lg border-b border-gray-300 bg-gray-50 p-2 pb-10 dark:border-none dark:bg-gray-700/50 dark:text-white lg:gap-2 lg:border-none lg:shadow-lg">
      <div className="flex w-full flex-col items-start justify-center gap-2 lg:justify-between">
        <Sender information={{ star, date, userName }} />
        <Actions information={{ like, dislike }} />
      </div>
      <div className="mr-4 flex flex-col gap-3 overflow-auto border-r-2 border-gray-300 pr-3 font-EstedadFont">
        {text}
        <div className="flex flex-col items-center justify-center gap-3">
          <Points type={"positive"} points={positivePoints} />
          <Points type={"negative"} points={negativePoints} />
        </div>
        <AdminAnswer reply={reply} />
      </div>
    </div>
  );
};
const Sender = ({ information }) => {
  const { date, star, userName } = information;
  const productRate = () => {
    if (star <= 3) return <BsStarHalf className="text-3xl text-yellow-400" />;
    else return <AiFillStar className="text-3xl text-yellow-400" />;
  };
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-4 text-sm text-gray-700 dark:text-white lg:justify-start lg:pr-6">
      {productRate()}
      <div className="text-xl ">{star} امتیاز</div>
      <div>{date}</div>
      <div className="font-EstedadFont">{userName}</div>
    </div>
  );
};
const Actions = ({ information }) => {
  const { like, dislike } = information;
  const [likes, setLikes] = useState(like);
  const [dislikes, setDislikes] = useState(dislike);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

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

  return (
    <div className="flex w-full justify-end gap-4 p-2">
      <ReplyComment />
      <div
        className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 lg:cursor-pointer  ${
          !liked
            ? "bg-gray-200 dark:bg-gray-600"
            : "bg-green-400 dark:bg-green-400/50"
        }`}
        onClick={likeProduct}
      >
        {likes}
        <AiOutlineLike />
      </div>
      <div
        className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 lg:cursor-pointer ${
          !disliked
            ? "bg-gray-200 dark:bg-gray-600"
            : "bg-red-300 dark:bg-red-500/80"
        }`}
        onClick={dislikeProduct}
      >
        {dislikes}
        <AiOutlineDislike />
      </div>
    </div>
  );
};
const Points = ({ type, points }) => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-1">
      {points?.map((p) => {
        return (
          <div className="flex items-center justify-center gap-2" key={p}>
            <AiOutlinePlusCircle
              className={`${
                type === "positive" ? "text-green-500" : "text-red-500"
              }`}
            />
            <p>{p}</p>
          </div>
        );
      })}
    </div>
  );
};
const AdminAnswer = ({ reply }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 rounded-md border-r-2 border-gray-300 p-3">
      <div className="flex items-center justify-center gap-2">
        <FaUserCircle className="text-xl text-gray-600 dark:text-white/80" />
        <span className="font-EstedadFont">حسین محمودی</span>
      </div>
      <p>{reply}</p>
    </div>
  );
};
export default UserComments;
