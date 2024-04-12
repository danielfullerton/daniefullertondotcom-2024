export interface ArticleMetadataEntry {
  title: string;
  fileName: string;
  path: string;
  month: string;
  day: number;
  year: number;
  icon: string;
}

export const ArticlesMetadata: ArticleMetadataEntry[] = [
  {
    title: "Test Article",
    fileName: "test-article",
    path: "test-article",
    month: "April",
    day: 11,
    year: 2024,
    icon: "https://static.vecteezy.com/system/resources/previews/032/499/784/non_2x/happy-new-year-2024-number-2024-3d-gold-free-png.png",
  },
];
