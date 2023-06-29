const { useSelector } = require('react-redux');
const { Navigate, useLocation } = require('react-router-dom');

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.token);
  const location = useLocation();
  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
