import Breadcrumbs from "@/components/common/Breadcrumbs";
import FooterOne from "@/layouts/footers/FooterOne";
import BlogArea from "./BlogArea";
import FooterNews from "@/components/common/FooterNews";
import HeaderThree from "@/layouts/headers/HeaderThree";

const Blog = () => {
  return (
    <>
      <HeaderThree />
      <main className="fix">
        <Breadcrumbs page="blogs" style={false} />
        <BlogArea style={false} blogs={[]} />
        <FooterNews />
      </main>
      <FooterOne style={false} style_2={true} />
    </>
  );
};

export default Blog;