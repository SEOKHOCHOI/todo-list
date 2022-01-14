import Users from './pages/Users';
import User from './pages/User';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Dones from './pages/Dones';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: Todos
  },
  {
    path: '/dones',
    component: Dones
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/users/:id',
    component: User
  },
];