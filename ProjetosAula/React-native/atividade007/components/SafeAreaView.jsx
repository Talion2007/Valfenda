import React from 'react';
import { View, StyleSheet , Text} from 'react-native';

export default function SafeAreaView() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>SafeAreaView Component</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});