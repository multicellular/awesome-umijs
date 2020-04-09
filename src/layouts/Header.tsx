import React, { FC, useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { Link, connect, IGlobalState, IUserInfo } from 'umi';

import './less/header.less';
// import logoPng from "@assets/images/logo.png";

const { Item } = Menu;

interface IProps {
  userInfo: IUserInfo;
}

const Header: FC<IProps> = ({ userInfo }) => {
  const [current, setCurrent] = useState<string>('');
  const handleClick = () => {};
  const navs = [
    {
      to: '/home',
      children: <p>首页</p>,
    },
    {
      to: '/exchange',
      children: <p>币币交易</p>,
    },
    {
      to: '/user',
      children: <p>法币交易</p>,
    },
    {
      to: '/help',
      children: <p>帮助中心</p>,
    },
  ];
  const navChildren = navs.map(item => {
    return (
      <Item key={item.to} className="header3-item">
        <Link {...item} className={`header3-item-block`} />
      </Item>
    );
  });

  const userMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/user/info">我的账户</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/user/assets">我的资产</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>
        <Link to="/user/history">历史记录</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className="header-wrapper">
      <div className="menu-wrapper">
        {/* <img className="r-logo" alt="Rlogo" src={logoPng} /> */}
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          {navChildren}
        </Menu>
      </div>
      <div className="user-info">
        {userInfo.id ? (
          <Dropdown overlay={userMenu}>
            <a href="/user/info" onClick={e => e.preventDefault()}>
              {userInfo.id}
            </a>
          </Dropdown>
        ) : (
          <>
            <Link to="/login">
              <h5>登录</h5>
            </Link>
            <Link to="/register">
              <h5>注册</h5>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default connect(({ global }: { global: IGlobalState }) => ({
  userInfo: global.userInfo,
}))(Header);
