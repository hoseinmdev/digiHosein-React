import SendCodeAgain from "components/SignUpPage/SnedCodeAgain";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Timer({ email, password }) {
  const [duration, setDuration] = useState(120);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = duration % 60;
  useEffect(() => {
    return () => clearInterval(timer);
  }, []);

  const timer = setInterval(() => {
    clearInterval(timer);
    setDuration((prev) => prev - 1);
  }, 1000);

  const renderTimer = () => {
    if (duration >= 1) {
      return (
        <p className="w-full text-right text-violet-600 dark:text-violet-400 flex gap-1 ">
          <p className="text-black/80 dark:text-white">زمان باقی مانده :</p> {mins < 10 ? `0${mins}` : mins}:
          {secs < 10 ? `0${secs}` : secs}
        </p>
      );
    } else {
      clearInterval(timer);
      return (
        <SendCodeAgain
          password={password}
          email={email}
          setDuration={setDuration}
        />
      );
    }
  };
  return renderTimer();
}
