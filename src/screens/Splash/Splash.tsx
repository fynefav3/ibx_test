import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Homepage');
    }, 1000);
  });

  return <View style={styles.parentView}></View>;
};

export default Splash;

const styles = StyleSheet.create({
  parentView: {backgroundColor: '#ffffff'},
});
