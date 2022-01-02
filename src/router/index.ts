import Home from '@/views/Home';
import User from '@/views/User';
import Data from '@/views/Data';
import Test from '@/views/Test';
import NotFound from '@/views/NotFound';

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
