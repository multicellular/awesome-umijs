import React from 'react';
import { Link } from 'umi';
import { Skeleton } from 'antd';
import './less/notfound.less';

// 声明组件  并对外输出
export default () => (
  <div className="notfound-wrapper">
    <Skeleton avatar paragraph={{ rows: 4 }} />

    <div className="link ptbig">
      <p className="mbbig">
        <Link to="/">跳转至首页</Link>
      </p>
    </div>
  </div>
);
