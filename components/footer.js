
import { View, SafeAreaView } from 'react-native';
import {
    Text,
} from 'react-native-paper';
import { useAppContext } from './provider';

export default function Footer() {
    const { total } = useAppContext();
    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };
    return (
        <SafeAreaView>
            <View>
                <Text>Total do carrinho: {formatarMoeda(total)}</Text>
            </View>
        </SafeAreaView>
    )
}