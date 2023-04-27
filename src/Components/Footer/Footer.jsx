import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerContainer container">
                <div className="footerMenuDiv grid">
                    <div className="singleGrid">
                        <span className="footerTitle">About</span>
                        <ul className="footerList grid">
                            <li className="footerLink">How it works</li>
                            <li className="footerLink">Careers</li>
                            <li className="footerLink">Affiliates</li>
                            <li className="footerLink">Media</li>
                        </ul>
                    </div>

                    <div className="singleGrid">
                        <span className="footerTitle">Become Seller</span>
                        <ul className="footerList grid">
                            <li className="footerLink">Add Vehicles</li>
                            <li className="footerLink">Resource Center</li>
                            <li className="footerLink">Bonds</li>
                            <li className="footerLink">Releases</li>
                        </ul>
                    </div>

                    <div className="singleGrid">
                        <span className="footerTitle">Support</span>
                        <ul className="footerList grid">
                            <li className="footerLink">Covid-19</li>
                            <li className="footerLink">Help Center</li>
                            <li className="footerLink">Garages</li>
                            <li className="footerLink">Trust & Safety</li>
                        </ul>
                    </div>

                    <div className="singleGrid">
                        <span className="footerTitle">About</span>
                        <ul className="footerList grid">
                            <li className="footerLink">How it works</li>
                            <li className="footerLink">Careers</li>
                            <li className="footerLink">Affiliates</li>
                            <li className="footerLink">Media</li>
                        </ul>
                    </div>
                </div>

                <div className="lowerSection grid">
                    <p>2023. All Rights Reserved.</p>
                    <span>FreeTime Projects.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
