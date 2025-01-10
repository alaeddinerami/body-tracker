import RegisterComponent from '@/components/Register';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';



export default function HomeScreen() {
  return (
  <View style={styles.contenaire} >
    <RegisterComponent/>
  </View>)
}

const styles = StyleSheet.create({
  contenaire:{
    backgroundColor:'blue',
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
