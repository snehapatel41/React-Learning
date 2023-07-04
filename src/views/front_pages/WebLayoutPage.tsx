import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react";

const WebLayoutPage : React.FC = observer(() =>{
    return(
        <Layout className={`main__page__wrapper has__appsidebar`}>
				
				<Layout.Content className="main__page__content">
					<Layout.Content className="main__app__content">
						<Outlet />
					</Layout.Content>
				</Layout.Content>
			</Layout>
    )
}
)
export default WebLayoutPage;