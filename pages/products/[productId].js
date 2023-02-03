import Image from "next/image";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";

function ProductPage({ product }) {
  const { _id, src, company, name, description, details } = product;
  return (
    <div className="productPage">
      <div className="productPage-product">
        <div className="productPage-image">
          <Image src={`/products/${src}`} alt="" height={500} width={500} />
        </div>
        <div className="productPage-info">
          <h3 className="productPage-info-company">{company}</h3>
          <p className="productPage-info-name"> {name}</p>
          <p className="productPage-info-description">{description}</p>
          <p className="productPage-info-details">{details}</p>

          <button className="productPage-info-button">
            <p>add to cart</p>
            <i className="big-icon">
              <BsFillCartFill />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

export async function getServerSideProps(req, res) {
  try {
    const { productId } = req.query;
    const product = await fetch(
      `http://localhost:3000/api/products/${productId}`
    ).then((data) => {
      return data.json();
    });
    console.log(product);
    return {
      props: {
        product,
      },
    };
  } catch (err) {}
}
