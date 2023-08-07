import {
  AiFillStar,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsReply, BsStarHalf } from "react-icons/bs";
import backToUp from "utils/BackToUp";

const Comment = ({ comment, setReplyComment }) => {
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
    return (
      <span
        className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 ${
          !liked ? "bg-gray-200" : "bg-green-400"
        }`}
        onClick={likeProduct}
      >
        <p>{likes}</p>
        <AiOutlineLike />
      </span>
    );
  };
  const renderDislikeComponent = () => {
    return (
      <span
        className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 ${
          !disliked ? "bg-gray-200" : "bg-red-300"
        }`}
        onClick={dislikeProduct}
      >
        <p>{dislikes}</p>
        <AiOutlineDislike />
      </span>
    );
  };
  const renderStarOfProduct = () => {
    if (star <= 3) {
      return <BsStarHalf className="text-3xl text-yellow-400" />;
    } else {
      return <AiFillStar className="text-3xl text-yellow-400" />;
    }
  };
  const renderPositivePoints = () => {
    return positivePoints?.map((p) => {
      return (
        <div className="flex items-center justify-center gap-2" key={p}>
          <AiOutlinePlusCircle className="text-green-500" />
          <p>{p}</p>
        </div>
      );
    });
  };
  const renderNegativePoints = () => {
    return negativePoints?.map((p) => {
      return (
        <div className="flex items-center justify-center gap-2" key={p}>
          <AiOutlineMinusCircle className="text-red-500" />
          <p>{p}</p>
        </div>
      );
    });
  };
  return (
    <div className="flex w-full flex-col items-start justify-center gap-5 rounded-lg border-b border-gray-300 p-2 pb-10 lg:gap-2 lg:border-none lg:shadow-lg">
      <div className="flex w-full flex-col items-start justify-center gap-2 lg:justify-between">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 text-sm text-gray-700 lg:justify-start lg:pr-6">
          {renderStarOfProduct()}
          <div className="text-xl">{star} امتیاز</div>
          <div>{date}</div>
          <div>{userName}</div>
        </div>
        <div className="flex w-full justify-end gap-4 p-2">
          <button
            onClick={() => {
              setReplyComment(1);
              backToUp();
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-2 text-gray-700 lg:w-auto"
          >
            پاسخ دهید
            <BsReply className="hidden lg:block" />
          </button>
          {renderLikeComponent()}
          {renderDislikeComponent()}
        </div>
      </div>
      <div className="mr-4 flex flex-col gap-3 overflow-auto border-r-2 border-gray-300 pr-3">
        <span className="max-h-28 w-full overflow-auto lg:w-[45rem]">
          {text}
        </span>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex w-full flex-col items-start justify-center gap-1">
            {renderPositivePoints()}
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-1">
            {renderNegativePoints()}
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 rounded-md border-r-2 border-gray-300 p-3">
          <div className="flex items-center justify-center gap-2">
            <FaUserCircle className="text-xl text-gray-600" />
            <span>حسین محمودی</span>
          </div>
          <p>{reply}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
