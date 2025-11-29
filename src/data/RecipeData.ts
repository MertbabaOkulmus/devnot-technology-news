import { StaticImageData } from "next/image";

import racipeThumb_1 from "@/assets/img/blog/recipe_img01.jpg";
import racipeThumb_2 from "@/assets/img/blog/recipe_img02.jpg";
import racipeThumb_3 from "@/assets/img/blog/recipe_img03.jpg";
import racipeThumb_4 from "@/assets/img/blog/recipe_img04.jpg";

import healthyThumb_1 from "@/assets/img/blog/hr_post01.jpg";
import healthyThumb_2 from "@/assets/img/blog/hr_post02.jpg";
import healthyThumb_3 from "@/assets/img/blog/hr_post03.jpg";
import healthyThumb_4 from "@/assets/img/blog/hr_post04.jpg";
import healthyThumb_5 from "@/assets/img/blog/hr_post05.jpg";
import healthyThumb_6 from "@/assets/img/blog/hr_post06.jpg";

import popularThumb_1 from "@/assets/img/blog/popular_post01.jpg";
import popularThumb_2 from "@/assets/img/blog/popular_post02.jpg";
import popularThumb_3 from "@/assets/img/blog/popular_post03.jpg";
import popularThumb_4 from "@/assets/img/blog/popular_post04.jpg";
import popularThumb_5 from "@/assets/img/blog/popular_post05.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
}[];

const recipe_data: DataType[] = [
   {
      id: 1,
      page: "home_1_recipe_1",
      thumb: racipeThumb_1,
      tag: "BREAKFAST",
      title: "How To Design An Effective User Onboarding Flow",
      date: "27 AUGUST, 2024",
   },
   {
      id: 2,
      page: "home_1_recipe_1",
      thumb: racipeThumb_2,
      tag: "LUNCH",
      title: "Exploring The Potential Of Web Workers For Multithreading",
      date: "10 AUGUST, 2024",
   },
   {
      id: 3,
      page: "home_1_recipe_1",
      thumb: racipeThumb_3,
      tag: "DESSERT",
      title: "Favorite Browned Butter Chocolate Cookies Daily Breakfast",
      date: "20 AUGUST, 2024",
   },
   {
      id: 4,
      page: "home_1_recipe_1",
      thumb: racipeThumb_4,
      tag: "APPETIZER",
      title: "The Potentially Dangerous Non Sibility Of Cookie Notices",
      date: "17 AUGUST, 2024",
   },

   // healthy_data

   {
      id: 1,
      page: "home_1_healthy",
      thumb: healthyThumb_1,
      tag: "LUNCH",
      title: "Rom Prehensive Checklist Running Workshops",
      date: "10 AUGUST, 2024",
   },
   {
      id: 2,
      page: "home_1_healthy",
      thumb: healthyThumb_2,
      tag: "Breakfast",
      title: "The Best Handoff Is No Handoff",
      date: "9 AUGUST, 2024",
   },
   {
      id: 3,
      page: "home_1_healthy",
      thumb: healthyThumb_3,
      tag: "Dessert",
      title: "Internationalization With React Server",
      date: "15 AUGUST, 2024",
   },
   {
      id: 4,
      page: "home_1_healthy",
      thumb: healthyThumb_4,
      tag: "Pizza",
      title: "What Leonardo Da Vinci Can Teach Us About Web Design",
      date: "19 AUGUST, 2024",
   },
   {
      id: 5,
      page: "home_1_healthy",
      thumb: healthyThumb_5,
      tag: "Dinner",
      title: "Why You Should Consider Graphs For Your Next",
      date: "18 AUGUST, 2024",
   },
   {
      id: 6,
      page: "home_1_healthy",
      thumb: healthyThumb_6,
      tag: "Appetizer",
      title: "How To Create Dynamic Donut Charts With Tailwind",
      date: "9 AUGUST, 2024",
   },

   // popular_data

   {
      id: 1,
      page: "home_1_popular",
      thumb: popularThumb_1,
      tag: "DESSERT",
      title: "Inspiring Web Design And UX Showcases",
      date: "9 AUGUST, 2024",
   },
   {
      id: 2,
      page: "home_1_popular",
      thumb: popularThumb_2,
      tag: "LUNCH",
      title: "A Guide To Accessible Form Validation",
      date: "10 AUGUST, 2024",
   },
   {
      id: 3,
      page: "home_1_popular",
      thumb: popularThumb_3,
      tag: "DINNER",
      title: "A Step-By-Step Guide To Building Accessible",
      date: "15 AUGUST, 2024",
   },
   {
      id: 4,
      page: "home_1_popular",
      thumb: popularThumb_4,
      tag: "PIZZA",
      title: "The Butter Chocolate Cookies Daily",
      date: "9 AUGUST, 2024",
   },
   {
      id: 5,
      page: "home_1_popular",
      thumb: popularThumb_5,
      tag: "BREAKFAST",
      title: "Five Steps To Design Your Product",
      date: "20 AUGUST, 2024",
   },
]

export default recipe_data;