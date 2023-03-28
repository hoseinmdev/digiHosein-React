import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UserAccountButton.module.css";
const UserAccountButton = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(0);
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));

  const exitOfAccount = () => {
    localStorage.setItem(
      "userInformation",
      JSON.stringify({ ...userInformation, islogin: false })
    );
    window.location.reload();
  };
  const renderModal = () => {
    setShowModal(!showModal);
  };
  const renderUserAccountOptions = () => {
    return (
      <div className={styles.userAccountOptionsContainer}>
        <div>
          <span>حساب کاربری | {userInformation.phoneNumber}</span>
          <BsArrowReturnLeft className={styles.arrowIcon} />
        </div>
        <div onClick={() => navigate("/cart")}>
          <span>سبد خرید</span>
          <AiOutlineShoppingCart className={styles.arrowIcon} />
        </div>
        <div onClick={renderModal}>
          <span>خروج از حساب کاربری</span>
          <ImExit className={styles.arrowIcon} />
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={{ display: showModal ? "block" : "none" }}>
        <div className={styles.backdrop} onClick={renderModal}></div>
        <div className={styles.areYouSureContainer}>
          <p>از خروج از حساب خود اطمینان دارید ؟</p>
          <div className={styles.buttons}>
            <button
              className={styles.closeContainerButton}
              onClick={renderModal}
            >
              منصرف شدم
            </button>
            <button
              className={styles.exitOfAccountButton}
              onClick={exitOfAccount}
            >
              خروج از حساب
            </button>
          </div>
        </div>
      </div>
      <div className={styles.submitButton}>
        <AiOutlineUser className={styles.userIcon} />
        {renderUserAccountOptions()}
      </div>
    </>
  );
};

export default UserAccountButton;
