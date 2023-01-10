import { StyleSheet, View, FlatList } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})
export default App;
