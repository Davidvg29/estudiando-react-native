import { FlatList } from 'react-native';
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
