<template>
  <nav class="bg-gray-800 p-4">
    <button @click="toggleMenu" class="text-white cursor-pointer">
      ☰ Menu
    </button>
    <ul :class="{'hidden': !isOpen, 'block': isOpen}" class="md:flex md:gap-5">
      <li v-for="item in menuItems" :key="item.text" class="relative group">
        <a :href="item.link" class="text-white hover:text-blue-400">{{ item.text }}</a>
        <ul v-if="item.subItems" class="absolute left-0 mt-2 w-40 bg-gray-700 p-2 group-hover:block">
          <li v-for="subItem in item.subItems" :key="subItem.text">
            <a :href="subItem.link" class="text-white hover:text-blue-400 block p-2">{{ subItem.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>



<script>
export default {
  data() {
    return {
      isOpen: false,
      menuItems: [
        { text: "Trang chủ", link: "#" },
        { text: "Sản phẩm", link: "#", subItems: [
          { text: "Điện thoại", link: "#" },
          { text: "Laptop", link: "#" },
          { text: "Phụ kiện", link: "#" }
        ]},
        { text: "Liên hệ", link: "#" }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .hidden {
    display: none;
  }
  .block {
    display: flex;
  }
}
</style>

