import { StaticImageData } from "next/image";

import latestPostThumb_1 from "@/assets/img/blog/latest_post02.jpg";
import latestPostThumb_2 from "@/assets/img/blog/latest_post03.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
}[];

const latest_post_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: latestPostThumb_1,
      tag: "Breakfast",
      title: "The Potentially Dangerous Non-Accessibility Of Cookie",
      date: "25 August, 2024",
   },
   {
      id: 2,
      page: "home_1",
      thumb: latestPostThumb_2,
      tag: "Lunch",
      title: "One-Pan Baked Sausage And Lentils",
      date: "29 August, 2024",
   },
];

export default latest_post_data;