import Image from "next/image";
import { CgChevronLeftR, CgChevronRightR } from "react-icons/cg";
import img1 from "../public/images.jpeg";
import img2 from "../public/images (1).jpeg";
import img3 from "../public/images (2).jpeg";
import img4 from "../public/images.webp";
import img5 from "../public/images.jpg";

const storiesList = [
  { id: 1, url: "../public/images.jpeg", img: img1 },
  { id: 2, url: "../public/images(1).jpeg", img: img2 },
  { id: 3, url: "../public/images(2).jpeg", img: img3 },
  { id: 4, url: "../public/images.webp", img: img4 },
  { id: 5, url: "../public/images.jpg", img: img5 },
  { id: 6, url: "../public/images.jpga", img: img5 },
  { id: 7, url: "../public/images.jpgz", img: img5 },
  { id: 8, url: "../public/images.jpge", img: img5 },
  { id: 9, url: "../public/images.jpgr", img: img5 },
  { id: 10, url: "../public/images.jpgt", img: img5 },
  { id: 11, url: "../public/images.jpgy", img: img5 },
  { id: 12, url: "../public/images.jpgu", img: img5 },
];

function HomeStories() {
  return (
    <div className="homestories">
      <div className="watchrow-scroll-left">
        <i className="big-icon">
          <CgChevronLeftR />
        </i>
      </div>
      <div className="homestories-scroll-right">
        <i className="big-icon">
          <CgChevronRightR />
        </i>
      </div>
      <div className="homestories-slider">
        {storiesList.map(({ id, url, img }) => {
          return (
            <div className="homestories-image-container" key={id}>
              <Image src={img} width={500} height={500} alt={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeStories;
