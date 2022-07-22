import React from "react";
import { 
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Header, 
  LearMoreLinks,
  ReloadInstructions,
} from "react-native"

import RootComponent from "./src/views/index";


const App = () => (
  <View style={styles.container}>
     <RootComponent/>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})


