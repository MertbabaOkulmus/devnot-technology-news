import Breadcrumbs from "@/components/common/Breadcrumbs"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"
import FooterNews from "@/components/common/FooterNews"

const BlogThree = () => {
   return (
      <>
         <HeaderOne />
         <main className="fix">
            <Breadcrumbs page="Blogs" style={false} />
            <BlogArea />
            <FooterNews />
         </main>
         <FooterOne style={false} style_2={true} />
      </>
   )
}

export default BlogThree
