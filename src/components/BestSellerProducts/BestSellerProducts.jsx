import { useProducts } from "../../context/ProductsProvider";
import Product from "../Product/Product";
import HomePageProductsLayout from "layout/HomePageProductsLayout/HomePageProductsLayout";
const BestSellerProducts = () => {
  const { productState } = useProducts();
  return (
    <HomePageProductsLayout
      bgColor="#0f172a"
      title="پرفروش ترین محصولات"
      titleColor="#f8fafc"
      titleLineColor="#a78bfa"
      smallShapeColor="#7dd3fc"
      normalShapeColor="#8b5cf6"
      bigShapeColor="#2dd4bf"
    >
      {productState.bestSellerProducts.map((p) => {
        const product = {
          id: p.id,
          category: p.category,
          title: p.title,
          price: p.price,
          imageURL: p.imageURL,
          Specifications: p.Specifications,
          comments: p.comments,
          quantity: p.quantity,
          technicalCheck: p.technicalCheck,
          positivePoints: p.positivePoints,
          negativePoints: p.negativePoints,
          category: p.category
        };
        return <Product key={p.id} product={product} />;
      })}
    </HomePageProductsLayout>
  );
};

export default BestSellerProducts;
