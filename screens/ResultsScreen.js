import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ResultsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>[Message: This product has X ingredients that are NOT safe for fungal acne.]</Text>
        <Text>[Insert table of mentioned ingredients and their type]</Text>

        <Button
          title="Scan Another Product"
          onPress={() =>
           this.props.navigation.navigate('Scan')
           //title="Clicked"
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

export default ResultsScreen;