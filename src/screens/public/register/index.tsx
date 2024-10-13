import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, TextInput } from "react-native";
import logoGymBros from "../../../../assets/logo22.png";
import person from "../../../../assets/icon.png";
import * as ImagePicker from 'expo-image-picker';

import { StackNavigationProp } from '@react-navigation/stack';
// import { TextInput } from "react-native-gesture-handler";

type RootStackParamList = {
    Register: undefined;
    Login: undefined;
};

type PresentationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
    navigation: PresentationScreenNavigationProp;
}

export function Register({ navigation }: Props) {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.title}>Criar uma conta </Text>
                <Text style={styles.subtitle}>Uma conta é necessária para usar este aplicativo. </Text>
            </View>

            <View style={styles.registerContainer}>
                <TouchableOpacity style={styles.registerPhotoButton} onPress={pickImage}>
                    {/* <Image source={person} style={styles.personLogo} /> */}
                    {image ? <Image source={{ uri: image }} style={styles.personLogo} /> : <Image source={person} style={styles.personLogo} />}
                </TouchableOpacity>

                <TextInput placeholder="E-mail" placeholderTextColor={'gray'} style={styles.registerInput} />
                <TextInput placeholder="Nome" placeholderTextColor={'gray'} style={styles.registerInput} />
                <TextInput placeholder="Senha" placeholderTextColor={'gray'} style={styles.registerInput} />
                <TextInput placeholder="Confirmar senha" placeholderTextColor={'gray'} style={styles.registerInput} />

                <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.createAccountText}>Criar uma conta</Text>
                </TouchableOpacity>
                {/* frase de termo de uso */}
                <Text style={styles.subtitle}>Ao criar uma conta, você concorda com os nossos <Text style={styles.termPolicy}>Termos de serviço</Text> e <Text style={styles.termPolicy}>Política de Privacidade.</Text> </Text>
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
    },
    logoContainer: {
        width: '100%',
        paddingHorizontal: 20,
        // backgroundColor: '#292b2b', 
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginTop: 20,
        fontFamily: Platform.select({ ios: 'MontserratBold', android: 'MontserratBold' } as any),
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
        marginTop: 20,
        fontFamily: Platform.select({ ios: 'MontserratRegular', android: 'MontserratRegular' } as any),
    },
    registerContainer: {
        flex: 1,
        width: '90%',
        marginTop: 40,
    },
    createAccountButton: {
        backgroundColor: '#E94D39',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    createAccountText: {
        color: '#fff',
        fontSize: 16,
        // fontWeight: 'bold',
        fontFamily: Platform.select({ ios: 'MontserratBold', android: 'MontserratBold' } as any),
    },
    registerInput: {
        borderWidth: 1,
        borderColor: '#272727',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#292b2b',
    },
    registerPhotoButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    personLogo: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 200,
    },
    termPolicy: {
        color: '#E94D39',
        fontWeight: 'bold',
        fontFamily: Platform.select({ ios: 'MontserratRegular', android: 'MontserratRegular' } as any),
    },
});