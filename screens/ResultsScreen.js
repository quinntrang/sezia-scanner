import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ingredientsList = require('../ingredientsinfo.json');

class ResultsScreen extends React.Component {
  render() {
    const { ingredients } = this.props.route.params;
    const matches = [];
    ingredients.forEach((i) => {
      const found = ingredientsList.find((match) => match.NAME === i);
      if (found) {
        matches.push(found);
      }
    });
    return (
      <View style={styles.container}>
        <Text>Results:</Text>
        <Text>
          {matches.length} out of {ingredients.length} ingredients are unsafe
          for fungal acne.
        </Text>
        {!!matches.length &&
          matches.map((m) => (
            <Text>
              - {m.NAME}: {m.TYPE}
            </Text>
          ))}

        <Button
          title='Scan Another Product'
          onPress={
            () => this.props.navigation.navigate('Skincare Ingredients Scanner')
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
