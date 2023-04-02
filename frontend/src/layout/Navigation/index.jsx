import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  BookOutlined,
  TableOutlined,
  WifiOutlined,
  UserSwitchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Logo from "../../assets/logo-new.svg";
import LogoSmall from "../../assets/logo.png";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  if (collapsed === false) {
    return (
      <>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          style={{
            zIndex: 1000,
          }}>
          {/* <img src={Logo} style={{ margin: "16px" }} width={170} /> */}
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/" />
              Dashboard
            </Menu.Item>

            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/widgets" />
              Widgets
            </Menu.Item>

            <Menu.Item key="3" icon={<TeamOutlined />}>
              <Link to="/admin" />
              Admin Management
            </Menu.Item>
          </Menu>
        </Sider>
      </>
    );
  } else {
    return (
      <>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          style={{
            zIndex: 1000,
          }}>
          {/* <img src={LogoSmall} style={{ margin: "16px" }} width={50} /> */}
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/" />
              Dashboard
            </Menu.Item>

            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/widgets" />
              Widgets
            </Menu.Item>

            <Menu.Item key="3" icon={<TeamOutlined />}>
              <Link to="/admin" />
              Admin Management
            </Menu.Item>
          </Menu>
        </Sider>
      </>
    );
  }
}
export default Navigation;
