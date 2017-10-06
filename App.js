import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import WeatherDaily from './weather-daily'

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.location}>San Fransisco</Text>
        <Text style={styles.date}>Wednesday, October 4th</Text>
        <Text style={styles.temperature}>57°</Text>
        <Text style={styles.conditionDesc}>Partly Cloudy</Text>
        <Text style={styles.conditions}>Humidity 78%</Text>
        <Text style={styles.conditions}>Wind Moderate</Text>
        <View >
            <Text>Mon</Text>
            <Text>67</Text>
        </View>

        <View style={styles.buttonAlignment}>
            <View style={styles.textField}>
                <TextInput  placeholder= "City"/>
            </View>
            <Button title="Search"  color="#888"/>
        </View>
        <WeatherDaily/>

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
  location: {

      fontWeight: 'normal',
      fontSize: 30,

  },
  date: {
      color:'#999'
  },
  conditionDesc: {
      color:'#999',
      margin: 5
  },
  conditions: {
      color:'#999',

  },
  temperature: {
      fontWeight: 'bold',
      fontSize:70,
      margin: 20,
  },
  textField: {
      backgroundColor: '#bfb',
      width: 200,
      borderRadius:10
  },
  buttonAlignment: {
      flexDirection: 'row',
      margin: 10
  }
});
