import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    age: '',
    bmi:'',
    nationality: '',
    profilePicture: '',
  });


  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userProfile');
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Failed to load data from AsyncStorage', error);
      }
    };

    loadUserData();
  }, []); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.profilePicture ? (
        <Image source={{ uri: userData.profilePicture }} style={styles.profilePicture} />
      ) : (
        <Text style={styles.noProfilePicture}>No profile picture available</Text>
      )}
      <Text style={styles.name}>{userData.firstName || 'Name not available'}</Text>
      <Text style={styles.details}>Age: {userData.age || 'Not specified'} year old</Text>
      <Text style={styles.details}>Nationality: {userData.nationality || 'Not specified'}</Text>
      <Text style={styles.details}>BMI: {userData.bmi || 'Not specified'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'red',
    minHeight: '100%',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  noProfilePicture: {
    color: 'white',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
});

export default Profile;
