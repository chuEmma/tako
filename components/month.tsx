import {View, Text} from 'react-native';
import {styles} from '../styles/styles';

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const Month = (props: any) => {
    return (
    <View style={[styles.row, {justifyContent: 'center', paddingVertical: 20}]}>
        <Text>{months[props.month]}</Text>
        <Text>{props.year}</Text>
    </View>
    )
}