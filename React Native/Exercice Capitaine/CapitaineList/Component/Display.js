import { View, Image, StyleSheet, Button, TextInput, TouchableOpacity, Text } from "react-native"


export default function Display() {


    return (
        <View style={styles.container}>
            <View style={styles.container2}>
            <Image style={styles.image}
                width={100}
                height={100}
                source={{
                    uri: "https://cdn.buttercms.com/O7wz509NSOOyixCnLn1x"
                }} />
            </View>
          
            <Text>Nom: <Text style={styles.textBold}>Capitaine</Text></Text>
            <Text>Prenom: <Text style={styles.textBold}>Haddock</Text> </Text>
            <Text>Téléphone: <Text style={styles.textBold}>01.23.36.48.75</Text></Text>
            <Text>Adresse: <Text style={styles.textBold}>35 rue des pias 59200 Tourcoing</Text> </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "beige",
        
        padding: 20,
        marginTop: 20,
    },
    container2 : {
        justifyContent: "center",
        alignItems: "center",
    },
    textBold: {
        fontWeight: '800',
    },
    image: {
    
        borderRadius: 100,
        marginBottom: 20
    }
})