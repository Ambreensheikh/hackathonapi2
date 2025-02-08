interface TrendingCard {
    id:number;
    src: string;
    bg: string;
    alt: string;
    height: number;
    width: number;
    name: string;
    price: number;
    oldprice: number;
}

const trendingCards: TrendingCard[] = [
    {
        
        id:1,
        src: "/image1.png",
        bg:"bg-white",
        alt:"image",
        height:350,
        width:270,
        name: "Cantilever chair",
        price:26,
        oldprice:42

    },
    {
        
        id:2,
        src: "/image2.png",
        bg:"bg-white",
        alt:"image",
        height:350,
        width:270,
        name: "Cantilever chair",
        price:26,
        oldprice:42

    },
    {
        
        id:3,
        src: "/image3.png",
        bg:"bg-white",
        alt:"image", 
        height:350,
        width:270,
        name: "Cantilever chair",
        price:26,
        oldprice:42
   
    },
    {
        
        id:4,
        src: "/image4.png",
        bg:"bg-white",
        alt:"image",
        height:350,
        width:270,
        name: "Cantilever chair",
        price:26,
        oldprice:42

    }
]
export default trendingCards