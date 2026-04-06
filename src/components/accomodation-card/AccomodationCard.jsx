import { Link } from "react-router-dom";
import "./style.scss";

const AccomodationCard = ({ accomodation }) => {
  return (
    <Link
      to={`/accomodation/${accomodation.id}`}
      className="accomodation-card"
      style={{ backgroundImage: `URL(${accomodation.cover})` }}
    >
      <div className="card-overlay">
        <h2 className="card-title">{accomodation.title}</h2>
      </div>
    </Link>
  );
};

export default AccomodationCard;
