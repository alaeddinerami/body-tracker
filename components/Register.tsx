import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
    weight: "",
    height: "",
    address: "",
  });

  const [bmi, setBmi] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const calculateBMI = () => {
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height) / 100; // Convert height to meters
    if (!weight || !height) {
      Alert.alert("Error", "Please enter valid weight and height.");
      return;
    }
    const bmiValue = (weight / (height * height)).toFixed(2);
    setBmi(bmiValue);
  };

  const handleSave = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.age ||
      !formData.weight ||
      !formData.height
    ) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    try {
      const dataToSave = { ...formData, bmi };
      await AsyncStorage.setItem("userProfile", JSON.stringify(dataToSave));
      Alert.alert("Success", "Profile saved successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to save data.");
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]}>
      <Text style={styles.title}>Register Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleInputChange("firstName", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(value) => handleInputChange("lastName", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(value) => handleInputChange("age", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nationality"
        value={formData.nationality}
        onChangeText={(value) => handleInputChange("nationality", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={formData.weight}
        onChangeText={(value) => handleInputChange("weight", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={formData.height}
        onChangeText={(value) => handleInputChange("height", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(value) => handleInputChange("address", value)}
      />
      <View style={styles.buttonContainer} >
        <Button title="Calculate BMI" onPress={calculateBMI} color="#cf0404" />
        {bmi && <Text style={styles.bmiText}>Your BMI: {bmi}</Text>}
        <Button title="Save Profile" onPress={handleSave} color="#cf0404" />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: 'white',

  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "gray",
  },
  bmiText: {
    gap: 5,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    gap:10,
  },
});

export default RegisterComponent;
