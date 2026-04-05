import "./style.scss";

const AccomodationCard = ({ accomodation }) => {
  return (
    <div
      className="accomodation-card"
      style={{ backgroundImage: `URL(${accomodation.cover})` }}
    >
      <div className="card-overlay">
        <p className="card-title">{accomodation.title}</p>
      </div>
    </div>
  );
};

export default AccomodationCard;
