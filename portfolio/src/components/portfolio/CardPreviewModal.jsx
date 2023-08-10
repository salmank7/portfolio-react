import PropTypes from "prop-types"
import {AiOutlineCloseSquare} from "react-icons/ai"

const CardPreviewModal = ({ data, onClose }) => {
    console.log(data)
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <AiOutlineCloseSquare size={40}/>
        </button>
        <img src={data.imagesrc} alt={data.title} />
        <div className="modal-content-text">
        <h3>{data.name}</h3>
        <p>{data.category}</p>
        </div>
      </div>
    </div>
  );
};

CardPreviewModal.propTypes = {
    data: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default CardPreviewModal;
