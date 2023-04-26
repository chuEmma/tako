import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import {data} from '../data';

const Item = (props: any) => {

    if (props.type == "Income") {
        props.amount = "+ " + props.amount;
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
                    <Text style={{fontSize: 16}}>{props.amount}</Text>
                </View>
            </View>
        </View>
    );
}

// function createItems(items: Array<any>) {
//     return(
//         items.map((item, idx) => (
//             <Item date={item.date} type={item.type} category={item.category} desc={item.desc} amount={item.amount.toFixed(2)} key={idx}></Item>
//         )
//     ));
// }

const Items = (props: any) => {
    return(
        props.items.map((item, idx) => {
            <Item type={item.type} category={item.category} desc={item.desc} amount={item.amount.toFixed(2)} key={idx}></Item>
        })
    )
}

// const ItemsByDate = (props: any) => {
//     return(
//         <View style={[styles.col, {paddingHorizontal: 10, gap: 5}]}>
//             <Text>{props.date.toDateString()}</Text>
//             <View>
//                 {createItems(props.items)}
//             </View>
//         </View>
//     );
// }

export const ItemContainer = (props: any) => {

    // There is no existing data for given year and month
    if (data[props.year] === undefined) {
        // No existing data
        return(<View style={[styles.col]}/>);
    } else {
        // There is no existing data for particular month
        if (data[props.year][props.month] === undefined) {
            // No existing data
            return(<View style={[styles.col]}/>);
        } else {
            // There is existing data for that year and month
            const items = data[props.year][props.month];

            // Array of built components
            const components = [];

            // for (const date in items) {
            //     // Array of items by certain date
            //     const itemsByDate = items[date];

            //     // Component for each date
            //     const itemsByDateComp = <ItemsByDate date={new Date(props.year, props.month, Number(date))} items={itemsByDate}></ItemsByDate>; 
            //     components.unshift(itemsByDateComp);
            // }

            // // Something wrong here
            // return(<View style={{gap: 15}}>{components}</View>);
        }
    }
}


