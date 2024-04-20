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
import Produto from './produto';

export default function Listagem() {
    const { total, produtos, carrinho, adicionarProduto, removerProduto, obterSoma } = useAppContext();
    useEffect(() => {
        console.log(total)
        console.log(carrinho)
    }, [carrinho]);
    const getAvatarLetters = (title) => {
        const words = title.trim().split(' ');
        if (words.length > 1) {
            return (words[0][0] + words[words.length - 1][0]).toUpperCase();
        }
        return title.substring(0, 2).toUpperCase();
    };
    return (
        <SafeAreaView>
            <View>

                <Text>Loja do Jack</Text>
                <FlatList
                    data={produtos}
                    keyExtractor={(item) => item.Id.toString()}
                    ItemSeparatorComponent={Divider}
                    renderItem={({ item }) => (
                        <Produto item={item}></Produto>
                    )}
                />
            </View>
        </SafeAreaView>
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