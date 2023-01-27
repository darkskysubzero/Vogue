import React from 'react'

export default function MenuItem(props) {
    const { title, imageURL, size } = props;
    return (
        <div className='item'>
            <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
            <div className="content">
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    )
}
