const NewsLatterBox = () => {
  return (
    <div className="border-body-color/[.15] relative z-10 rounded-2xl border bg-white/60 p-8 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-3 text-xl leading-tight font-bold text-black sm:text-2xl">
        편입학 뉴스레터 구독
      </h3>

      <p className="border-body-color/25 text-body-color mb-8 text-sm leading-relaxed">
        한국 대학 편입을 준비하는 외국인 학생을 위한 요강 해설, 전형 변화, 대학
        추천, 실전 팁을 정리해 이메일로 전해드립니다.
      </p>

      <div>
        <label className="mb-2 block text-sm font-semibold text-black">
          이메일
        </label>
        <input
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          className="border-body-color/[.15] focus:border-primary mb-5 w-full rounded-2xl border bg-white/70 px-5 py-3 text-sm text-black outline-hidden transition placeholder:text-black/40"
        />

        <input
          type="submit"
          value="뉴스레터 구독하기"
          className="bg-primary hover:bg-primary/90 mb-4 flex w-full cursor-pointer items-center justify-center rounded-2xl px-9 py-4 text-base font-semibold text-white transition"
        />
      </div>
    </div>
  );
};

export default NewsLatterBox;
