import React from 'react';
import {Title, Text} from 'components/Typography';
import {Link, ScreenContainer} from './styles';

export default function Home({navigation}) {
  return (
    <ScreenContainer>
      <Title>Home</Title>
      <Link
        onPress={() => {
          navigation.navigate('TestScreen1');
        }}>
        <Text>Go to Test Screen 1</Text>
      </Link>
    </ScreenContainer>
  );
}
