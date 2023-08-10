import { Link } from "react-router-dom";
import page404 from "../assets/images/page404.avif";
const NotFoundPage = () => {
  return (
    <div className="mt-8 flex h-screen flex-col items-center justify-start">
      <img src={page404} className="w-96" />
      <Link to="/">
        <button className="rounded-full bg-violet-700 px-8 py-2 text-xl text-white">
          بازگشت به فروشگاه دیجی حسین
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
