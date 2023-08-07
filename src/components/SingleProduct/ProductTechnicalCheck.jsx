import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
const ProductTechnicalCheck = ({ product }) => {
  const allSpecifications = [];
  const allSpecificationsNames = [];
  Object.values(product.Specifications).forEach((value) => {
    allSpecifications.push(value.score);
    allSpecificationsNames.push({
      nameOfSpecification: value.title.split("/")[0],
      scoreOfSpecification: value.score,
    });
  });
  const renderProductScores = () => {
    return allSpecificationsNames.map((p) => {
      return (
        <div className="flex w-40 flex-col items-center justify-center gap-2 text-lg text-gray-700">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-r-[3px] border-t-[5px] border-violet-500 text-2xl hover:rotate-[360deg] hover:scale-110">
            {p.scoreOfSpecification}
          </span>
          {p.nameOfSpecification}
        </div>
      );
    });
  };
  let totalScores = 0;
  allSpecifications.map((e) => (totalScores += e));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-center">
        <p className="w-2/4 text-lg font-bold text-violet-700 lg:w-1/4 lg:text-3xl">
          بررسی فنی
        </p>
        <hr className="h-[1px] bg-black lg:h-[2px]" />
      </div>
      <p className="text-base text-gray-700 lg:text-xl">
        {product.technicalCheck}
      </p>
      <div className="flex w-full flex-col items-start justify-start gap-2 rounded-md bg-violet-100 p-5">
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-violet-700">
          <AiOutlineLike />
          مزایا :
        </div>
        <div className="flex flex-col items-start justify-center gap-1 text-base text-violet-600 lg:text-lg ">
          {product.positivePoints.map((p) => {
            return (
              <div
                key={p}
                className="flex w-full items-center justify-start gap-2"
              >
                <AiOutlinePlusCircle />
                {p}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2 rounded-md bg-red-100 p-5">
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-red-700">
          <AiOutlineDislike />
          معایب :
        </div>
        <div className="flex flex-col items-start justify-center gap-1 text-base text-red-600 lg:text-lg ">
          {product.negativePoints.map((p) => {
            return (
              <div
                key={p}
                className="flex w-full items-center justify-start gap-2"
              >
                <AiOutlineMinusCircle />
                {p}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-6 lg:mr-8 lg:flex-row lg:items-start lg:justify-evenly">
        <div className="flex w-32 flex-col items-center justify-center gap-2 text-2xl text-gray-700">
          <span className="border-right-[3px] flex h-24 w-24 items-center justify-center rounded-full border-2 border-t-[5px] border-green-400 text-3xl hover:rotate-[360deg] hover:scale-110">
            {Math.round(totalScores / allSpecifications.length)}
          </span>
          امتیاز کلی
        </div>
        <div className="h-[1px] w-11/12 bg-gray-400 lg:h-[15rem] lg:w-[1px]" />
        <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:w-[30rem] lg:items-start lg:gap-12">
          {renderProductScores()}
        </div>
      </div>
    </div>
  );
};

export default ProductTechnicalCheck;
