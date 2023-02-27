import React from 'react';

function NewPostAlert() {

    return (
        <div>
            <div className='newpost-alert'>
                    <h2>Never Miss a New Post.</h2>
                <div>
                    <div className='email-info'>
                        <label for="email">Enter your email * </label>
                    </div>
                    <div className='email-box'>
                        <input id="email-id" type="email"></input>
                        <button className="blog-button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPostAlert;