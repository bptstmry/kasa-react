import { useParams } from "react-router-dom";
import { housingListingsData } from "../../datas/housingListingsData";
import Rating from "../../components/Rating";
import Accordion from "../../components/Accordion";
import Carousel from "../../components/Carousel";
import Error from '../../components/Error';

export default function Accommodation() {
  const { id } = useParams();
  const hebergement = housingListingsData.find((h) => h.id === id);
  console.log(hebergement);

  if (!hebergement) {
    return <Error />;
  }

  return (
    <div>
      <div className="accomodation">
        <Carousel images={hebergement.pictures} />
        <div className="accomodation__container_head">
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
        <div className="accomodation__container__bottom">
          <div className="tags">
            <ul>
              {hebergement.tags.map((t) => (
                <li className="tag" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="notation">
            <div className="notation__stars">
              <Rating rate={hebergement.rating} />
            </div>
            <div className="notation__host">
              <p>{hebergement.host.name}</p>
              <img
                src={hebergement.host.picture}
                alt={hebergement.host.name}
              ></img>
            </div>
          </div>
        </div>
        <div className="accomodation__container__accordions">
          <Accordion title="Description" content={hebergement.description} />
          <Accordion title="Equipement" content={hebergement.equipments} />
        </div>
      </div>
    </div>
  );
}
