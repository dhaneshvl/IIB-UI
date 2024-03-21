import React from 'react';
import { Menu } from 'antd';
import {
  Link,
  useLocation
} from "react-router-dom";
import {
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidebar = () => {
  const location = useLocation();

  return (
    <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
      <Menu.Item key="/health" icon={<UserOutlined />}>
        <Link to="/health">Health</Link>
      </Menu.Item>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Motor">
        <Menu.Item key="/tp-claim">
          <Link to="/tp-claim">TP Claim</Link>
        </Menu.Item>
        <Menu.Item key="/od-claim">
          <Link to="/od-claim">OD Claim</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<TeamOutlined />} title="Commercial">
        <Menu.Item key="/engineering">
          <Link to="/engineering">Engineering</Link>
        </Menu.Item>
        <Menu.Item key="/marine">
          <Link to="/marine">Marine</Link>
        </Menu.Item>
        <Menu.Item key="/fire">
          <Link to="/fire">Fire</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sidebar;
