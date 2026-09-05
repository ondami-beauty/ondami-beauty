import { ArrowDown, ArrowUpRight, Check, ChevronRight, MapPin, Phone, Sparkles } from 'lucide-react';

const phone = '010-4785-0619';
const naverUrl = 'https://map.naver.com/p/search/%EC%98%A8%EB%8B%A4%EB%AF%B8%EB%B7%B0%ED%8B%B0';

export default function Home() {
  return (
    <main>
      <nav className="nav-shell"><a href="#top" className="logo-link" aria-label="온다미뷰티 처음으로"><img src="/ondami-logo.jpg" alt="온다미뷰티 로고" /></a><div className="nav-center">TAEJEON · PRIVATE 1:1 BEAUTY STUDIO</div><a className="nav-call" href={`tel:${phone}`}><Phone size={15} /> 예약 상담</a></nav>
      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline poster="/space-1.jpg"><source src="/ondami-intro.mp4" type="video/mp4" /></video><div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow"><Sparkles size={14} /> 프리미엄 1인샵 · 100% 예약제</p><h1>당신의 가장 예쁜 순간,<br /><i>온다미</i>에서.</h1><p className="hero-lead">속눈썹 · 네일 · 웨딩 전문<br />경력 20년의 섬세한 1:1 집중 관리</p><a className="button button-cream" href="#booking">예약 가능한 시간 확인하기 <ArrowDown size={17} /></a></div>
        <p className="hero-side">ONDAMI BEAUTY · GWANGJU TAEJEON</p>
      </section>
      <section className="intro"><div className="section-number">01 / ABOUT ONDAMI</div><div className="intro-text"><p className="overline">아름다움이 오는 곳</p><h2>오직 한 분만을 위한<br /><i>프라이빗한 시간.</i></h2></div><p className="intro-description">편안한 공간에서 한 분 한 분 정성껏 관리합니다. 내 눈매와 손끝에 어울리는 디자인부터 케어 후 유지 방법까지, 온다미의 시간은 오롯이 당신에게 집중됩니다.</p></section>
      <section className="services"><div className="service-card lashes"><span>01</span><h3>EYELASH</h3><p>한 올 한 올 섬세하게 분리해<br />자연스러운 눈매의 깊이를 더합니다.</p></div><div className="work-image"><img src="/beauty-work.jpg" alt="온다미뷰티 속눈썹과 네일 시술 디자인" /></div><div className="service-card nails"><span>02</span><h3>NAIL</h3><p>일상의 분위기부터 특별한 날까지,<br />나만의 무드를 손끝에 담습니다.</p></div></section>
      <section className="care"><div className="care-image"><img src="/space-1.jpg" alt="온다미뷰티 리클라이너 시술 공간" /></div><div className="care-copy"><p className="overline">LASH CARE, WITH CARE</p><h2>예쁜 건 기본,<br /><i>건강함까지.</i></h2><p>적정량의 인증 글루를 사용하고, 유지력은 물론 다음 리터치까지 건강한 속눈썹을 생각해 꼼꼼하게 시술합니다.</p><ul><li><Check size={16} /> 한 올 한 올 섬세한 분리 시술</li><li><Check size={16} /> 적정량의 인증 글루 사용</li><li><Check size={16} /> 유지력과 건강함을 함께 고려</li></ul></div></section>
      <section className="space"><div className="space-heading"><p className="overline">THE PRIVATE SPACE</p><h2>온다미의<br />편안한 공간</h2><p>리클라이너와 넉넉한 케어 공간을 갖춘<br />태전동 프라이빗 뷰티샵입니다.</p></div><div className="space-marquee" aria-label="온다미뷰티 공간 사진 슬라이드"><div className="space-track">{[1,2,3,4,1,2,3,4].map((item, index) => <img key={index} src={`/space-${item}.jpg`} alt="" />)}</div></div></section>
      <section className="booking" id="booking"><div className="booking-logo"><img src="/ondami-logo.jpg" alt="" /></div><p className="overline">RESERVATION</p><h2>나에게 어울리는<br /><i>아름다움을 예약하세요.</i></h2><p className="booking-text">속눈썹 · 네일 · 웨딩 전문 · 1:1 예약제<br />상담 후 가장 편한 시간으로 안내해 드립니다.</p><div className="booking-actions"><a className="book-card call" href={`tel:${phone}`}><span><Phone size={20} /> 전화 예약</span><strong>{phone}</strong><ChevronRight size={20} /></a><a className="book-card naver" href={naverUrl} target="_blank" rel="noreferrer"><span>N 네이버 예약</span><strong>예약 페이지 열기</strong><ArrowUpRight size={20} /></a><a className="book-card kakao" href={`sms:${phone}`}><span>톡 카카오 상담</span><strong>문의 남기기</strong><ChevronRight size={20} /></a></div><p className="booking-note"><MapPin size={14} /> 경기 광주 태전동 · 상세 위치는 예약 확정 시 안내</p></section>
      <footer><span>© ONDAMI BEAUTY</span><a href={`tel:${phone}`}>{phone}</a></footer>
    </main>
  );
}
