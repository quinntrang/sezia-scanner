import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const EditScreen = (props) => {
  const [value, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={8}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder='Type here!'
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <Button
        title='Submit'
        onPress={() =>
          props.navigation.navigate('Ingredients results', {
            ingredients: value.split(',').map((v) => v.trim()),
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditScreen;
