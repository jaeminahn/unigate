import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="자체 개발 교재로 기초부터 전공까지"
                paragraph="기초 한국어부터 TOPIK·전공 적응까지 자체 교재와 해설 노트로 단계를 연계합니다."
                center
                mb="44px"
              />

              <div className="mx-auto mb-12 max-w-[570px] lg:mb-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        기초 교재 ①
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Foundations
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      가나다 한국어 1
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      자음·모음·받침 원리를 정리하고 간결한 회화 패턴으로
                      읽기와 기초 말하기를 동시에 익힙니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        기초 교재 ②
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Foundations
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      가나다 한국어 2
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      기본 문장 구조와 필수 문형을 누적하며 듣기·읽기 기본기를
                      다져 TOPIK II 대비로 연결합니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        보조 교재
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Vocabulary
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      코어 어휘북
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      일상·학습 필수 어휘를 빈출 기준으로 선별하고 예문 중심으로
                      구성해 단어를 문장으로 바로 확장합니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        TOPIK II
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Extras
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      TOPIK II 해설 노트
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      외부 교재의 핵심 유형을 인니어로 정리하고 풀이 루틴,
                      함정 포인트, 시간 배분까지 한 번에 다룹니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        TOPIK II
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Extras
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      TOPIK II 쓰기 노트
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      유형별 답안 구조와 문단 전개를 템플릿으로 제공하고 예시
                      답안과 표현 확장으로 4급 수준 쓰기를 목표로 합니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        전공 적응
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Academic
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      캠퍼스 브릿지
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      전공별 핵심 어휘와 학업 글쓰기를 훈련하고 과제·리포트·이메일
                      등 대학 과제 형식까지 실전으로 연결합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[600px] lg:mr-0">
                <Image
                  src="/images/about/textbook.jpg"
                  alt="교재 미리보기"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
