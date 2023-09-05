const { AiFillCamera } = require("react-icons/ai");
const { MdBatteryChargingFull, MdScreenshot } = require("react-icons/md");
const { useNavigate } = require("react-router-dom");

const MobileProduct = ({ product }) => {
  const history = useNavigate();
  const { id, title, price, imageURL } = product;
  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      },
    );
  };
  return (
    <div className="flex w-full flex-col items-start justify-center gap-3 border-b border-gray-300 pb-4">
      <p
        className="text-gray-600 dark:text-white/80 lg:cursor-pointer"
        onClick={renderProductPage}
      >
        {title}
      </p>
      <div className="flex w-full items-center justify-between gap-4">
        <img
          src={imageURL}
          alt={product.title}
          className="h-32 w-32"
          onClick={renderProductPage}
        />
        <div className="flex w-full flex-col items-end justify-center gap-4">
          <div className="flex w-full items-start justify-around rounded-xl bg-violet-100 p-3 text-lg text-gray-800 dark:text-white/80 dark:border-2 dark:border-violet-500 dark:bg-transparent">
            <div className="flex h-full flex-col items-center justify-between gap-1">
              <AiFillCamera />
              <p className="text-sm">{product.camera}</p>
            </div>
            <div className="flex h-full flex-col items-center justify-between gap-1">
              <MdBatteryChargingFull />
              <p className="text-sm">{product.battery}</p>
            </div>
            <div className="flex h-full flex-col items-center justify-between gap-1">
              <MdScreenshot />
              <p className="text-sm">{product.screen}</p>
            </div>
          </div>
          <p className="dark:text-white/80">
            {price.toLocaleString("en")} تومان
          </p>
        </div>
      </div>
    </div>
  );
};
export default MobileProduct;
