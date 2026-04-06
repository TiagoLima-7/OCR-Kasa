import accomodationsList from "../../assets/data/accomodations-list.json";
import bgHome from "../../assets/images/bg_home.png";
import AccomodationCard from "../../components/accomodation-card/AccomodationCard";
import Banner from "../../components/banner/Banner";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" background={bgHome} />
      <div className="accomodation-list">
        {accomodationsList.map((accomodation) => (
          <AccomodationCard key={accomodation.id} accomodation={accomodation} />
        ))}
      </div>
    </>
  );
};

export default Home;
