  import RegisterComponent from '@/components/Register';
  import { Image, StyleSheet, Platform, View, Text } from 'react-native';



  export default function HomeScreen() {
    return (
    <View style={[styles.container,{ flexGrow: 1 }]} >
      <RegisterComponent/>
    </View>)
  }

  const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingHorizontal: 20, 
      backgroundColor: '#1f0404', 
    },
  });
