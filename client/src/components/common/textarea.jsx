import React from 'react';

const Textarea = ({name, label, error, ...rest}) => {
    return (
        <span className="input__field">
            <label htmlFor={name} className="input__label">{label}</label>
            <textarea
            id={name}
            name={name}
            className="input input-textarea"
            {...rest}
            />
            {error && <div className="validate"> {error} </div>}
      </span>
    )
}

export default Textarea;
