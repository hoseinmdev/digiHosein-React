import axiosBase from "axiosConfig";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

const SendCodeAgain = ({ password, email, setDuration }) => {
  const [isSendingCode, setIsSendingCode] = useState(0);
  const sendCode = () => {
    setIsSendingCode(1);
    axiosBase
      .post("Account/ForgetPassword/", {
        email: email,
        Password: password,
      })
      .then((response) => {
        setIsSendingCode(0);
        toast.success(`${response.data.Error}`);
        setDuration(120);
      })
      .catch((error) => {
        setIsSendingCode(0);
        toast.warn(`${error.response.data.Error}`);
      });
  };
  return (
    <p
      className="fadeShow w-full text-right text-indigo-500 lg:cursor-pointer dark:text-indigo-400"
      onClick={() => sendCode()}
    >
      {!isSendingCode ? (
        "ارسال مجدد کد تایید"
      ) : (
        <AiOutlineLoading3Quarters className="animate-spin text-right text-xl text-violet-700 dark:text-violet-400" />
      )}
    </p>
  );
};

export default SendCodeAgain;
