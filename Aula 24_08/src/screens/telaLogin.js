import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Tela de Login</Text>
                {/* Campo de Usuário */}
                <TextInput
                    style={styles.input}
                    placeholder="Usuário ou E-mail"
                    placeholderTextColor="#888"
                    autoCapitalize="none"
                />
                {/* Campo de Senha */}
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#888"
                    secureTextEntry={true} // Esconde os caracteres da senha
                    autoCapitalize="none"
                />
                <Button
                    title="Entrar"
                    onPress={() => navigation.replace('Home')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        alignItems: "center",     
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
    },
});