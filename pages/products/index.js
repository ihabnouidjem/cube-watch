import Product from "../../components/Product";

function Products({ productsList }) {
  console.log(productsList);
  return (
    <div className="products">
      <div className="products-container">
        {productsList.map((product) => {
          return (
            <div key={product._id}>
              {" "}
              <Product product={product} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;

export async function getServerSideProps() {
  try {
    const productsList = await fetch("http://localhost:3000/api/products").then(
      (data) => {
        return data.json();
      }
    );
    return {
      props: {
        productsList,
      },
    };
  } catch {}
}
