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

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.12.28</span>
                    <span class="flex-grow max-sm:px-2">國道9012線「中央新村站」終止代售車票服務</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.11.18</span>
                    <span class="flex-grow max-sm:px-2">烏日高鐵站服務台撤櫃</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt="白右箭頭"
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.10.31</span>
                    <span class="flex-grow max-sm:px-2">因應「康芮颱風」來襲各路線營運狀況(更新)</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.10.04</span>
                    <span class="flex-grow max-sm:px-2">因應「山陀兒颱風」影響各路線營運狀況</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.06.27</span>
                    <span class="flex-grow max-sm:px-2">「TPASS週年慶乘車金大放送」抽獎活動</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.04.19</span>
                    <span class="flex-grow max-sm:px-2">大甲媽祖國際觀光文化節活動改道公告</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]  flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full  max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.03.18</span>
                    <span class="flex-grow max-sm:px-2">113年度汰舊車標售</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.03.10</span>
                    <span class="flex-grow max-sm:px-2 max-sm:mr-[10px]">臺中監理站大客車徵才招募活動</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.02.04</span>
                    <span class="flex-grow max-sm:px-2">台中客運車身廣告業務招標</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
                                src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                class="hidden group-hover:block w-[16px] max-md:w-[14px] max-sm:w-[10px] max-sm:group-hover:hidden"></span>
                    </div>
                </div>
            </div>

            <!-- 消息卡片 -->

            <div @click="selectLink('bignews', true)"
                class="w-full h-[120px] max-md:h-[80px] py-[23px] max-md:py-[15px] group relative border-b-[1px] border-b-[#d9d9d9] cursor-pointer">
                <span
                    class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#CA1E1D] group-hover:w-full transition-all duration-300"></span>
                <div
                    class="flex items-center justify-between h-[74px] max-md:h-[50px] border-l-[3px] pr-[50px] max-sm:pr-0">
                    <span
                        class="w-[130px] max-md:w-[90px] mx-[50px] max-sm:ml-[15px] max-sm:mr-[5px] max-sm:text-[14px]">2024.01.30</span>
                    <span class="flex-grow max-sm:px-2">113年度臺中市低碳運輸獎勵辦法</span>
                    <div
                        class="w-[42px] h-[42px] max-md:w-[32px] max-md:h-[32px] max-sm:w-[10px] max-sm:h-[10px]   flex justify-center items-center">
                        <span
                            class="w-[16px] h-[16px] max-md:w-[14px] max-md:h-[14px] max-sm:w-[10px] max-sm:h-[10px]  bg-[#CA1E1D] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full max-sm:group-hover:w-[10px] max-sm:group-hover:h-[10px] transition-all duration-300"><img
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