import React from 'react';
import featuredImage from '../../assets/featured-image.webp'
import BlogComponent from "../../components/BlogComponent";
import Featured from './Blogs/Feature';
import NewPostAlert from './Blogs/NewPostAlert';
import PageContent from './Blogs/PageContent';

function Blogs() {

    return (
        <div>
            <Featured/>
            <NewPostAlert/>
            <PageContent/>
        </div>
    );
}

export default Blogs;