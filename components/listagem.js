import { FlatList, View, SafeAreaView } from 'react-native';
import { Text, Divider} from 'react-native-paper';
import { useAppContext } from './provider';
import Produto from './produto';

export default function Listagem() {
    const { produtos } = useAppContext();

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
