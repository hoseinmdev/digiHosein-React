import createEmptyArray from "utils/createEmptyArray";
import Skeleton from "../Skeleton";

const skeletons = createEmptyArray(6).map((_, i) => (
  <div key={i} className="p-4 flex flex-col items-center justify-center gap-4">
    <Skeleton width={"8.5rem"} height={"8.5rem"} radius={"100%"} />
    <Skeleton width={"6rem"} height={"2rem"} radius={"15px"} />
  </div>
));
const mobileSkeletons = createEmptyArray(3).map((_, i) => (
  <div key={i} className=" py-4 flex flex-col items-center justify-center gap-4">
    <Skeleton width={"6.5rem"} height={"6.5rem"} radius={"100%"} />
    <Skeleton width={"5rem"} height={"1.5rem"} radius={"15px"} />
  </div>
));

const CircleCategoriesSkeleton = () => {
  return (
    <>
      <div className="hidden w-full items-center justify-evenly lg:flex">
        {skeletons}
      </div>
      <div className="flex items-center justify-center gap-2 lg:hidden">
        {mobileSkeletons}
      </div>
    </>
  );
};

export default CircleCategoriesSkeleton;
