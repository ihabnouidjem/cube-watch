import Image from "next/image";
import { useRouter } from "next/router";
import {
  CgArrowLongRight,
  CgChevronLeftR,
  CgChevronRightR,
} from "react-icons/cg";
function WatchRow({ productsList }) {
  const router = useRouter();
  const routeToProduct = (folder) => {
    router.push(`/products/${folder}`);
  };
  return (
    <div className="watchrow">
      <div className="watchrow-scroll-left">
        <i className="big-icon">
          <CgChevronLeftR />
        </i>
      </div>
      <div className="watchrow-scroll-right">
        <i className="big-icon">
          <CgChevronRightR />
        </i>
      </div>
      <div className="watchrow-slider">
        {productsList.map(({ _id, folder, src, company, description }) => {
          return (
            <div key={_id} className="watchrow-watch-container">
              <div className="watchrow-image-container">
                <Image
                  src={`/products/${src}`}
                  width={500}
                  height={500}
                  alt={src}
                />
              </div>
              <div className="watchrow-info">
                <h3 className="watchrow-info-header">{company}</h3>
                <p className="watchrow-info-description">{description}</p>
                <button
                  className="watchrow-button"
                  onClick={() => routeToProduct(folder)}
                >
                  <p>view more</p>
                  <i className="small-icon">
                    <CgArrowLongRight />
                  </i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchRow;
