import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiOpenedFoodCan } from "react-icons/gi";
import { MdOutlineLunchDining } from "react-icons/md";
import { LuPizza } from "react-icons/lu";




const catagoriees=[
    {
        id:1,
        name:"All",
        image: <RiGalleryView2  className="w-[60px] h-[60px] text-red-400"/>

    },
     {
        id:2,
        name:"Breakfast",
        image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-red-400" />


    },
     {
        id:3,
        name:"Soups",
        image: <LuSoup className="w-[60px] h-[60px] text-red-400" />


    },
     {
        id:4,
        name:"Pasta",
        image: <CiBowlNoodles className="w-[60px] h-[60px] text-red-400" />


    },
     {
        id:5,
        name:"Main course",
        image: <GiOpenedFoodCan className="w-[60px] h-[60px] text-red-400" />

    },
     {
        id:6,
        name:"Pizza",
        image: <LuPizza className="w-[60px] h-[60px] text-red-400" />

    },
     {
        id:7,
        name:"Burger",
        image:<MdOutlineLunchDining className="w-[60px] h-[60px] text-red-400" />


    }
]

export  default catagoriees