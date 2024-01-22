'use client'
import React, { useState } from 'react'
import {
  MessageOutlined,
  StarOutlined,
  StockOutlined,
  TeamOutlined,
  MehOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import './style.css'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

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
  } as MenuItem
}

const items: MenuItem[] = [
  getItem(
    <Link href={'/dashboard'}>Dashboard</Link>,
    '1',
    <AppstoreOutlined />
  ),
  getItem(
    <Link href={'/dashboard/properties'}>Property</Link>,
    '2',
    <StockOutlined />
  ),
  getItem(<Link href={'/dashboard/agent'}>Agent</Link>, '3', <TeamOutlined />),
  getItem(
    <Link href={'/dashboard/review'}>Review</Link>,
    '4',
    <StarOutlined />
  ),
  getItem(
    <Link href={'/dashboard/message'}>Message</Link>,
    '5',
    <MessageOutlined />
  ),
  getItem(
    <Link href={'/dashboard/profile'}>My Profile</Link>,
    '6',
    <MehOutlined />
  ),
]

const Sidebar: React.FC = () => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
        style={{ backgroundColor: 'white' }}>
        <div className='demo-logo-vertical' />
        <div>
          <Menu
            theme='light'
            defaultSelectedKeys={['1']}
            mode='inline'
            items={items}
            style={{ padding: '20px' }}
          />
        </div>
      </Sider>
    </Layout>
  )
}

export default Sidebar
