<template>
  <section class="md:flex items-center p-8 bg-gray-100 gap-10">
    <!-- Phần trái: Tiêu đề + nội dung + button -->
   <div class="md:w-1/2 info mb-6 md:mb-0">
        <h2 class="text-xl font-bold text-gray-900">Giới thiệu về dịch vụ</h2>
        <p class="mt-2 text-gray-700">
            Chúng tôi cung cấp các giải pháp tiên tiến giúp doanh nghiệp phát triển mạnh mẽ trong thời đại công nghệ.
        </p>
        <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800">Lợi ích khi sử dụng dịch vụ của chúng tôi</h3>


        <p class="mt-2 text-gray-700">
            - Hỗ trợ 24/7, đảm bảo khách hàng luôn nhận được sự giúp đỡ kịp thời.  
            - Công nghệ tiên tiến, mang lại hiệu suất tối ưu.  
            - Giải pháp tùy chỉnh phù hợp với nhu cầu riêng của doanh nghiệp.
        </p>
        </div>
<div class="mb-6">
  <h3 class="text-lg font-semibold text-gray-800 mb-2">Khách hàng nói gì?</h3>
  <div class="bg-white p-4 shadow rounded-lg">
    <p class="text-gray-700 italic">
      "Dịch vụ thật tuyệt vời, giúp chúng tôi nâng cao hiệu suất đáng kể!"  
      - Anh Nam, CEO ABC Corp.
    </p>
  </div>
</div>
 <div class="mt-6">
  <a href="menu.html" class="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
    Xem chi tiết
  </a>
</div>
   </div>

    <!-- Phần phải: Hình ảnh -->
    <div class="md:w-1/2">
     <img :src="imageSrc1" alt="title" class="w-full h-auto rounded-lg shadow-md" />
    </div>
  </section>


  <section class="p-8 bg-gray-100">
    <div class="flex justify-between gap-8 items-center">
      <!-- Hình ảnh bên trái -->
      <div class="w-1/2">
        <img :src="require('@/assets/images/product.jpg')" alt="Sản phẩm" class="w-full h-auto rounded-lg shadow-md" />
      </div>

      <!-- Nội dung bên phải -->
      <div class="w-1/2">
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
