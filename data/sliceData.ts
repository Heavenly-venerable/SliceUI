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
    stack: ["Vue", "Tailwind"],
    image: "/img/modern-event-card-ui.png",
    responsive: "Mobile",
  },
  {
    id: 2,
    title: "NFT Card",
    stack: ["Vue", "Tailwind", "VueUse"],
    image:
      "/img/nft-card.png",
    responsive: "Mobile",
  },
  {
    id: 3,
    title: "News Feed",
    stack: ["Vue", "Tailwind", "API"],
    image:
      "/img/news-feed.png",
    responsive: "Mobile",
  },
  {
    id: 4,
    title: "Profile Card",
    stack: ["Vue", "Tailwind"],
    image:
      "https://cdn.dribbble.com/userupload/19115929/file/original-9f54762dec654697acad9544d2db2921.jpg?format=webp&resize=640x480&vertical=center",
    responsive: "Mobile",
  },
  {
    id: 5,
    title: "Invoice",
    stack: ["Vue", "Tailwind"],
    image:
      "/img/invoice.png",
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
