import * as React from 'react';
import { Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Header from './../components/Header';
import styles from './../styles/grab';

function GojekScreen({ route, navigation }) {
  
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/gojek.png')}
        style={{width: 240 }}
        resizeMode="contain"
      />
    </View>
  );
}

export default GojekScreen;
