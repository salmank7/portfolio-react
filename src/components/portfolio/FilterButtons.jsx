import PropTypes from "prop-types";
import { useState } from "react";

const FilterButtons = ({ categories, filter}) => {
  const [active, setActive] = useState(0);

  const handleActive = (index,category) => {
    filter(category)
    setActive(index)
  }
  return (
    <div className="filter__buttons">
      <div className="filter__buttons__container">
        {categories.map((category, index) => (
          <button
            onClick={()=> handleActive(index, category)}
            className={`filter__button ${index === active ? "active" : ""}`}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

FilterButtons.propTypes = {
  categories: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
};

export default FilterButtons;
