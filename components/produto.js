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

export default function Produto(item) {
    const avatarLabel = (primeiroNome[0] + (ultimoSobrenome ? ultimoSobrenome[0] : '')).toUpperCase();
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.Titulo}</Text>
            <Text>{item.Descricao} - {item.Valor}</Text>
            <Button
                mode='contained'
                labelStyle={{ color: 'white' }}
                onPress={() => adicionarProduto(item.Id)}

            >
                +
            </Button>
            {carrinho.some(produto => produto.Id === item.Id) && (
                <Button
                    mode='contained'
                    onPress={() => removerProduto(item.Id)}
                    labelStyle={{ color: 'white' }}
                >
                    -
                </Button>
            )}
        </View>
    )
}