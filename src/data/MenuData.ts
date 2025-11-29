interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
      mega_dropdown: boolean;
      mega_menus?: {
         link: string;
         title: string;
      }[];
   }[];
}[];

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: true,
      title: "Home",
      link: "#",
      sub_menus: [
         { link: "/", title: "Home 01 - Default", mega_dropdown: false, },
         { link: "/home-two", title: "Home 02 - Gaming", mega_dropdown: false,  },
         { link: "/home-three", title: "Home 03 - Technology", mega_dropdown: false,  },
         { link: "/home-four", title: "Home 04 - Travel", mega_dropdown: false,  },
         { link: "/home-five", title: "Home 05 - Crypto", mega_dropdown: false,  },
         { link: "/home-six", title: "Home 06 - Newspaper", mega_dropdown: false, },
      ],
   },
   {
      id: 2,
      has_dropdown: false,
      title: "About Us",
      link: "/about",
   },
   {
      id: 3,
      has_dropdown: true,
      title: "Features",
      link: "#",
      sub_menus: [
         {
            link: "#",
            title: "Single Post Layout",
            mega_dropdown: true, 
            mega_menus: [
               { link: "/blog-details", title: "Single post 01" },
               { link: "/blog-details-two", title: "Single post 02", },
            ],
         },
         { link: "/author", title: "Author Details", mega_dropdown: false,  },
      ],
   },
   {
      id: 4,
      has_dropdown: true,
      title: "Categories",
      link: "#",
      sub_menus: [
         { link: "/blog", title: "Blog Default", mega_dropdown: false,  },
         { link: "/blog-2", title: "Blog Layout 02", mega_dropdown: false,  },
         { link: "/blog-3", title: "Blog Layout 03", mega_dropdown: false,  },
      ],
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
   },
];
export default menu_data;
