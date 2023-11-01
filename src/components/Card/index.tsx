import "./styles.css";
import cartImg from "../../assets/car-card .png";
const Card = () => {
  return (
    <div className="ds-card-container">
      <img src={cartImg} alt="" />
      <p className="ds-description-card">Lorem ipsum dolor</p>
    </div>
  );
};

export default Card;
