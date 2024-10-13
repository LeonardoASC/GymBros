import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform } from "react-native";
import logoGymBros from "../../../../assets/logo22.png";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Register: undefined;
    Login: undefined;
};

type PresentationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
    navigation: PresentationScreenNavigationProp;
}

export function Presentation({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logoGymBros} style={styles.logo} />
                <Text style={styles.title}>Bem-vindo ao <Text style={styles.appName}>GymBros</Text></Text>
            </View>

            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.createAccountButton} 
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.createAccountText}>Criar uma conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.loginText}>Já tem uma conta? <Text style={styles.loginLink}>Fazer login.</Text></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginTop: 20,
        fontFamily: Platform.select({ ios: 'MontserratRegular', android: 'MontserratRegular' } as any),

    },
    appName: {
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: Platform.select({ ios: 'MontserratBold', android: 'MontserratBold' } as any),
    },
    actionContainer: {
        width: '90%',
    },
    createAccountButton: {
        backgroundColor: '#E94D39',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 10,
    },
    createAccountText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginButton: {
        alignItems: 'center',
    },
    loginText: {
        color: '#fff',
        fontSize: 14,
        alignSelf: 'flex-start',
        fontFamily: Platform.select({ ios: 'MontserratRegular', android: 'MontserratRegular' } as any),
    },
    loginLink: {
        color: '#E94D39',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'flex-start',
    },
});