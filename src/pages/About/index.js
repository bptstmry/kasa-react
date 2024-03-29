
import image from "../../assets/image_source_2.png";
import { aboutListingsData } from "../../datas/aboutListingsData.js";
import Accordion from "../../components/Accordion";

export default function About() {
  const about = aboutListingsData;
  return (
    <>
      <div className="topp">
        <img src={image} alt="Plage sauvage" className="banner__img" />
        </div>
        <div className="centerr">
        <div className="accordion__about">
          {about.map((item) => (
            <Accordion title={item.title} content={item.content} />
          ))}
        </div>
        </div>
    </>
  );
}
