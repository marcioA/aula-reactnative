import { View } from 'react-native';
import { styles } from './App.style';

import Home from './src/pages/Home';
import ListaPost from './src/pages/ListaPost';
import Header from './src/componentes/Header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Header headerTitle='social' />
      <ListaPost />
    </View>
  );
}
