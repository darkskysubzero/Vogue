import React, { useState } from 'react'
import defaultData from "../collections_data";
import CollectionCategory from '../components/CollectionCategory';

const Shop = () => {

    const [data, setData] = useState(defaultData);

    return (
        <div className='shop-page'>
            {
                data.map(collection => (
                    <CollectionCategory key={collection.id} title={collection.title} items={collection.items} />
                ))
            }
        </div>
    )
}

export default Shop;