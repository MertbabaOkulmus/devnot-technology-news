import { StaticImageData } from "next/image";

import recentThumb_1 from "@/assets/img/blog/cr_recent_post01.jpg"
import recentThumb_2 from "@/assets/img/blog/cr_recent_post02.jpg"
import recentThumb_3 from "@/assets/img/blog/cr_recent_post03.jpg"
import recentThumb_4 from "@/assets/img/blog/cr_recent_post04.jpg"
import recentThumb_5 from "@/assets/img/blog/cr_recent_post05.jpg"

import trandingThumb_1 from "@/assets/img/blog/cr_trending_post01.jpg"
import trandingThumb_2 from "@/assets/img/blog/cr_trending_post02.jpg"
import trandingThumb_3 from "@/assets/img/blog/cr_trending_post03.jpg"
import trandingThumb_4 from "@/assets/img/blog/cr_trending_post04.jpg"
import trandingThumb_5 from "@/assets/img/blog/cr_trending_post05.jpg"

import miningThumb_1 from "@/assets/img/blog/cr_mining_post01.jpg";
import miningThumb_2 from "@/assets/img/blog/cr_mining_post02.jpg";
import miningThumb_3 from "@/assets/img/blog/cr_mining_post03.jpg";
import miningThumb_4 from "@/assets/img/blog/cr_mining_post04.jpg";
import miningThumb_5 from "@/assets/img/blog/cr_mining_post05.jpg";
import miningThumb_6 from "@/assets/img/blog/cr_mining_post06.jpg";

import weeklyThumb_1 from "@/assets/img/blog/cr_weekly_post01.jpg";
import weeklyThumb_2 from "@/assets/img/blog/cr_weekly_post02.jpg";
import weeklyThumb_3 from "@/assets/img/blog/cr_weekly_post03.jpg";
import weeklyThumb_4 from "@/assets/img/blog/cr_weekly_post04.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
   time?: string;
   desc?: string;
   class_name?: string;
}[];

const home_5_data: DataType[] = [
   // recent_post

   {
      id: 1,
      page: "recent_post",
      thumb: recentThumb_1,
      tag: "MARKET",
      title: "The Game Changing Ar Roadeily Breakfast",
      date: "27 August, 2024",
      time: "20 Mins",
      class_name: "col-lg-4",
   },
   {
      id: 2,
      page: "recent_post",
      thumb: recentThumb_2,
      tag: "BITCOIN",
      title: "The Game Changing Ar Roadeily Breakfast",
      date: "27 August, 2024",
      time: "20 Mins",
      class_name: "col-lg-4",
   },
   {
      id: 3,
      page: "recent_post",
      thumb: recentThumb_3,
      tag: "ECONOMY",
      title: "The Game Changing Ar Roadeily Breakfast",
      date: "27 August, 2024",
      time: "20 Mins",
      class_name: "col-lg-4",
   },
   {
      id: 4,
      page: "recent_post",
      thumb: recentThumb_4,
      tag: "NEWS",
      title: "Racing Games Browned Butte Roadert Cookies Daily Breakfast",
      date: "27 August, 2024",
      time: "20 Mins",
      class_name: "col-lg-6",
   },
   {
      id: 5,
      page: "recent_post",
      thumb: recentThumb_5,
      tag: "CRYPTO",
      title: "Racing Games Browned Butte Roadert Cookies Daily Breakfast",
      date: "27 August, 2024",
      time: "20 Mins",
      class_name: "col-lg-6",
   },

   // tranding_post

   {
      id: 1,
      page: "tranding_post",
      thumb: trandingThumb_1,
      tag: "CRYPTO",
      title: "The Growing Need For Effective Password Management",
      date: "27 August, 2024",
      time: "20 MINS",
   },
   {
      id: 2,
      page: "tranding_post",
      thumb: trandingThumb_2,
      tag: "NEWS",
      title: "Write Better CSS By Borrowing Ideas From JavaScript Functions",
      date: "27 August, 2024",
      time: "20 MINS",
   },
   {
      id: 3,
      page: "tranding_post",
      thumb: trandingThumb_3,
      tag: "BITCOIN",
      title: "Accessible Target Sizes Cheatsheet",
      date: "27 August, 2024",
      time: "20 MINS",
   },
   {
      id: 4,
      page: "tranding_post",
      thumb: trandingThumb_4,
      tag: "MARKET",
      title: "Color Mechanics In UI Kits",
      date: "27 August, 2024",
      time: "20 MINS",
   },
   {
      id: 5,
      page: "tranding_post",
      thumb: trandingThumb_5,
      tag: "ECONOMY",
      title: "How To Design An Effective User",
      date: "27 August, 2024",
      time: "20 MINS",
   },

   // mining_store

   {
      id: 1,
      page: "mining_store",
      thumb: miningThumb_1,
      tag: "NEWS",
      title: "What You Miss In The Market Changes",
      date: "27 AUGUST, 2024",
   },
   {
      id: 2,
      page: "mining_store",
      thumb: miningThumb_2,
      tag: "CRYPTO",
      title: "New Bill Allows To Pay Crypto Taxes",
      date: "27 AUGUST, 2024",
   },
   {
      id: 3,
      page: "mining_store",
      thumb: miningThumb_3,
      tag: "ECONOMY",
      title: "Crypto Exchange Services In The US",
      date: "27 AUGUST, 2024",
   },
   {
      id: 4,
      page: "mining_store",
      thumb: miningThumb_4,
      tag: "BITCOIN",
      title: "Blockchain Can Help With Fundraising",
      date: "27 AUGUST, 2024",
   },
   {
      id: 5,
      page: "mining_store",
      thumb: miningThumb_5,
      tag: "MARKET",
      title: "Benefits Of Blockchain For Bank Security",
      date: "27 AUGUST, 2024",
   },
   {
      id: 6,
      page: "mining_store",
      thumb: miningThumb_6,
      tag: "NEWS",
      title: "Economic Niches That Aren’t Occupied",
      date: "27 AUGUST, 2024",
   },

   // weekly_post

   {
      id: 1,
      page: "weekly_post",
      thumb: weeklyThumb_1,
      tag: "MARKET",
      title: "How To Protect Your App With A Model Based On JSONDiff",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 2,
      page: "weekly_post",
      thumb: weeklyThumb_2,
      tag: "CRYPTO",
      title: "Beyond Algorithms: Skills Of Designers That AI Can’t Replicate",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 3,
      page: "weekly_post",
      thumb: weeklyThumb_3,
      tag: "ECONOMY",
      title: "A Comprehensive Checklist For Design Workshops",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 4,
      page: "weekly_post",
      thumb: weeklyThumb_4,
      tag: "NEWS",
      title: "Overcoming The Challenges Of Creation For Informational Websites",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
];

export default home_5_data;