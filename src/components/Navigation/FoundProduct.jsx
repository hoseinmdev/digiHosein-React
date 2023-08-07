import { useNavigate } from "react-router-dom";
const FoundProduct = ({ id, imageURL, title }) => {
  const history = useNavigate();

  const renderProductPage = () => {
    history(
      { pathname: `/product/${id}` },
      {
        state: id,
      },
    );
  };
  return (
    <div
      className="flex h-24 w-11/12 cursor-pointer items-center justify-start gap-4 rounded-2xl p-2"
      onClick={renderProductPage}
    >
      <img className="w-1/4" src={imageURL} alt={title} />
      <p className="text-lg text-gray-600">{title}</p>
    </div>
  );
};

export default FoundProduct;
