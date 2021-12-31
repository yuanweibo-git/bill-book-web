import Home from '@/views/Home';
import User from '@/views/User';
import Data from '@/views/Data';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/data',
    component: Data,
  },
];

export default routes;
