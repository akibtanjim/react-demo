import React from 'react'

const Input = ({
    name,
    label,
    value,
    error,
    onChange,
    type = 'text'
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                value={value}
                onChange={onChange}
                className="form-control"
                name={name}
                placeholder={`Enter ${name}`}/> {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;