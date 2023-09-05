import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {  useLocation, } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SiteLogo from "../common/SiteLogo";
import Links from "./Links";
const MobileMenu = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShow(0);
  }, [location]);
  return (
    <>
      <AiOutlineMenu className="text-2xl" onClick={() => setShow(true)} />
      <div
        className={`fixed left-0 top-0 z-[160] h-screen w-screen bg-slate-700 opacity-40 ${
          show ? "flex" : "hidden"
        }`}
        onClick={() => {
          setShow(false);
        }}
      ></div>
      <div
        className={`absolute top-0 z-[1500] flex h-screen w-5/6 flex-col items-center justify-start gap-2 bg-white p-4 dark:bg-gray-800`}
        style={{
          right: `${show ? 0 : -450}px`,
          opacity: `${show ? 1 : 0}`,
        }}
      >
        <div className="flex w-full items-center justify-between p-2">
          <AiOutlineClose
            className="text-xl"
            onClick={() => {
              setShow(false);
            }}
          />
          <SiteLogo />
        </div>
        <hr className="h-[1px] w-full pb-3" />
        <Links />
      </div>
    </>
  );
};

export default MobileMenu;
