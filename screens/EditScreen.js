import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class EditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>[Insert Text Box here. Textbox should include scanned text]</Text>
        <Text>User can type in the list manually</Text>

        <Button
          title="Submit"
          onPress={() =>
            this.props.navigation.navigate('Results')
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