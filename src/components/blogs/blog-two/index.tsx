"use client"

import FooterOne from '@/layouts/footers/FooterOne'
import HeaderThree from "@/layouts/headers/HeaderThree"
import React from 'react'
import BlogArea from '../blog/BlogArea'
import { NewsArticle } from '@/services/homethree.service'

type BlogTwoProps = {
  initialEvents: NewsArticle[];
};

const BlogTwo = ({ initialEvents }: BlogTwoProps) => {
   return (
      <>
         <HeaderThree />
         <main className='fix'>
            <BlogArea blogs={initialEvents} style={true} />
         </main>
         <FooterOne style={false} style_2={true} />
      </>
   )
}

export default BlogTwo;