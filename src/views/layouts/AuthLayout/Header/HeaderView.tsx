import React from "react";
import { Layout } from "antd";
import HeaderLogoComponent from "../../Components/LogoComponent";
import HeaderMenuComponent from "../../Components/HeaderMenuComponent";


const HeaderView: React.FC = () => {
	return (
		
		<Layout.Header className="main__page__header">
			<header>
				<div className="container">
					
				</div>
			</header>
			<hr />
			<div className="container">
				<HeaderLogoComponent />
				<HeaderMenuComponent />
			</div>
		</Layout.Header>
	);
};

export default HeaderView;
