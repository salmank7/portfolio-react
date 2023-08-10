import PropTypes from "prop-types";
import ResumeComponentCard from "./ResumeComponentCard";

const ResumeComponent = ({label, data}) => {
  return (
    <div className="resume__component">
        <div className="section-title">{label}</div>
        <ul className="resume__component__list">
        {data.map((datum)=> (
          <ResumeComponentCard key={datum.id} data={datum}/>
          ))
        }
        </ul>
    </div>
  )
}

ResumeComponent.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Define the other expected properties of each datum here
      // For example:
      // position: PropTypes.string.isRequired,
      // company: PropTypes.string.isRequired,
      // location: PropTypes.string.isRequired,
      // description: PropTypes.string.isRequired,
      // startYear: PropTypes.string.isRequired,
      // endYear: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default ResumeComponent;