<script>
export default {
    data() {
        return {
            isMenuOpen: false, // 控制選單開關
            accordionOpen: [false, false], // 控制手風琴開關
        };
    },
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
            });
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleAccordion(index) {
            this.accordionOpen[index] = !this.accordionOpen[index];
            console.log(this.accordionOpen); // 確認手風琴狀態
        },
    },
};
</script>

<template>
    <!-- nav大外框 -->
    <header
        class="fixed -translate-x-2/4 left-1/2 max-2xl:px-[50px] max-md:px-[20px] max-sm:px-[6px] flex justify-center max-w-[1440px] m-auto w-full">

        <!-- nav盒子(1440px) -->
        <nav
            class="relative w-full h-[127px] max-2xl:h-auto max-2xl:justify-between max-2xl:pr-[40px] max-sm:pr-[20px] max-sm:h-[72px] bg-[#ffffff] rounded-[18px] flex items-center mt-[53px] max-2xl:mt-[35px] max-md:mt-[20px] max-sm:mt-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-[10] max-sm:rounded-[12px] max-sm:justify-between">

            <!-- nav-左邊-logo -->
            <div
                class="px-[55px] py-[25px] max-2xl:px-[40px] max-md:py-[10px] max-sm:p-0 h-full flex justify-center items-center max-sm:px-0 max-sm:w-[181px] max-sm:justify-start">
                <!-- <a :href="$router.resolve({name: 'home'}).href"> -->
                <router-link to="/"
                    class="w-[170px] h-[77px] max-2xl:w-[150px] max-md:w-[120px] flex justify-center items-center max-sm:w-[84px] max-sm:justify-start max-sm:ml-[20px]"
                    @click="scrollTop">
                    <img class="w-fit" src="../assets/img/navandfooter/nav-logo.png" alt="busicon-top">
                    <!-- </a> -->
                </router-link>
            </div>

            <!-- 漢堡條按鈕 -->
            <div class="hidden max-2xl:flex w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] max-sm:w-[30px] max-sm:h-[30px] justify-center items-center bg-[#DD4F1B] rounded-full cursor-pointer"
                @click="toggleMenu">
                <img src="../assets/img/icon/white-ham.png" alt="漢堡條圖示" class="w-5 max-md:w-4 max-sm:w-3" />
            </div>

            <!-- 選單 -->
            <div v-if="isMenuOpen"
                class="absolute top-0 left-0 w-full h-screen 2xl:hidden bg-white shadow-lg z-50 flex flex-col rounded-t-[18px]">
                <div class="flex flex-row justify-between">
                    <!-- 中客logo -->
                    <div
                        class="px-[55px] py-[25px] max-2xl:px-[40px] max-md:py-[10px] max-sm:p-0 max-sm:h-[72px] flex justify-center  items-center max-sm:justify-start">
                        <!-- <a :href="$router.resolve({name: 'home'}).href"> -->
                        <router-link to="/"
                            class="w-[170px] h-[77px] max-2xl:w-[150px] max-md:w-[120px] flex justify-center items-center max-sm:w-[84px]  max-sm:justify-start max-sm:ml-[20px]"
                            @click="scrollTop">
                            <img class="w-fit" src="../assets/img/navandfooter/nav-logo.png" alt="busicon-top">
                            <!-- </a> -->
                        </router-link>
                    </div>
                    <!-- 關閉按鈕 -->
                    <div
                        class="flex justify-end pt-[38.5px] max-md:pt-[28.5px] max-sm:pt-[21px] max-2xl:pr-[40px] max-sm:pr-[20px]">
                        <button @click="toggleMenu"
                            class="flex w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] max-sm:w-[30px] max-sm:h-[30px] justify-center items-center bg-[#DD4F1B] rounded-full">
                            <img src="../assets/img/icon/white-close.png" alt="關閉圖示"
                                class="w-5 max-md:w-4 max-sm:w-3" />
                        </button>
                    </div>
                </div>
                <!-- 選單內容 -->
                <div
                    class="w-full h-screen overflow-y-auto pt-[50px] max-md:pt-[30px] max-sm:pt-0 pl-[80px] pr-[45px] max-md:pl-[60px] max-sm:pl-[30px] max-sm:pr-[22px] text-[24px] max-md:text-[20px] max-sm:text-[16px] font-bold">
                    <!-- 一般與手風琴選單 -->
                    <ul>
                        <!-- 手風琴：關於我們 -->
                        <li>
                            <button @click="toggleAccordion(0)"
                                class="w-full text-left py-6 max-sm:py-5 flex justify-between items-center focus:outline-none">
                                <span class="">關於我們</span>
                                <svg :class="accordionOpen[0] ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg"
                                    class="w-10 h-10 max-md:w-8 max-md:h-8 max-sm:w-6 max-sm:h-6 transition-transform duration-300"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 14a.75.75 0 0 1-.53-.22l-4.25-4.25a.75.75 0 1 1 1.06-1.06L10 12.44l3.72-3.72a.75.75 0 0 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-.53.22z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div v-if="accordionOpen[0]" class="pl-1 text-[20px] max-md:text-[16px] max-sm:text-[14px]">
                                <router-link to="/aboutus">
                                    <p class="py-3 max-sm:py-[10px] text-[#DD4F1B] cursor-pointer">公司簡介</p>
                                </router-link>
                                <router-link to="/stopinfo">
                                    <p class="py-3 max-sm:py-[10px] text-[#DD4F1B] cursor-pointer">站場簡介</p>
                                </router-link>
                            </div>
                        </li>

                        <!-- 一般選單 -->
                        <router-link to="/allnews">
                            <li class="py-6 max-sm:py-5 hover:text-[#DD4F1B] cursor-pointer">最新公告</li>
                        </router-link>
                        <router-link to="/routesearch">
                            <li class="py-6 max-sm:py-5 hover:text-[#DD4F1B] cursor-pointer">路線查詢</li>
                        </router-link>
                        <router-link to="/rentbus">
                            <li class="py-6 max-sm:py-5 hover:text-[#DD4F1B] cursor-pointer">包車服務</li>
                        </router-link>

                        <!-- 手風琴：中客服務 -->
                        <li>
                            <button @click="toggleAccordion(1)"
                                class="w-full text-left py-6 max-sm:py-5 flex justify-between items-center focus:outline-none">
                                <span class="">中客服務</span>
                                <svg :class="accordionOpen[1] ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg"
                                    class="w-10 h-10 max-md:w-8 max-md:h-8 max-sm:w-6 max-sm:h-6 transition-transform duration-300"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 14a.75.75 0 0 1-.53-.22l-4.25-4.25a.75.75 0 1 1 1.06-1.06L10 12.44l3.72-3.72a.75.75 0 0 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-.53.22z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div v-if="accordionOpen[1]" class="pl-1 text-[20px] max-md:text-[16px] max-sm:text-[14px]">
                                <router-link to="/lostinfo">
                                    <p class="py-3 max-sm:py-[10px] text-[#DD4F1B] cursor-pointer">失物招領</p>
                                </router-link>
                                <router-link to="/contactus">
                                    <p class="py-3 max-sm:py-[10px] text-[#DD4F1B] cursor-pointer">聯絡我們</p>
                                </router-link>
                                <router-link to="/contractone">
                                    <p class="py-3 max-sm:py-[10px] text-[#DD4F1B] cursor-pointer">運送契約</p>
                                </router-link>
                            </div>
                        </li>

                        <!-- 一般選單 -->
                        <router-link to="/hire">
                            <li class="py-6 max-sm:py-5 hover:text-[#DD4F1B] cursor-pointer mb-[30px]">人力招募</li>
                        </router-link>
                        <div class="flex font-normal text-[16px] max-sm:text-[12px] gap-[12px]">
                            <li
                                class="flex justify-center items-center w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] bg-[#1B4794] text-white rounded-full">
                                中</li>
                            <li
                                class="flex justify-center items-center w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] border-[#1B4794] border-[2px] rounded-full hover:bg-[#1B4794] hover:text-white">
                                EN</li>
                        </div>
                    </ul>
                </div>
            </div>


            <!-- nav-包住中間六個按鈕: 關於我們、最新公告、路線查詢、包車服務、中客服務、人力招募 -->
            <div
                class="w-[983px] h-full text-[24px] flex gap-[31px] font-bold text-[#3b3b3b] max-2xl:hidden max-sm:hidden">

                <!-- nav-關於我們與選單 -->
                <div class="w-[138px] group h-full flex justify-center pt-[49px] cursor-pointer">
                    <span class="relative w-fit h-fit flex flex-col gap-[9px]">關於我們
                        <div
                            class="w-[270px] absolute top-[78px] right-[50%] translate-x-[50%]  bg-[#ffffff] rounded-bl-[12px] rounded-br-[12px] border-b border-b-[#D9D9D9] z-[10] hidden group-hover:block">
                            <router-link to="/aboutus" @click="scrollTop"
                                class="w-full h-[68px] flex justify-center items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[#3b3b3b] border-b border-b-[#D9D9D9] transition ease duration-300 hover:border-b-[#DD4F1B] hover:text-[#DD4F1B]">
                                <span>公司簡介</span>
                            </router-link>
                            <router-link to="/stopinfo" @click="scrollTop"
                                class="w-full h-[68px] flex justify-center items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[#3b3b3b] border-b border-b-[#D9D9D9] transition ease duration-300 hover:border-b-[#DD4F1B] hover:text-[#DD4F1B] rounded-b-[12px]">
                                <span>站場簡介</span>
                            </router-link>
                        </div>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </span>
                </div>

                <!-- nav-最新公告 -->
                <div class="w-[138px] h-full flex justify-center pt-[49px] ">
                    <router-link to="/allnews" class="group w-fit h-fit flex flex-col gap-[9px]" @click="scrollTop">
                        <span>最新公告</span>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </router-link>
                </div>

                <!-- nav-路線查詢 -->
                <div class="w-[138px] h-full flex justify-center pt-[49px]">
                    <router-link to="/routesearch" class="group w-fit h-fit flex flex-col gap-[9px]" @click="scrollTop">
                        <span>路線查詢</span>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </router-link>
                </div>

                <!-- nav-包車服務 -->
                <div class="w-[138px] h-full flex justify-center pt-[49px]">
                    <router-link to="/rentbus" class="group w-fit h-fit flex flex-col gap-[9px]" @click="scrollTop">
                        <span>包車服務</span>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </router-link>
                </div>

                <!-- nav-中客服務與選單 -->
                <div class="w-[138px] group h-full flex justify-center pt-[49px] cursor-pointer">
                    <div>
                        <span class="relative w-fit h-fit flex flex-col gap-[9px]">中客服務
                            <div
                                class="w-[270px] absolute top-[78px] right-1/2 translate-x-[50%] hidden bg-[#ffffff] z-[10] group-hover:block rounded-b-[12px]">
                                <router-link to="/lostinfo" @click="scrollTop"
                                    class="w-full h-[68px] flex justify-center items-center pt-10px pb-10px pl-20px pr-20px text-[#3b3b3b] transition ease duration-300 border-b border-b-[#D9D9D9] hover:text-[#DD4F1B] hover:border-b-[#DD4F1B]">
                                    <span>失物招領</span>
                                </router-link>
                                <router-link to="/contactus" @click="scrollTop"
                                    class="w-full h-[68px] flex justify-center items-center pt-10px pb-10px pl-20px pr-20px text-[#3b3b3b] transition ease duration-300 border-b border-b-[#D9D9D9] hover:text-[#DD4F1B] hover:border-b-[#DD4F1B]">
                                    <span>聯絡我們</span>
                                </router-link>
                                <router-link to="/contractone" @click="scrollTop"
                                    class="w-full h-[68px] flex justify-center items-center pt-10px pb-10px pl-20px pr-20px text-[#3b3b3b] transition ease duration-300 border-b border-b-[#D9D9D9] rounded-b-[12px] hover:text-[#DD4F1B] hover:border-b-[#DD4F1B]">
                                    <span>運送契約</span>
                                </router-link>
                            </div>
                            <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                        </span>
                    </div>
                </div>

                <!-- nav-人力招募 -->
                <div class="w-[138px] h-full flex justify-center pt-[49px]">
                    <router-link to="/hire" class="group w-fit h-fit flex flex-col gap-[9px]" @click="scrollTop">
                        <span>人力招募</span>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </router-link>
                </div>
            </div>

            <!-- nav-右半邊的中與EN -->
            <div
                class="flex justify-center max-2xl:hidden items-center text-[16px] font-[500] gap-[21px] grow max-sm:w-[23px] max-sm:h-[23px] max-sm:rounded-full max-sm:bg-[#DD4F1B] max-sm:grow-0 max-sm:mr-[20px]">

                <!-- nav-中 -->
                <div
                    class="text-[#ffffff] rounded-full flex justify-center items-center group cursor-pointer max-sm:hidden">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class="transition ease duration-300 group-hover:fill-[#1B4794]" width="40" height="40"
                            rx="20" fill="#DD4F1B" />
                        <path
                            d="M13.536 15.924H26.432V23.46H25.184V17.108H14.736V23.54H13.536V15.924ZM14.176 21.364H25.904V22.532H14.176V21.364ZM19.328 13.06H20.576V27.764H19.328V13.06Z"
                            fill="white" />
                    </svg>
                </div>

                <!-- nav-英文 -->
                <div
                    class="text-[#ffffff] rounded-full flex justify-center items-center group cursor-pointer max-sm:hidden">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class="transition ease duration-300 group-hover:fill-[#1B4794]" width="40" height="40"
                            rx="20" fill="#DD4F1B" />
                        <path
                            d="M10.4815 26.5V14.8636H17.777V16.375H12.2372V19.9205H17.3963V21.4261H12.2372V24.9886H17.8452V26.5H10.4815ZM29.5142 14.8636V26.5H27.9006L21.9858 17.9659H21.8778V26.5H20.1222V14.8636H21.7472L27.6676 23.4091H27.7756V14.8636H29.5142Z"
                            fill="white" />
                    </svg>
                </div>
            </div>

        </nav>

    </header>

</template>

<style></style>