import { Navigate } from 'react-router-dom';
const Dashboard = ({ user }) => {
  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <section className="section">
      <h4>Hello,{user?.name}</h4>
    </section>
  );
};
export default Dashboard;
