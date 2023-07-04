import React from 'react';
import { Layout } from "antd";
const { Footer} = Layout;
const FooterView: React.FC= () => {
	return (
		<Layout.Footer className="main__page__footer">
			<div className="container">
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
			</div>
		</Layout.Footer>
	);
};

export default FooterView;