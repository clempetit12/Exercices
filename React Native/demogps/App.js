import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'


// npm i @react-native-community/geolocation
// ajout de la ligne : <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
// dans le repertoire android/app/src/main/AndroidManifest.xml

// http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=y4M3uDDroEy9e8M2iljFwLDAdKEX3PJG&q=48.9%2C2.24&language=en-us&details=false&toplevel=false

export default function App() {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [data, setData] = useState([])


    function getlocation() {
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        },
            error => console.error(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )

    }

    useEffect(() => {
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=y4M3uDDroEy9e8M2iljFwLDAdKEX3PJG&q=${latitude}%2C${longitude}&language=en-us&details=false&toplevel=false`)
            .then(response => {
                const data = response.data
                console.log(data)
                setData(data)
            })

    }, [latitude, longitude])


    return (
        <View>
            <Text>Latitude: {latitude}</Text>
            <Text>Longitude: {longitude}</Text>
            <Button title='Quelle ville ? ' onPress={() => getlocation()}></Button>
            {/*             <Text>Département :{data.AdministrativeArea.LocalizedName} </Text> */}
            <Text>Pays : {data.Country.LocalizedName}</Text>
            <Text>Ville : {data.LocalizedName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})