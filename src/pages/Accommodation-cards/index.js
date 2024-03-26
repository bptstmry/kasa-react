import { useParams } from "react-router-dom";
import { housingListingsData } from "../../datas/housingListingsData";
import "../../utils/style/Accommodation-cards.scss";
import Rating from "../../components/Rating";
import Accordion from "../../components/Accordion";
import Carousel from "../../components/Carousel"

export default function Accommodation() {
  const { id } = useParams();
  const hebergement = housingListingsData.find((h) => h.id === id);
  console.log(hebergement);

  // Vérifiez si l'hébergement correspondant à l'ID existe
  if (!hebergement) {
    return <div>L'hébergement n'existe pas.</div>;
  }

  // Retournez un élément JSX avec le titre et la description de l'hébergement
  return (
    <div>
      <div className="accomodation">
      <Carousel images={hebergement.pictures} />
        <div className="accomodation__container">
          <div className="title">
            <h1>{hebergement.title}</h1>
            <p>{hebergement.location}</p>
          </div>
          <div className="host">
            <p>{hebergement.host.name}</p>
            <img
              src={hebergement.host.picture}
              alt={hebergement.host.name}
            ></img>
          </div>
        </div>
        <div className="accomodation__container__info">
          <div className="tags">
            <ul>
              {hebergement.tags.map((t) => (
                <li className="tag" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="stars">
            <Rating rate={hebergement.rating} />
          </div>
        </div>
        <div className="accordions">
          <Accordion title="Description" content={hebergement.description} />
          <Accordion title="Equipement" content={hebergement.equipments} />
        </div>
      </div>
    </div>
  );
}
