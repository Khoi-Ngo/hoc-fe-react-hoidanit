// import './footer.css';
import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Title } = Typography;

const AppFooter = () => {
    return (
        <Footer style={{ backgroundColor: '#d3d3d3', color: '#fff', padding: '30px 50px' }}>
          <Row justify="space-between">
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: '#fff' }}>
                Company Name
              </Title>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                © 2024 Company Name. All rights reserved.
              </Text>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: '#fff' }}>
                Quick Links
              </Title>
              <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.65)' }}>
                <li><a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></li>
                <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Title level={4} style={{ color: '#fff' }}>
                Follow Us
              </Title>
              <div>
                <FacebookOutlined style={{ fontSize: '24px', margin: '0 8px', color: '#fff' }} />
                <TwitterOutlined style={{ fontSize: '24px', margin: '0 8px', color: '#fff' }} />
                <InstagramOutlined style={{ fontSize: '24px', margin: '0 8px', color: '#fff' }} />
                <LinkedinOutlined style={{ fontSize: '24px', margin: '0 8px', color: '#fff' }} />
              </div>
            </Col>
          </Row>
        </Footer>
      );
}

export default AppFooter;