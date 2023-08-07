import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import { toast } from "react-toastify";

const ReplyComment = ({ setReplyComment }) => {
  const [inputText, setInputText] = useState({
    userName: "",
    userAnswer: "",
  });
  useEffect(() => {
    document.body.classList.toggle("overflow-y-hidden");
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
    setTimeout(() => {
      setReplyComment(0);
      document.body.classList.remove("overflow-y-hidden");
    }, 200);
  };
  return (
    <>
      <div
        className="fixed left-0 top-0 z-[160] h-screen w-screen bg-slate-700 opacity-70"
        onClick={closeReplyBox}
      ></div>
      <div className="absolute right-0 top-0 z-[1500] flex w-full flex-col items-start justify-start  gap-4 bg-white p-4 lg:right-[25%] lg:top-[170px] lg:w-2/4 lg:max-w-[1360px]  lg:rounded-md">
        <div className="flex w-full  items-center justify-between">
          به کاربر پاسخ دهید
          <div className="flex cursor-pointer items-center justify-center text-2xl text-violet-700">
            <AiOutlineCloseCircle onClick={closeReplyBox} />
          </div>
        </div>
        <hr />
        <div className="flex w-full items-center justify-between">
          <p className="w-[100%]">نام و نام خانوادگی شما :</p>
          <input
            className="w-full rounded-lg p-2 shadow-lg"
            type="text"
            name="userName"
            placeholder="نام خود را وارد کنید ..."
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className="flex w-full items-start justify-between">
          <p className="w-full">متن پاسخ شما :</p>
          <textarea
            className="h-32 w-full resize-none rounded-lg p-2 shadow-lg"
            placeholder="پاسخ خود را بنویسید"
            name="userAnswer"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className="flex w-full items-center justify-end">
          <button
            onClick={submitHandler}
            disabled={
              !inputText.userName | !inputText.userAnswer ? true : false
            }
            className={`w-40 rounded-full px-4 py-2 text-white ${
              !inputText.userName | !inputText.userAnswer
                ? "bg-violet-300"
                : "bg-violet-700"
            }`}
          >
            ثبت پاسخ
          </button>
        </div>
      </div>
    </>
  );
};

export default ReplyComment;
