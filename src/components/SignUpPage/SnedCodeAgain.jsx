import axios from "axios";
import { toast } from "react-toastify";

const SendCodeAgain = ({ password, email }) => {
  const sendCode = () => {
    axios
      .post(
        "https://digihosein.pythonanywhere.com/Account/ForgetPassword/",
        {
          email: email,
          Password: password,
        },
        {
          headers: {
            "User-Agent": "Your User Agent String",
            Host: "www.example.com",
            Accept: "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
        },
      )
      .then((response) => {
        toast.success(`${response.data.Error}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <p
      className="w-full text-right text-indigo-500 lg:cursor-pointer"
      onClick={() => sendCode()}
    >
      ارسال مجدد کد تایید
    </p>
  );
};

export default SendCodeAgain;
