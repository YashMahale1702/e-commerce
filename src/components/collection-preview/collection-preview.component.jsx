import React from "react";

import './collection-preview.styles.scss'

export const CollectionPreview = ({ title, items, }) => {
    return (
        <div className="collection-preview">
            <h1>{title}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}
