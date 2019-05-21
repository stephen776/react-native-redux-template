import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, DrawerItemsProps } from 'react-navigation';
import { Drawer } from 'react-native-paper';

const MenuDrawer: React.FC<DrawerItemsProps> = ({ navigation }) => {
  const getRouteIndex = (name: string) =>
    navigation.state.routes.findIndex(r => r.routeName === name);

  return (
    <ScrollView>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <Drawer.Section title="My App">
          <Drawer.Item
            label="Home"
            active={navigation.state.index === getRouteIndex('Home')}
            onPress={() => navigation.navigate('Home')}
          />
          <Drawer.Item
            label="Second"
            active={navigation.state.index === getRouteIndex('Settings')}
            onPress={() => navigation.navigate('Settings')}
          />
        </Drawer.Section>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MenuDrawer;
