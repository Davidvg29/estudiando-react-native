import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, TouchableHighlight, Image, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator, FlatList } from 'react-native';

export default function App() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNoticias = async() => {
    try {
      setLoading(true)
      const {data} = await axios.get('https://aguasdeltucuman.com.ar/api/noticias')
      if(data.status){
        setNoticias(data.informacion)
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  const eliminarNoticias = () => {
    setNoticias([]);
  }

  return (
    // KeyboardAvoidingView evita que el teclado de Android/iOS tape los inputs
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
       <TouchableHighlight  className="bg-red-500" onPress={()=>handleNoticias()}>
        <Text style={styles.buttonText} >Ver noticias</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button}  onPress={()=>eliminarNoticias()}>
        <Text style={styles.buttonText}>Eliminar noticias</Text>
      </TouchableHighlight>
      
    <FlatList
      data={noticias}
      keyExtractor={n=>n.id_noticia}
      renderItem={({item})=>(
         <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description} </Text>
            <Image style={{
              width: 250, 
              height: 150,
              resizeMode: 'contain'
              }}
              source={{uri:item.image}}/>
          </View>
      )}
    />

      {/* <ScrollView>
        {noticias.map((n)=>(
          <View key={n.id_noticia} style={styles.card}>
            <Text style={styles.title}>{n.title}</Text>
            <Text style={styles.description}>{n.description} </Text>
            <Image style={{
              width: 250, 
              height: 150,
              resizeMode: 'contain'
              }}
              source={{uri:n.image}}/>
          </View>
        ))}
      </ScrollView> */}
      
      {loading?<ActivityIndicator/>:false}
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Un gris/celeste muy clarito de fondo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    marginBottom: 10,
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0', // Borde sutil característico de shadcn
    // Sombra sutil
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a', // Slate 900
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 14,
    height: 300,
    color: '#64748b', // Slate 500
    marginBottom: 20
  },
  form: {
    gap: 16, // Espaciado entre elementos del formulario
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0f172a',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#0f172a',
    backgroundColor: '#ffffff',
  },
  button: {
    height: 48,
    backgroundColor: '#6b8ddf', // Fondo negro/oscuro de shadcn
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 8,
    marginBottom: 8,
    padding: 10
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});