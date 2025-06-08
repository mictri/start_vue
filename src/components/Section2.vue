<template>

  <section id="section2" class="p-8 bg-gray-100">
    <div class="md:flex justify-between md:gap-8 items-center">
      <!-- Hình ảnh bên trái -->
      <div class="md:w-1/2 md:mb-0 mb-5">
         <img :src="imageSrc1" alt="title" class="w-full h-auto rounded-lg shadow-md" />
      </div>

      <!-- Nội dung bên phải -->
      <div class="md:w-1/2">
        <h2 class="text-xl font-bold text-gray-900">{{ title }}</h2>

        <!-- Block 1 -->
        <div class="mt-4 bg-white p-4 shadow rounded-lg">
          <h3 class="text-lg font-semibold text-gray-800">Giới thiệu sản phẩm</h3>
          <p class="mt-2 text-gray-700">
            Chúng tôi cung cấp các sản phẩm chất lượng cao, đáp ứng nhu cầu đa dạng của khách hàng.
          </p>
        </div>

        <!-- Block 2 -->
        <div class="mt-4 bg-white p-4 shadow rounded-lg">
          <h3 class="text-lg font-semibold text-gray-800">Lợi ích khi sử dụng sản phẩm</h3>
          <p class="mt-2 text-gray-700">
            - Độ bền cao, thiết kế hiện đại.  
            - Giá cả hợp lý, phù hợp với mọi đối tượng.  
            - Dịch vụ hỗ trợ tận tâm, bảo hành dài hạn.
          </p>
        </div>

        <!-- Danh sách sản phẩm -->
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-gray-800">Danh sách sản phẩm</h3>
          <ul class="mt-2 list-disc list-inside text-gray-700">
            <li v-for="(product, index) in products" :key="index">
              {{ product.name }} - {{ product.price }} VNĐ
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="h-[500px]"></section>

</template>


<script>
import NoImage1 from '@/assets/images/noimage.jpg';
export default {
  data() {
    return {
        imageSrc1: NoImage1,
      title: "Sản phẩm nổi bật",
      products: [
        { name: "Laptop XYZ", price: "15,000,000" },
        { name: "Điện thoại ABC", price: "8,500,000" },
        { name: "Tai nghe Bluetooth", price: "1,200,000" },
        { name: "Bàn phím cơ", price: "2,500,000" },
      ],
    };
  },
};
</script>