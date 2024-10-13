import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer login</Text>
      <Text style={styles.subtitle}>Bem-vindo de volta.</Text>
      
      <TextInput 
        placeholder="Email" 
        placeholderTextColor="#999" 
        style={styles.input} 
        keyboardType="email-address"
      />
      <TextInput 
        placeholder="Senha" 
        placeholderTextColor="#999" 
        style={styles.input} 
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.loginButton}>
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
