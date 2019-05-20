import { createDrawerNavigator } from 'react-navigation';
import Home from './features/home/components/Home';
import Settings from './features/settings/components/Settings';
import MenuDrawer from './features/menu/components/MenuDrawer';

export default createDrawerNavigator(
  {
    Home,
    Settings
  },
  {
    contentComponent:  MenuDrawer
  }
);
