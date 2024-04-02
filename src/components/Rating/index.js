import star from "../../assets/star.png"

export default function Rating({ rate }) {
  const MAX_RATING = 5;
  const filledStars = parseInt(rate);
  const emptyStars = MAX_RATING - filledStars;

  return (
    <>
      {[...Array(filledStars)].map((_, index) => (
        <img src={star} key={index} className="stars" alt="stars"/>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <img src={star} key={index + filledStars} className="stars gray" alt="stars"/>
      ))}
    </>
  );
}
