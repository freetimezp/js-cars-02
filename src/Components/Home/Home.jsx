import { useEffect } from 'react';

import './Home.css';

import homeImg from '../../Assets/images/home.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='home'>
            <div className="secContainer">
                <div className="homeText" data-aos="fade-up">
                    <span className="homeSpan">Meet your new car</span>
                    <h1 className="homeTitle">
                        Honda Civic Type R
                    </h1>
                    <div className="btns flex">
                        <button className="btn" data-aos="fade-right">More Details</button>
                        <button className="btn primaryBtn" data-aos="fade-left">Test Drive</button>
                    </div>
                </div>

                <div className="homeImage" data-aos="fade-down-right">
                    <img src={homeImg} alt="home" />
                </div>
            </div>
        </div>
    );
}

export default Home;
