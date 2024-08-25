import Header from './layout/header';
import Footer from './layout/footer';
import { Outlet } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/auth_context';
import { fetchAllBookAPI, fetchAllUsersAPIVerHAHA, getAccountAPI } from './service/api_service';

const App = () => {
  const { userLogin, setUserLogin, isAppLoading, SetIsAppLoading } = useContext(AuthContext);

  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milSeconds)
    })
  }




  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(500);
    if (res.data) {
      //got the id here
      const userLoginId = res.data.user._id;
      const resHAHA = await fetchAllUsersAPIVerHAHA();
      const reloadUser = resHAHA.data.find(item => item.id === userLoginId);
      reloadUser.id = reloadUser._id;
      setUserLogin(reloadUser);
    }
    SetIsAppLoading(false);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    isAppLoading ? (
      <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <Spin />
      </div>
    ) : (
      <>
        <Layout style={{ minHeight: '80vh' }}>
          <Header />
          <Outlet
            fetchUserInfo={fetchUserInfo}
          />
        </Layout>
        <Footer />
      </>
    )
  );
};

export default App;



// const fetchUserInfo = useCallback(async () => {
//   const res = await getAccountAPI();
//   if (res.data) {
//     setUserLogin(res.data.user);
//   }
// }, [userLogin]); //! No need to use
//! Need this when  re render or invoke unnecessary function
