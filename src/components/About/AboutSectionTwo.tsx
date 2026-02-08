import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-10 lg:pb-14">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[980px]">
                <SectionTitle
                  title={
                    <>
                      공부에만 집중하세요.
                      <br />
                      원스톱 편입학 컨설팅
                    </>
                  }
                  paragraph={
                    <>
                      학교별 요강 분석부터 서류 준비·제출 일정 관리까지
                      <br />
                      복잡한 과정을 한 흐름으로 정리해드립니다.
                    </>
                  }
                  center
                  mb="44px"
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        입시 요강
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold">
                      현지어 편입학 요강 제공
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      학교별 지원 조건, 필수 서류, 마감 일정, 예외 규정을
                      현지어로 정리해 제공합니다. 무엇을 언제까지 준비할지
                      한눈에 보이게 만듭니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        사례 DB
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold">
                      성공 사례 데이터베이스 제공
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      전공·학점·이수 과목·서류 조합별 합격 사례를 모아
                      제공합니다. 감이 아니라 데이터로 지원 전략을 설계할 수
                      있습니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        일정 관리
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold">
                      학교별 지원 일정 통합 관리
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      마감일, 추천서 요청 시점, 성적표 발급·번역·업로드 일정까지
                      하나의 타임라인으로 관리합니다. 중요한 날짜를 놓쳐 기회를
                      잃는 일을 막습니다.
                    </p>
                  </div>

                  <div className="group border-body-color/[.15] rounded-2xl border bg-white/60 p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                        제출 지원
                      </span>
                    </div>
                    <p className="text-dark mb-2 text-base font-semibold">
                      서류 준비부터 제출까지 동행
                    </p>
                    <p className="text-body-color text-sm leading-relaxed">
                      체크리스트 기반으로 서류 누락을 막고,
                      포맷·번역·업로드·제출 흐름까지 지원합니다. 학생은 성적과
                      학업에만 집중하면 됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
