import { useEffect } from 'react';

import './Sellers.css';

import seller1 from '../../Assets/images/toyota-logo.png';
import seller2 from '../../Assets/images/merc-logo.png';
import seller3 from '../../Assets/images/volk-logo.png';
import seller4 from '../../Assets/images/hyun-logo.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Sellers = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='sellers section'>
            <div className="secContainer container">
                <div className="secHeading grid" data-aos="fade-down">
                    <h3 className="secTitle">Exlore top sellers in town</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Praesentium, ipsa. Alias eius tenetur delectus tempore.
                    </p>
                </div>

                <div className="sellersContainer grid">
                    <div className="singleSeller flex" data-aos="fade-up">
                        <div className="imgDiv flex">
                            <img src={seller1} alt="seller" className='img' />
                        </div>
                        <div className="info">
                            <h4 className="name">Toyota</h4>
                            <p>from 40k</p>
                        </div>
                    </div>

                    <div className="singleSeller flex" data-aos="fade-down">
                        <div className="imgDiv flex">
                            <img src={seller2} alt="seller" className='img' />
                        </div>
                        <div className="info">
                            <h4 className="name">Mercedes</h4>
                            <p>from 40k</p>
                        </div>
                    </div>

                    <div className="singleSeller flex" data-aos="fade-up">
                        <div className="imgDiv flex">
                            <img src={seller3} alt="seller" className='img' />
                        </div>
                        <div className="info">
                            <h4 className="name">Volkswagen</h4>
                            <p>from 40k</p>
                        </div>
                    </div>

                    <div className="singleSeller flex" data-aos="fade-down">
                        <div className="imgDiv flex">
                            <img src={seller4} alt="seller" className='img' />
                        </div>
                        <div className="info">
                            <h4 className="name">Hyundai</h4>
                            <p>from 40k</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sellers;
