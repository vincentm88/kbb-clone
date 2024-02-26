import './footer.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {

    return  <Container fluid className='footer py-5'>
                <Container>
                    <div className='footer flexrowone'>
                        <div className='footer px-5 border-end'>FAQ</div>
                        <div className='footer px-5 border-end'>Contact Us</div>
                        <div className='footer px-5 border-end'>Do Not Sell My Personal Information</div>
                        <div className='footer px-5 border-end'>Do Not Process My Sensitive Information</div>
                        <div className='footer px-5 border-end'>About Us</div>
                        <div className='footer px-5 border-end'>Careers</div>
                        <div className='footer px-5'>Corporate</div>
                    </div>
                    <div className='footer flexrowtwo py-5'>
                        <div className='footer px-5 border-end'>Advertising</div>
                        <div className='footer px-5 border-end'>Media</div>
                        <div className='footer px-5 border-end'>Site Map</div>
                        <div className='footer px-5 border-end'>KBB Brazil</div>
                        <div className='footer px-5'>KBB Canada</div>
                    </div>
                    <div className='footer flexrowthree'>
                        <div className='footer px-4'><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className='footer px-4'><FontAwesomeIcon icon={faInstagram} /></div>
                        <div className='footer px-4'><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className='footer px-4'><FontAwesomeIcon icon={faRss} /></div>
                        <div className='footer px-4'><FontAwesomeIcon icon={faLinkedinIn} /></div>
                        <div className='footer px-4'><FontAwesomeIcon icon={faYoutube} /></div>
                    </div>
                    <div className='footer flexrowfour py-5'>
                        <div className='footer px-3 border-end'>© 1995-2024 Kelley Blue Book Co.®, Inc. All rights reserved.</div>
                        <div className='footer px-3 border-end'>Copyrights & Trademarks</div>
                        <div className='footer px-3 border-end'>Vehicle Photos © Evox Images</div>
                        <div className='footer px-3 border-end'>Terms of Service</div>
                        <div className='footer px-3 border-end'>Privacy Policy</div>
                        <div className='footer px-3 border-end'>Linking Policy</div>
                        <div className='footer px-3 border-end'>Accessibility Statement</div>
                        <div className='footer px-3'>Manage Cookies</div>
                    </div>
                </Container>
            </Container>
}