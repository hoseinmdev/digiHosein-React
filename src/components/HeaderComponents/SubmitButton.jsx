import { Link } from "react-router-dom";

const SubmitButton = () => {
      return (
        <Link to="/sginUp">
          <div className="flex items-center justify-center">
            <button className="rounded-lg border border-violet-600 px-5 py-2 dark:border-violet-500 dark:border-2">
              ورود | ثبت نام
            </button>
          </div>
        </Link>
      );
}
 
export default SubmitButton;