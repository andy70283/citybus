<script>
export default {
    name: "StopCard",
    props: {
        cards: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        gourl(url) {
            window.open(url, '_blank');
        }
    },
};
</script>

<template>
    <div v-for="(card, key) in cards" :key="key"
        class="stop-card h-[500px] max-sm:h-[450px] flex justify-center items-center rounded-[30px] border-[2px] border-[#D9D9D9] group relative overflow-hidden shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <img :src="card.image" alt="背景圖片" class="w-full h-full object-cover">
        <span
            class="absolute text-[40px] max-2xl:text-[36px] max-md:text-[24px] px-[20px] py-[5px] border-[4px] border-white">{{
                card.name }}
        </span>
        <div
            class="absolute inset-0 bg-[#FFF7EF] p-[45px] max-2xl:p-[30px] flex flex-col items-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
            <div
                class="stop-title w-full mb-[25px] flex flex-col items-center pb-[12px] border-b-[2px] border-b-[#DD4F1B]">
                <h3 class="text-[40px] max-2xl:text-[36px] max-md:text-[24px] font-bold text-[#DD4F1B]">{{ card.name }}
                </h3>
                <p class="text-[20px] max-2xl:text-[18px] max-md:text-[16px] text-[#1B4794]">站場電話：{{ card.phone }}</p>
            </div>
            <div class="route-info w-full grow mb-[25px] text-[#3B3B3B] flex flex-col content-start">
                <!-- 路線按鈕 -->
                <span class="text-[20px] max-2xl:text-[18px] max-md:text-[16px] mb-[15px]">服務路線</span>
                <div
                    class="cards-hover text-[18px] max-2xl:text-[16px] max-md:text-[14px] flex justify-start flex-wrap gap-x-[5px] gap-y-[10px]">
                    <span v-for="routes in card.routes" :key="routes"
                        class="px-[12px] max-md:px-[8px] h-[35px] bg-white flex justify-center items-center border-[1px] border-[#D9D9D9] rounded-[15px]">
                        {{ routes }}</span>
                </div>
            </div>

            <button @click="gourl(card.url)"
                class="w-full h-[60px] max-md:h-[40px] bg-[#DD4F1B] flex gap-[15px] justify-center items-center text-white text-[24px] max-md:text-[16px] rounded-md hover:opacity-80 transition">
                <img src="../assets/img/icon/white-location.png" alt="" class="w-[30px] max-md:w-5">
                地圖位置
            </button>
        </div>
    </div>
</template>

<style></style>