
import { View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppContext } from './provider';
import { useEffect } from 'react';

export default function Footer() {

    const { carrinho, obterSoma,total, formatarMoeda } = useAppContext();

    useEffect(() => {
        obterSoma()
    }, [carrinho]);
    return (
        <SafeAreaView>
            <View>
                <Text>Total do carrinho: {formatarMoeda(total)}</Text>
            </View>
        </SafeAreaView>
    )
}