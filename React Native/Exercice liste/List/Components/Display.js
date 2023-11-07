import { useState } from "react"
import { Modal, View, Image, StyleSheet, Button, TextInput, TouchableOpacity, Text } from "react-native"


export default function Display (props) {

    const {addArticleToBasket} = props
    const {closeModal} = props
    const [textInputName,setTextInputName] = useState("")
    const [textInputPrice,setTextInputPrice] = useState("")
    const [textInputDescription,setTextInputDescription] = useState("")

    function recupInputName(enterTextName){
        setTextInputName(enterTextName)
 
    }
    function recupInputPrice( enterTextPrice){
        setTextInputPrice(enterTextPrice)
       
     
    }
    function recupInputDescription( enterTextDescription){
        setTextInputDescription(enterTextDescription)
      
    }

    const addItemToBasket = () => {
        console.log("ajouter article");
        //Math.random().toString pour générer un id aléatoire
        const newArticle = {text: textInputName, price: textInputPrice, description: textInputDescription, id: Date.now()}
        console.log(newArticle);
        addArticleToBasket(newArticle)
        setTextInputName("")
        setTextInputPrice("")
        setTextInputDescription("")
       closeModal()
        
        
    }
    return(
        <Modal style={styles.container} visible={props.visible} animationType="slide">
            <View style={styles.centeredContainer}>
            <Image  
        width={200}
        height={200}
        source={{
            uri: "https://t4.ftcdn.net/jpg/01/33/43/31/360_F_133433110_zgatj8cIiWvu5LuIsFd1Y1XED7vnptOe.jpg"}} />
      
        <TextInput style={styles.input} placeholder="Article" onChangeText={recupInputName} value={textInputName}></TextInput>
        <TextInput style={styles.input} placeholder="Prix article" onChangeText={recupInputPrice} value={textInputPrice}></TextInput>
        <TextInput style={styles.input} placeholder="Description article" onChangeText={recupInputDescription} value={textInputDescription}></TextInput>
        <View style={styles.containerButton}>
        <Button style={styles.addButton} title="Ajouter article" onPress={addItemToBasket}></Button>
        <Button style={styles.cancelButton} color="red" title="Annuler" onPress={()=> {props.closeModal()}}>
            
        
        </Button>
        
        </View>
      
            </View>
      
   
       
        </Modal>
        
        

        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '70%',
    },
    input: {
       borderWidth: 1,
       borderColor: "black",
       width: 300,
       height: 50,
       borderRadius: 10,
       marginBottom: 20,
       color: "black",
       backgroundColor: "white"

    },
    cancelButton: {
        backgroundColor: "red", 
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white", 
        textAlign: "center",
        
    },
    addButton: {
        borderRadius: 10,
        fontWeight: "bold"
    }


})