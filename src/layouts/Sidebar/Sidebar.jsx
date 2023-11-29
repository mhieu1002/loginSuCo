import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarChartOutlined,
  FormOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Phiếu ghi nhận", "1", <FormOutlined />),
  getItem("Báo cáo sự cố", "sub1", <FileSearchOutlined />, [
    getItem("BC theo khoa", "3"),
    getItem("BC theo lãnh vực", "4"),
  ]),
  getItem("Thống kê", "9", <BarChartOutlined />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => {
          setCollapsed(value);
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "6px",
            padding: "20px",
          }}
        >
          <img
            style={{
              height: "60px",
            }}
            src="https://res.cloudinary.com/dtvgddjmz/image/upload/v1701245260/Ti%C3%AAu_%C4%91%E1%BB%81_Website_BV_16_-removebg-preview_yjlulq_uk19pi.png"
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <span style={{fontWeight: 600}}>Quản lý sự cố</span>
        </Header>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
