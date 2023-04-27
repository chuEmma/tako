import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import Arrow from '../icons/arrow.svg';

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
export const shortMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export const Month = (props: any) => {
    return (
    <View style={{padding: 20}}>
        <View style={[styles.row, styles.month]}>
            <View style={[styles.arrowClickableArea]}>
                <Arrow width="25" height="25" style={{transform:[{rotateY: '180deg'}]}}/>
            </View>
            <View style={[styles.col, {alignItems: 'center', gap: 3}]}>
                <Text style={{fontSize: 18}}>{months[props.month]}</Text>
                <Text style={[styles.label]}>{props.year}</Text>
            </View>
            <View style={[styles.arrowClickableArea]}>
                <Arrow width="25" height="25"/>
            </View>
        </View>
    </View>
    )
}