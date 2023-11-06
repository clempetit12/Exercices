import { useState } from "react";
import { Button, FlatList, StyleSheet, View, Text } from "react-native";
import Display from "./Display";

export default function AddItem() {

    [articles, setArticles] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    function addArticle() {
        setModalVisible(true)

    }
    function addArticleToBasket(newArticle) {
        setArticles([...articles, newArticle])
    }

    function closeModal() {
        console.log(articles);
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <Button style={styles.myButton} onPress={addArticle} title="Ajouter un article +"></Button>
            <Display visible={modalVisible} closeModal={closeModal} addArticleToBasket={addArticleToBasket}></Display>
            <FlatList data={articles} renderItem={(article) => {
                return (
                    <View>
                        <Text style={styles.card}>{article.item.text} </Text>
                    </View>
                )
            }} keyExtractor={(item, index) => {
                return index
            }} />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        padding: 20,
        marginTop: 20,
        backgroundColor: "purple",
        color: "white",
        borderRadius: 10,
    }
})