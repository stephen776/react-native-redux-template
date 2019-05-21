import React from 'react';
import {
  DrawerActions,
  NavigationInjectedProps,
  withNavigation
} from 'react-navigation';
import { Appbar } from 'react-native-paper';
import styled from 'styled-components/native';

type Props = NavigationInjectedProps;

const Settings: React.FC<Props> = ({ navigation }) => (
  <Container>
    <Appbar.Header>
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Appbar.Content title="Settings" />
    </Appbar.Header>
  </Container>
);

const Container = styled.View`
  height: 100%;
`;

export default withNavigation(Settings);
