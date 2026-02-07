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
                    한글 입문부터 TOPIK II, 그리고 실제 대학 전공 수업까지
                    <br />
                    이어지는 흐름을 기준으로 모든 교재를 직접 설계·제작합니다.
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
                        한글 입문 ①
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
                        한글 입문 ②
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Foundations
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      가나다 한국어 2
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      기본 문장 구조와 필수 문형을 단계적으로 누적 학습합니다.
                      TOPIK II 대비를 위한 읽기·듣기 기본기를 다집니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        기본 단어장
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Vocabulary
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      코어 어휘북
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      일상·학습 필수 어휘를 빈출 기준으로 압축했습니다. 예문과
                      연어 중심이라 바로 문장으로 확장됩니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        TOPIK II
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Listening · Reading
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      패턴으로 배우는 TOPIK II
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      유형별 풀이 루틴을 먼저 만들고 반복 훈련합니다. 함정
                      포인트와 시간 배분까지 시험 운영 관점으로 설계했습니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        쓰기 노트
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Writing
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      주제별 문장 만들기
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      연결어미·전개 템플릿·표현을 ‘조립’ 방식으로 익힙니다.
                      TOPIK 쓰기부터 에세이까지 확장 가능합니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        전공 대비
                      </span>
                      <span className="text-body-color/60 text-xs font-medium">
                        Academic
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold dark:text-white">
                      캠퍼스 브릿지
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      강의식 듣기·노트·요약·레포트를 실제 과제 기준으로
                      훈련합니다. 주제별 전공 어휘는 부록으로 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/textbook.jpg"
                  alt="교재 미리보기"
                  fill
                  className="drop-shadow-three mx-auto max-w-full lg:mr-0"
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
