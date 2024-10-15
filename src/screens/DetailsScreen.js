import React, {  } from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const DetailsScreen = ({route,navigation }) => {
    const args = route.params.args
    return  (
        <View>
            <Image style={styles.imageStyle} source={args.image_url ? { uri: args.image_url } : require('../../assets/placeholder.webp')}/>
            <Text style = {styles.titleStyle}>{args.name}</Text>
            <Text style = {styles.bodyStyle}>Address:{args.location.address1} {args.location.address2},{args.location.city},{args.location.country}</Text>
            <Text style = {styles.bodyStyle}>Call: {args.phone}</Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    imageStyle: {
        width: '100%',
        height: 200
    },
    titleStyle: {
        fontSize: 24,
        fontWeight:'bold',
        color:'black',
        marginTop: 16,
        marginHorizontal:16
    },
    bodyStyle: {
        fontSize: 18,
        fontWeight:'regular',
        color:'black',
        marginTop: 16,
        marginHorizontal:16
    }
})

export default DetailsScreen;