import React from 'react'
import CollectionItem from './CollectionItem';

const CollectionCategory = (props) => {
    const { title, items } = props;
    return (
        <div className="collection-category">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="item-list">
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} data={item} />
                    })}
            </div>
        </div>
    )
}

export default CollectionCategory