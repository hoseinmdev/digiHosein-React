import styles from "./singleProduct.module.css";
import {
  BsArrow90DegUp,
  BsArrowUpCircleFill,
  BsCpu,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { MdScreenshot } from "react-icons/md";
import { GiBatteryPackAlt } from "react-icons/gi";
import { FiCamera } from "react-icons/fi";
import { FaDigitalTachograph } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UserComment from "./UserComment/UserComment";
import { useRef } from "react";

const SingleProduct = ({ product }) => {
  const { title, comment, imageURL, Specifications, id, price } = product;
  const technicalCheck = useRef();
  const userComments = useRef();
  const headerOfPage = useRef();

  return (
    <div ref={headerOfPage} className={styles.productPage}>
      <div className={styles.productBlock}>
        <h2>{title}</h2>
        <div className={styles.labelsBlock}>
          <div
            onClick={() =>
              window.scrollTo({
                top: userComments.current.offsetHeight +500,
                behavior: "smooth",
              })
            }
          >
            <span style={{ color: "#7c3aed", fontWeight: "700" }}>2</span>
            نظر از سمت کاربران
          </div>
          <div
            onClick={() =>
              window.scrollTo({
                top: technicalCheck.current.offsetHeight,
                behavior: "smooth",
              })
            }
          >
            بررسی فنی
          </div>
        </div>
        <div className={styles.imageAndInfoBlock}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "30rem",
            }}
          >
            <h3>ویژگی های اصلی</h3>
            <div className={styles.infoBlock}>
              <div>
                <BsCpu className={styles.iconBlock} />
                <p>نوع پردازنده - CPU: Qualcomm SM8450 Snapdragon 8</p>
              </div>
              <div>
                <FaDigitalTachograph className={styles.iconBlock} />
                <p>حافظه داخلی: 256 گیگابایت</p>
              </div>
              <div>
                <MdScreenshot className={styles.iconBlock} />
                <p>سایز صفحه نمایش: 6.28 اینچ</p>
              </div>
              <div>
                <FiCamera className={styles.iconBlock} />
                <p>کیفیت دوربین: دوربین سه گانه</p>
              </div>
              <div>
                <GiBatteryPackAlt className={styles.iconBlock} />
                <p>کیفیت دوربین: دوربین سه گانه</p>
              </div>
            </div>
          </div>
          <img className={styles.imageStyle} src={imageURL} alt={title}></img>
        </div>
      </div>
      <div
        ref={technicalCheck}
        id="technicalCheck"
        className={styles.checkProductBlock}
      >
        <div>
          <p>بررسی فنی</p>
          <hr />
        </div>
        <p style={{ color: "#64748b" }}>{comment.technicalCheck}</p>
      </div>
      <div ref={userComments} className={styles.usersCommentsBlock}>
        <div>
          <p style={{ fontWeight: "bold" }}>نظرات کاربران</p>
          <hr />
        </div>
        <UserComment comment={comment} />
      </div>
      <button
        onClick={() => {
          console.log(headerOfPage);
          window.scrollTo({
            top: headerOfPage.current.offsetTop -200,
            behavior: "smooth",
          });
        }}
      >
        بازگشت به بالا
        <BsArrow90DegUp />
      </button>
    </div>
  );
};

export default SingleProduct;
