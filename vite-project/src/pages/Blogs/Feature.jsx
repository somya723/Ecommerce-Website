import React from 'react';
import featuredImage from '../../../assets/featured-image.webp'

function Featured() {

    return (
        <div>
            <div className='featured'>
                <div className='featured-heading'>
                    <h2 className='featured-heading-detailing'>FEATURED POST</h2>
                </div>
                <div className='featured-post'>
                    <img src={featuredImage} alt="Featured Image"/>
                    <p className='featured-post-date'>Nov 29, 2022 . 2 min</p> 
                    <div className='featured-post-content'>
                        <p className='featured-post-heading'>Back to Fiction: What I'm Reading This Summer</p>
                        <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;