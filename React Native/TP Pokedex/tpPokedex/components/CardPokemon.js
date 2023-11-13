import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

export default function CardPokemon({ backgroundColor, name, category, image }) {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <TouchableOpacity  >
                <View>
                <FlatList data={category}  renderItem={(item) => {
                return (
                  <Text>{item.type.name}</Text>
                   
                )
            }}  keyExtractor={(item) => item.name} />
                    <Text style={styles.categoryTitle} >{name}  </Text>
                    <Text style={styles.categoryTitle} >{category}  </Text>
                </View>
                <View>
    {/*                 <Image style={styles.image}
                        width={200}
                        height={200}
                        source={{
                            uri: { image }
                        }} /> */}

                </View>
            </TouchableOpacity>

        </View>


    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: 'blue',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 170,
        borderRadius: 10
    }
})