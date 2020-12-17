import PropTypes from 'prop-types'

const FormTextArea = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  rows,
  required,
  ...props
}) => {
  return (

    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        rows={rows}
        name={name}
        // onChange={onChange}
        value={value}
        className={className}
        style={error && { border: "solid 1px red" }}
        
      ></textarea>
      {error && <p>{error}</p>}
    </div>
  );
};

FormTextArea.defaultProps = {
  type: "text",
  className: "form-control",
};

FormTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormTextArea;
