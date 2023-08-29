import React, { Component } from "react";
import { View, Text, Image } from "react-native";

let nome = 'Craudiao';


function App () {
  return (
    <View>
      <Text>Olá mundo!</Text>
      <Text style={{ color: '#FF0000', fontSize: '25', margin: '20' }}>Meu primeiro app</Text>

      <Text style={{ fontSize: '68', color: 'blue'}}>Craudinho</Text>

      <Text>
        {nome}
      </Text>

      <Logo largura={300} altura={300}/>
    </View>
  );
};

export default App;

function Logo(props) {

  let img = 'https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192357.jpg?w=996&t=st=1692924388~exp=1692924988~hmac=57a18b6352e0a3167b727d15f3ad54ca74e4068f10096e6cd3cec3ce185e5f0d'
  return(
    <Image source={{ uri: img }} style={{ width: props.largura, height: props.altura }}/>
  );
}