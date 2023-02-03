import Image from "next/image";
// import img from "../public/images.jpeg";
import { CgArrowLongRight } from "react-icons/cg";
import { BsFillCartFill } from "react-icons/bs";
import { useRouter } from "next/router";

function Product({ product }) {
  const { folder, src, company, description, name, price } = product;
  const router = useRouter();
  const routeToProduct = () => {
    router.push(`/products/${folder}`);
  };
  return (
    <div className="product">
      <div className="product-img">
        <Image
          src={`/products/${src}`}
          alt={"product"}
          width={500}
          height={500}
        />
      </div>
      <div className="product-info">
        <h3 className="product-header">{company}</h3>
        <div className="product-details">
          <p className="product-details-name">{name}</p>
          <p className="product-details-props">{description}</p>
          <p className="product-details-price">{`${price} $`}</p>
        </div>
      </div>
      <div className="product-buttons">
        <button className="product-button" onClick={routeToProduct}>
          <p>view more</p>
          <i className="small-icon">
            <CgArrowLongRight />
          </i>
        </button>
        <button className="product-button">
          <p>add to cart</p>
          <i className="small-icon">
            <BsFillCartFill />
          </i>
        </button>
      </div>
    </div>
  );
}

export default Product;
