import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ScanScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>[camera here]</Text>

        <Button
          title="Scan Image"
          onPress={() =>
            this.props.navigation.navigate('Edit')
          }
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
});

export default ScanScreen;