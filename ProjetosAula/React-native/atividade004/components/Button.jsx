import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function MeuBotao ({ titulo, aoPressionar }){
   
return(
<TouchableOpacity style={estilos.botao} onPress={aoPressionar}>

<Text style={estilos.texto}>{titulo}</Text>

</TouchableOpacity>
)
}

const estilos = StyleSheet.create({
botao:{
backgroundColor: '#0099ff',
padding: 16,
borderRadius: 8,
alingItems: 'center',

},

texto: {
color: '#fff',
fontWeight: 'bold',
}

})