import { StaticImageData } from "next/image";

import editThumb_1 from "@/assets/img/blog/tr_editor_img01.jpg";
import editThumb_2 from "@/assets/img/blog/tr_editor_img02.jpg";
import editThumb_3 from "@/assets/img/blog/tr_editor_img03.jpg";

import latestThumb_1 from "@/assets/img/blog/tr_latest_post02.jpg";
import latestThumb_2 from "@/assets/img/blog/tr_latest_post03.jpg";

import trandingThumb_1 from "@/assets/img/blog/tr_overlay_post01.jpg";
import trandingThumb_2 from "@/assets/img/blog/tr_overlay_post02.jpg";
import trandingThumb_3 from "@/assets/img/blog/tr_overlay_post03.jpg";
import trandingThumb_4 from "@/assets/img/blog/tr_overlay_post04.jpg";

import weeklyThumb_1 from "@/assets/img/blog/tr_weekly_post01.jpg";
import weeklyThumb_2 from "@/assets/img/blog/tr_weekly_post02.jpg";
import weeklyThumb_3 from "@/assets/img/blog/tr_weekly_post03.jpg";
import weeklyThumb_4 from "@/assets/img/blog/tr_weekly_post04.jpg";
import weeklyThumb_5 from "@/assets/img/blog/tr_weekly_post05.jpg";
import weeklyThumb_6 from "@/assets/img/blog/tr_weekly_post06.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
   time?: string;
   desc?: string;
}[];

const home_4_data: DataType[] = [
   {
      id: 1,
      page: "edit_post",
      thumb: editThumb_1,
      tag: "TRAVEL",
      title: "A Comprehensive Checklist For Running",
      date: "27 AUGUST, 2024"
   },
   {
      id: 2,
      page: "edit_post",
      thumb: editThumb_2,
      tag: "ADVENTURE",
      title: "Overcoming Challenges Of Content Creation",
      date: "27 AUGUST, 2024"
   },
   {
      id: 3,
      page: "edit_post",
      thumb: editThumb_3,
      tag: "DESTINATION",
      title: "And Data Management With Row-Level Security",
      date: "27 AUGUST, 2024"
   },

   // latest_post

   {
      id: 1,
      page: "latest_post",
      thumb: latestThumb_1,
      tag: "CULTURE",
      title: "A Pragmatist’s Guide To Lean User Research",
      date: "27 AUGUST, 2024"
   },
   {
      id: 2,
      page: "latest_post",
      thumb: latestThumb_2,
      tag: "DESTINATION",
      title: "Building Complex Forms In Vue",
      date: "27 AUGUST, 2024"
   },

   // tranding_data

   {
      id: 1,
      page: "tranding_data",
      thumb: trandingThumb_1,
      tag: "ADVENTURE",
      title: "How To Create Dynamic Donut Tailwind React",
      date: "27 AUGUST, 2024",
      time: "20 Mins",
   },
   {
      id: 2,
      page: "tranding_data",
      thumb: trandingThumb_2,
      tag: "Cultre",
      title: "Putting Gears In Motion Animating Cars",
      date: "27 AUGUST, 2024",
      time: "20 Mins",
   },
   {
      id: 3,
      page: "tranding_data",
      thumb: trandingThumb_3,
      tag: "Destination",
      title: "Five Steps To Design Your Powerful Storytelling",
      date: "27 AUGUST, 2024"
   },
   {
      id: 4,
      page: "tranding_data",
      thumb: trandingThumb_4,
      tag: "Travel",
      title: "How To Host A WordPress Site On Amazon",
      date: "27 AUGUST, 2024"
   },
   {
      id: 5,
      page: "tranding_data",
      thumb: trandingThumb_2,
      tag: "Cultre",
      title: "Putting Gears In Motion Animating Cars",
      date: "27 AUGUST, 2024",
      time: "20 Mins",
   },

   // weekly_post
   {
      id: 1,
      page: "weekly_post",
      thumb: weeklyThumb_1,
      tag: "DESTINATION",
      title: "How To Design An Effective For User Onboarding Flow",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 2,
      page: "weekly_post",
      thumb: weeklyThumb_2,
      tag: "TRAVEL",
      title: "A Comprehensive Checklist For The Running Design Workshops",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 3,
      page: "weekly_post",
      thumb: weeklyThumb_3,
      tag: "CULTRE",
      title: "Overcoming The Challenges Of Content Creation For Informational Websites",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 4,
      page: "weekly_post",
      thumb: weeklyThumb_4,
      tag: "ADVENTURE",
      title: "Internationalization In Next.Js 13 With React Server Components",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 5,
      page: "weekly_post",
      thumb: weeklyThumb_5,
      tag: "DESTINATION",
      title: "Why You Should Consider Graphs For Your Next GraphQL Project",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 6,
      page: "weekly_post",
      thumb: weeklyThumb_6,
      tag: "TRAVEL",
      title: "How To Create Dynamic Donut Charts With TailwindCSS And React",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
]

export default home_4_data;