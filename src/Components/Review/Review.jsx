import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

import './Review.css';

import review1 from '../../Assets/images/review-1.jpg';
import review2 from '../../Assets/images/review-2.jpg';
import review3 from '../../Assets/images/review-3.jpg';

import user1 from '../../Assets/images/reviewer-1.jpg';
import user2 from '../../Assets/images/reviewer-2.jpg';
import user3 from '../../Assets/images/reviewer-3.jpg';

const Review = () => {
    return (
        <div className='review section'>
            <div className="secContainer container">
                <div className="secHeading flex">
                    <h3 className="secTitle">Recent Reviews</h3>
                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="reviewsContainer grid">
                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={review1} alt="review" />
                        </div>
                        <h5 className="reviewTitle">2023 Automobile</h5>
                        <span className='desc'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Provident eveniet, voluptates harum id voluptatem velit.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user1} alt="reviewer" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">Jane Darcy</span>
                                    <p>Instructor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon' />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={review2} alt="review" />
                        </div>
                        <h5 className="reviewTitle">2023 Automobile</h5>
                        <span className='desc'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Provident eveniet, voluptates harum id voluptatem velit.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user2} alt="reviewer" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">Jane Darcy</span>
                                    <p>Instructor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon' />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={review3} alt="review" />
                        </div>
                        <h5 className="reviewTitle">2023 Automobile</h5>
                        <span className='desc'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Provident eveniet, voluptates harum id voluptatem velit.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user3} alt="reviewer" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">Jane Darcy</span>
                                    <p>Instructor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon' />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
