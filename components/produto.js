import { View, Text, StyleSheet } from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import { useAppContext } from './provider';

export default function Produto({ item }) {
    const { carrinho, adicionarProduto, removerProduto } = useAppContext();
    const getAvatarLetters = (title) => {
        const words = title.trim().split(' ');
        if (words.length > 1) {
            return (words[0][0] + words[words.length - 1][0]).toUpperCase();
        }
        return title.substring(0, 2).toUpperCase();
    };

    return (
        <View style={styles.itemContainer}>
            <Avatar.Text 
                size={64} 
                label={getAvatarLetters(item.Titulo)} 
                style={styles.avatar}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{item.Titulo}</Text>
                <Text style={styles.descricao}>{item.Descricao}</Text>
                <Text style={styles.preco}>{item.Valor}</Text>
            </View>
            <View style={styles.botoesContainer}>
                <Button
                    icon="plus"
                    mode='contained'
                    onPress={() => adicionarProduto(item.Id)}
                />
                {carrinho.some(produto => produto.Id === item.Id) && (
                    <Button
                        icon="minus"
                        mode='contained'
                        onPress={() => removerProduto(item.Id)}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 14,
        color: 'gray',
    },
    preco: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    botoesContainer: {
        flexDirection: 'col',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
});
