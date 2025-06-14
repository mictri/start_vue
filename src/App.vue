<template>
  <main>
    <!-- Header -->

<header class="header-box">
  <div class="wrap">
 <Menu />
  </div>
</header>


        <!-- Nội dung chính -->
<section>



<Home />

    <!-- Section 1 -->
    <Section1 />

    <!-- Section 2  -->
    <Section2 />


</section>

    <!-- Footer -->
    <footer class="footer">
      © 2025 My Website - All rights reserved.
    </footer>

  </main>
</template>

<script>

import SmoothScroll from "smooth-scroll";
import Menu from "./components/Menu.vue";
import Home from "./components/pages/Home.vue";
export default {
  components: {
    Menu,
    Home,
  },
  mounted() {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      easing: "easeInOutCubic",
    });
  },
};
</script>

