"use client";

import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import OfferList from "./OfferList";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-10 pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-28 lg:pb-14"
    >
      <div className="container">
        <SectionTitle
          title="수강 옵션"
          paragraph="입문은 사이트에서 가볍게 시작하고, 정규 학기 과정은 협약 대학에서 진행됩니다."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {/* Entry (1개월, 매우 저렴) */}
          <PricingBox
            badge="ENTRY"
            packageName="한국어 기초 1개월"
            priceLabel="IDR 99,000"
            subtitle="‘가나다라’부터 발음·받침·기초 회화를 4주 안에 빠르게 잡는 입문 코스"
            ctaLabel="지금 바로 시작하기"
            ctaHref="/"
            ctaVariant="primary"
          >
            <OfferList text="한글·발음·받침 빠른 정리" status="active" />
            <OfferList text="기초 회화 패턴 & 필수 표현" status="active" />
            <OfferList text="주간 과제 + 간단 피드백" status="active" />
            <OfferList text="TOPIK II 대비(3–4급) 트랙" status="inactive" />
            <OfferList text="전공 한국어/레포트 훈련" status="inactive" />
          </PricingBox>

          {/* Semester Program (4학기) */}
          <PricingBox
            isFeatured
            badge="SEMESTER"
            packageName="정규 학기 과정 (총 4학기)"
            priceLabel="IDR 4,000,000+ / 학기"
            subtitle="TOPIK 3–4급 + 전공 한국어까지 연결되는 4학기 커리큘럼"
            ctaLabel="협약 대학 리스트 보기"
            ctaHref="/"
            ctaVariant="outline"
            note="정규 과정은 협약 대학에서만 수강 가능합니다."
          >
            <OfferList text="총 4학기 로드맵 기반 운영" status="active" />
            <OfferList text="TOPIK II 대비 (3–4급 목표)" status="active" />
            <OfferList text="듣기·읽기 유형 훈련 + 기출" status="active" />
            <OfferList text="쓰기 기본 틀 & 실전 연습" status="active" />
            <OfferList text="3학기부터 전공 한국어 병행" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
