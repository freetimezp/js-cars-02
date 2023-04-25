import './Home.css';

import homeImg from '../../Assets/images/home.png';

const Home = () => {
    return (
        <div className='home'>
            <div className="secContainer">
                <div className="homeText">
                    <span className="homeSpan">Meet your new car</span>
                    <h1 className="homeTitle">
                        Honda Civic Type R
                    </h1>
                    <div className="btns flex">
                        <button className="btn">More Details</button>
                        <button className="btn primaryBtn">Test Drive</button>
                    </div>
                </div>

                <div className="homeImage">
                    <img src={homeImg} alt="home" />
                </div>
            </div>
        </div>
    );
}

export default Home;
