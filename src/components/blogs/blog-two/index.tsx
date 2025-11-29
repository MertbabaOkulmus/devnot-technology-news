import Breadcrumbs from '@/components/common/Breadcrumbs'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import BlogArea from '../blog/BlogArea'
import FooterNews from '@/components/common/FooterNews'

const BlogTwo = () => {
   return (
      <>
         <HeaderOne />
         <main className='fix'>
            <Breadcrumbs page="blogs" style={false} />
            <BlogArea style={true} />
            <FooterNews />
         </main>
         <FooterOne style={false} style_2={true} />
      </>
   )
}

export default BlogTwo
