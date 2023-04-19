/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import RootNav from './src/navigation/RootNav';
import styled from 'styled-components/native';

function App(): JSX.Element {
  return (
    <Container>
      <RootNav />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default App;
