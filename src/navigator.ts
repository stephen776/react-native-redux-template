import { createDrawerNavigator } from 'react-navigation';
import MenuDrawer from './features/menu/components/MenuDrawer';
import Home from './features/home/components/Home';
import Settings from './features/settings/components/Settings';

export default createDrawerNavigator(
  {
    Home,
    Settings
  },
  {
    contentComponent: MenuDrawer
  }
);
