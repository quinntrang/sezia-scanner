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
        <Text>
          {matches.length} out of {ingredients.length} ingredients are NOT safe
          for fungal acne.
        </Text>
        {!!matches.length && (
          <Text>
            <ul>
              {matches.map((m) => (
                <li>
                  {m.NAME}: {m.TYPE}
                </li>
              ))}
            </ul>
          </Text>
        )}

        <Button
          title='Scan Another Product'
          onPress={
            () => this.props.navigation.navigate('Scan')
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
