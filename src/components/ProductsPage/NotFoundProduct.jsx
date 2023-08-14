import notFound from "../../assets/images/notFoundProduct.png";

const NotFoundProduct = () => {
  return (
    <div className="mt-10 flex w-[60rem] flex-col items-center justify-center gap-2 text-gray-600">
      <img className="w-52" src={notFound} alt="محصولی یافت نشد" />
      <h1>محصولی یافت نشد :(</h1>
    </div>
  );
};

export default NotFoundProduct;
