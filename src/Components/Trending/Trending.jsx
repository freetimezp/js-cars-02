import './Trending.css';

import car1 from '../../Assets/images/trend-1.jpg';
import car2 from '../../Assets/images/trend-2.jpg';
import car3 from '../../Assets/images/trend-3.jpg';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Trending = () => {
    return (
        <div className='trending section'>
            <div className="secContainer container">
                <div className="secHeading flex">
                    <h3 className="secTitle">Trending Near You</h3>
                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">
                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car1} alt="car" />
                        </div>
                        <h5 className="carTitle">
                            Used Auto 2019 Premium Class
                        </h5>
                        <span className="miles">11457 Miles</span>
                        <span className="awd">AWD 4-Cylinder Turbo</span>

                        <div className="price_seller flex">
                            <span className="price">$32,135</span>
                            <span className="seller">Best Seller</span>
                        </div>
                    </div>

                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car2} alt="car" />
                        </div>
                        <h5 className="carTitle">
                            Used Auto 2019 Premium Class
                        </h5>
                        <span className="miles">11457 Miles</span>
                        <span className="awd">AWD 4-Cylinder Turbo</span>

                        <div className="price_seller flex">
                            <span className="price">$32,135</span>
                            <span className="seller">Best Seller</span>
                        </div>
                    </div>

                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car3} alt="car" />
                        </div>
                        <h5 className="carTitle">
                            Used Auto 2019 Premium Class
                        </h5>
                        <span className="miles">11457 Miles</span>
                        <span className="awd">AWD 4-Cylinder Turbo</span>

                        <div className="price_seller flex">
                            <span className="price">$32,135</span>
                            <span className="seller">Best Seller</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trending;
