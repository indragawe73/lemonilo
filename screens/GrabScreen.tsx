import * as React from 'react';
import { Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Header from './../components/Header';
import styles from './../styles/grab';

function GrabScreen({ route, navigation }) {
  
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/mie-goreng.png')}
        style={styles.imageSize}
        resizeMode="contain"
      />
      <Text style={styles.title}>[Pre Order] Lemonilo Mie Instan Rasa Mie Goreng</Text>
      <Text style={styles.textList}>Mi Instan Lemonilo bisa dikonsumsi seluruh anggota keluarga, dibuat tanpa melalui proses penggorengan. Mi Instan Lemonilo juga rendah gluten karena dibuat dengan tepung tapioka hasil olahan petani Indonesia.</Text>
    </View>
  );
}

export default GrabScreen;
