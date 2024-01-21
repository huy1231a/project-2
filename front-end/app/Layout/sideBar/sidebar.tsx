"use client";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  pathName?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    pathName,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Property", "2", <DesktopOutlined />),
  getItem("Agent", "3", <TeamOutlined />),
  getItem("Review", "4", <TeamOutlined />),
  getItem("Message", "5", <FileOutlined />),
  getItem("My Profile", "6", <FileOutlined />),
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
      >
        <div className="demo-logo-vertical" />
        <div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            style={{ padding: "20px" }}
            onClick={() => {
              router.push("/dashboard/properties");
            }}
          />
        </div>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
