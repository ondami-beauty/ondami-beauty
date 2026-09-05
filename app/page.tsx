import { ArrowDown, ArrowUpRight, Check, Heart, MapPin, Sparkles } from 'lucide-react';

const instagramUrl = 'https://www.instagram.com/ondami_beauty/';

export default function Home() {
  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="온다미뷰티 처음으로"><span className="brand-mark">O</span><span>ONDAMI<br /><em>BEAUTY</em></span></a>
        <a className="nav-cta" href={instagramUrl} target="_blank" rel="noreferrer">예약 문의 <ArrowUpRight size={15} /></a>
      </nav>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><MapPin size={14} /> 경기 광주 태전동 · 프라이빗 뷰티 케어</p>
          <h1>거울 볼 때마다<br /><i>기분 좋은 나</i>로.</h1>
          <p className="lead">남들과 똑같은 변화가 아니라, 지금의 분위기를 가장 예쁘게 살리는 섬세한 뷰티 디자인.</p>
          <a className="button button-dark" href={instagramUrl} target="_blank" rel="noreferrer">인스타그램으로 예약 문의 <ArrowUpRight size={18} /></a>
          <p className="tiny">상담부터 케어 후 안내까지, 편하게 DM으로 물어보세요.</p>
        </div>
        <div className="hero-visual" aria-label="온다미뷰티의 감성적인 뷰티 케어 소개">
          <div className="sun-disc" /><div className="visual-card"><span>your</span><strong>best<br />feature.</strong><div className="visual-card-line" /><small>ONDAMI BEAUTY · TAEJEON</small></div>
          <div className="visual-stamp"><Sparkles size={20} /><span>natural<br />detail</span></div><p className="vertical-copy">SOFT · CLEAN · YOURS</p>
        </div>
        <a className="scroll-cue" href="#reason"><span>SCROLL TO DISCOVER</span><ArrowDown size={18} /></a>
      </section>
      <section className="reason" id="reason">
        <div className="section-label">01 — THE FEELING</div>
        <div className="reason-intro"><p className="overline">이런 날, 누구나 있죠</p><h2>‘분명 꾸몄는데’<br />어딘가 아쉬운 날.</h2></div>
        <div className="concerns">
          <article><span>01</span><p>내 이미지에 어울리는<br />디자인이 뭘지 모르겠을 때</p></article>
          <article><span>02</span><p>자연스럽게 예뻐지고 싶은데<br />과해 보일까 걱정될 때</p></article>
          <article><span>03</span><p>바쁜 일상에도 오래도록<br />정돈된 인상을 갖고 싶을 때</p></article>
        </div>
      </section>
      <section className="result">
        <div className="result-panel"><p className="overline">ONDAMI’S ANSWER</p><h2>나를 닮아서<br /><i>더 자연스러운</i> 변화.</h2><p>온다미뷰티는 한 가지 정답을 권하지 않습니다. 얼굴의 인상과 원하는 무드, 평소 라이프스타일까지 함께 살펴보며 당신에게 가장 편안한 아름다움을 찾아갑니다.</p></div>
        <div className="principles">
          <div><span><Check size={16} /></span><h3>섬세한 상담</h3><p>원하는 느낌을 충분히 듣고, 어울리는 방향을 함께 정해요.</p></div>
          <div><span><Check size={16} /></span><h3>나다운 디자인</h3><p>유행을 그대로 따르기보다, 본연의 매력을 돋보이게 해요.</p></div>
          <div><span><Check size={16} /></span><h3>편안한 케어</h3><p>처음인 분도 부담 없이, 차분한 공간에서 편안하게 받아요.</p></div>
        </div>
      </section>
      <section className="closing">
        <div className="closing-orbit">O</div><p className="overline">YOUR QUIET BEAUTY MOMENT</p><h2>오늘의 나에게<br />가장 어울리는 <i>한 끗</i>.</h2><p>태전동에서 만나는 나만의 뷰티 루틴,<br />온다미뷰티와 시작해 보세요.</p>
        <a className="button button-light" href={instagramUrl} target="_blank" rel="noreferrer">DM으로 예약하기 <ArrowUpRight size={18} /></a><p className="location"><MapPin size={15} /> 경기 광주시 태전동 · 상세 위치는 예약 시 안내</p>
      </section>
      <footer><span>© ONDAMI BEAUTY</span><a href={instagramUrl} target="_blank" rel="noreferrer"><Heart size={14} fill="currentColor" /> Instagram</a></footer>
    </main>
  );
}
