import BlogDetailsContent from "./BlogDetailsContent"
import BlogPrevNext from "./BlogPrevNext"
import BlogSidebar from "../common-blog/BlogSidebar"
import EventDetailsContent from "./EventDetailsContent"

const BlogDetailsArea = ({ style, isEventPage = false, featuredArticleDetail = {}, featuredEventDetail = {} }: any) => {
   return (
      <section className="blog-details-area pt-60 pb-60">
         <div className="container">
            <div className="author-inner-wrap">
               <div className="row justify-content-center">
                  <div className={`col-70 ${style ? "order-0 order-xl-2" : ""}`}>
                     <div className="blog-details-wrap">
                        {isEventPage ?
                           <EventDetailsContent featuredEventDetail={featuredEventDetail} />
                           :
                           <BlogDetailsContent featuredArticleDetail={featuredArticleDetail} />
                        }
                       {/* <BlogAvatar /> 
                        <BlogPrevNext />*/}
                        {/* <BlogComment /> 
                        <BlogForm />*/}
                     </div>
                  </div>
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogDetailsArea
