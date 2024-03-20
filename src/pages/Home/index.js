import image from "../../assets/image_source_1.png";
import "../../utils/style/Home.scss";
import { housingListingsData } from "../../datas/housingListingsData";
import Cards from "../../components/Cards";

export default function Home() {
  return (
    <>
      <div className="top">
        <img src={image} alt="Plage sauvage" className="top__image" />
        <div className="top__text">Chez vous, partout et ailleurs</div>
      </div>

      <div className="home__container">
        <div className="home__container__cards">
        {housingListingsData.map(house => (<Cards key={house.id} title={house.title} cover={house.cover}/>))}
        </div>
      </div>
    </>
  );
}
