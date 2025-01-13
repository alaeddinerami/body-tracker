import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Profile = () => {
  const userData = {
    name: 'John Doe',
    age: 28,
    nationality: 'American',
    address: '1234 Elm Street, Springfield',
    profilePicture: '',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: userData.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.details}>Age: {userData.age}</Text>
      <Text style={styles.details}>Nationality: {userData.nationality}</Text>
      <Text style={styles.details}>Address: {userData.address}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'red', 
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',

  },
  details: {
    fontSize: 16,
    marginBottom: 5,
    color:'white',

  },
});

export default Profile;
