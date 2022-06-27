import{React} from 'react';
import{StyleSheet,Text,} from 'react-native';

export default function Cep(props){
	return(
		<>
		<Text>COMPRA:{props.data.bid}</Text>
		<Text>VENDA:{props.data.ask}</Text>
		<Text>VARIAÇÃO:{props.data.varBid}</Text>
	
		</>


	);
}
