import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ id, title, imageUrl, size, linkUrl }) => {
    let navigate = useNavigate();

    return (
        <div className={`menu-item ${size}`} onClick={() => navigate(`${linkUrl}`)}>
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

export default MenuItem;