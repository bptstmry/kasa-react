import { useState } from "react";
import arrow from "../../assets/arrow.png";

export default function Accordion({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    setActive(!active);
  };

  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="accordion__title">
        {title}
        <img
          onClick={handleToggle}
          src={arrow}
          className="accordion__arrow"
          alt="arrow"
        />
      </div>
      <div className="accordion__content">
        {title === "Equipement" ? (
          <ul>
            {content.map((item, index) => (
              <li key={index} className="accordion__content--list">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
