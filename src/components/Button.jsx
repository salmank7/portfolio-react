import PropTypes from 'prop-types';

const Button = ({ label, action }) => {
  return (
    <div onClick={action}>
      <button className='button hvr-shutter-out-horizontal'>{label}</button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
