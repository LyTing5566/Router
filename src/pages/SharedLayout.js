import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet /> {/* 在app.js中被 SharedLayout 包起來的孩子們*/}
    </>
  );
};
export default SharedLayout;
