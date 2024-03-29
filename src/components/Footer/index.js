import logo_light from "../../assets/logo_light.png";

export default function Footer() {
  return (
    <div className="bottom">
      <img src={logo_light} alt="Logo de kasa" className="bottom__img"></img>
      <div className="bottom__banner">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}
