import PropTypes from 'prop-types'

const SectionTitle = ({label}) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", margin: "6rem 0 2rem 0", textTransform: "uppercase"}}>
      <div className="section-title | about__services__title">{label}</div>
    </div>
  );
};

SectionTitle.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SectionTitle;
