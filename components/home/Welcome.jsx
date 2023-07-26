import {View,Text} from 'react-native'
import React from 'react'
import styles from './welcome.style'
import {COLORS,SIZES} from "../../constants"
const Welcome = () => {
    return (
        <View>
        <View styles={styles.container}>
           <Text style={styles.welcomeTxt(COLORS.black,SIZES.xSmall)}>
            Find The Most
           </Text>
            <Text style={styles.welcomeTxt(COLORS.primary,0)}>
            Luxurioú Furniture
           </Text> 
        </View>
        <View style={styles.searchContainer}>

        </View>
        </View>
    )
}
export default Welcome