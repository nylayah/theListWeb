import colors from "./colors";
import { StyleSheet } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    smallText: {
        fontSize: 20,
        color: colors.dark,
    },
    mediumText: {
        fontSize: 30,
        color: colors.dark,
    },  
    largeText: {
        fontSize: 40,
        color: colors.dark,
    },
    listContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 10,
        padding: 10,

    }
});
export  {styles}