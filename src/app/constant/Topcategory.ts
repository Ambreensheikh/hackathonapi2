interface TopCategory {
    id: number;
    src: string;
    width: number;
    height: number;
    alt:string;
}

export const topcategories: TopCategory[] = [
    {
        id:1,
        alt:"image",
        src: "/topcategory1.png",
        width: 269,
        height: 345
      },
      {
        id:2,
        alt:"image",
       src: "/topcategory2.png",
       width: 269,
       height: 345
      },
      {
        id:3,
        alt:"image",
        src: "/topcategory3.png",
        width: 269,
        height: 345
        
      },
      {
        id:4,
        alt:"image",
        src: "/topcategory4.png",
        width: 269,
        height: 345
      }
]