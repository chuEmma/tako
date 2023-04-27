import {View, Text} from 'react-native';
import {styles} from '../styles/styles';

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const Month = (props: any) => {
    return (
    <View style={[styles.row, {justifyContent: 'space-around', paddingVertical: 20}]}>
        <Text>{"<"}</Text>
        <View style={[styles.col, {alignItems: 'center', gap: 3}]}>
            <Text style={{fontSize: 18}}>{months[props.month]}</Text>
            <Text style={[styles.label]}>{props.year}</Text>
        </View>
        <Text>{">"}</Text>
    </View>
    )
}