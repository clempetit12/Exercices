import { useState } from "react";
import { Button, FlatList, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Display from "./Display";
import ModalDetails from "./ModalDetails";

export default function AddItem() {

    [articles, setArticles] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [modalDetailsVisible, setModalDetailsVisible] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState("")

    function addArticle() {
        setModalVisible(true)

    }
    function addArticleToBasket(newArticle) {
        setArticles(prevArticles=> [...prevArticles, newArticle])
    }

    function closeModal() {
        console.log(articles);
        setModalVisible(false)
   
    }

    function closeModalDetails() {
        console.log(articles);
        setModalDetailsVisible(false)
   
    }
 function descriptionArticle (article) {
    setSelectedArticle(article)
    console.log("selectedarticle"+selectedArticle);
    setModalDetailsVisible(true)
    



 }

    return (
        <View style={styles.container}>
            <Button style={styles.myButton} onPress={addArticle} title="Ajouter un article +"></Button>
            <Display visible={modalVisible} closeModal={closeModal} addArticleToBasket={addArticleToBasket}></Display>
           
            <FlatList data={articles} renderItem={(article) => {
                return (
                    <TouchableOpacity  onPress={()=>descriptionArticle(article.item)}>
                        <Text style={styles.card}>{article.item.text}  </Text>
                       
          

                      
                    </TouchableOpacity>
                )
            }} keyExtractor={(item, index) => {
                return index
            }} />
             {modalDetailsVisible && <ModalDetails visible={modalDetailsVisible} closeModalDetails={closeModalDetails} article= {selectedArticle}/>}
            
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