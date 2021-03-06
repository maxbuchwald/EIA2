namespace Nachbarschaftshilfe_04 {

    export interface Task {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Task[];
    }

    export let data: Data = {
        Shopping: [
            { name: "Butter", price: 1.50 },
            { name: "Milk", price: 0.9 },
            { name: "Flour", price: 0.4 },
            { name: "Sugar", price: 0.7 },
            { name: "Eggs", price: 0.4 },
            { name: "Salt", price: 0.35 },
            { name: "Bread", price: 1.5 }            
        ],
        Supermarked: [
            { name: "Rewe", price: 0 },
            { name: "Edeka", price: 0 },
            { name: "Aldi", price: 0 },
            { name: "Lidl", price: 0  },
            { name: "Müller", price: 0  }

        ],
        Household: [
            { name: "go out with dogs", price: 7 },
            { name: "Gardening", price: 9 },
            { name: "Postal Service", price: 5 }
        ],
        Withdrawals: [
            { name: "abheben", price: 0 },            
            { name: "einzahlen", price: 0 }
        ],
        Money: [
            { name: "Money", price: 5 }            
        ]
    };
}