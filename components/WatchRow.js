import Image from "next/image";
import { CgChevronLeftR, CgChevronRightR } from "react-icons/cg";
import img1 from "../public/images.jpeg";
import img2 from "../public/images (1).jpeg";
import img3 from "../public/images (2).jpeg";
import img4 from "../public/images.webp";
import img5 from "../public/images.jpg";

const watchList = [
  { id: 1, url: "../public/images.jpeg", img: img1 },
  { id: 2, url: "../public/images(1).jpeg", img: img2 },
  { id: 3, url: "../public/images(2).jpeg", img: img3 },
  { id: 4, url: "../public/images.webp", img: img4 },
  { id: 5, url: "../public/images.jpg", img: img5 },
];
// for (i=0;i<watchList.length;i++){
//     import images[i] from `$[watchList[i].url]`;
// }

function WatchRow() {
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
        {watchList.map(({ id, url, img }) => {
          return (
            <div className="watchrow-image-container" key={id}>
              <Image src={img} width={500} height={500} alt={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchRow;
