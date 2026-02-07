import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-2xl leading-tight font-bold text-black sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
                  편입학 이후까지 책임지는 온라인 한국어 교육
                </h1>
                <p className="text-body-color dark:text-body-color-dark mb-12 text-base leading-relaxed! sm:text-lg md:text-xl">
                  협약 대학 재학생을 대상으로 한국 대학 편입학을 대비한
                  <br />
                  온라인 한국어 교육 서비스를 제공합니다.
                  <br />
                  편입학 이후 학업 환경에 즉시 활용할 수 있는
                  <br />
                  한국어 역량을 체계적으로 배양합니다.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="https://lms.unigate.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xs bg-black px-8 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    <ExternalLink className="h-5 w-5" />
                    LMS 바로가기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 z-[-1] opacity-40 lg:opacity-70">
          <svg
            width="560"
            height="360"
            viewBox="0 0 560 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 300C140 220 260 220 360 250C430 270 500 260 560 230"
              stroke="#4A6CF7"
              strokeOpacity="0.25"
              strokeWidth="1.5"
            />
            <path
              d="M0 260C120 190 260 180 380 210C460 230 520 220 560 200"
              stroke="#4A6CF7"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
            <path
              d="M80 330C200 250 340 260 460 290"
              stroke="#4A6CF7"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 z-[-1] opacity-40 lg:opacity-70">
          <svg
            width="520"
            height="260"
            viewBox="0 0 520 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-20 160C100 120 220 130 320 160C400 185 460 190 520 180"
              stroke="#4A6CF7"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            />
            <path
              d="M-20 200C120 170 260 170 360 200C440 225 480 230 520 220"
              stroke="#4A6CF7"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
