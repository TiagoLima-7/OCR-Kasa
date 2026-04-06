import { Link } from "react-router-dom";
import "./style.scss";

const Error404 = () => {
  return (
    <div className="error-page-container">
      <div className="text-404">404</div>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="retour-link" to="/">
        Retourner vers la page d'accueil
      </Link>
    </div>
  );
};

export default Error404;
