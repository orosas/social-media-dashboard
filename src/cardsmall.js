import React from 'react';
import './cardsmall.css';

export default function CardSmall({ icon, pageViews, growth }) {
    return (
        <div className="card-small">
            <p className="card-small-views">Page Views</p>
            <p className="card-small-icon">
                <i className={icon}></i>
            </p>
            <p className="card-small-number">{pageViews}</p>
            <p className="card-small-percentage">
                <i className="fas fa-lg fa-angle-up"></i>{growth}</p>
        </div>
    )
}
