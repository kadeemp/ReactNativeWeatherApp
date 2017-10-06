import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import WeatherDaily from './weather-daily'
import DayTemp from './dayTemp';

export default class App extends React.Component {
  render() {
        const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        const date = new Date();
        const dayNumber = date.getDay();
        const day = days[dayNumber];

        //Update Month
        var months = new Array();
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";
        const monthNumber = date.getMonth();
        const month = months[monthNumber];

        //Update Month
        const weatherArray = ["77˚", "67˚", "74˚", "74˚", "70˚", "79˚", "73˚"];
        const currentWeather = weatherArray[dayNumber];
        //function we implement in the class
        const listDays = () => {
            return days.map((day, index) => {
                return <DayTemp key = {index} valueDay = {days[index]} valueWeather = {weatherArray[index]} />
            })
        }

    return (

      <View style={styles.container}>
        <Text style= {styles.state}>San Francisco</Text>
        <Text style={styles.location}>San Fransisco</Text>
        <Text style={styles.date}>Wednesday, October 4th</Text>
        <Text style={styles.temperature}>57°</Text>
        <Text style= {styles.date}>{day}, {month} {dayNumber + 1}</Text>

        <Text style={styles.conditionDesc}>Partly Cloudy</Text>
        <Text style={styles.conditions}>Humidity 78%</Text>
        <Text style={styles.conditions}>Wind Moderate</Text>
        <View >
            <Text>Mon</Text>
            <Text>67</Text>
        </View>

        <View style={styles.buttonAlignment}>
                <View style= {styles.dayContainer}>
                    {listDays()}
                </View>
            <View style={styles.textField}>
            </View>
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
  buttonAlignment: {
      flexDirection: 'row',
      margin: 10
  },
      dayTemp: {
        width: 50,
        height: 50
  },
      dayContainer: {
      flexDirection: 'row'
  }
});
