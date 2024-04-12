import { getArticleDate } from "./util/date";

export interface ArticleMetadataEntry {
  title: string;
  fileName: string;
  path: string;
  month: string;
  day: number;
  year: number;
  icon: string;
}

const sortArticlesByDateDesc = (articles: ArticleMetadataEntry[]) =>
  articles.sort((a, b) => {
    // Convert date strings to Date objects
    const dateA = new Date(getArticleDate(a.month, a.day, a.year));
    const dateB = new Date(getArticleDate(b.month, b.day, b.year));

    // Compare dates to sort in descending order
    return dateB.getTime() - dateA.getTime();
  });

export const ArticlesMetadata: ArticleMetadataEntry[] = sortArticlesByDateDesc([
  {
    title: "2021 In Review",
    fileName: "2021 In Review",
    path: "2021 In Review",
    month: "January",
    day: 30,
    year: 2022,
    icon: "https://www.adcogov.org/sites/default/files/2021.png",
  },
  {
    title: "Converting Markdown to HTML",
    fileName: "convert-markdown-to-html",
    path: "convert-markdown-to-html",
    month: "May",
    day: 23,
    year: 2022,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png",
  },
  {
    title: "How to Connect a Google Domain to AWS Route 53",
    fileName: "how-to-connect-a-google-domain-to-aws-route-53",
    path: "how-to-connect-a-google-domain-to-aws-route-53",
    month: "February",
    day: 3,
    year: 2022,
    icon: "https://www.wackyprint.com/designcodes/0/1/110/11100253.png",
  },
  {
    title: "2022/2023 Retrospective",
    fileName: "2023 Retrospective",
    path: "2023 Retrospective",
    month: "April",
    day: 12,
    year: 2024,
    icon: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1045474846W10000H3165/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/2023-sticker.jpg",
  },
]);
