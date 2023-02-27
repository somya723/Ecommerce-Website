import totimage from '../assets/totimage.webp';
import heart from '../assets/heart.png';

function BlogComponent() {

    return (
    <div className="blog-component">
        <img src={totimage} alt="Blog Image"/>
        <div className='featured-post blog-post'>
            <p className='featured-post-date'>Nov 29, 2022 . 1 min</p> 
            <div className='featured-post-content'>
                <p className='featured-post-heading'>Do Not Leave Tokyo Before Eating This Ramen</p>
                <p className='featured-post-para'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
            </div>
        </div>
    </div>
    )
}

export default BlogComponent;

