export interface SliceItem {
  id: number;
  title: string;
  stack: string[];
  image: string;
  url?: string;
}

export const rawSliceData: SliceItem[] = [
  {
    id: 1,
    title: "Modern Event Card UI",
    stack: ["HTML", "CSS", "Tailwind"],
    image:
      "https://cdn.dribbble.com/userupload/15687851/file/original-43bd8f4a26ab87ef9d81ad3848a46b0e.jpg?format=webp&resize=640x480&vertical=center",
  },
  {
    id: 2,
    title: "Dashboard UI",
    stack: ["Vue", "Tailwind", "Chart.js"],
    image:
      "https://cdn.dribbble.com/userupload/37535292/file/original-98366cd95ff14195be8a889063ee001b.png?format=webp&resize=640x480&vertical=center",
  },
  {
    id: 3,
    title: "Landing Page",
    stack: ["Next.js", "Framer Motion", "Tailwind"],
    image:
      "https://cdn.dribbble.com/userupload/31833335/file/still-901971a9a4d98eada3e31c419378609c.png?format=webp&resize=640x480&vertical=center",
  },
  {
    id: 4,
    title: "E-Commerce Product Page",
    stack: ["React", "Styled Components", "Redux"],
    image:
      "https://cdn.dribbble.com/userupload/18742075/file/original-612063b58e0bbea8b4ebba84d9588538.jpg?format=webp&resize=640x480&vertical=center",
  },
  {
    id: 5,
    title: "Profile Page",
    stack: ["Vue", "Pinia", "Tailwind"],
    image: "https://cdn.dribbble.com/userupload/14315118/file/original-b2935cc0cdda977c7b13b329b6e03893.png?format=webp&resize=640x480&vertical=center",
  },
];

export const sliceData: SliceItem[] = rawSliceData.map((item) => ({
  ...item,
  url: `/slices/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
}));
