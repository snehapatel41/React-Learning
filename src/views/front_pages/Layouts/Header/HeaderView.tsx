import React from 'react';
import { Layout, Menu } from "antd";
import { useLocation, Link } from 'react-router-dom';
import {  } from 'react-router-dom';
const { Header} = Layout;
const HeaderView: React.FC= () => {
    const location = useLocation();
    const MenuItem = [
        {key : "/", text: "Home", url:"/"},
        {key:"/about", text: "About", url :"/about"},
        {key:"/service", text:"Services", url:"/service"},
        {key:"/blogs", text:"Blogs", url:"/blogs"},
        
    ]
    const RenderMenuItems = MenuItem?.map(({key, text, url}) => (
        <Menu.Item className='header_menu_item' key={key}>
            {url?<Link to={url} >{text}</Link>: text}
        </Menu.Item>
    ))
	return (
		<Layout.Header className="main__page__header">
			
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div className="demo-logo" />
                    <Menu mode={"horizontal"} activeKey={location.pathname} className='header_menu'>
                        {RenderMenuItems}
                    </Menu>
                </div>
            </Header>
			
		</Layout.Header>
	);
};

export default HeaderView;