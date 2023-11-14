import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ImageComponent({url}) {
    const [image, setImage] = useState()
    
    const extractPokemonNumber = (url) => {
        const updatedUrl = url.replace('pokemon-species', 'pokemon');
        return updatedUrl
      
    };

    useEffect(() => {
        if (url) {
            const pokemonNumber = extractPokemonNumber(
                url
            );
            fetch(pokemonNumber)
                .then((response) => response.json())
                .then((pokemonData) => {

                    const sprites = pokemonData.sprites;
                    if (sprites) {
                        const shinySprite = sprites.front_shiny;
                        console.log(shinySprite);
                        setImage(shinySprite);
                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données du Pokémon', error);
                });
        }
    }, [url]);

    return (
        <View>
            <Image
                style={styles.image}
                width={200}
                height={200}
                source={{
                    uri: image
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})