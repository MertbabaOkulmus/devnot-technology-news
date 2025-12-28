import { notFound } from "next/navigation";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import inner_blog_data from "@/data/InnerBlogData";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

type Props = {
  params: Promise<{ id: string[] }>;
};

export default async function Page({ params }: Props) {
  const p = await params;
  const blogId = p.id?.[0];

  const blog_data = inner_blog_data.filter((items) => items.page === "blog_1");
  const single_blog = blog_data.find((item) => String(item.id) === blogId);

  if (!single_blog) {
    notFound();
  }

  return (
    <Wrapper>
      <>
        <HeaderOne />
        <main className="fix">
          <Breadcrumbs page="blogs" style={true} />
          <BlogDetailsArea style={false} single_blog={single_blog} key={single_blog?.id} />
        </main>
        <FooterOne style={false} style_2={true} />
      </>
    </Wrapper>
  );
}