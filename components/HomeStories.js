import Image from "next/image";
import { CgChevronLeftR, CgChevronRightR } from "react-icons/cg";

function HomeStories({ storiesList }) {
  return (
    <div className="homestories">
      <div className="homestories-scroll-left">
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
        {storiesList.map(({ _id, src }) => {
          return (
            <div className="homestories-image-container" key={_id}>
              <Image
                src={`/stories/${src}`}
                width={500}
                height={500}
                alt={src}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeStories;
