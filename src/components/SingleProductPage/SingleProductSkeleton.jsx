import Skeleton from "../common/Skeleton";
const SingleProductSkeleton = () => {
  return (
    <>
      <div className="mt-10 hidden h-[28rem] w-full items-center justify-between gap-12 p-8 lg:flex">
        <div className="flex w-[40rem] items-center justify-between">
          <div className="flex h-72 w-[60%] flex-col items-start justify-around gap-2">
            <Skeleton width={"40%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
          </div>
          <div className="flex h-72 w-36 items-center justify-center overflow-hidden rounded-2xl">
            <Skeleton width={"100%"} height={"100%"} radius={"8px"} />
          </div>
        </div>
        <Skeleton width={"2px"} height={"18rem"} />
        <div className="flex h-72 w-[22rem] flex-col items-start justify-between">
          <Skeleton width={"80%"} height={"14%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"7%"} radius={"30px"} />
          <Skeleton width={"50%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"55%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"50%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"60%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"15%"} radius={"30px"} />
        </div>
      </div>

      <div className="mt-8 flex w-full flex-col items-center justify-center gap-6 lg:hidden">
        <div className="flex h-64 w-full flex-col items-center justify-center gap-10 overflow-hidden rounded-2xl">
          <Skeleton width={"60%"} height={"100%"} radius={"8px"} />
        </div>
        <div className="flex h-56 w-11/12 flex-col items-center justify-around gap-2">
          <Skeleton width={"80%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"80%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"80%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"80%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"80%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"80%"} height={"10%"} radius={"30px"} />
        </div>
      </div>
    </>
  );
};

export default SingleProductSkeleton;
