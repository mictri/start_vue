<template>
  <nav class="bg-gray-800 text-white p-4">
    <ul class="space-y-2 flex gap-5">
      <li v-for="item in menuItems" :key="item.id" class="relative group">
        <a :href="item.url" class="block w-full text-left px-4 py-2 hover:bg-gray-700">
          {{ item.label }}
        </a>
        <ul
          v-if="item.children"
          class="absolute left-0 top-[90%] bg-gray-700 text-white w-[150px] hidden group-hover:block"
        >
          <li v-for="child in item.children" :key="child.id" class="py-1 px-2 hover:bg-gray-600">
            <a :href="child.url" class="block w-full">
              {{ child.label }}
            </a>
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
      menuItems: [
        { id: 1, label: "HOME", children: null, url: "/index.html" },
        {
          id: 2,
          label: "当院について",
          children: [
            { id: 3, label: "初めての方へ", url: "#section1" },
            { id: 4, label: "院長紹介", url: "#section2" },
            { id: 5, label: "本院紹介", url: "/about.html#" },
          ],
        },
        { id: 6, label: "診療時間・アクセス", children: null, url: "./menu.html" },
        { id: 7, label: "お知らせ", children: null, url: "./menu.html" },
      ],
    };
  },
};


</script>





