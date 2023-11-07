import { StyleSheet, Text, View, Button, Modal } from 'react-native'
import React from 'react'

export default function ModalDetails({ article, closeModalDetails }) {

    function deleteArticle(id) {

        console.log("delete");
        setArticles(prevArticles => prevArticles.filter((art => art.id !== id)))
        closeModalDetails()


    }
    return (
        <Modal style={styles.container}>
            <View style={styles.centeredContainer}>
                <Text style={styles.boldText}>DESCRIPTION ARTICLE</Text>
                <Text> Nom article : {article.text}</Text>
                <Text> Prix article : {article.price}</Text>
                <Text> Description article : {article.description}</Text>
                <View style={styles.buttons}>
                    <Button onPress={() => deleteArticle(article.id)} color="red" title="Supprimer"></Button>
                    <Button onPress={() => closeModalDetails()} color="blue" title="Articles"></Button>
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
    boldText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '70%',
        marginTop: 20
    },
})