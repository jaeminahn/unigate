"use client";

import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import OfferList from "./OfferList";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 pb-10 md:pb-12 lg:pb-14">
      <div className="container">
        <SectionTitle
          title="수강 옵션"
          paragraph={
            <>
              정규 학기 과정은 협약 대학에서 진행됩니다.
              <br />
              현재 인도네시아 수강생에 한하여 서비스를 제공합니다.
            </>
          }
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          <PricingBox
            badge="ENTRY"
            packageName="한국어 기초 1개월"
            priceLabel="IDR 99.000"
            subtitle="‘가나다라’부터 발음·받침·기초 회화를 4주 안에 빠르게 잡는 입문 코스"
            ctaLabel="지금 바로 시작하기"
            ctaHref="/"
            ctaVariant="primary"
            note="입문 과정은 본 사이트에서 바로 수강할 수 있습니다."
          >
            <OfferList text="한글·발음·받침 빠른 정리" status="active" />
            <OfferList text="기초 회화 패턴 & 필수 표현" status="active" />
            <OfferList text="주간 과제 + 간단 피드백" status="inactive" />
            <OfferList text="TOPIK II 대비(3–4급) 트랙" status="inactive" />
            <OfferList text="전공 한국어/레포트 훈련" status="inactive" />
          </PricingBox>

          <PricingBox
            isFeatured
            badge="SEMESTER"
            packageName="정규 학기 과정 (총 4학기)"
            priceLabel={
              <>
                IDR 4.000.000
                <span className="ml-1 text-sm font-normal opacity-70">
                  / 학기
                </span>
              </>
            }
            subtitle="TOPIK II 준비부터 전공 한국어까지 연결되는 커리큘럼"
            ctaLabel="협약 대학 리스트 보기"
            ctaHref="/"
            ctaVariant="outline"
            note="정규 과정은 협약 대학에서만 수강 가능합니다."
          >
            <OfferList text="듣기·읽기 유형 훈련" status="active" />
            <OfferList text="문장 쓰기 실전 연습" status="active" />
            <OfferList text="주간 과제 + 간단 피드백" status="active" />
            <OfferList text="TOPIK II 대비(3–4급) 트랙" status="active" />
            <OfferList text="전공 한국어/레포트 훈련" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
