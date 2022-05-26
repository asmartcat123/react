import  '../css/Load.css';

import {Avatar, Badge, Button, Image, Menu, Layout, Breadcrumb, Row,Col} from 'antd';
import {
    AppstoreOutlined, ContainerOutlined,
    DesktopOutlined, FileOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, PieChartOutlined, TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import React from "react";
import Sider from "antd/es/layout/Sider";
import {Content, Header} from "antd/es/layout/layout";
import {Link, Outlet} from "react-router-dom";


function Load(){
    function getItem(label, key, icon, children, url) {
        return {
            key,
            icon,
            children,
            label,
            url
        };
    }
    function onSelect(item) {
        console.log(item);
    }

   /* const items = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, ),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];*/
    const[collapsed,setCollapsed]=React.useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    return(
        <Layout
            style={{
                height:'100vh'

            }}>
            <Sider collapsible  collapsed={collapsed} onCollapse={onCollapse} style={{ overflow: 'auto',
                height: '100vh',
                position: 'fixed',}} >
        <div >
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"  >
            <Menu.Item key={'1'} icon={<PieChartOutlined/>}> Option 1</Menu.Item>
            <Menu.Item key={'2'} icon={<DesktopOutlined/>}> Option 2</Menu.Item>
            <Menu.Item key={'sub1'} icon={<UserOutlined/>}><Link to={'User'}> User</Link></Menu.Item>
                <Menu.SubMenu key={'sub2'} icon={<TeamOutlined/>} title={'Option 4'}>
                    <Menu.Item key={'6'}>Team 1</Menu.Item>
                    <Menu.Item key={'8'}>Team 2</Menu.Item>
                </Menu.SubMenu>
            <Menu.Item key={'9'} icon={<FileOutlined/>}> Option 5</Menu.Item>
            </Menu>

        </div>
            </Sider>
            <Layout style={{
              marginLeft: 200,
            }}>
                <Header>
                    <Avatar style={{backgroundColor:'#FB7FB7', position:'relative',marginLeft:'100%'}}>JZ</Avatar>
                </Header>
                <Content style={{
                    padding: 24,
                    minHeight: 280,
                background:"#fff"}} >
                  <Outlet/>
                </Content>

            </Layout>
        </Layout>
    )
}

export default Load
