<template>
  <section id="section1" class="md:flex items-center p-8 bg-gray-100 gap-10">
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

  <section class="h-[500px]"></section>


</template>


<script>
import NoImage1 from '@/assets/images/noimage.jpg';
export default {
  data() {
    return {
      imageSrc1: NoImage1,
    };
  },
};
</script>



