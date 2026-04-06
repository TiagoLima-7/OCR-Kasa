import { useState } from "react";
import arrow from "../../assets/images/arrow.svg";
import "./style.scss";

const Collapse = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>

        <div className="arrow-container">
          <img
            src={arrow}
            alt="toggle"
            className={`collapse-arrow ${open ? "open" : ""}`}
          />
        </div>
      </button>

      {open && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
