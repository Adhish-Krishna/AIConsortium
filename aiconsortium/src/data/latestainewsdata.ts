// Type definition for news items
interface NewsItem {
    id: number;
    title: string;
    description: string;
    date: string;
    source: string;
    imageUrl: string;
    url: string;
  }


const mockNewsData: NewsItem[] = [
    {
      id: 1,
      title: "OpenAI Launches GPT-5 with Enhanced Reasoning Capabilities",
      description: "The latest language model shows remarkable improvements in logical reasoning and factual accuracy compared to previous versions.",
      date: "May 15, 2023",
      source: "Tech Chronicle",
      imageUrl: "https://picsum.photos/id/1/600/400",
      url: "#"
    },
    {
      id: 2,
      title: "AI-Powered Drug Discovery Leads to Breakthrough Treatment",
      description: "Researchers used machine learning algorithms to identify a novel compound effective against treatment-resistant infections.",
      date: "May 12, 2023",
      source: "Science Daily",
      imageUrl: "https://picsum.photos/id/2/600/400",
      url: "#"
    },
    {
      id: 3,
      title: "Ethics Board Proposes New Guidelines for AI in Healthcare",
      description: "The proposed framework addresses privacy concerns and bias in medical AI systems while promoting innovation.",
      date: "May 10, 2023",
      source: "Health Tech Today",
      imageUrl: "https://picsum.photos/id/3/600/400",
      url: "#"
    },
    {
      id: 4,
      title: "AI Researcher Wins Turing Award for Neural Network Innovations",
      description: "The groundbreaking work has transformed computer vision and natural language processing capabilities.",
      date: "May 8, 2023",
      source: "AI Insider",
      imageUrl: "https://picsum.photos/id/4/600/400",
      url: "#"
    }
  ];

export {mockNewsData};
export type {NewsItem};