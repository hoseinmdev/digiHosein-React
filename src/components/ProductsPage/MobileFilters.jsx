const { AiOutlineClose, AiOutlineFilter } = require("react-icons/ai");
const { default: DeleteFiltersBtn } = require("./DeleteFiltersBtn");
const { default: Filters } = require("./Filters");
const { useState } = require("react");

const MobileFilters = ({ category }) => {
  const [show, setShow] = useState(-450);

  return (
    <div className="flex w-full items-center justify-between p-2 text-2xl text-gray-600 lg:hidden">
      {/* backdrop */}
      <div
        className={`fixed left-0 top-0 z-[1000] h-full w-screen bg-slate-700 opacity-70 ${
          show === 0 ? "block" : "hidden"
        }`}
        onClick={() => {
          setShow(-450);
          document.body.classList.remove("overflow-y-hidden");
        }}
      ></div>
      <span
        className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 p-2 text-base text-violet-600 dark:text-white/80"
        onClick={() => {
          setShow(0);
          document.body.classList.add("overflow-y-hidden");
        }}
      >
        فیلتر ها
        <AiOutlineFilter />
      </span>
      <div
        className={`absolute top-0 z-[1500] flex h-screen w-9/12 flex-col items-center justify-start gap-4 overflow-auto bg-white p-4 dark:bg-gray-800 `}
        style={{ right: show + "px" }}
      >
        <div className="flex w-full items-center justify-between dark:text-white">
          <AiOutlineClose
            onClick={() => {
              setShow(-450);
              document.body.classList.remove("overflow-y-hidden");
            }}
          />
          <DeleteFiltersBtn />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <Filters category={category} />
        </div>
      </div>
    </div>
  );
};
export default MobileFilters;