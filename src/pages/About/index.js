
import image from "../../assets/image_source_2.png";
import { aboutListingsData } from "../../datas/aboutListingsData.js";
import Accordion from "../../components/Accordion";

export default function About() {
  const about = aboutListingsData;
  return (
    <>
      <div className="about__top">
        <img src={image} alt="Plage sauvage" className="banner__img" />
        </div>
        <div className="about__center">
        <div className="about__accordion">
          {about.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
        </div>
    </>
  );
}
