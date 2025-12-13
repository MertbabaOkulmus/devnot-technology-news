import Breadcrumbs from "@/components/common/Breadcrumbs"
import FooterOne from "@/layouts/footers/FooterOne"
import BlogArea from "./BlogArea"
import HeaderThree from "@/layouts/headers/HeaderThree"

const BlogThree = () => {
   return (
      <>
         <HeaderThree />
         <main className="fix">
            <Breadcrumbs page="Blogs" style={false} />
            <BlogArea />
           {/* <FooterNews /> */}
         </main>
         <FooterOne style={false} style_2={true} />
      </>
   )
}

export default BlogThree
