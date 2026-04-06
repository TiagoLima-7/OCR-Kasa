import { useState } from "react";
import { useParams } from "react-router-dom";
import accomodationsList from "../../assets/data/accomodations-list.json";
import starActive from "../../assets/images/star-active.svg";
import starInactive from "../../assets/images/star-inactive.svg";
import Collapse from "../../components/collapse/Collapse";
import "./style.scss";

const Accomodation = () => {
  const { id } = useParams();

  const accomodation = accomodationsList.find((item) => item.id === id);

  const [firstName, lastName] = accomodation.host.name.split(" ");

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!accomodation) {
    return <div>Logement introuvable</div>;
  }

  const pictures = accomodation.pictures;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="accomodation-container">
      {/* CAROUSEL */}
      <div className="accomodation-carousel">
        <button onClick={prevSlide} className="carousel-arrow back">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pictures.map((picture, index) => (
              <img
                key={index}
                src={picture}
                alt={accomodation.title}
                className="carousel-img"
              />
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className="carousel-arrow forward">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>

        <div className="counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      </div>

      {/* INFO */}
      <div className="accomodation-info">
        <div className="accomodation-details-container">
          <div className="acomodation-title-div">
            <h1 className="accomodation-title">{accomodation.title}</h1>
            <h2 className="accomodation-location">{accomodation.location}</h2>
          </div>

          {/* TAGS */}
          <div className="accomodation-tags">
            {accomodation.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="host-container">
          <div className="host">
            <h3 className="host-name">
              {firstName} <br />
              {lastName}
            </h3>

            <img
              src={accomodation.host.picture}
              alt={accomodation.host.name}
              className="host-img"
            />
          </div>

          {/* RATING */}
          <div className="host-rating">
            {[1, 2, 3, 4, 5].map((starIndex) => (
              <img
                key={starIndex}
                src={
                  starIndex <= accomodation.rating ? starActive : starInactive
                }
                alt="rating star"
                className="rating-star"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="collapse-container">
        <Collapse title="Description">
          <p>{accomodation.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          {accomodation.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default Accomodation;
