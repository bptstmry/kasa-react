import image from "../../assets/image_source_1.png";
import { housingListingsData } from "../../datas/housingListingsData";
import Cards from "../../components/Cards";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <img src={image} alt="Plage sauvage" className="home__image" />
        <div className="home__text">Chez vous, partout et ailleurs</div>
      </div>

      <div className="home__container">
        <div className="home__container__cards">
        {housingListingsData.map(house => (<Link key={house.id} to={`/accomodation/${house.id}`}><Cards title={house.title} cover={house.cover}/></Link>))}
        </div>
      </div>
    </>
  );
}
