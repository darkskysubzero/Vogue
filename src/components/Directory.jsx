import React from 'react';
import { useState } from 'react';
import image1 from "../assets/section-images/1.jpg";
import image2 from "../assets/section-images/2.jpg";
import image3 from "../assets/section-images/3.jpg";
import image4 from "../assets/section-images/4.jpg";
import image5 from "../assets/section-images/5.jpg";
import image6 from "../assets/section-images/6.jpg";

import MenuItem from './MenuItem';

const Directory = () => {

    const default_section_state = [
        { id: 1, title: 'Hats', imageURL: image1 },
        { id: 2, title: 'Jackets', imageURL: image2 },
        { id: 3, title: 'Sneakers', imageURL: image3 },
        { id: 4, title: 'Women', imageURL: image4, size: 'large' },
        { id: 5, title: 'Mens', imageURL: image5, size: 'large' },
        { id: 6, title: 'Food', imageURL: image6, },
    ];

    const [sections, setSections] = useState(default_section_state);


    return (
        <div className="directory-menu">
            {sections.map(({ id, title, imageURL, size }) => {
                return <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
            })}

        </div>
    );
}

export default Directory;
