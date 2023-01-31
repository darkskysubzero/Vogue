import React from 'react'

const CollectionItem = (props) => {
    const { id, name, price, imageUrl } = props.data;
    return (
        <div className="collection-item">
            <div className="item-image"><img src={imageUrl} /></div>
            <div className="item-info">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem