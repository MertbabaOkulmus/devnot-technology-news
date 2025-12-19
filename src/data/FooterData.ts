interface DataType {
   id: number;
   title: string;
   class_name: string;
   footer_link: {
      link: string;
      title: string;
   }[];
}[];

const footer_data: DataType[] = [
   {
      id: 1,
      title: "Company",
      class_name: "col-lg-2 col-md-5",
      footer_link: [
         { link: "/about", title: "About Us" },
         { link: "/contact", title: "The Test Kitchen" },
         { link: "/contact", title: "Podcast" },
         { link: "/contact", title: "Events" },
         { link: "/contact", title: "Jobs" },
      ]
   },
   {
      id: 2,
      title: "Get Help",
      class_name: "col-lg-3 col-md-4",
      footer_link: [
         { link: "/contact", title: "Contact & Faq" },
         { link: "/contact", title: "Oders & Returns" },
         { link: "/contact", title: "Gift Cards" },
         { link: "/contact", title: "Register" },
         { link: "/contact", title: "Catalog" },
      ]
   }
];

export default footer_data;