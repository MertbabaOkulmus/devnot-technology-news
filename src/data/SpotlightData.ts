import { StaticImageData } from "next/image";

import spotlightThumb_1 from "@/assets/img/blog/spotlight_post01.jpg";
import spotlightThumb_2 from "@/assets/img/blog/spotlight_post02.jpg";
import spotlightThumb_3 from "@/assets/img/blog/spotlight_post03.jpg";
import spotlightThumb_4 from "@/assets/img/blog/spotlight_post04.jpg";

import popularThumb_1 from "@/assets/img/blog/g_popular_post01.jpg";
import popularThumb_2 from "@/assets/img/blog/g_popular_post02.jpg";
import popularThumb_3 from "@/assets/img/blog/g_popular_post03.jpg";
import popularThumb_4 from "@/assets/img/blog/g_popular_post04.jpg";
import popularThumb_5 from "@/assets/img/blog/g_popular_post05.jpg";

import recentThumb_1 from "@/assets/img/blog/rc_post01.jpg";
import recentThumb_2 from "@/assets/img/blog/rc_post02.jpg";
import recentThumb_3 from "@/assets/img/blog/rc_post03.jpg";
import recentThumb_4 from "@/assets/img/blog/rc_post04.jpg";
import recentThumb_5 from "@/assets/img/blog/rc_post05.jpg";

import videoThumb_1 from "@/assets/img/blog/video_post01.jpg";
import videoThumb_2 from "@/assets/img/blog/video_post02.jpg";
import videoThumb_3 from "@/assets/img/blog/video_post03.jpg";
import videoThumb_4 from "@/assets/img/blog/video_post04.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   tag: string;
   title: string;
   date: string;
   time?: string;
   class_name?: string;
}[];

const spotlight_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      thumb: spotlightThumb_1,
      tag: "Racing",
      title: "How To Build A Magazine Layout With CSS Grid Areas",
      date: "27 August, 2024",
      time: "20 Mins"
   },
   {
      id: 2,
      page: "home_2",
      thumb: spotlightThumb_2,
      tag: "ACTION",
      title: "Fortnite Ratings Are Skyrocketing",
      date: "15 August, 2024",
      time: "15 Mins"
   },
   {
      id: 1,
      page: "home_2",
      thumb: spotlightThumb_3,
      tag: "FIGHTER",
      title: "Everything You Need To Know About",
      date: "20 August, 2024",
      time: "10 Mins"
   },
   {
      id: 4,
      page: "home_2",
      thumb: spotlightThumb_4,
      tag: "GAMING",
      title: "We Can’t Wait To Try This Gaming Area",
      date: "12 August, 2024",
      time: "15 Mins"
   },

   // home_2_popular
   {
      id: 1,
      page: "home_2_popular",
      thumb: popularThumb_1,
      tag: "RACING",
      title: "Racing Games Browned Butte Roadert Cookies Daily Breakfast",
      date: "12 August, 2024",
      time: "15 Mins",
      class_name: "col-lg-6",
   },
   {
      id: 2,
      page: "home_2_popular",
      thumb: popularThumb_2,
      tag: "ACTION",
      title: "How To Host A WordPress Site On Amazon Lightsail",
      date: "16 August, 2024",
      time: "10 Mins",
      class_name: "col-lg-6",
   },
   {
      id: 3,
      page: "home_2_popular",
      thumb: popularThumb_3,
      tag: "FIGHTER",
      title: "The Magic Of February 2024 Wallpapers",
      date: "19 August, 2024",
      class_name: "col-lg-4",
   },
   {
      id: 4,
      page: "home_2_popular",
      thumb: popularThumb_4,
      tag: "ANIMATION",
      title: "Customization And Animation",
      date: "14 August, 2024",
      class_name: "col-lg-4",
   },
   {
      id: 5,
      page: "home_2_popular",
      thumb: popularThumb_5,
      tag: "STORY",
      title: "Better ROI For Your Digital Products",
      date: "20 August, 2024",
      class_name: "col-lg-4",
   },

   // popular_recent

   {
      id: 1,
      page: "popular_recent",
      thumb: recentThumb_1,
      tag: "RACING",
      title: "The Butter Chocolate Cookies Daily",
      date: "20 August, 2024",
   },
   {
      id: 2,
      page: "popular_recent",
      thumb: recentThumb_2,
      tag: "STORY",
      title: "Copying Designs Doesn’t Work",
      date: "28 August, 2024",
   },
   {
      id: 3,
      page: "popular_recent",
      thumb: recentThumb_3,
      tag: "ANIMATION",
      title: "Ollaboration Problems Go Away By Sharing",
      date: "29 August, 2024",
   },
   {
      id: 4,
      page: "popular_recent",
      thumb: recentThumb_4,
      tag: "FIGHTER",
      title: "Level Up Your CSS Skills With The",
      date: "25 August, 2024",
   },
   {
      id: 5,
      page: "popular_recent",
      thumb: recentThumb_5,
      tag: "RACING",
      title: "The Key To Good Component Design",
      date: "20 August, 2024",
   },

   // video_post

   {
      id: 1,
      page: "video_post",
      thumb: videoThumb_1,
      tag: "FIGHTER",
      title: "Exciting New Browned Chocolate Gaming Cookies Daily Breakfast",
      date: "27 August, 2024",
   },
   {
      id: 2,
      page: "video_post",
      thumb: videoThumb_2,
      tag: "ANIMATION",
      title: "A Guide To Getting Data Visualization Right",
      date: "27 August, 2024",
   },
   {
      id: 3,
      page: "video_post",
      thumb: videoThumb_3,
      tag: "ACTION",
      title: "Fluid Typography: Predicting A Problem With Your User’s Zoom-In",
      date: "27 August, 2024",
   },
   {
      id: 4,
      page: "video_post",
      thumb: videoThumb_4,
      tag: "RACING",
      title: "Deploying CSS Logical Properties On Web Apps",
      date: "27 August, 2024",
   },

];

export default spotlight_data;