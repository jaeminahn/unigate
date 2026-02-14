import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="text-body-color mb-5 flex items-start text-lg font-medium">
      <span className="bg-primary/10 text-primary mt-1 mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={
                  <>
                    입문부터 전공 수업 대비까지,
                    <br />
                    모두 자체 제작 교재로
                  </>
                }
                paragraph={
                  <>
                    기초 교재 및 전공 적응 교재를 직접 제작합니다.
                    <br />
                    TOPIK은 검증된 외부 교재와 해설 노트를 바탕으로 강의합니다.
                  </>
                }
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
                      자모·발음·받침을 규칙으로 정리해 빠르게 읽고 말하게
                      만듭니다. 짧은 대화 패턴으로 기초 회화까지 연결합니다.
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
                      기본 문장 구조와 필수 문형을 누적 학습합니다. 듣기·읽기
                      기본기를 다져 TOPIK II 대비로 자연스럽게 연결합니다.
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
                      일상·학습 필수 어휘를 빈출 기준으로 정리했습니다. 예문
                      중심 구성이라 바로 문장으로 확장됩니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        TOPIK II
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Notes
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      TOPIK II 해설 노트
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      외부 교재의 핵심만 인니어로 정리합니다. 유형별 풀이
                      루틴·함정 포인트·시간 배분까지 한 번에 잡습니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        TOPIK II
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Writing Notes
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      TOPIK II 쓰기 노트
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      유형별 답안 구조와 문단 전개를 템플릿으로 제공합니다. 예시
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
                      전공별 핵심 어휘·표현과 학업 글쓰기를 훈련합니다.
                      과제·리포트·이메일 등 대학 과제 형식까지 실전으로
                      연결합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[600px] lg:mr-0">
                <Image
                  src="/images/about/textbook.png"
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
