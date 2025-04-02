export interface SliceItem {
  id: number;
  title: string;
  stack: string[];
  image: string;
  url?: string;
  responsive: string;
}

export const rawSliceData: SliceItem[] = [
  {
    id: 1,
    title: "Modern Event Card UI",
    stack: ["HTML", "CSS", "Tailwind"],
    image: "/img/modern-event-card-ui.png",
    responsive: "Mobile",
  },
  {
    id: 2,
    title: "NFT Card",
    stack: ["Vue", "Tailwind", "Chart.js"],
    image:
      "https://cdn.dribbble.com/userupload/37535292/file/original-98366cd95ff14195be8a889063ee001b.png?format=webp&resize=640x480&vertical=center",
    responsive: "Mobile",
  },
];

export const sliceData: SliceItem[] = rawSliceData.map((item) => ({
  ...item,
  url: `/slices/${item.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")}`,
}));
