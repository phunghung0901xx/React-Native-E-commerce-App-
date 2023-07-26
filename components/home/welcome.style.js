import {StyleSheet} from "react-native"
import {COLORS, SIZES} from "../../constants/index"

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcomeTxt: (color,top) =>({
        fontFamily:"bold",
        fontSize: SIZES.xxLarge - 5,
        marginTop: SIZES.xSmall,
        color: color,
        marginTop: top,
        marginHorizontal: 12
    }),
    searchContainer: {
        flexDirection: ""
    }
})

export default styles