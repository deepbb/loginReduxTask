import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        // Send the location data to the database using axios or any other network request library
        axios.post('https://your-api-endpoint', { latitude, longitude })
          .then(response => {
            console.log('Location sent to the database:', response.data);
          })
          .catch(error => {
            console.error('Failed to send location to the database:', error);
          });
      },
      error => {
        console.log('Failed to get current location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };


const LocationAccess = () => {
    

    useEffect(() => {
        getCurrentLocation();
      }, []);
  return (
    <View>
      <Text>Current Location</Text>
      {/* Render additional components or UI based on your requirements */}
    </View>
  )
}

export default LocationAccess

const styles = StyleSheet.create({})