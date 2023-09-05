const { RiFilterOffFill } = require("react-icons/ri");
const { useSearchParams } = require("react-router-dom");

const DeleteFiltersBtn = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <button
      onClick={() => setSearchParams({})}
      className={`flex items-center justify-center gap-2 rounded-2xl p-2 text-base text-white ${
        searchParams.toString().length === 0 ? " bg-gray-300 dark:bg-gray-400" : " bg-red-500"
      }`}
    >
      حذف فیلتر ها <RiFilterOffFill />
    </button>
  );
};
export default DeleteFiltersBtn