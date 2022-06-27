import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import Cotacao from './components/Cotacao';
import Api from './components/Api';


export default function App() {
	const [cotacao, setCotacao] = useState(0);

	async function carregaCotacao(){
		const response = await Api.get('json/last/USD-BRL');
		setCotacao(response.data.USDBRL);
	}
  return (
    <View style={styles.container}>
     	<View style={styles.bloco}>
		 <Text style={styles.textoBloco}>
			COTAÇÃO DO DOLAR:
			</Text>
		
			<TouchableOpacity style={styles.botao} onPress={carregaCotacao}>
				
				<Text style={styles.textoB}>Buscar</Text>
			</TouchableOpacity>
			
			<Cotacao data={cotacao}/>
		</View>
		  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
	bloco: {
	backgroundColor: 'white',
	height:200,
	width:300,
},

	input: {
		backgroundColor:'yellow',
		borderRadius: 16,
		
		
		
	},
});
