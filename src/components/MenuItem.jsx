import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MenuItem(props) {
    const { title, imageURL, size } = props;
    return (

        <div className='item'>
            <Link to={`/${title.toLowerCase()}`}>
                <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
                <div className="content">
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </Link>
        </div>
    )
}
