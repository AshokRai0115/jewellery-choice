import "./About.css";

function About() {
	return (
		<div className="about-container">
			<div className="inner-about-container">
				<div className="back-style"></div>
				<div className="about-content"> 
					<div className="about-img-container">
						<img
							className="about-img"
							src="/images/about-img.jpg"
							alt="about"
						/>
					</div>
					<div className="content">
						<h3 className="about-heading">About Us</h3>
						<p className="home-description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
							dolorem eum consequuntur ipsam repellat dolor soluta aliquid
							laborum, eius odit consectetur vel quasi in quidem, eveniet ab est
							corporis tempore.
						</p>
						<button className="read-more">Read More</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
