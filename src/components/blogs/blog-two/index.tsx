"use client"
import Breadcrumbs from '@/components/common/Breadcrumbs'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderThree from "@/layouts/headers/HeaderThree"
import React, { useState, useEffect } from 'react'
import BlogArea from '../blog/BlogArea'
import { fetchUpcomingEvents, NewsArticle } from '@/services/homethree.service'

const BlogTwo = () => {
     const [upcomingEvents, setUpcomingEvents] = useState<NewsArticle[]>([]);

     useEffect(() => {
       const loadArticles = async () => {
         try {
           const upcomingEvents = await fetchUpcomingEvents();
           setUpcomingEvents(upcomingEvents); 
         } catch (err) {
           console.error('Error fetching articles:', err);
         }
       };
   
       loadArticles();
     }, []);
   return (
      <>
         <HeaderThree />
         <main className='fix'>
            <Breadcrumbs page="Etkinlikler" style={false} />
            <BlogArea blogs={upcomingEvents} style={true} />
            {/* <FooterNews /> */}
         </main>
         <FooterOne style={false} style_2={true} />
      </>
   )
}

export default BlogTwo
