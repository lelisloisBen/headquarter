import React from 'react';

const FormInput = (props) => {
    return (
        <div className={["form-group", props.col].join(' ')}>
            <label htmlFor={props.for}>{props.labelName} </label>
            <input 
                type={props.type}
                className={props.class} 
                id={props.id} 
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    )
};

export default FormInput;