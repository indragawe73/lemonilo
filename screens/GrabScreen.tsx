import * as React from 'react';
import { Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Header from './../components/Header';
import styles from './../styles/grab';

function GrabScreen({ route, navigation }) {
  
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/grab.png')}
        style={{width: 190 }}
        resizeMode="contain"
      />
    </View>
  );
}

export default GrabScreen;
