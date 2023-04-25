import { Double } from "react-native/Libraries/Types/CodegenTypes";
import {View} from "react-native";

export class ItemObj {
    id: number;
    date: Date;
    category: string;
    desc: string;
    amount: Double;

    constructor(id: number, date: Date, category: string, desc: string, amount: Double) {
        this.date = date;
        this.id = id;
        this.category = category;
        this.desc = desc;
        this.amount = amount;
    }
}



