import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


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
