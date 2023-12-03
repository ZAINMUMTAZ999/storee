import React from 'react'

const FormcheckBox = ({ name, defaultValue, label, size }) => {
    return (
        <div className='form-control items-center'>
            <label htmlFor={name} className='label cursor-pointer'>

                <span className='label-text capitalize'>

                    {label}
                </span>
            </label>

            <input type="checkbox" name={name} defaultValue={defaultValue} className={` checkbox checkbox-primary ${size}`} />
        </div>
    )
}

export default FormcheckBox