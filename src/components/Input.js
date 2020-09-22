import React from 'react'

import './css/Input.css'

export default function Input({ type, name, label, value = undefined, onChange = undefined }) {
    
    const element = 
        type === "hidden" 
            ? <input type={type} name={name} id={label} value={value} />
            : <div className="input">
                    <label htmlFor={label}>{label}</label>
                    {value === undefined 
                        ? <input type={type} name={name} id={label} required /> 
                        : <input type={type} name={name} id={label} required value={value} onChange={onChange} />
                    }
              </div>
    
    return element;
}
