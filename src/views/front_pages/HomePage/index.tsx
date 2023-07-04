import React from "react";
import HeroSection from "../../../sections/HeroSection/HeroSection";
import HeaderView from "../../../views/layouts/AuthLayout/Header/HeaderView";
import FooterView from "../Layouts/Footer/FooterView";

const HomePage: React.FC = () => {
	return (
		<>
			<HeaderView />
			{/* <HeroSection /> */}
			<FooterView />
		</>
	)
};

export default HomePage;
