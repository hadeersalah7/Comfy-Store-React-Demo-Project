import React from 'react'

const FormSelect = ({ label, list, name, defaultValue, size }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name} className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <select className={`select select-bordered ${size}`}
                id={name}
                name={name}
                defaultValue={defaultValue}
            >
                {list.map((item) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default FormSelect