import Products from "./Products";
import "./Shop.css";

function Shop() {
	const products = [
		{
			id: 0,
			tag: "New",
			name: "Belis",
			price: "$100",
			image: "/images/p1.png",
		},
		{
			id: 1,
			tag: "New",
			name: "Belis",
			price: "$100",
			image: "/images/p2.png",
		},
		{
			id: 2,
			tag: "New",
			name: "Belis",
			price: "$100",
			image: "/images/p3.png",
		},
		{
			id: 3,
			tag: "New",
			name: "Belis",
			price: "$100",
			image: "/images/p4.png",
		},
		{
			id: 4,
			tag: "New",
			name: "Belis",
			price: "$100",
			image: "/images/p5.png",
		},
		{
			id: 5,
			tag: "New",
			name: "Belis",
			price: "$100",
			image: "/images/p6.png",
		},
		{
			id: 6,
			tag: "New",
			name: "Belis",
			price: "$100",
			image: "/images/p7.png",
		},
		{
			id: 7,
			tag: "New",
			name: "Belis",
			price: "$100",
			image: "/images/p8.png",
		},
	];
	return (
		<div className="shop-container">
            <h2 className="product-heading">Latest Products</h2>
			<div className="product-container">
				{products.map((product) => {
					return (
						<Products
							name={product.name}
							tag={product.tag}
							price={product.price}
							image={product.image}
						/>
					);
				})}
			</div>
            <button className="view-product">View All Products</button>
		</div>
	);
}

export default Shop;
