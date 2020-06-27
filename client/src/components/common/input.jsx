import React from 'react';

const Input = ({name, label, error, ...rest}) => {
    return (
        <span className="input__field">
            <label htmlFor={name} className="input__label">{label}</label>
            <input
            id={name}
            name={name}
            className="input"
            {...rest}
            />
            {error && <div className="validate"> {error} </div>}
      </span>
    )
}

export default Input;
