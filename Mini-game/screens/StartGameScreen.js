import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');   //it willl be always of type string, even if number is written in the input field

    function numberInputHandler(enteredText) {               // executed on every key
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alerts
            Alert.alert('Invalid Number', 'Number has to be a number from 0 to 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}] );
            return;
        }
        console.log('Valid number');
    }

    return  (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad" 
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
            <View  style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>    
            </View> 
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    );
    // PrimaryButton onPress={} , this onPress is coming as function property from PrimaryButton
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',                // all items gets inside center
        padding: 16,
        marginHorizontal: 24,
        marginTop: 100, 
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,                       // android only
        // Below IOS only
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5                  // shadow
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2, // Corrected typo here
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer:
    {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});