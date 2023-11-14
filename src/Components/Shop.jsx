import Products from "./Products";
import "./Shop.css";

function Shop() {
	const products = [
		{
			id: 0,
			tag: "new",
			name: "Belis",
			price: "$100",
			image: "/images/p1.png",
		},
		{
			id: 1,
			tag: "new",
			name: "Belis",
			price: "$100",
			image: "/images/p2.png",
		},
		{
			id: 2,
			tag: "new",
			name: "Belis",
			price: "$100",
			image: "/images/p3.png",
		},
		{
			id: 3,
			tag: "new",
			name: "Belis",
			price: "$100",
			image: "/images/p4.png",
		},
		{
			id: 4,
			tag: "new",
			name: "Belis",
			price: "$100",
			image: "/images/p5.png",
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
