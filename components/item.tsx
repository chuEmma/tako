import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import {data} from '../data';
import {days, shortMonths} from './month';

const Item = (props: any) => {

    let amount = props.amount;
    if (props.type == "Income") {
        amount = "+ " + props.amount;
    }

    return(
        <View style={[styles.row, {paddingHorizontal: 12, paddingVertical: 5}]}>
            {/* Icon */}
            <View style={[styles.row, {justifyContent: 'space-between', width: '100%'}]}>
                <View style={[styles.col, {gap: 3}]}>
                    <Text style={{fontSize: 15}}>{props.category}</Text>
                    <Text style={styles.label}>{props.desc}</Text>
                </View>
                <View style={[styles.row]}>
                    <Text style={{fontSize: 16}}>{amount}</Text>
                </View>
            </View>
        </View>
    );
}

export const Items = (props: any) => {

    // There is existing data for given year and month
    if (data[props.year] !== undefined) {
        if (data[props.year][props.month] !== undefined) {

            const items = data[props.year][props.month];
            
            // As an array
            const itemsArray = Object.keys(items).reverse();

            return( 
                <View style={[styles.col, {gap: 20}]}>
                {
                    itemsArray.map((date, idx) => {
                        const itemsByDate = items[date];

                        const newDate = new Date(props.year, props.month, Number(date));
                        const dateLabel = days[newDate.getDay()] + ", " + shortMonths[newDate.getMonth()] + " " + date;
                        
                        return(
                            <View key={idx} style={[styles.col, {paddingHorizontal: 15, gap: 10}]}>
                                <View style={{gap: 5}}>
                                    <Text style={[styles.label]}>{dateLabel}</Text>
                                    <View style={{paddingBottom: 2, borderBottomWidth: 1, opacity: 0.1}}/>
                                </View>
                                <View>
                                    {
                                        itemsByDate.map((item: any, idx: any) => {
                                            return (<Item type={item.type} category={item.category} desc={item.desc} amount={item.amount.toFixed(2)} key={idx}></Item>)
                                        })
                                    }
                                </View>
                            </View>
                        )
                    })
                }
                </View>
            );
        }
    }

    // No existing data
    return(
        <View></View>
    );
}


