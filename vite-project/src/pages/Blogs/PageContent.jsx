import React from 'react';
import BlogComponent from "../../../components/BlogComponent";
import AboutUs from './AboutUs';

function PageContent() {

    const blogList = [];
    for(let i = 0; i < 7; i++) {
        blogList.push(<BlogComponent/>)
    }

    return (
        <div className='Page-content-class'>
            <div className='train-of-thought left'>
                <h2 className='spacing-class heading-class'>TRAIN OF THOUGHT</h2>
                {blogList}
                <button className="blog-button more-posts-btn">More Posts</button>
            </div>
            <div className='about-us right'>
                <AboutUs/>
            </div>
        </div>
    );
}

export default PageContent;