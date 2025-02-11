<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GoTopCase from '@/components/GoTopCase.vue'

// 定義按鈕是否可見的狀態
const isButtonVisible = ref(false)

const checkScroll = () => {
    const threshold = window.innerHeight * 0.8
    isButtonVisible.value = window.scrollY > threshold
}

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

onMounted(() => {
    window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
    <GoTopCase v-if="isButtonVisible" @click="scrollTop" />
    <RouterView />

    <!-- footer-大外框 -->
    <footer
        class="w-full h-auto font-bold pt-[95px] pb-[34px] max-sm:pt-[46px] shadow-[0_-4px_30px_0px_rgba(0,0,0,0.15)]">
        <!-- 內容區 -->
        <section
            class="max-w-[1440px] w-full m-auto flex mb-[80px] max-sm:mb-[35px] justify-between max-xl:justify-center max-2xl:px-[50px] max-md:px-[25px] flex-wrap">
            <!-- 主要內文 -->
            <!-- logo/icon -->
            <div class="flex flex-col w-auto max-xl:mb-[80px] max-sm:mb-[40px]">
                <img src="../assets/img/navandfooter/busicon-logo.png" alt="busicon-bottom"
                    class="mb-[20px] max-2xl:w-[200px] max-sm:w-[115px]">
                <div class=" px-[10px] flex justify-between">
                    <a href="">
                        <img src="../assets/img/navandfooter/FB.png" alt="FB"
                            class="h-[58px] max-2xl:h-[45px] max-sm:hidden">
                    </a>
                    <a href="">
                        <img src="../assets/img/navandfooter/LINE.png" alt="LINE"
                            class="h-[58px] max-2xl:h-[45px] max-sm:hidden">
                    </a>
                    <a href="">
                        <img src="../assets/img/navandfooter/Mail.png" alt="Mail"
                            class="h-[58px] max-2xl:h-[45px] max-sm:hidden">
                    </a>
                </div>
            </div>
            <!-- 聯絡資訊 -->
            <div
                class="h-fit mt-1 max-xl:ml-[80px] max-sm:ml-[18px] pl-[35px] max-md:pl-[12px] border-l-[10px] max-md:border-l-[4px] border-l-[#DD4F1B] text-[24px] max-2xl:text-[18px] max-sm:text-[10px] flex flex-col gap-[20px] max-2xl:gap-[14px] max-sm:gap-[6px]">
                <span>地址：台中市西區民權路235號</span>
                <span>TEL：(04) 2305-5898</span>
                <span>傳真：(04) 2305-5898 </span>
                <span>免付費服務電話：0800-800-126</span>
            </div>
            <!-- 網站地圖 -->
            <div
                class="flex flex-row text-[20px] max-2xl:text-[16px] max-sm:text-[14px] font-bold gap-[42px] max-xl:gap-[60px] max-sm:gap-[32px] max-sm:ml-1">
                <div class="flex flex-col gap-[16px]">
                    <div class="flex border-b border-b-[#3b3b3b] items-center">
                        <span class="pr-[52px] py-[5.5px] max-sm:pr-[28px] max-sm:py-[2.5px]">關於我們</span>
                    </div>
                    <router-link to="/aboutus"
                        class="text-[18px] max-2xl:text-[14px] max-sm:text-[12px]  flex items-center gap-[25px] max-sm:gap-[11px] group"
                        @click="scrollTop">
                        <span class="group-hover:text-[#DD4F1B] ">公司簡介</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px] max-sm:text-[#DD4F1B]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-current group-hover:fill-[#DD4F1B]"
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#3B3B3B" />
                        </svg>
                    </router-link>
                    <router-link to="/stopinfo"
                        class="text-[18px] max-2xl:text-[14px] max-sm:text-[12px]  flex items-center gap-[25px] max-sm:gap-[11px] group"
                        @click="scrollTop">
                        <span class="group-hover:text-[#DD4F1B]">站場簡介</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px] max-sm:text-[#DD4F1B]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-current group-hover:fill-[#DD4F1B]"
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#3B3B3B" />
                        </svg>
                    </router-link>
                </div>
                <div class="flex flex-col gap-[16px]">
                    <div class="flex border-b border-b-[#3b3b3b] items-center">
                        <span class="pr-[52px] py-[5.5px] max-sm:pr-[28px] max-sm:py-[2.5px]">中客服務</span>
                    </div>
                    <router-link to="/lostinfo"
                        class="text-[18px] max-2xl:text-[14px] max-sm:text-[12px] flex items-center gap-[25px] max-sm:gap-[11px] group"
                        @click="scrollTop">
                        <span class="group-hover:text-[#DD4F1B]">失物招領</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px] max-sm:text-[#DD4F1B]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-current group-hover:fill-[#DD4F1B]"
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#3B3B3B" />
                        </svg>
                    </router-link>
                    <router-link to="/contactus"
                        class="text-[18px] max-2xl:text-[14px] max-sm:text-[12px] flex items-center gap-[25px] max-sm:gap-[11px] group"
                        @click="scrollTop">
                        <span class="group-hover:text-[#DD4F1B]">聯絡我們</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px] max-sm:text-[#DD4F1B]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-current group-hover:fill-[#DD4F1B]"
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#3B3B3B" />
                        </svg>
                    </router-link>
                    <router-link to="/contractone"
                        class="text-[18px] max-2xl:text-[14px] max-sm:text-[12px] flex items-center gap-[25px] max-sm:gap-[11px] group"
                        @click="scrollTop">
                        <span class="group-hover:text-[#DD4F1B]">運送契約</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px] max-sm:text-[#DD4F1B]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-current group-hover:fill-[#DD4F1B]"
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#3B3B3B" />
                        </svg>
                    </router-link>
                </div>
                <div class="flex flex-col gap-[13px]">
                    <router-link to="/allnews" class="flex items-center gap-[17px] max-sm:gap-[10px] group"
                        @click="scrollTop">
                        <span class="py-[5.5px] max-sm:py-[2.5px]">最新公告</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#DD4F1B" />
                        </svg>
                    </router-link>
                    <router-link to="/routesearch" class="flex items-center gap-[17px] max-sm:gap-[10px] group"
                        @click="scrollTop">
                        <span class="py-[5.5px] max-sm:py-[2.5px]">路線查詢</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#DD4F1B" />
                        </svg>
                    </router-link>
                    <router-link to="/rentbus" class="flex items-center gap-[17px] max-sm:gap-[10px] group"
                        @click="scrollTop">
                        <span class="py-[5.5px] max-sm:py-[2.5px]">包車服務</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#DD4F1B" />
                        </svg>
                    </router-link>
                    <router-link to="/hire" class="flex items-center gap-[17px] max-sm:gap-[10px] group"
                        @click="scrollTop">
                        <span class="py-[5.5px]">人力招募</span>
                        <svg class="transition ease duration-300 group-hover:translate-x-[10px] max-sm:w-[10px] max-sm:h-[9px]"
                            width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                fill="#DD4F1B" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </section>
        <!-- 手機版的社群icon -->
        <div class="hidden max-sm:flex justify-center gap-[18px] mb-[15px]">
            <a href="">
                <img src="../assets/img/navandfooter/FB.png" alt="FB" class="h-[30px]">
            </a>
            <a href="">
                <img src="../assets/img/navandfooter/LINE.png" alt="LINE"
                    class="h-[30px]">
            </a>
            <a href="">
                <img src="../assets/img/navandfooter/Mail.png" alt="Mail"
                    class="h-[30px]">
            </a>
        </div>
        <!-- copyright -->
        <div
            class="max-2xl:px-[50px] max-md:px-[25px] text-center max-xl:text-left max-sm:text-center text-[18px] max-2xl:text-[14px] max-sm:text-[10px] max-sm:font-normal">
            <span>©台中汽車客運股份有限公司</span>
            <br class="hidden max-sm:block">
            <span>2012@tcbus.com.tw All Rights Reserved</span>
        </div>
    </footer>

</template>

<style></style>