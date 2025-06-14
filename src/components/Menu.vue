<template>
        <p class="logo"><a href="index.html"><img :src="h_img01" alt="建キャリNEXT" width="504" height="78"></a></p>
        <div class="header-nav">
          <ul class="nav__menu d__flex">
            <li v-for="(item, index) in menuItems" :key="index">
              <a :href="item.link">{{ item.text }}</a>
              <ul v-if="item.children">
                <li v-for="(subItem, subIndex) in item.children" :key="subIndex">
                  <a :href="subItem.link">{{ subItem.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="nav__top">
            <li v-for="(topItem, topIndex) in topMenuItems" :key="topIndex">
              <a :href="topItem.link">{{ topItem.text }}</a>
            </li>
          </ul>
          <p class="favourite"><a href="./recruit/interest.html"><img :src="h_img02" alt="気になるリスト" width="116" height="116"></a></p>
          <p class="bnr__shared bnr__web"><a href="./member/step1.html">会員登録</a></p>
        </div>

</template>

<script>
import h_img01 from '@/assets/images/shared/logo.webp';
import h_img02 from '@/assets/images/shared/icon_heart.webp';
export default {
  data() {
    return {
      h_img01,
      h_img02,
      menuItems: [
        { text: '求人を探す', link: './recruit/index.html'},
        { text: 'サービス紹介', link: './service.html',
        children: [
          { text: 'about', link: './about.html' },
          { text: 'scene', link: './scene.html' },
          { text: 'concept', link: './concept.html' },
        ]
        },
        { text: 'コンサルタント紹介', link: './conslultant/index.html'},
        { text: 'お役立ち情報', link: './useful-info/index.html' },
        { text: '会社概要', link: 'company.html' }
      ],
      topMenuItems: [
        { text: '人材をお求めの企業様へ', link: './corp-service/index.html' },
        { text: 'お問い合わせ', link: './contact/index.html' }
      ]
    };
  }
}



</script>





