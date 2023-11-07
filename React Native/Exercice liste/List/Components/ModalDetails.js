import { StyleSheet, Text, View, Button, Modal } from 'react-native'
import React from 'react'

export default function ModalDetails({ article, closeModalDetails }) {

    function deleteArticle(id) {

        console.log("delete");
        setArticles(prevArticles => prevArticles.filter((art => art.id !== id)))
        closeModalDetails()


    }
    return (
        <Modal>
            <Text>DESCRIPTION ARTICLE</Text>
            <Text> Nom article : {article.text}</Text>
            <Text> Prix article : {article.price}</Text>
            <Text> Description article : {article.description}</Text>
            <Button onPress={() => deleteArticle(article.id)} color="red" title="Supprimer"></Button>
            <Button onPress={() => closeModalDetails()} color="blue" title="Articles"></Button>
        </Modal>

    )
}

const styles = StyleSheet.create({})