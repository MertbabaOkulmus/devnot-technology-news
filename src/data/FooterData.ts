interface DataType {
   id: number;
   title: string;
   class_name: string;
   target?: string;
   footer_link: {
      link: string;
      title: string;
   }[];
}[];

const footer_data: DataType[] = [
   {
      id: 1,
      title: "Devnot",
      class_name: "col-lg-2 col-md-5",
      footer_link: [
         { link: "/about", title: "Hakkında" },
         { link: "/authors", title: "Yazarlar" },
         { link: "/team", title: "Organizasyon Ekibi" },
         { link: "/advertising", title: "Reklam & Sponsorluk" },
      ]
   },
   {
      id: 2,
      title: "Sosyal Medya",
      class_name: "col-lg-3 col-md-4",
      target: "_blank",
      footer_link: [
         { link: "https://kommunity.com/devnot/", title: "Kommunity" },
         { link: "https://linkedin.com/company/devnotcom/", title: "Linkedin" },
         { link: "https://x.com/devnot_", title: "Twitter" },
         { link: "https://www.instagram.com/devnot_com/", title: "Instagram" },
         { link: "https://www.youtube.com/c/DevnotTV", title: "Youtube" },
      ]
   },
   {
      id: 3,
      title: "Etkinlikler",
      class_name: "col-lg-3 col-md-4",
      target: "_blank",
      footer_link: [
         { link: "https://summit.devnot.com", title: "Developer Summit" },
         { link: "https://techleaders.devnot.com", title: "Tech Leaders Summit" },
         { link: "https://dotnet.devnot.com", title: "Dotnet Konferansı" },
         { link: "https://mobile.devnot.com", title: "Mobil Yazılım Konferansı" },
         { link: "https://security.devnot.com", title: "Cyber Security Summit" },
      ]
   }
];

export default footer_data;