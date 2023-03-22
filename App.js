import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.livro} source={{uri: props.livro.capa}}/>
      <Text style={{ color: 'darkred'}}> {props.livro.titulo}</Text>
      <Text style={{ fontSize:12}}> R$ {props.livro.preco}</Text>
    </View>
  );
}

export default function App() {
  const livros = [
    {
      capa: 'https://m.media-amazon.com/images/I/81gLLCJd7TL._AC_UY218_.jpg',
      titulo:'Livro 1',
      preco: 25.99
    },
    {
      capa: 'https://m.media-amazon.com/images/I/81gLLCJd7TL._AC_UY218_.jpg',
      titulo:'Livro 2',
      preco: 125.99
    },
    {
      capa: 'https://m.media-amazon.com/images/I/81gLLCJd7TL._AC_UY218_.jpg',
      titulo:'Livro 3',
      preco: 225.99
    },
    {
      capa: 'https://m.media-amazon.com/images/I/81gLLCJd7TL._AC_UY218_.jpg',
      titulo:'Livro 4',
      preco: 325.99
    },
    {
      capa: 'https://m.media-amazon.com/images/I/81gLLCJd7TL._AC_UY218_.jpg',
      titulo:'Livro 4',
      preco: 425.99
    },
  ]
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 25,fontWeight:'bold'}}></Text>
      <View style={styles.conteudo}>
        { livros.map(livro=><Card livro={livro}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo:{
    flex:1,
    backgroundColor:'#ccc',
    flexDirection: 'row',
    flexWrap:'wrap',
    width:'100%',
  },
  card:{
    backgroundColor: 'orange' ,
    width:215,
    borderRadius:10,
    margin:100,
  },
  livro:{
    resizeMode:'stretch',
    width:'100%',
    height: 100,
  },
});
