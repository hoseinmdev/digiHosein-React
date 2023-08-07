import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import logo1 from "../Accets/images/download.svg";
import logo2 from "../Accets/images/c5.webp";
import logo3 from "../Accets/images/c4.webp";

const Footer = () => {
  return (
    <div className="mt-8 flex w-full flex-col items-center justify-between gap-12 overflow-hidden bg-slate-800 px-12 py-8 text-white">
      <div className="hidden w-full items-start justify-evenly lg:flex">
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
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
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>پرفروش ترین محصولات</span>
          <p>شیائومی نوت 11</p>
          <p>گوشی سامسونگ a32</p>
          <p>گوشی سامسونگ a53</p>
          <p>گوشی پوکو x3 پرو</p>
          <p>گوشی سامسونگ a23</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>درباره ما</span>
          <p>حسین محمودی در یک نگاه</p>
          <p>اهداف و تعهد های ما</p>
          <p>سرگذشت حسین محمودی</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>پیش از خرید</span>
          <p>راهنمای خرید</p>
          <p>راهنمای خرید قسطی</p>
          <p>روش های خرید</p>
          <p>ضمانت هفت روزه</p>
          <p>شیوه و هزینه های ارسال</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>پس از خرید</span>
          <p>تضمین ریجستری</p>
          <p>رویه های بازگرداندن کالا</p>
          <p>سوالات متداول ریجستری</p>
          <p>رهگیری سفارش ها</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-sm">
          <span>قوانین و مقررات</span>
          <p>قوانین و مقررات</p>
          <p>حریم خصوصی کاربران</p>
          <p>از زبان مشتریان</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between lg:px-8">
        <div className="flex flex-col items-start justify-center gap-4">
          <span className="flex items-center justify-center gap-2">
            <AiOutlineMail />
            ایمیل : Hoseinmdev@gmail.com
          </span>
          <span className="flex items-center justify-center gap-2">
            <FiPhoneCall />
            تلفن : 989222365685 +
          </span>
          <span className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-violet-700 p-2">
            اینستاگرام <BsInstagram />
          </span>
        </div>
        <div className="hidden items-center justify-center gap-2 lg:flex">
          <div className="flex h-32 w-28 cursor-pointer items-center justify-center rounded-lg bg-white">
            <img src={logo1} alt={logo1} className="w-20" />
          </div>
          <div className="flex h-32 w-28 cursor-pointer items-center justify-center rounded-lg bg-white">
            <img src={logo2} alt={logo2} className="w-20" />
          </div>
          <div className="flex h-32 w-28 cursor-pointer items-center justify-center rounded-lg bg-white">
            <img src={logo3} alt={logo3} className="w-20" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center border-t border-slate-400">
        <p className="pt-8 font-bold text-gray-400">
          تمامی حقوق مادی معنوی این سایت متعلق به حسین محمودی می باشد
        </p>
      </div>
    </div>
  );
};

export default Footer;
