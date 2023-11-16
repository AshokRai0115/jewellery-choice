import "./Offer.css";

function Offer() {
	// const offers = [
	// 	{
	// 		id: 0,
	// 		image: "o1.jpg",
	// 		disc: "15%",
	// 	},
	// 	{
	// 		id: 1,
	// 		image: "o1.jpg",
	// 		disc: "15%",
	// 	},
	// 	{
	// 		id: 2,
	// 		image: "o1.jpg",
	// 		disc: "15%",
	// 	},
	// ];
	return (
		<div className="offer-container">
			<div className="offer-content">
				<figure className="offer-1">
					<img src="/images/o1.jpg" alt="o1" />
					<div className="offer-description-main">
                        <h2>Upto 15% off</h2>
					<button className="offer-button">Shop Now</button>
                    </div>
				</figure>
				<figure className="offer-2">
					<img src="/images/o2.jpg" alt="o1" />
					<div className="offer-description-sub1">
                        <h2>Upto 15% off</h2>
					<button className="offer-button">Shop Now</button>
                    </div>
				</figure>
				<figure className="offer-3">
					<img src="/images/o3.jpg" alt="o1" />
					<div className="offer-description-sub2">
                        <h2>Upto 15% off</h2>
					<button className="offer-button">Shop Now</button>
                    </div>
				</figure>
			</div>
		</div>
	);
}

export default Offer;
