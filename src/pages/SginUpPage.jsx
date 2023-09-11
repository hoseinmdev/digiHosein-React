import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import signUpImage from "../assets/images/signUpImage.webp";
import SignUpForm from "components/SignUpPage/SignUpForm";
import EnterCode from "components/SignUpPage/EnterCode";
const SginUpPage = () => {
  const [sendCode, setSendCode] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  return (
    <div className="fadeShow flex h-screen w-full">
      <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 bg-white pt-10 dark:bg-gray-800 lg:w-1/2 lg:bg-gray-100">
        <p className="text-xl font-bold text-gray-700 dark:text-white/80 lg:hidden">
          به دیجی حسین خوش اومدی !
        </p>
        {!sendCode ? (
          <SignUpForm setSendCode={setSendCode} setUserEmail={setUserEmail} />
        ) : (
          <EnterCode userEmail={userEmail} />
        )}
      </div>
      <img
        src={signUpImage}
        className="hidden h-full w-full rounded-r-3xl lg:block"
        alt=""
      />
    </div>
  );
};

export default SginUpPage;
