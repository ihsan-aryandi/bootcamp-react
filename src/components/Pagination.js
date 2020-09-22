import React from 'react'

import './css/Pagination.css'

export default function Pagination({ children }) {
    return (
        <div className="pagination">
            {children}
        </div>
    )
}
