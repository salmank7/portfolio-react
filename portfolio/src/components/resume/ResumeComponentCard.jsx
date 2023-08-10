import PropTypes from 'prop-types'
const ResumeComponentCard = ({data}) => {
  return (
    <li className="resume__card">
        <span className="resume__card__session__line"><span className='start'>{data.startYear}</span> <span className='end'>{data.endYear}</span></span>
        <div className="resume__card__content">
            <h3 className="resume__card__content__label">{data.degree || data.position}</h3>
            <div className="resume__card__content__company">{data.institution || data.company}, <span> {data.location}</span></div>
            <div className='resume__card__content__description'>{data.description}</div>

        </div>
    </li>
  )
}

ResumeComponentCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ResumeComponentCard