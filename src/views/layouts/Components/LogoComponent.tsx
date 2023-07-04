import React from "react";
import LOGO_IMAGE from "../../../assets/images/splogo.svg";

const LogoComponent: React.FC = () => {
	return (
		<div className="logo__wrapper">
			<img src={LOGO_IMAGE} alt="LOGO" />
			
		</div>
	);
};

export default LogoComponent;
