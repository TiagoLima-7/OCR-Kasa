import { useParams } from "react-router-dom";
import accomodationsList from "../../assets/data/accomodations-list.json";

const Accomodation = () => {
  const { id } = useParams();
  const accomodation = accomodationsList.find((item) => item.id === id);
  console.log(accomodation);
};

export default Accomodation;
