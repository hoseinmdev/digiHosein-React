const Introduction = ({product}) => {
      const productProperties = [];
      Object.values(product.Specifications).forEach((value) => {
        productProperties.push({ title: value.title, icon: value.icon });
      });
      return (
        <div className="flex w-full flex-col gap-3 dark:text-white/60 lg:flex-row lg:justify-between ">
          <div className="order-1 flex w-full flex-col justify-center gap-3 lg:order-none">
            <h3 className="font-EstedadFont">ویژگی های اصلی</h3>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              {productProperties.map((p) => {
                return (
                  <div
                    className="flex w-full items-center justify-start gap-4 border-b border-gray-300 p-1 text-base"
                    key={p.title}
                  >
                    {p.icon}
                    <p>{p.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <img
            className="h-[21rem] w-full lg:w-1/2"
            src={product.imageURL}
            alt={product.title}
          ></img>
        </div>
      );
}
 
export default Introduction;