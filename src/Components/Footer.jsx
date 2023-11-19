import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


import {
	faFacebook,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-main">
				<div className="footer-upper">
					<div className="email-bar">
						<input type="email" placeholder="enter your email" />
						<FontAwesomeIcon
							className="email-right-arrow"
							icon={faArrowRight}
							
						/>
					</div>
					<div className="footer-social-media">
						<FontAwesomeIcon
							className="social-media-icon"
							icon={faFacebook}
							style={{
								color: "#ffff",
								backgroundColor: "black",
							}}
						/>
						<FontAwesomeIcon
							className="social-media-icon"
							icon={faInstagram}
							style={{
								color: "#ffff",
								backgroundColor: "black",
							}}
						/>
						<FontAwesomeIcon
							className="social-media-icon"
							icon={faLinkedin}
							style={{
								color: "#ffff",
								backgroundColor: "black",
							}}
						/>
					</div>
				</div>
				<div className="footer-lower">
					<div className="footer-nav">
						<h2 className="footer-nav-title">Menu</h2>
						<p className="footer-nav-item">Home</p>
						<p className="footer-nav-item">About</p>
						<p className="footer-nav-item">Blog</p>
						<p className="footer-nav-item">Shop</p>
					</div>
					<div className="footer-instagram">
						<h2 className="footer-nav-title">Instagram</h2>
						<div className="footer-instagram-posts">
							<div className="footer-instagram-post">
								<img
									className="footer-instagram-post-img"
									src="/images/p1.png"
									alt="p1"
								/>
								<p className="footer-intagram-post-description">
									long established fact that a reader
								</p>
							</div>
							<div className="footer-instagram-post">
								<img
									className="footer-instagram-post-img"
									src="/images/p1.png"
									alt="p2"
								/>
								<p className="footer-intagram-post-description">
									long established fact that a reader
								</p>
							</div>
						</div>
					</div>
					<div className="footer-contact">
						<h2 className="footer-nav-title">Contact</h2>

						<div className="footer-contact-info	">
						<FontAwesomeIcon icon={faLocationDot} className="footer-contact-icons" />
						<p>Location</p>
						</div>
						<div className="footer-contact-info	">
						<FontAwesomeIcon icon={faPhone} className="footer-contact-icons"/>
							<p>Location</p>
						</div>
						<div className="footer-contact-info	">
							<FontAwesomeIcon
								icon={faEnvelope} className="footer-contact-icons"
							/>
							<p>Location</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<p>
				&copy; 2023 All Rights Reserved By Free Html Templates
				</p>
			</div>
		</div>
	);
}

export default Footer;
