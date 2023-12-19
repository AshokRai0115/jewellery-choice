import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

function Testimonials() {
	return (
		<div className="testimonial-container">
			
			<h2 className="testimonial-heading">Testimonials</h2>

			<div className="testimony-container">
				<div className="client-image-contianer">
					<img className="client-image" src="/images/client.jpg" alt="client" />
				</div>
				<div className="testimonial-sub-container">
				<h6 className="client-name">Amit Singh</h6>
				<p className="client-testimony">
					It is a long established fact that a reader will be distracted by the
					readable cIt is a long established fact that a reader will be
					distracted by the readable.This is not main content
				</p>
			</div>

			</div>
			<div className="slider">
				<FontAwesomeIcon
					className="left-arrow"
					icon={faArrowLeft}
					style={{ color: "#fff" }}
				/>
				<FontAwesomeIcon
					className="right-arrow"
					icon={faArrowRight}
					style={{ color: "#fff" }}
				/>
			</div>
		</div>
	);
}

export default Testimonials;
