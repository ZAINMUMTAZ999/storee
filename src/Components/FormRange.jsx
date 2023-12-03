import React from 'react'
import { useState } from 'react'
import { dollarAmount } from '../utils';

const FormRange = ({ name, label, size, price }) => {
    const minp = 1000;
    const maxP = 10000
    const [slectedprice, setselectedPrice] = useState(price || maxP)
    return (
        <div className='form-control'>
            <label htmlFor={name}>
                <span className="label-text capitalize">{label}</span>
                <span className="label-text capitalize">{dollarAmount(slectedprice)}</span>
            </label>
            <input type="range" min={0} max={maxP} value={slectedprice} onChange={(e) => setselectedPrice(e.target.value)} minp={minp} className={`range range-secondary ${size}`} />
            <div className="flex justify-between px-2 text-xs pt-2">
                <span className="font-bold">0</span>
                <span className="font-bold">Max: {dollarAmount(maxP)}</span>
            </div>
        </div>

    )
}

export default FormRange