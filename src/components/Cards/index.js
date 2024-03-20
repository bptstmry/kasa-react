import "../../utils/style/Cards.scss";

export default function Cards({ title, cover }) {
  return (
    <div className="cards__container">
      <div className="cards">
        <h3 className="cards__title">{title}</h3>
        <img src={cover} alt={title} className="cards__img" />
      </div>
    </div>
  );
}
