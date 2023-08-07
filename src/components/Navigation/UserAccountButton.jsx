import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";
const UserAccountButton = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(0);
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));

  const exitOfAccount = () => {
    localStorage.setItem(
      "userInformation",
      JSON.stringify({ ...userInformation, islogin: false }),
    );
    window.location.reload();
  };
  const renderModal = () => {
    setShowModal(!showModal);
  };
  const renderUserAccountOptions = () => {
    return (
      <div className="absolute left-0 top-[45px] z-[3000] flex w-72 scale-0 flex-col items-start justify-center gap-3 rounded-2xl bg-white p-2 text-base shadow-lg group-hover/submitBtn:scale-100">
        <div className="flex w-full cursor-pointer items-center justify-between rounded-md p-2 text-gray-700 hover:bg-violet-500 hover:text-white">
          <span className="flex items-center justify-center gap-2">
            حساب کاربری | {userInformation.phoneNumber}
          </span>
          <BsArrowReturnLeft />
        </div>
        <div
          className="flex w-full cursor-pointer items-center justify-between rounded-md p-2 text-gray-700 hover:bg-violet-500 hover:text-white"
          onClick={() => navigate("/cart")}
        >
          <span className="flex items-center justify-center gap-2">
            سبد خرید
          </span>
          <AiOutlineShoppingCart />
        </div>
        <div
          className="flex w-full cursor-pointer items-center justify-between rounded-md p-2 text-gray-700 hover:bg-violet-500 hover:text-white"
          onClick={renderModal}
        >
          <span className="flex items-center justify-center gap-2">
            خروج از حساب کاربری
          </span>
          <ImExit />
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={{ display: showModal ? "block" : "none" }}>
        <div
          className="fixed left-0 top-0 z-[100] h-screen w-screen bg-gray-700 opacity-60"
          onClick={renderModal}
        ></div>
        <div className="absolute right-0 top-0 z-[101] mr-8 mt-16 flex h-36 flex-col items-center justify-between gap-4 rounded-2xl bg-white px-10 py-6 lg:mr-[33rem] lg:mt-24">
          <p>از خروج از حساب خود اطمینان دارید ؟</p>
          <div className="flex w-full items-center justify-between">
            <button
              className="rounded-2xl border border-gray-400 bg-white px-4 py-2 text-sm text-gray-800"
              onClick={renderModal}
            >
              منصرف شدم
            </button>
            <button
              className="rounded-2xl bg-red-500 px-4 py-2 text-sm text-white"
              onClick={exitOfAccount}
            >
              خروج از حساب
            </button>
          </div>
        </div>
      </div>
      <div className="group/submitBtn relative z-[1] flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-400 bg-white p-2 text-sm text-gray-800">
        <AiOutlineUser className="text-2xl text-violet-600" />
        {renderUserAccountOptions()}
      </div>
    </>
  );
};

export default UserAccountButton;
