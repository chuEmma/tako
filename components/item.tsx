import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import {data} from '../data';

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
                <View style={[styles.col, {gap: 12}]}>
                {
                    itemsArray.map((date, idx) => {
                        const itemsByDate = items[date];
                        
                        return(
                            <View key={idx} style={[styles.col, {paddingHorizontal: 15, gap: 5}]}>
                                <Text>{new Date(props.year, props.month, Number(date)).toDateString()}</Text>
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


