import PropTypes from "prop-types"
import {motion} from "framer-motion"

const GalleryCard = ({data, onClick}) => {
  return (
    <motion.div layout className="gallery__card" onClick={onClick}>
        <img className="gallery__card__image" src={data.imagesrc} alt="Work-Image" />
        {/* <div className="card__overlay">
          <div className="card__overlay__info">
            <div className="card__overlay__info__name">{data.name}</div>
            <div className="card__overlay__info__category">{data.category}</div>
          </div>
          <div className="card__overlay__icon">
          <data.icon size={24}/>
          </div>
        </div> */}
    </motion.div>
  )
}

GalleryCard.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}


export default GalleryCard