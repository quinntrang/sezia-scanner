import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class EditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Insert Text Box here</Text>

        <Button
          title="Submit input text"
          onPress={() =>
            this.props.navigation.navigate('Scan')
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

export default EditScreen;