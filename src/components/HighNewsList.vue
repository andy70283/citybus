<script setup>
const emit = defineEmits(['backOpen', 'backName']);
const selectLink = (item01, item02) => {
    emit('backName', item01);
    emit('backOpen', item02);
};
</script>

<template>
    <div class="flex-grow flex-wrap">

        <!-- 消息卡片區 -->
        <div class="mb-[100px] max-2xl:mb-[80px] max-md:mb-[60px]">

        <!-- 消息卡片 -->
        <div @click="selectLink('highnews', true)" 
            class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
            <span
                class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#1B4794] group-hover:w-full transition-all duration-300"></span>
            <div
                class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                <span class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.12.20</span>
                <span class="flex-grow max-sm:px-2">114年春節期間優惠</span>
                <div
                    class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                    <span
                        class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#1B4794] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                            src="../assets/img/icon/whitw-arrow-r.png" alt=""
                            class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                </div>
            </div>
        </div>
        <!-- 消息卡片 -->
            <div @click="selectLink('highnews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#1B4794] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.11.01</span>
                    <span class="flex-grow max-sm:px-2">路線票價調整</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#1B4794] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>
        <!-- 消息卡片 -->
            <div @click="selectLink('highnews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#1B4794] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.10.02</span>
                    <span class="flex-grow max-sm:px-2">9016線班次異動</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#1B4794] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>
        <!-- 消息卡片 -->
            <div @click="selectLink('highnews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#1B4794] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.09.17</span>
                    <span class="flex-grow max-sm:px-2">6871線發車時刻調整</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#1B4794] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>
        <!-- 消息卡片 -->
            <div @click="selectLink('highnews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#1B4794] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.07.20</span>
                    <span class="flex-grow max-sm:px-2">9010線暑假班次異動</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px] flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#1B4794] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

        </div>
        
        <!-- 頁數切換鈕 -->
        <section
            class="flex gap-[15px] max-md:gap-[10px] justify-center text-[24px] max-2xl:text-[20px] max-md:text-[12px] font-bold">
            <button type="button"
                class="w-[50px] h-[50px] max-md:w-[30px] max-md:h-[30px] text-white bg-[#DD4F1B] rounded-full text-center">1</button>
        </section>
    </div>
</template>

<style></style>