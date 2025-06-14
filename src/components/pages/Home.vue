<template>

    <div id="head-key">
      <div id="key-box" class="container2">
        <div class="wrap">
          <div class="key__info">
            <p class="txt__shadow">建設・不動産業界に、次のキャリアを。</p>
            <div class="key__logo d__flex">
              <p><img :src="img01" alt="建キャリNEXT" width="594" height="124" /></p>
              <p><img :src="img02" alt="" width="182" height="182" /></p>
            </div>
            <p class="key__note"><span>豊富な求人数</span> × <span>専門コンサル</span><small>の伴走支援</small></p>
            <div class="key__catch">
              <p class="key__check">こんな<span>職種</span>に<span>対応</span>しています！</p>
              <div class="key__tag"> <a href="#">施工管理・工事監理</a> <a href="#">賃貸管理</a> <a href="#">不動産企画・開発</a> <a href="#">設備管理・施設管理</a> <a href="#">発注者支援</a> <a href="#">不動産営業</a> <a href="#">プラントエンジニアリング</a> <a href="#">積算</a> <a href="#">設計</a> <a href="#">ほか多数</a> </div>
              <p class="bnr__shared bnr__web w272"><a href="./member/step1.html">会員登録</a></p>
            </div>
          </div>
        </div>
        <p class="key__img ob-img box__shadow">
			  <picture>
				<source media="(max-width:560px)" :src="img0301">
				 <img :src="img03" alt="" width="2672" height="1060" />
			  </picture>
       </p>


      </div>
    </div>



      <div class="logo-partner wow fadeInUp">
        <ul class="logo__infiniteslide">
          <li><a href=""><img :src="img04" alt="logo" width="340" height="134" /></a></li>
          <li><a href=""><img :src="img04" alt="logo" width="340" height="134" /></a></li>
          <li><a href=""><img :src="img04" alt="logo" width="340" height="134" /></a></li>
          <li><a href=""><img :src="img04" alt="logo" width="340" height="134" /></a></li>
          <li><a href=""><img :src="img04" alt="logo" width="340" height="134" /></a></li>
          <li><a href=""><img :src="img04" alt="logo" width="340" height="134" /></a></li>
          <li><a href=""><img :src="img04" alt="logo" width="340" height="134" /></a></li>
        </ul>
      </div>


      <div id="feature">
        <div class="wrap">
          <h2 class="heading__title__icon wow fadeInUp"><span>建キャリNEXTの<small>3つの強み</small></span></h2>
          <div class="feature__row d__flex">
            <div class="feature__col wow fadeInUp">
              <div class="feature__item">
                <p class="ob-img"><img src="@/assets/images/home/img01.webp" alt="建設業界に特化した転職エージェント" width="540" height="360" /></p>
                <dl>
                  <dt>建設業界に特化した転職エージェント</dt>
                  <dd>業界に精通したキャリアアドバイザーが、あなたのスキルや経験をヒアリングし、最適な求人を紹介します。さらに独自の非公開求人を提供し、あなたのキャリアアップを完璧に支援します。またサービスの質も評価いただき、エージェント賞を多数受賞。</dd>
                </dl>
              </div>
            </div>
            <div class="feature__col wow fadeInUp">
              <div class="feature__item">
                <p class="ob-img"><img src="@/assets/images/home/img02.webp" alt="全ての可能性を転職のプロが伝えます" width="540" height="360" /></p>
                <dl>
                  <dt>全ての可能性を転職のプロが伝えます</dt>
                  <dd>業界・職種に精通し、高い専門性を備えたコンサルタントが複数在籍。業界を超えて、あなたのスキルと経験が発揮でき、理想の将来が実現できる求人を紹介いたします。未経験でも可能性を最大限考慮してサポートします。</dd>
                </dl>
              </div>
            </div>
            <div class="feature__col wow fadeInUp">
              <div class="feature__item">
                <p class="ob-img"><img src="@/assets/images/home/img03.webp" alt="非公開求人や条件交渉をサポート" width="540" height="360" /></p>
                <dl>
                  <dt>非公開求人や条件交渉をサポート</dt>
                  <dd>一人の転職活動では辿り着けなかった可能性を私たちは二人三脚でサポートをします。また面接対策や書類作成、そして条件交渉等全てサポートをいたします。完全無料で使えるサービスなので、安心してご利用ください。</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>






</template>

<script>
import '@/assets/css/animate.min.css';
import '@/assets/css/top.css';
import img01 from '@/assets/images/home/kv_logo01.webp';
import img02 from '@/assets/images/home/kv_logo02.webp';
import img03 from '@/assets/images/home/kv.webp';
import img0301 from '@/assets/images/home/kv_sp.webp';
import img04 from '@/assets/images/home/img_dummy01.webp';
import $ from 'jquery';
export default {
    data() {
        return {
            img01,
            img02,
            img03,
            img0301,
            img04,
        }
    },
mounted() {
  this.loadScript('/src/assets/js/wow.min.js');
  this.loadScript('/src/assets/js/infiniteslidev.js');
  setTimeout(() => {
    if (window.WOW) {
      new WOW().init();
    } else {
      console.error("WOW.js chưa được tải!");
    }
      if ($.fn.infiniteslide) {
        $('.logo__infiniteslide').infiniteslide({
          speed: 30,
          direction: 'left',
          pauseonhover: false
        });
      } else {
        console.error("infiniteslide.js chưa được tải!");
      }

  }, 500);
},
  methods: {
    loadScript(url) {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    }
  }

};
</script>
