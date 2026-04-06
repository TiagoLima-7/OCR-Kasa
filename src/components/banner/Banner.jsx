import "./style.scss";

const Banner = ({ text, background }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: background ? `url(${background})` : "none" }}
    >
      <div className="banner-overlay">
        {text && <h2 className="banner-text">{text}</h2>}
      </div>
    </div>
  );
};

export default Banner;
