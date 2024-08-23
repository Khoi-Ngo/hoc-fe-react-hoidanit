import Header from './layout/header';
import Footer from './layout/footer';
import { Outlet } from 'react-router-dom';
import { Layout, Row, Col, Typography } from 'antd';
const App = () => {

  return (
    <>
        <Layout style={{ minHeight: '80vh' }}>
          <Header />
          <Outlet />
        </Layout>
        <Footer />
    </>
  );
}

export default App;
