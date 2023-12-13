import { AiOutlineArrowUp } from "react-icons/ai";
import backToUp from "../../utils/BackToUp";
const BackToUp = () => {
  return (
    <div className="mt-12 flex w-full items-center justify-center">
      <button
        className="flex items-center font-EstedadFont justify-center gap-2 rounded-lg border-2 border-violet-700 bg-none px-4 py-2 text-violet-700 dark:text-white"
        onClick={() => backToUp()}
      >
        <AiOutlineArrowUp /> بازگشت به بالا
      </button>
    </div>
  );
};

export default BackToUp;
