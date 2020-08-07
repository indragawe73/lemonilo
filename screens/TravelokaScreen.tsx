import * as React from 'react';
import { Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Header from './../components/Header';
import styles from './../styles/grab';

function TravelokaScreen({ route, navigation }) {
  
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/mie.png')}
        style={styles.imageSize}
        resizeMode="contain"
      />
      <Text style={styles.title}>Lemonilo Mi Instan Kuah Rasa Kari Ayam</Text>
      <Text style={styles.textList}>Mi Instan Lemonilo bisa dikonsumsi seluruh anggota keluarga, dibuat tanpa melalui proses penggorengan. Mi Instan Lemonilo juga rendah gluten karena dibuat dengan tepung tapioka hasil olahan petani Indonesia.</Text>
    </View>
  );
}

export default TravelokaScreen;
