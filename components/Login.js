import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const correctUsername = 'user';
        const correctPassword = 'password';

        // if (username === correctUsername && password === correctPassword) {
            navigation.navigate('Details');
        // } else {
        //     setError('Incorrect username or password. Please try again.');
        // }
    };

    const handleSignUp = () => {
        navigation.navigate('Signup');
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Login</Text>
                    <Text style={styles.footerText}>Enter your email and Password.</Text>
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={20} padding={5} color="black" />
                    <TextInput
                        value={username}
                        placeholder="Username"
                        style={styles.input}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Entypo name="lock" size={20} padding={5} color="black" />
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>
                
                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.loginButton}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignUp}>
                    <View style={styles.styleText}>
                        <Text style={styles.baseText1}>Don't have an account? <Text style={styles.underlineText}>Sign up!</Text></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(125, 226, 209, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
        padding: 50,
        marginBottom: 20,
        width: 320,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'custom-font',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333',
    },
    footerText: {
        marginTop: 40,
        marginBottom: 40,
        fontSize: 12,
        color: '#888',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
    },
    loginButton: {
        backgroundColor: '#339989',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    styleText: {
        fontSize: 12,
        alignItems: 'center',
    },
    baseText1: {
        fontSize: 12,
        margin: 10,
        alignItems: 'center',
    },
    underlineText: {
        textDecorationLine: 'underline',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontSize: 16,
    },
});

export default LoginScreen;
