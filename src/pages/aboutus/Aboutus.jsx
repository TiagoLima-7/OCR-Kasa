import bgAboutUs from "../../assets/images/bg_aboutus.png";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import "./style.scss";

const Aboutus = () => {
  const textFiabilité =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toute les informations sont régulièrement vérifiées par nos équipes.";
  const textRespect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const textService =
    "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de beinveillance.";
  const textSecurite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  return (
    <div className="about-container">
      <Banner background={bgAboutUs} />
      <div className="collapse-container">
        <Collapse title={"Fiabilité"}>
          <p>{textFiabilité}</p>
        </Collapse>
        <Collapse title={"Respect"}>
          <p>{textRespect}</p>
        </Collapse>
        <Collapse title={"Service"}>
          <p>{textService}</p>
        </Collapse>
        <Collapse title={"Sécurité"}>
          <p>{textSecurite}</p>
        </Collapse>
      </div>
    </div>
  );
};

export default Aboutus;
