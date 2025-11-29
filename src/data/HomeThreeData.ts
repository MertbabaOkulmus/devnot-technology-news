import { StaticImageData } from "next/image";

import bannerThumb_1 from "@/assets/img/blog/t_banner_post01.jpg"
import bannerThumb_2 from "@/assets/img/blog/t_banner_post02.jpg"
import bannerThumb_3 from "@/assets/img/blog/t_banner_post03.jpg"
import bannerThumb_4 from "@/assets/img/blog/t_banner_post04.jpg"

import editorThumb_1 from "@/assets/img/blog/editor_img01.jpg"
import editorThumb_2 from "@/assets/img/blog/editor_img02.jpg"
import editorThumb_3 from "@/assets/img/blog/editor_img03.jpg"

import recentThumb_1 from "@/assets/img/blog/recent_post01.jpg"
import recentThumb_2 from "@/assets/img/blog/recent_post01.jpg"
import recentThumb_3 from "@/assets/img/blog/recent_post02.jpg"
import recentThumb_4 from "@/assets/img/blog/recent_post04.jpg"

import trandingThumb_1 from "@/assets/img/blog/trending_post01.jpg"
import trandingThumb_2 from "@/assets/img/blog/trending_post02.jpg"
import trandingThumb_3 from "@/assets/img/blog/trending_post03.jpg"
import trandingThumb_4 from "@/assets/img/blog/trending_post04.jpg"

import trandingPopularThumb_1 from "@/assets/img/blog/t_popular_post01.jpg"
import trandingPopularThumb_2 from "@/assets/img/blog/t_popular_post02.jpg"
import trandingPopularThumb_3 from "@/assets/img/blog/t_popular_post03.jpg"

import overlayThumb_1 from "@/assets/img/blog/t_overlay_post01.jpg"
import overlayThumb_2 from "@/assets/img/blog/t_overlay_post02.jpg"
import overlayThumb_3 from "@/assets/img/blog/t_overlay_post03.jpg"
import overlayThumb_4 from "@/assets/img/blog/t_overlay_post04.jpg"

import weeklyPostThumb_1 from "@/assets/img/blog/t_weekly_post01.jpg"
import weeklyPostThumb_2 from "@/assets/img/blog/t_weekly_post02.jpg"
import weeklyPostThumb_3 from "@/assets/img/blog/t_weekly_post03.jpg"
import weeklyPostThumb_4 from "@/assets/img/blog/t_weekly_post04.jpg"

import weeklySidebarThumb_1 from "@/assets/img/images/sidebar_img02.jpg"
import weeklySidebarThumb_2 from "@/assets/img/blog/so_post01.jpg"
import weeklySidebarThumb_3 from "@/assets/img/blog/t_popular_post04.jpg"

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

const home_3_data: DataType[] = [
   {
      id: 1,
      page: "home_3_banner",
      thumb: bannerThumb_1,
      tag: "TECHNOLOGY",
      title: "Game Changing Virtual Reality Console Technololows Profit To Serve The Community",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
   },
   {
      id: 2,
      page: "home_3_banner",
      thumb: bannerThumb_2,
      tag: "MOBILE",
      title: "New Modern Iphone 14pro Max Extrea Revolutionary Features",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
   },
   {
      id: 3,
      page: "home_3_banner",
      thumb: bannerThumb_3,
      tag: "GADGET",
      title: "A Guide To Image Optimization On Jamstack Sites",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
   },
   {
      id: 4,
      page: "home_3_banner",
      thumb: bannerThumb_4,
      tag: "NEWS",
      title: "Using Automated Test Results To Improve Accessibility",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
   },

   // editor_post

   {
      id: 1,
      page: "editor_post",
      thumb: editorThumb_1,
      tag: "Mobile",
      title: "Using Automated Test Results To Improve",
      date: "27 AUGUST, 2024",
   },
   {
      id: 2,
      page: "editor_post",
      thumb: editorThumb_2,
      tag: "Gadget",
      title: "How To Search For A Developer Job Abroad",
      date: "27 AUGUST, 2024",
   },
   {
      id: 3,
      page: "editor_post",
      thumb: editorThumb_3,
      tag: "Technology",
      title: "New Smashing Front-End & UX Workshops",
      date: "27 AUGUST, 2024",
   },
   {
      id: 4,
      page: "editor_post",
      thumb: editorThumb_2,
      tag: "Gadget",
      title: "How To Search For A Developer Job Abroad",
      date: "27 AUGUST, 2024",
   },

   // recent_post

   {
      id: 1,
      page: "recent_post",
      thumb: recentThumb_1,
      tag: "NEWS",
      title: "Best Tech Accessor 10 Work From Home Essentials",
      date: "27 AUGUST, 2024",
      time: "20 Mins"
   },
   {
      id: 2,
      page: "recent_post",
      thumb: recentThumb_2,
      tag: "GADGET",
      title: "World Needs To Better Reflect People Of Color",
      date: "27 AUGUST, 2024",
   },
   {
      id: 3,
      page: "recent_post",
      thumb: recentThumb_3,
      tag: "TECHNOLOGY",
      title: "How To Create Advanced Animations With CSS",
      date: "27 AUGUST, 2024",
   },
   {
      id: 4,
      page: "recent_post",
      thumb: recentThumb_4,
      tag: "MOBILE",
      title: "New Smashing Front-End & UX Workshops",
      date: "27 AUGUST, 2024",
   },

   // tranding_post

   {
      id: 1,
      page: "tranding_post",
      thumb: trandingThumb_1,
      tag: "TECHNOLOGY",
      title: "Iphone Devices Are Going To Incredible Now A Days",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Area Caramelly Goodness, Crispy Edgesick And Soft Centers Rare Melty Little Puddles Of Chocolate First Favorite Thing About These Browned Butter.",
   },
   {
      id: 2,
      page: "tranding_post",
      thumb: trandingThumb_2,
      tag: "GADGET",
      title: "One-Pan Baked Sausage And Lentils",
      date: "27 AUGUST, 2024",
   },
   {
      id: 3,
      page: "tranding_post",
      thumb: trandingThumb_3,
      tag: "NEWS",
      title: "How To Create Advanced Animations With CSS",
      date: "27 AUGUST, 2024",
   },
   {
      id: 4,
      page: "tranding_post",
      thumb: trandingThumb_4,
      tag: "MOBILE",
      title: "State Of CSS: Influence The Future Of CSS",
      date: "27 AUGUST, 2024",
   },

   // tranding_popular

   {
      id: 1,
      page: "tranding_popular",
      thumb: trandingPopularThumb_1,
      tag: "GADGET",
      title: "Influence The Future Of CSS",
      date: "27 AUGUST, 2024",
   },
   {
      id: 2,
      page: "tranding_popular",
      thumb: trandingPopularThumb_2,
      tag: "NEWS",
      title: "Best Tech Accessor 10 Work From Home",
      date: "27 AUGUST, 2024",
   },
   {
      id: 3,
      page: "tranding_popular",
      thumb: trandingPopularThumb_3,
      tag: "TECHNOLOGY",
      title: "The Butter Chocolate Cookies Daily",
      date: "27 AUGUST, 2024",
   },

   // overlay_post

   {
      id: 1,
      page: "overlay_post",
      thumb: overlayThumb_1,
      tag: "News",
      title: "Best Tech Accessor 10 Work From Home",
      date: "27 AUGUST, 2024",
      time: "20 Mins"
   },
   {
      id: 2,
      page: "overlay_post",
      thumb: overlayThumb_2,
      tag: "Gadget",
      title: "What’s New In Dev Too ls Halloween Edition",
      date: "27 AUGUST, 2024",
      time: "20 Mins"
   },
   {
      id: 3,
      page: "overlay_post",
      thumb: overlayThumb_3,
      tag: "Technology",
      title: "WordPress Full-Site EditingA Deep Dive Into The",
      date: "27 AUGUST, 2024",
      time: "20 Mins"
   },
   {
      id: 4,
      page: "overlay_post",
      thumb: overlayThumb_4,
      tag: "Mobile",
      title: "Effective Communication For Everyday Meetings",
      date: "27 AUGUST, 2024",
      time: "20 Mins"
   },
   {
      id: 5,
      page: "overlay_post",
      thumb: overlayThumb_2,
      tag: "Gadget",
      title: "What’s New In Dev Too ls Halloween Edition",
      date: "27 AUGUST, 2024",
      time: "20 Mins"
   },

   // weekly_post

   {
      id: 1,
      page: "weekly_post",
      thumb: weeklyPostThumb_1,
      tag: "TECHNOLOGY",
      title: "WordPress Full-Site EditingA Deep Dive Into The",
      date: "27 AUGUST, 2024",
      time: "20 MINS",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 2,
      page: "weekly_post",
      thumb: weeklyPostThumb_2,
      tag: "NEWS",
      time: "20 MINS",
      title: "Effective Communication For Everyday Meetings",
      date: "27 AUGUST, 2024",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 3,
      page: "weekly_post",
      thumb: weeklyPostThumb_3,
      tag: "GADGET",
      time: "20 MINS",
      title: "A Roadmap For Building A Business Chatbot",
      date: "27 AUGUST, 2024",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },
   {
      id: 4,
      page: "weekly_post",
      thumb: weeklyPostThumb_4,
      tag: "MOBILE",
      time: "20 MINS",
      title: "Easy Fluid Typography With Clamp() Using Sass Functions",
      date: "27 AUGUST, 2024",
      desc: "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.",
   },

   // weekly_sidebar
   
   {
      id: 1,
      page: "weekly_sidebar",
      thumb: weeklySidebarThumb_1,
      tag: "MOBILE",
      time: "20 MINS",
      title: "Effective For Everyday Meetings",
      date: "27 AUGUST, 2024",
   },
   {
      id: 2,
      page: "weekly_sidebar",
      thumb: weeklySidebarThumb_2,
      tag: "NEWS",
      time: "20 MINS",
      title: "The Butter Chocolate Cookies Daily",
      date: "27 AUGUST, 2024",
   },
   {
      id: 3,
      page: "weekly_sidebar",
      thumb: weeklySidebarThumb_3,
      tag: "GADGET",
      time: "20 MINS",
      title: "The Anatomy Of Themed Design",
      date: "27 AUGUST, 2024",
   },
];

export default home_3_data;