import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchCategories, Category } from '@/services';
import cat_img1 from "@/assets/img/images/t_cat_img02.jpg";
import cat_img2 from "@/assets/img/images/t_cat_img01.jpg";
import cat_img3 from "@/assets/img/images/t_cat_img05.jpg";
import cat_img4 from "@/assets/img/images/t_cat_img04.jpg";
import cat_img5 from "@/assets/img/images/t_cat_img06.jpg";
import cat_img6 from "@/assets/img/images/t_cat_img07.jpg";
import cat_img7 from "@/assets/img/images/t_cat_img07.jpg";

const staticImages = [cat_img1.src, cat_img2.src, cat_img3.src, cat_img4.src, cat_img5.src, cat_img6.src, cat_img7.src];

const DEFAULT_IMAGE_URL = "/assets/img/images/default-category.jpg";


const CategoryComponent = () => {
   const [categories, setCategories] = useState<Category[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const loadCategories = async () => {
         try {
            const data: Category[] = await fetchCategories();
            setCategories(data);
         } catch (err) {
            setError("Kategoriler yüklenemedi.");
         } finally {
            setLoading(false);
         }
      };

      loadCategories();
   }, []);

   const getCategoryImageUrl = (category: Category, index: number): string => {
      const staticImage = staticImages[index % staticImages.length];
      return staticImage || DEFAULT_IMAGE_URL;
   };


   if (loading) {
      return (
         <>
            <div className="widget-title mb-30">
               <h6 className="title">Haber Kategorileri</h6>
               <div className="section-title-line"></div>
            </div>
            <div className="sidebar-categories">
               <ul className="list-wrap">
                  {[...Array(4)].map((_, index) => (
                     <li key={index} className="loading-placeholder"
                        style={{ height: '80px', background: '#e0e0e0', marginBottom: '10px', borderRadius: '4px', animation: 'pulse 1.5s infinite' }}>
                     </li>
                  ))}
               </ul>
            </div>
         </>
      );
   }

   if (error) {
      return (
         <div className="widget-title mb-30">
            <h6 className="title">Haber Kategorileri</h6>
            <div className="section-title-line"></div>
            <p className="text-danger mt-3">{error}</p>
         </div>
      );
   }

   return (
      <>
         <div className="widget-title mb-30">
            <h6 className="title">Haber Kategorileri</h6>
            <div className="section-title-line"></div>
         </div>
         <div className="sidebar-categories">
            <ul className="list-wrap">
               {categories.map((category, index) => {
                  const imageUrl = getCategoryImageUrl(category, index);
                  const href = `/category/${category.slug}`;

                  return (
                     <li key={category.id}>
                        <Link href={href} style={{ backgroundImage: `url(${imageUrl})` }}>
                           <span className="post-tag post-tag-three">{category.name}</span>
                           <span className="right-arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                 <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                                 <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="currentcolor"></path>
                              </svg>
                           </span>
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>
      </>
   );
};

export default CategoryComponent;