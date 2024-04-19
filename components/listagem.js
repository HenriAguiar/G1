import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import {
    List,
    Text,
    IconButton,
    Divider,
    useTheme,
    Modal,
    Portal,
    Button,
    Avatar
} from 'react-native-paper';
import { useAppContext } from './provider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Listagem() {
    const {  total, produtos, carrinho, adicionarProduto , removerProduto, obterSoma} = useAppContext();
    useEffect(() => {
        console.log(total)
        console.log(carrinho)
    }, [carrinho]);
    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };
    return (
        <View>
            <Text>Loja do Jack</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.Id.toString()}
                ItemSeparatorComponent={Divider}
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.Titulo}</Text>
                        <Text>{item.Descricao} - {item.Valor}</Text>
                        <Button
                        mode='contained'
                        labelStyle={{ color:'white'}}
                            onPress={() => adicionarProduto(item.Id)}

                        >
                            +
                        </Button>
                        {carrinho.some(produto => produto.Id === item.Id) && (
                            <Button
                            mode='contained'
                                onPress={() => removerProduto(item.Id)}
                                labelStyle={{ color:'white'}}
                            >
                                -
                            </Button>
                        )}
                    </View>
                )}
            />
            <Text>Total do carrinho: {formatarMoeda(total)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});