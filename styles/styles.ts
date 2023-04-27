import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    col: {
        display: 'flex',
        flexDirection: 'column',
      },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        opacity: 0.45,
    },
    arrow: {
        width: "10%",
        height: "10%",
    },
    month: {
        justifyContent: 'space-between', 
        paddingVertical: 12, 
        paddingHorizontal: 12, 
        borderWidth: 1, 
        borderRadius: 100,
        borderColor: "grey",
    },
    arrowClickableArea: {
         padding: 5,
         borderWidth: 1,
         borderColor: "white",
    },
    addOverlay: {
        backgroundColor: "grey",
        position: 'absolute',
        bottom: 20
    }
})