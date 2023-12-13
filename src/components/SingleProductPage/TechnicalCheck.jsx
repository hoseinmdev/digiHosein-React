import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

const TechnicalCheck = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-center">
        <p className="w-2/4 font-EstedadFont text-lg text-violet-700 dark:text-violet-400 lg:w-1/4 lg:text-3xl">
          بررسی فنی
        </p>
        <hr className="h-[1px] w-full bg-black lg:h-[2px]" />
      </div>
      <p className="text-base text-gray-700 dark:text-white/60 lg:text-lg">
        {product.technicalCheck}
      </p>
      <Points type="positivePoints" points={product.positivePoints} />
      <Points type="negativePoints" points={product.negativePoints} />
      <Scores specifications={product.Specifications} />
    </div>
  );
};
const Points = ({ type, points }) => {
  if (type === "positivePoints") {
    return (
      <div className="flex w-full flex-col items-start justify-start gap-2 rounded-md bg-violet-100 p-5 dark:bg-violet-800">
        <div className="flex items-center justify-center gap-2 font-EstedadFont text-2xl text-violet-700 dark:text-violet-100">
          <AiOutlineLike />
          مزایا :
        </div>
        <div className="flex flex-col items-start justify-center gap-1 text-base text-violet-600 dark:text-violet-100 lg:text-lg">
          {points.map((p) => {
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
    );
  }
  if (type === "negativePoints") {
    return (
      <div className="flex w-full flex-col items-start justify-start gap-2 rounded-md bg-red-100 p-5 dark:bg-red-900">
        <div className="flex items-center justify-center gap-2 font-EstedadFont text-2xl text-red-700 dark:text-red-100">
          <AiOutlineDislike />
          معایب :
        </div>
        <div className="flex flex-col items-start justify-center gap-1 text-base text-red-600 dark:text-red-100 lg:text-lg">
          {points.map((p) => {
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
    );
  }
};
const Scores = ({ specifications }) => {
  let totalScores = 0;
  const allSpecifications = [];
  const allSpecificationsNames = [];
  Object.values(specifications).forEach((value) => {
    allSpecifications.push(value.score);
    allSpecificationsNames.push({
      nameOfSpecification: value.title.split("/")[0],
      scoreOfSpecification: value.score,
    });
  });
  allSpecifications.map((e) => (totalScores += e));

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-6 lg:mr-8 lg:flex-row lg:items-start lg:justify-evenly">
      <div className="flex w-32 flex-col items-center justify-center gap-2 text-2xl text-gray-700 dark:text-white">
        <span className="border-right-[3px] flex h-24 w-24 items-center justify-center rounded-full border-2 border-t-[5px] border-green-400 text-3xl lg:hover:rotate-[360deg] lg:hover:scale-110">
          {Math.round(totalScores / allSpecifications.length)}
        </span>
        <p className="font-EstedadFont">امتیاز کلی</p>
      </div>
      <div className="h-[1px] w-11/12 bg-gray-400 lg:h-[15rem] lg:w-[1px]" />
      <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:w-[30rem] lg:items-start lg:gap-12">
        {allSpecificationsNames.map((p, index) => {
          return (
            <div
              key={index}
              className="flex w-40 flex-col items-center justify-center gap-2 text-lg text-gray-700 dark:text-white"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-r-[3px] border-t-[5px] border-violet-500 text-2xl lg:hover:rotate-[360deg] lg:hover:scale-110">
                {p.scoreOfSpecification}
              </span>
              <p className="font-EstedadFont">{p.nameOfSpecification}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TechnicalCheck;
