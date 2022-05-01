import React from 'react';

import './menu-item.styles.scss';

export const MenuItem = ({ id, title, imageUrl, size }) => {
    return (
        <div className={`menu-item ${size}`}>
            <div className="background-image" style={
                { backgroundImage: `url(${imageUrl})`, }
            }>
            </div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};
