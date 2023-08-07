import { Link } from "react-router-dom";
import page404 from "../Accets/images/page404.avif";
const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-start items-center mt-8">
      <img src={page404} className="w-96" />
      <Link to="/">
        <button className="text-xl px-8 py-2 bg-violet-700 text-white rounded-full">
          بازگشت به فروشگاه دیجی حسین
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;