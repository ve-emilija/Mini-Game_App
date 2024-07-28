import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return  (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad" 
            autoCapitalize="none"
            autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
            <View  style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    );
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