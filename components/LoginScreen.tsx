import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import '../global.css';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in:', { email, password });
    };

    const handleSignup = () => {
        console.log('Navigating to Sign Up screen...');
    };

    return (
        <View className="flex-1 items-center justify-center bg-gray-100">
            <View className="bg-white w-80 p-6 rounded-2xl shadow-md">
                <Text className="text-2xl font-bold text-center mb-6 text-blue-600">
                    Login
                </Text>

                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-3 mb-4 w-full text-base"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    secureTextEntry
                    className="border border-gray-300 rounded-lg px-4 py-3 mb-6 w-full text-base"
                />

                {/* Sign In Button */}
                <TouchableOpacity
                    onPress={handleLogin}
                    className="bg-blue-600 py-3 rounded-lg mb-3"
                >
                    <Text className="text-white text-center text-lg font-semibold">
                        Sign In
                    </Text>
                </TouchableOpacity>

                {/* Sign Up Button (outlined) */}
                <TouchableOpacity
                    onPress={handleSignup}
                    className="border border-blue-600 py-3 rounded-lg"
                >
                    <Text className="text-blue-600 text-center text-lg font-semibold">
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
