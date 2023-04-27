import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import {data} from '../data';

export const Balance = (props: any) => {

    const balances = loadExpensesOfMonth(props.year, props.month);

    return (
        <View style={[styles.col, {paddingVertical: 15, gap: 5}]}>
            <View style={[styles.col, {alignItems: 'center', gap: 3}]}>
                <Text style={styles.label}>Balance</Text>
                <Text style={{fontSize: 25}}>{balances.balance.toFixed(2)}</Text>
            </View>
            <View style={[styles.row, {justifyContent: 'space-around'}]}>
                <View style={[styles.col, {alignItems: 'center', gap: 3}]}>
                    <Text style={styles.label}>Expenses</Text>
                    <Text style={{fontSize: 16}}>{balances.expenses.toFixed(2)}</Text>
                </View>
                <View style={[styles.col, {alignItems: 'center', gap: 3}]}>
                    <Text style={styles.label}>Income</Text>
                    <Text style={{fontSize: 16}}>{balances.income.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    );
}

function loadExpensesOfMonth(year: number, month: number) {
    
    let expenses = 0.00;
    let income = 0.00;

    // There is existing data for given year and month
    if (data[year] !== undefined) {
        if (data[year][month] !== undefined) {
            const items = data[year][month];

            for (const date in items) {
                const itemsByDate = items[date];

                itemsByDate.forEach(item => {
                    if (item.type == "Expenses") {
                        expenses = expenses + item.amount;
                    } else if (item.type == "Income") {
                        income = income + item.amount;
                    }
                });
            }
        }
    }

    let balance = income - expenses;

    return {
        balance: balance,
        expenses: expenses,
        income: income
    };
}