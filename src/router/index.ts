import Home from '@/views/Home';
import User from '@/views/User';
import Data from '@/views/Data';
import Test from '@/views/Test';
import Login from '@/views/Login';
import NotFound from '@/views/NotFound';

const routes = [
  {
    path: '/',
    auth: true,
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/user',
    auth: true,
    component: User,
  },
  {
    path: '/data',
    auth: true,
    component: Data,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/404',
    component: NotFound,
  },
];

export default routes;
