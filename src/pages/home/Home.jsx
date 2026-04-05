import accomodationsList from "../../assets/data/accomodations-list.json";
import AccomodationCard from "../../components/accomodation-card/AccomodationCard";
import "./home.scss";

const Home = () => {
  return (
    <div className="accomodation-list">
      {accomodationsList.map((accomodation) => (
        <AccomodationCard key={accomodation.id} accomodation={accomodation} />
      ))}
    </div>
  );
};

export default Home;
