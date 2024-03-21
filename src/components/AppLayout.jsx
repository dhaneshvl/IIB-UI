import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout, Dropdown, Avatar, Typography } from 'antd';
import { RiMentalHealthLine } from "react-icons/ri";
import { LiaHandsSolid } from "react-icons/lia";
import { MdCardMembership ,MdWorkspacePremium, MdOutlineSportsMotorsports,MdEmojiPeople} from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { GiShipBow } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import { UserOutlined,} from '@ant-design/icons';
import { HeartTwoTone } from '@ant-design/icons';
import { theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
    getItem('Health', 'sub1', <RiMentalHealthLine />, [
      getItem('Claim', '1', <Link to="/claim"><LiaHandsSolid/> </Link>),
      getItem('Member', '2', <Link to="/member"><MdCardMembership/></Link>),
      getItem('Premium', '3', <Link to="/premium"><MdWorkspacePremium/></Link>),
    ]),
    getItem('Motor', 'sub2', <MdOutlineSportsMotorsports />, [
      getItem('TP Claim', '4', <Link to="/tp-claim"><FaPeopleArrows/></Link>),
      getItem('OD Claim', '5', <Link to="/od-claim"><MdEmojiPeople/></Link>),
    ]),
    getItem('Commercial', 'sub3', <SiFsecure/>, [
      getItem('Engineering', '6', <Link to="/engineering"><IoIosConstruct/></Link>),
      getItem('Marine', '7', <Link to="/marine"><GiShipBow/></Link>),
      getItem('Fire', '8', <Link to="/fire"><FaFire/></Link>),
    ])
  ];

const AppLayout = ({ children }) => { // Receive children as a prop
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    if (e.key === 'logout') {
      // Handle logout logic
    } else if (e.key === 'changePassword') {
      // Handle change password logic
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="changePassword">Change Password</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#013d91', padding: '0 24px 0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/royal-sundaram-logo.jpg" alt="Company Logo" style={{ width: 140, height: 50, marginRight: 8 }} />
        </div>
        <Dropdown overlay={menu} placement="bottomRight" >
          <Avatar shape="square" size={40}
            icon={<UserOutlined />}
            style={{
              backgroundColor: '#7fbfff',
              cursor: 'pointer',
            }}
          />
        </Dropdown>
      </Header>
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '0 16px',
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              fontSize: '18px', // Adjust font size here
            }}
          >
            {children} {/* Render the content inside the layout */}
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Powered by Canvendor with <HeartTwoTone />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;