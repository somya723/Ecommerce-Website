import React from 'react';
import AboutImage from '../../../components/AboutImage';
import AboutUsImage from '../../../assets/AboutUsImage.webp';
import PickOTMImage from '../../../assets/PickOTMimage.webp';
import icon1 from '../../../assets/icon1.webp';
import icon2 from '../../../assets/icon2.webp';
import icon3 from '../../../assets/icon3.webp';
import icon4 from '../../../assets/icon4.webp';


function AboutUs(){

    const imageList = [];
    for(let i = 0; i < 5; i++) {
        imageList.push(<AboutImage/>)
    }

    return (
    <div className='about-class'>
        <h2 className='spacing-class'>ABOUT ME</h2>
        <div className='about-section'>
            <img className='aboutUsImage' src={AboutUsImage} alt="About Us Image"/>
            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
            <button className='about-page-btns'>Read More </button>
        </div>
        <div className='about-section'>
            <h2 className='spacing-class'>FOLLOW ME</h2>
            <div className='about-image-section'>
                {imageList}
            </div>
        </div>
        <div className='icon-gap'>
            <img className='pointer-class' src={icon1} alt="Icon image 1"/>
            <img className='pointer-class' src={icon2} alt="Icon image 2"/>
            <img className='pointer-class' src={icon3} alt="Icon image 3"/>
            <img className='pointer-class' src={icon4} alt="Icon image 4"/>
        </div>
        <div>
            <div className='subscribe-class'>
                <h2 className='spacing-class subscribe-heading'>SUBSCRIBE</h2>
                <div>
                    <div className='email-info'>
                        <label for="email">Enter your email * </label>
                    </div>
                    <div>
                        <input className='subscribe-box' type="email"></input>
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2 className='spacing-class'>MY PICK OF THE MONTH</h2>
            <div>
                <img className='pick-of-the-month-image' src={PickOTMImage} 
                alt="Pick of the Month Image"/>
                <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </div>
    </div>
    );
}

export default AboutUs;