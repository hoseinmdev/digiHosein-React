import styles from "./footer.module.css";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import logo1 from "../../Accets/images/download.svg";
import logo2 from "../../Accets/images/c5.webp";
import logo3 from "../../Accets/images/c4.webp";

const Footer = () => {
  return (
    <div className={styles.siteFooter}>
      <div className={styles.footerQuickAccess}>
        <div>
          <span>دسترسی سریع</span>
          <p>بلاگ</p>
          <p>قیمت روز گوشی</p>
          <p>گوشی سامسونگ</p>
          <p>گوشی ایفون</p>
          <p>گوشی شیائومی</p>
          <p>خرید عمده گوشی</p>
          <p>مقایسه گوشی</p>
          <p>قیمت لپ تاپ</p>
        </div>
        <div>
          <span>پرفروش ترین محصولات</span>
          <p>شیائومی نوت 11</p>
          <p>گوشی سامسونگ a32</p>
          <p>گوشی سامسونگ a53</p>
          <p>گوشی پوکو x3 پرو</p>
          <p>گوشی سامسونگ a23</p>
        </div>
        <div>
          <span>درباره ما</span>
          <p>حسین محمودی در یک نگاه</p>
          <p>اهداف و تعهد های ما</p>
          <p>سرگذشت حسین محمودی</p>
          {/* <span>اهداف و تعهد های ما</span> */}
        </div>
        <div>
          <span>پیش از خرید</span>
          <p>راهنمای خرید</p>
          <p>راهنمای خرید قسطی</p>
          <p>روش های خرید</p>
          <p>ضمانت هفت روزه</p>
          <p>شیوه و هزینه های ارسال</p>
        </div>
        <div>
          <span>پس از خرید</span>
          <p>تضمین ریجستری</p>
          <p>رویه های بازگرداندن کالا</p>
          <p>سوالات متداول ریجستری</p>
          <p>رهگیری سفارش ها</p>
        </div>
        <div>
          <span>قوانین و مقررات</span>
          <p>قوانین و مقررات</p>
          <p>حریم خصوصی کاربران</p>
          <p>از زبان مشتریان تکنولایف</p>
          <p>چرا تکنولایف؟</p>
        </div>
      </div>
      <div className={styles.contactUsAndSymbols}>
        <div className={styles.contactUs}>
          <span>
            <AiOutlineMail />
            ایمیل : Hoseinmdev@gmail.com
          </span>
          <span>
            <FiPhoneCall />
            تلفن : 989378151319 +
          </span>
          <span>
            اینستاگرام <BsInstagram />
          </span>
        </div>
        <div className={styles.footerLogos}>
          <div>
            <img src={logo1} alt={logo1} />
          </div>
          <div>
            <img src={logo2} alt={logo2} />
          </div>
          <div>
            <img src={logo3} alt={logo3} />
          </div>
        </div>
      </div>
      <div className={styles.footerDown}>
        <p>تمامی حقوق مادی معنوی این سایت متعلق به حسین محمودی می باشد</p>
      </div>
    </div>
  );
};

export default Footer;
