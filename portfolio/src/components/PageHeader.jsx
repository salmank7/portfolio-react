import PropTypes from 'prop-types';

const PageHeader = ({ label, icon: Icon }) => {
  return (
    <div className="page__header">
      <div className="page__header__label">{label}.</div>
      <div className="page__header__icon">
        <Icon size={50} />
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default PageHeader;
