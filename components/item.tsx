import {StyleSheet, View, Text} from 'react-native';

const Item = (props: any) => {
    return(
        <View>
            <Text>{props.date.toDateString()}</Text>
            <Text>{props.category}</Text>
            <Text>{props.desc}</Text>
            <Text>{props.amount}</Text>
        </View>
    );
}

export function createItems(items: Array<any>) {
    return(
        items.map((item, idx) => (
            <Item date={item.date} category={item.category} desc={item.desc} amount={item.amount} key={idx}></Item>
        )
    ));
}