import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Scanner() {
  const onClickToScan = (e) => {
    // TODO: integrate with react-native-camera
    // https://github.com/react-native-camera/react-native-camera
    console.log(e);
  };
  return (
    <View style={styles.scanner}>
      <Button
        onPress={onClickToScan}
        title='Scan Ingredients'
        color='#841584'
        accessibilityLabel='Click to open the camera to scan ingredients'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scanner: {
    color: '#800080',
  },
});
