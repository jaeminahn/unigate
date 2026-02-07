import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-start">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="border-body-color/[.15] mb-12 rounded-2xl border bg-white/60 p-8 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-[55px] lg:mb-5 lg:p-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                상담 신청
              </h2>
              <p className="text-body-color mb-12 text-base font-medium">
                아래에 정보를 남겨주시면 <br className="block lg:hidden" />
                이메일로 빠르게 안내드리겠습니다.
              </p>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-black"
                      >
                        이름
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="이름을 입력해주세요"
                        className="border-body-color/[.15] focus:border-primary w-full rounded-2xl border bg-white/70 px-5 py-3 text-sm text-black outline-hidden transition placeholder:text-black/40"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-black"
                      >
                        이메일
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="이메일을 입력해주세요"
                        className="border-body-color/[.15] focus:border-primary w-full rounded-2xl border bg-white/70 px-5 py-3 text-sm text-black outline-hidden transition placeholder:text-black/40"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="target"
                        className="mb-2 block text-sm font-semibold text-black"
                      >
                        목표 대학/전공 (선택)
                      </label>
                      <input
                        id="target"
                        type="text"
                        placeholder="예: 경영학 / 수도권 대학"
                        className="border-body-color/[.15] focus:border-primary w-full rounded-2xl border bg-white/70 px-5 py-3 text-sm text-black outline-hidden transition placeholder:text-black/40"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-sm font-semibold text-black"
                      >
                        지원 시기 (선택)
                      </label>
                      <input
                        id="timeline"
                        type="text"
                        placeholder="예: 2026년 9월 지원"
                        className="border-body-color/[.15] focus:border-primary w-full rounded-2xl border bg-white/70 px-5 py-3 text-sm text-black outline-hidden transition placeholder:text-black/40"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-black"
                      >
                        문의 내용
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="현재 상황(학력/학점/한국어 수준)과 궁금한 점을 간단히 적어주세요."
                        className="border-body-color/[.15] focus:border-primary w-full resize-none rounded-2xl border bg-white/70 px-5 py-3 text-sm text-black outline-hidden transition placeholder:text-black/40"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 rounded-2xl px-9 py-4 text-base font-semibold text-white transition"
                    >
                      상담 신청하기
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
