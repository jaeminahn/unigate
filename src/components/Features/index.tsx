import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="curriculum"
      className="pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-28 lg:pb-14"
    >
      <div className="container">
        <SectionTitle
          title="4학기 커리큘럼 로드맵"
          paragraph={
            <>
              기초부터 실전·성과까지 이어지는 단계형 한국어 교육 과정입니다.
            </>
          }
          center
        />

        <div className="relative mt-12">
          <div className="pointer-events-none absolute top-7 left-0 hidden h-px w-full bg-black/10 lg:block" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {featuresData.map((feature, index) => (
              <SingleFeature key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-black/10" />
      </div>
    </section>
  );
};

export default Features;
