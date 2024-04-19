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
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
}