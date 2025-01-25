import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => (
	<aside className="Menu">
		<nav>
			<ul>
				<li>
					<Link to="/">Início</Link>
				</li>
				<li>
					<Link to="/param/123">Param #01</Link>
				</li>
				<li>
					<Link to="/param/text">Param #02</Link>
				</li>
				<li>
					<Link to="/about">Sobre</Link>
				</li>
			</ul>
		</nav>
	</aside>
);
export default Menu;
