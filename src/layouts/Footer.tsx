import React from 'react';
import { Col, Row } from 'antd';

import './less/footer.less';
// import logoPng from "@assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="home-page-wrapper footer1-wrapper">
      <div className="footer1">
        <Row className="home-page">
          <Col className="block" xs={24} md={6}>
            <h2>{/* <img alt="" className="logo" src={logoPng} /> */}</h2>
            <div className="slogan">
              <div>Animation specification and components of Ant Design.</div>
            </div>
          </Col>
          <Col className="block" xs={24} md={6}>
            <h2>产品</h2>
            <div>
              <a href="/">产品更新记录</a>
              <a href="/">API文档</a>
              <a href="/">快速入门</a>
            </div>
          </Col>
          <Col className="block" xs={24} md={6}>
            <h2>关于</h2>
            <div>
              <a href="/">FAQ</a>
              <a href="/">联系我们</a>
            </div>
          </Col>
          <Col className="block" xs={24} md={6}>
            <h2>资源</h2>
            <div>
              <a href="/">Ant Design</a>
            </div>
          </Col>
        </Row>
        <div className="copyright-wrapper">
          <div className="home-page">
            <div className="copyright">
              <span>
                ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All
                Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
