import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "한국 대학 편입학 추천 대학 TOP 7",
    paragraph:
      "한국 대학을 전형 방식, 경쟁률, 전공 다양성 기준으로 정리했습니다. 처음 편입학을 고민하는 학생에게 적합한 리스트입니다.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Jamie Ahn",
      image: "/images/blog/author-02.png",
      designation: "편입학 컨설팅",
    },
    tags: ["대학추천"],
    publishDate: "2026.02",
  },
  {
    id: 2,
    title: "한국 대학 편입학, 학교·전공별 준비 난이도",
    paragraph:
      "같은 편입학이라도 학교·전공별로 요구 조건은 크게 다릅니다. 학점, 한국어 성적, 서류 비중을 기준으로 난이도를 비교해드립니다.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Jamie Ahn",
      image: "/images/blog/author-02.png",
      designation: "편입학 컨설팅",
    },
    tags: ["전형"],
    publishDate: "2026.02",
  },
  {
    id: 3,
    title: "편입학 준비생이 가장 많이 묻는 질문 10가지",
    paragraph:
      "TOPIK 몇 급이 필요할까? 전공이 달라도 지원 가능할까? 학점이 낮아도 가능할까? 실제 상담에서 가장 많이 나오는 질문을 정리했습니다.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Chanjin Park",
      image: "/images/blog/author-03.png",
      designation: "편입학 컨설팅",
    },
    tags: ["가이드"],
    publishDate: "2026.02",
  },
];

export default blogData;
