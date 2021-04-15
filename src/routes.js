import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Personnel from 'src/pages/Personnel';
import NotFound from 'src/pages/NotFound';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '/personnel', element: <Personnel /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/personnel" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
