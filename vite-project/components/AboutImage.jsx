import FollowMe1 from '../assets/FollowMe1.jpg';
import FollowMe2 from '../assets/FollowMe2.jpg';

function AboutImage() {

    return (
    <div className="about-image">
        <img src={FollowMe1} alt="Follow Me Images"/>
        <img src={FollowMe2} alt="Follow Me Images"/>
    </div>
    )
}

export default AboutImage;

