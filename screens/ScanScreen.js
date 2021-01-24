import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

class ScanScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          disabled
          title='Coming soon: Scan Image'
          onPress={() => this.props.navigation.navigate('Check ingredients')}
        />

        <br />

        <Button
          title='Type ingredients list'
          onPress={() => this.props.navigation.navigate('Check ingredients')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productExample: {
    height: '20%',
  },
});

export default ScanScreen;
