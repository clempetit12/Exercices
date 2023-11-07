import { useState } from "react";
import { Button, FlatList, StyleSheet, View, Text, Touchable, TouchableOpacity } from "react-native";
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
    function deleteArticle (id) {
       
        console.log("delete");
        setArticles(prevArticles=> prevArticles.filter((art=>art.id !== id )))


    }

    return (
        <View style={styles.container}>
            <Button style={styles.myButton} onPress={addArticle} title="Ajouter un article +"></Button>
            <Display visible={modalVisible} closeModal={closeModal} addArticleToBasket={addArticleToBasket}></Display>
           
            <FlatList data={articles} renderItem={(article) => {
                return (
                    <TouchableOpacity onPress={()=>deleteArticle(article.item.id)}>
                        <Text style={styles.card}>{article.item.text} </Text>
                    </TouchableOpacity>
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