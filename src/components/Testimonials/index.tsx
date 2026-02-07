import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Nadia A.",
    designation: "연세대학교 합격",
    content:
      "편입 요강이 학교마다 달라서 혼자서는 어디부터 봐야 할지 막막했는데, 조건/서류/마감일을 현지어로 정리해줘서 방향이 바로 잡혔어요. 저는 공부 계획만 세우고 그대로 따라가면 됐습니다.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Rizky P.",
    designation: "고려대학교 합격",
    content:
      "제출 체크리스트가 진짜 편했어요. 번역/서류 포맷/업로드까지 단계별로 관리되니까 실수할 여지가 줄었습니다. 원서 스트레스가 줄어드니 공부에 집중이 되더라고요.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Siti M.",
    designation: "서강대학교 합격",
    content:
      "한글 입문 교재가 발음/받침 규칙을 ‘원리’로 정리해줘서 속도가 빨랐어요. 처음부터 읽기·말하기를 같이 잡아줘서 면접/상담 때도 자신감이 생겼습니다.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Fajar K.",
    designation: "한국외국어대학교 합격",
    content:
      "TOPIK II 준비 교재가 유형별 루틴으로 되어 있어서 시간 배분이 확 좋아졌어요. 특히 듣기에서 자주 틀리던 함정 포인트를 정리해줘서 점수가 안정적으로 올라갔습니다.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 5,
    name: "Dewi L.",
    designation: "한국외국어대학교 합격",
    content:
      "쓰기 노트가 전개 템플릿이 명확해서 글이 ‘조립’되기 시작했어요. TOPIK 쓰기뿐 아니라 자기소개/학업계획 같은 문서도 훨씬 자연스럽게 쓸 수 있게 됐습니다.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 6,
    name: "Arif S.",
    designation: "인하대학교 합격",
    content:
      "전공 대비 파트가 실제 강의식 듣기/노트/요약 중심이라 대학 수업을 미리 연습하는 느낌이었어요. 전공 주제별 어휘까지 같이 제공돼서 자료 읽는 속도가 빨라졌습니다.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-16 md:pb-10 lg:pb-14">
      <div className="container">
        <SectionTitle
          title="실제 수강생 후기"
          paragraph={
            <>
              입문부터 TOPIK II, 그리고 전공 수업 대비까지
              <br />
              교재와 커리큘럼이 실제 성과로 이어진 경험을 확인해보세요.
            </>
          }
          center
          mb="44px"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 h-px w-full bg-black/10" />
      </div>
    </section>
  );
};

export default Testimonials;
