import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform } from "react-native";
import logoGymBros from "../../../../assets/logo22.png";
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
type RootStackParamList = {
    Register: undefined;
    Login: undefined;
};

type PresentationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
    navigation: PresentationScreenNavigationProp;
}

export function FirstAccess({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containertitle}>
                <Text style={styles.title}>Qual a meta hoje?</Text>
            </View>

            <View style={styles.containercard}>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.iconbutton}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titlecard}>Criar um grupo</Text>
                        <Text style={styles.subtitle}>Estou começando algo novo.</Text>
                    </View>
                    <View style={styles.iconarrow}>
                        <Ionicons name="chevron-forward" size={24} color="white" style={styles.arrow} />
                    </View>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.option}>
                    <View style={styles.iconbutton}>
                        <Ionicons name="people-outline" size={24} color="white" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titlecard}>Junte-se a um grupo</Text>
                        <Text style={styles.subtitle}>Alguém me convidou aqui.</Text>
                    </View>
                    <View style={styles.iconarrow}>
                        <Ionicons name="chevron-forward" size={24} color="white" style={styles.arrow} />
                    </View>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.option}>
                    <View style={styles.iconbutton}>
                        <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="white" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titlecard}>Não certeza</Text>
                        <Text style={styles.subtitle}>Mostre-me mais opções.</Text>
                    </View>
                    <View style={styles.iconarrow}>
                        <Ionicons name="chevron-forward" size={24} color="white" style={styles.arrow} />
                    </View>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
    containertitle: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: Platform.select({ ios: 'MontserratBold', android: 'MontserratBold' } as any),
        textAlign: 'left',
    },
    containercard: {
        backgroundColor: '#333',
        width: '90%',
        justifyContent: 'flex-end',
        borderRadius: 10,
        paddingHorizontal:5,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    textContainer: {
        marginLeft: 10,
        width: '80%',
    },
    titlecard: {
        color: 'white',
        fontSize: 16,
        fontFamily: Platform.select({ ios: 'MontserratBold', android: 'MontserratBold' } as any),
    },
    subtitle: {
        color: '#a1a1a1',
        fontSize: 14,
    },
    separator: {
        height: 0.5,
        backgroundColor: '#a1a1a1',
        // marginVertical: 20,
        width: '88%',
        alignSelf: 'flex-end',
        left: 5,
    },
    arrow: {
        marginLeft: 'auto',
    },
    iconbutton: {
        width: '10%',
    },
    iconarrow: {
        width: '10%',

    },



});