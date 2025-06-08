<template>
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl">My Website</h1>
      <Menu />
    </header>

        <!-- Nội dung chính -->
    <main class="flex-1">

    <!-- Section 1 -->
    <Section1 />

    <!-- Section 2  -->
    <Section2 />


    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      © 2025 My Website - All rights reserved.
    </footer>

</template>

<script>
import SmoothScroll from "smooth-scroll";
import Menu from "./components/Menu.vue";
import Section1 from "./components/Section1.vue";
import Section2 from "./components/Section2.vue";
export default {
  components: {
    Menu,
    Section1,
    Section2,
  },
  mounted() {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      easing: "easeInOutCubic",
    });
  },
};
</script>

