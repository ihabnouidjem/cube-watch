import Image from "next/image";
import bannerImg from "../public/banner.jpg";

const proprieties = [
  { text: "richard mille", id: 1 },
  { text: "RM 038", id: 2 },
  { text: "Limited edition", id: 3 },
  { text: "38 made", id: 4 },
];

function Banner() {
  return (
    <div className="banner">
      <Image src={bannerImg} width={500} height={500} alt="banner" />
      <div className="banner-text-container">
        {proprieties.map(({ text, id }) => {
          return (
            <div key={id}>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
