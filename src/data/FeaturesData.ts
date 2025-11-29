import { StaticImageData } from "next/image";

import featureThumb_1 from "@/assets/img/blog/featured_post01.jpg";
import featureThumb_2 from "@/assets/img/blog/featured_post02.jpg";
import featureThumb_3 from "@/assets/img/blog/featured_post03.jpg";
import featureThumb_4 from "@/assets/img/blog/featured_post04.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
}[];

const feature_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: featureThumb_1,
      tag: "Dinner",
      title: "How to Make Cappuccino without a Machine",
      date: "27 August, 2024"
   },
   {
      id: 2,
      page: "home_1",
      thumb: featureThumb_2,
      tag: "Lunch",
      title: "Really quick broccoli pasta Cheese Mikhail",
      date: "20 August, 2024"
   },
   {
      id: 3,
      page: "home_1",
      thumb: featureThumb_3,
      tag: "Breakfast",
      title: "Announcing the Spring Bucket List",
      date: "25 August, 2024"
   },
   {
      id: 4,
      page: "home_1",
      thumb: featureThumb_4,
      tag: "Dessert",
      title: "Favorite Browned Butter Chocolate Cookies",
      date: "16 August, 2024"
   },
   {
      id: 5,
      page: "home_1",
      thumb: featureThumb_3,
      tag: "Breakfast",
      title: "Really quick broccoli pasta Cheese Mikhail",
      date: "20 August, 2024"
   },
];

export default feature_data;