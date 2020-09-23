import React from 'react'

import './css/Input.css'

export default function Input({ type, name, label, value = undefined, placeholder = '', onChange = undefined }) {
    
    const element = 
        type === "hidden" 
            ? <input type={type} name={name} id={label} value={value} placeholder={placeholder} />
            : <div className="input">
                    <label htmlFor={label}>{label}</label>
                    {value === undefined 
                        ? <input type={type} name={name} id={label} required placeholder={placeholder} /> 
                        : <input type={type} name={name} id={label} required value={value} onChange={onChange} placeholder={placeholder} />
                    }
              </div>
    
    return element;
}
