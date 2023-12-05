import "./Menu.css";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Blog from "./Blog";
import { useState } from "react";

function Menu(props) {
	const [selectedItem, setSelectedItem] = useState("/");
	const [toggleMenu, setToggleMenu] = useState(props.showMenu);

	function handleNavItemClick(e, item) {
		e.preventDefault();
		setSelectedItem(item);
		window.history.pushState(null, null, item);
		toggleMenu === "show" ? setToggleMenu("hide") : setToggleMenu("show");
	}
	function renderSelectedItem() {
		switch (selectedItem) {
			case "/":
				console.log("hommie");
				return <Home />;

			case "/about":
				return <About />;

			case "/shop":
				return <Shop />;

			case "/blog":
				return <Blog />;

			default:
				return <>Prme</>;
		}
	}
	return (
		<div>
			{toggleMenu === "show" ? (
				<ul className={`menu-container`}>
					<li className="menu-item" onClick={(e) => handleNavItemClick(e, "/")}>
						<a href="/">Home</a>
					</li>
					<li
						className="menu-item"
						onClick={(e) => handleNavItemClick(e, "/about")}
					>
						<a href="/about">About</a>
					</li>
					<li
						className="menu-item"
						onClick={(e) => handleNavItemClick(e, "/shop")}
					>
						<a href="/shop">Shop</a>
					</li>
					<li
						className="menu-item"
						onClick={(e) => handleNavItemClick(e, "/blog")}
					>
						<a href="/blog">Blog</a>
					</li>
				</ul>
			) : (
				<div>{renderSelectedItem()}</div>
			)}
		</div>
	);
}

export default Menu;
