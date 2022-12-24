import Image from "next/image";
import img from "../public/images.jpeg";
import { CgArrowLongRight } from "react-icons/cg";
import { BsFillCartFill } from "react-icons/bs";

function Product() {
  return (
    <div className="product">
      <div className="product-img">
        <Image src={img} alt="product" width={500} height={500} />
      </div>
      <div className="product-info">
        <h3 className="product-header">{"richard mille"}</h3>
        <div className="product-details">
          <p className="product-details-name">{"rm 038"}</p>
          <p className="product-details-props">{"Homme . Automatique"}</p>
          <p className="product-details-price">{"250k $"}</p>
        </div>
      </div>
      <div className="product-buttons">
        <button className="product-button">
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
