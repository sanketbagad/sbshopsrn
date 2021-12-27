import { View, Text, SafeAreaView } from "react-native";
import SafeAreaStyle from './Components/SafeAreaStyle'
import HomeScreen from "./Screens/Homescreen";

export default function App() {
  return (
    <SafeAreaView
    style={SafeAreaStyle.AndroidSafeArea}
    >
      
      <HomeScreen />
    </SafeAreaView>
  );
}
