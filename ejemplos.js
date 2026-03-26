import Constants from 'expo-constants';
import { View, Text, StyleSheet } from 'react-native';
// Le damos un padding superior que es exactamente del tamaño de la barra de estado
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <Text>¡Este texto ahora está a salvo del notch y la barra de estado en Android y iOS!</Text>
    </View>