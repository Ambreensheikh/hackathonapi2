// src\app\constant\shop.ts
interface Card {
    id:number,
    src: string;
    name: string;
    lorem: string;
    width: number;
    height: number;
}

export const Cards: Card[] = [
    {
        id:2,
        src: "/free-delivery 1.png",
        name: "24/7 Support",
        lorem: "Lorem incididunt ut labore et dolore magna aliqua we dertaf fgrt fasr fbrjh.",
        width: 65,
        height: 42,
    },
    // other card objects

    {
        id:3,
        src: "/cashback 1.png",
        name: "24/7 Support",
        lorem: "Lorem incididunt ut labore et dolore magna aliqua as fager fgrtehrjh poter.",
        width: 65,
        height: 43,
    },    
    {
        id:4,
        src: "/premium1.png",
        name: "24/7 Support",
        lorem: "Lorem incididunt ut labore et dolore magna aliqua befrg rhrrhjrggrg hy hhg jhj.",
        width: 65,
        height: 43,
    },
    {
        id:5,
        src: "/24-hours-support 1.png",
        name: "24/7 Support",
        lorem: "Lorem incididunt ut labore et dolore magna aliqua as therf bertw tyxwm hrgghtrw.",
        width: 65,
        height: 42,
    }
];