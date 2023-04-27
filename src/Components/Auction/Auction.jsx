import { useState, useEffect } from 'react';
import './Auction.css';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import auction1 from '../../Assets/images/auction-1.jpg';
import auction2 from '../../Assets/images/auction-2.jpg';
import auction3 from '../../Assets/images/auction-3.jpg';
import auction4 from '../../Assets/images/auction-4.jpg';
import auction5 from '../../Assets/images/auction-5.jpg';
import auction6 from '../../Assets/images/auction-6.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Auction = () => {
    const items = [
        {
            id: 1,
            title: "Used Auto 2019 Premium Class",
            miles: "11457 Miles",
            awd: "AWD 4-Cylinder Turbo",
            image: auction1,
            price: 32.135,

        },
        {
            id: 2,
            title: "Used Auto 2019 Premium Class",
            miles: "11457 Miles",
            awd: "AWD 4-Cylinder Turbo",
            image: auction2,
            price: 32.135,

        },
        {
            id: 3,
            title: "Used Auto 2019 Premium Class",
            miles: "11457 Miles",
            awd: "AWD 4-Cylinder Turbo",
            image: auction3,
            price: 32.135,

        },
        {
            id: 4,
            title: "Used Auto 2019 Premium Class",
            miles: "11457 Miles",
            awd: "AWD 4-Cylinder Turbo",
            image: auction4,
            price: 32.135,

        },
        {
            id: 5,
            title: "Used Auto 2019 Premium Class",
            miles: "11457 Miles",
            awd: "AWD 4-Cylinder Turbo",
            image: auction5,
            price: 32.135,

        },
        {
            id: 6,
            title: "Used Auto 2019 Premium Class",
            miles: "11457 Miles",
            awd: "AWD 4-Cylinder Turbo",
            image: auction6,
            price: 32.135,
        },
    ];

    const [activeId, setActiveId] = useState();

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='auction section'>
            <div className="secContainer container">
                <div className="secHeading flex" data-aos="fade-up">
                    <h3 className="secTitle">Active Auctions</h3>
                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">
                    {items.map((item) => (
                        <div className={`singleCar grid ${activeId === item.id ? " singleCarActive" : ""}`} key={item.id} onClick={() => setActiveId(item.id)} data-aos="fade-up">
                            <div className="imgDiv">
                                <img src={item.image} alt="car" />
                            </div>
                            <h5 className="carTitle">{item.title}</h5>
                            <span className="miles">{item.miles}</span>
                            <span className="awd">{item.awd}</span>

                            <div className="price_buyBtn flex">
                                <span className="price">${item.price}</span>
                                <span className="buyBtn">Buy Now</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Auction;
