import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import {data} from '../data';

const Balance = (props: any) => {
    return(
        <View style={[styles.col, {alignItems: 'center'}]}>
            <Text>{props.type}</Text>
            <Text>{props.amount}</Text>
        </View>
    );
}

export const BalanceBanner = () => {

    const balances = loadExpenses();

    return(
        <View style={[styles.col, {paddingVertical: 15, gap: 10}]}>
            <Balance type='Balance' amount={balances.balance.toFixed(2)}></Balance>
            <View style={[styles.row, {justifyContent: 'space-around'}]}>
                <Balance type='Expenses' amount={balances.expenses.toFixed(2)}></Balance>
                <Balance type='Income' amount={balances.income.toFixed(2)}></Balance>
            </View>
        </View>
    );
}

function loadExpenses() {
    const items = data.items;

    let expenses = 0.00;
    let income = 0.00;

    items.forEach((item) => {
        if (item.type == "Expenses") {
            expenses = expenses + item.amount;
        } else if (item.type == "Income") {
            income = income + item.amount;
        }
    })

    let balance = income - expenses;

    const balances = {
        balance: balance,
        expenses: expenses,
        income: income
    }

    return balances;
}