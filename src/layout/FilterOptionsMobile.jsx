import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
const FilterOptionsMobile = ({
  setShowMobileFilters,
  renderFilters,
  renderDeleteFiltersBtn,
}) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-y-hidden");
    setTimeout(() => setShow(0), 100);
  }, []);
  const [show, setShow] = useState(-450);
  return (
    <>
      <div
        className="fixed left-0 top-0 z-[100] h-full w-screen bg-slate-700 opacity-70"
        onClick={() => {
          setShow(-450);
          setTimeout(() => setShowMobileFilters(0), 200);
          document.body.classList.remove("overflow-y-hidden");
        }}
      ></div>
      <div
        className={`absolute top-0 z-[1500] flex h-screen w-9/12 flex-col items-center justify-start gap-4 overflow-auto bg-white p-4 `}
        style={{ right: `${show}px` }}
      >
        <div className="w-full flex items-center justify-between">
          <AiOutlineClose
            onClick={() => {
              setShow(-450);
              setTimeout(() => setShowMobileFilters(0), 200);
              document.body.classList.remove("overflow-y-hidden");
            }}
          />
          {renderDeleteFiltersBtn()}
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4">
          {renderFilters()}
        </div>
      </div>
    </>
  );
};

export default FilterOptionsMobile;
