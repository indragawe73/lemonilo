import * as React from 'react';
import { Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Header from './../components/Header';
import styles from './../styles/grab';

function TravelokaScreen({ route, navigation }) {
  
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/traveloka.png')}
        style={{width: 230 }}
        resizeMode="contain"
      />
    </View>
  );
}

export default TravelokaScreen;
