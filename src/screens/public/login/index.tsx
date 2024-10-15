import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
import { criarTabelaUsuarios, inserirUsuarioFicticio, validarLogin } from '../../../db/login';

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  useEffect(() => {
    const setupDatabase = async () => {
      await criarTabelaUsuarios();
      await inserirUsuarioFicticio();
    };
    setupDatabase();
  }, []);

  const handleLogin = async () => {
    await validarLogin(email, senha, (valido: boolean) => {
      if (valido) {
        const token = 'token_ficticio_jwt'; 
        Alert.alert("Login bem-sucedido", `Seu token: ${token}`);
      } else {
        Alert.alert("Erro", "E-mail ou senha incorretos");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer login</Text>
      <Text style={styles.subtitle}>Bem-vindo de volta.</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#999" 
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#999" 
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Fazer login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Redefinir senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    // fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 10,
    fontFamily: Platform.select({ ios: 'MontserratBold', android: 'MontserratBold' } as any),
  },
  subtitle: {
    fontSize: 16,
    color: '#fff', 
    marginBottom: 30,
    fontFamily: Platform.select({ ios: 'MontserratRegular', android: 'MontserratRegular' } as any),
  },
  input: {
    backgroundColor: '#333', 
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#E53935', 
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontFamily: Platform.select({ ios: 'MontserratRegular', android: 'MontserratRegular' } as any),
  },
  resetButton: {
    backgroundColor: '#333', 
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Platform.select({ ios: 'MontserratRegular', android: 'MontserratRegular' } as any),
  },
});
