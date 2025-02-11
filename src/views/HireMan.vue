<script>
// import { useHireStore } from '@/store/hire.js';
import router from '@/router/index.js';
import NavCase6 from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default{
    components:{
        NavCase6,
    },
    mounted(){
        this.initScrollEffects();
        this.scrollTop();
    },
    methods:{
        initScrollEffects() {
            const nav = document.querySelector('#nav6');
            nav.style.transition = 'opacity 0.3s ease';
            const handleScroll = () => {
                let currentPos = window.scrollY;
                let mobile = window.innerWidth < 640 ? 0.23 : 0.5; 
                if (currentPos < window.innerHeight * mobile) {
                    nav.style.opacity = 1;
                    nav.style.zIndex = 99;
                } else if (currentPos > window.innerHeight * mobile) {
                    nav.style.opacity = 0;
                    nav.style.zIndex = -1;
                }
            };
            document.addEventListener('scroll', handleScroll);
            this.handleScroll = handleScroll;
        },

        scrollTop() {
            window.scrollTo({
                top: 0,
            });
        },
        takejob(type) {
            router.push({ path: '/joinus', query: { job: type } });
        },
    }
}
</script>


<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
        <!-- 子頁橫幅 -->
        <section id="banner6" class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
            <NavCase6 id="nav6" class="z-[50]" />
            <img src="../assets/img/banner/HireBanner.webp" alt="子頁橫幅" class="w-full h-full object-cover" />
        </section>
        <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
                    <router-link to="/">首頁</router-link> 
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2"> 
                    人力招幕
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">
                        人力招募
                    </span>
                </div>
            </section>
            <!-- 職缺卡片區 -->
            <section class="w-full flex flex-wrap gap-[40px]">
                <!-- 駕駛員卡片 -->
                <div class="job-card group/card rounded-[32px] pb-[50px] h-[1000px] max-2xl:h-[860px] max-md:h-[600px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] ">
                    <!-- 卡片圖片 -->
                    <div
                        class="w-full h-[37%] relative overflow-hidden rounded-t-[32px] text-white">
                        <img src="../assets/img/img/Hire-1.webp" alt="職缺卡片圖片"
                            class="w-full h-full object-cover group-hover/card:scale-125 duration-500">
                        <div class="inset-0 z-10 absolute mx-[50px] max-2xl:mx-[30px] max-md:mx-[20px] mb-[19px] border-b-[3px] border-b-white ">
                            <div class="absolute bottom-0 text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold">
                                駕駛員
                            </div>
                        </div>
                    </div>
                    <!-- 卡片內容 -->
                    <div class="w-full px-[50px] max-2xl:px-[30px] max-md:px-[20px] py-[40px] max-2xl:py-[20px] flex flex-col">
                        <!-- 文字內容 -->
                        <div class="h-[490px] max-2xl:h-[460px] max-md:h-[320px] max-2xl:pb-[30px] max-md:pb-0 flex flex-col gap-[20px] max-2xl:gap-[10px]">
                            <div class="flex flex-col">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">應徵條件</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">持有職業大客車駕照且無不良記錄及嗜好，具服務熱誠並歡迎二度就業，性別不限。</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">工作地點</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">大台中地區 (烏日、龍井(東海)、霧峰、沙鹿、水湳、清水、豐原、大甲、梧棲、竹山)</span>
                                <span class="text-[20px] max-2xl:text-[14px] max-md:text-[12px] text-[#1B4794] font-bold">*外縣市者提供有冷氣之住宿</span>
                            </div>
                            <div class="flex flex-col mb-[20px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">薪資待遇</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">全班 : 月薪 54,000~70,000元</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">A.B班 : 月薪 42,000~46,000元</span>
                                <span class="text-[20px] max-2xl:text-[14px] max-md:text-[12px] text-[#1B4794] font-bold">*須配合公司排班</span>
                            </div>
                        </div>
                        <!-- 應徵按鈕 -->
                        <button type="button" @click="takejob('driver')"
                            class="group/btn w-full h-[80px] max-2xl:h-[50px] max-md:h-[35px] bg-[#DD4F1B] rounded-[10px] text-[36px] max-2xl:text-[24px] max-md:text-[16px] text-white font-bold flex justify-center items-center gap-[20px] hover:bg-[#DD4F1B]/80">
                            加入中客 點我應徵
                            <img src="../assets/img/icon/white-next.png" alt="白色大於icon" class="w-[30px] max-2xl:w-[20px] max-md:w-[12px] group-hover/btn:translate-x-4 duration-300">
                        </button>
                    </div>
                </div>
                <!-- 基層幹部卡片 -->
                <div class="job-card group/card rounded-[32px] pb-[50px] h-[1000px] max-2xl:h-[860px] max-md:h-[600px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] ">
                    <!-- 卡片圖片 -->
                    <div
                        class="w-full h-[37%] relative overflow-hidden rounded-t-[32px] text-white">
                        <img src="../assets/img/img/hire-2.webp" alt="職缺卡片圖片"
                            class="w-full h-full object-cover group-hover/card:scale-125 duration-500">
                        <div class="inset-0 z-10 absolute mx-[50px] max-2xl:mx-[30px] mb-[19px] border-b-[3px] border-b-white ">
                            <div class="absolute bottom-0 text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold">
                                基層幹部
                            </div>
                        </div>
                    </div>
                    <!-- 卡片內容 -->
                    <div class="w-full px-[50px] max-2xl:px-[30px] py-[40px] max-2xl:py-[20px] flex flex-col">
                        <!-- 文字內容 -->
                        <div class="h-[490px] max-2xl:h-[460px] max-md:h-[320px] max-2xl:pb-[30px] max-md:pb-0 flex flex-col gap-[20px] max-2xl:gap-[10px]">
                            <div class="flex flex-col">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">應徵條件</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">高中職以上畢，負責車輛調度、駕駛員管理、站內行政事務處理、其他主管交辦事項，熟悉電腦文書作業者佳。</span>
                            </div>
                            <div class="flex flex-col h-[113px] max-md:h-[80px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">工作地點</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">台中市</span>
                            </div>
                            <div class="flex flex-col mb-[20px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">薪資待遇</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">月薪 31,000~40,000元</span>
                                <span class="text-[20px] max-2xl:text-[14px] max-md:text-[12px] text-[#1B4794] font-bold">*須配合公司排班</span>
                            </div>
                        </div>
                        <!-- 應徵按鈕 -->
                        
                        <button type="button" @click="takejob('basic')"
                            class="group/btn w-full h-[80px] max-2xl:h-[50px] max-md:h-[35px] bg-[#DD4F1B] rounded-[10px] text-[36px] max-2xl:text-[24px] max-md:text-[16px] text-white font-bold flex justify-center items-center gap-[20px] hover:bg-[#DD4F1B]/80">
                            加入中客 點我應徵
                            <img src="../assets/img/icon/white-next.png" alt="白色大於icon" class="w-[30px] max-2xl:w-[20px] max-md:w-[12px] group-hover/btn:translate-x-4 duration-300">
                        </button>
                    </div>
                </div>
                <!-- 技工卡片 -->
                <div class="job-card group/card rounded-[32px] pb-[50px] h-[1000px] max-2xl:h-[860px] max-md:h-[600px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] ">
                    <!-- 卡片圖片 -->
                    <div
                        class="w-full h-[37%] relative overflow-hidden rounded-t-[32px] text-white">
                        <img src="../assets/img/img/Hire-3.webp" alt="職缺卡片圖片"
                            class="w-full h-full object-cover group-hover/card:scale-125 duration-500">
                        <div class="inset-0 z-10 absolute mx-[50px] max-2xl:mx-[30px] mb-[19px] border-b-[3px] border-b-white ">
                            <div class="absolute bottom-0 text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold">
                                汽車修護技工
                            </div>
                        </div>
                    </div>
                    <!-- 卡片內容 -->
                    <div class="w-full px-[50px] max-2xl:px-[30px] py-[40px] max-2xl:py-[20px] flex flex-col">
                        <!-- 文字內容 -->
                        <div class="h-[490px] max-2xl:h-[460px] max-md:h-[320px] max-2xl:pb-[30px] max-md:pb-0 flex flex-col gap-[20px] max-2xl:gap-[10px]">
                            <div class="flex flex-col h-[115px] max-md:h-[80px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">應徵條件</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">具丙級汽車修護證照尤佳，負責維修大型柴油(電動)車輛、引擎、電工修護、板金、烤漆等，無經驗可。</span>
                            </div>
                            <div class="flex flex-col h-[147px] max-md:h-[80px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">工作地點</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">大台中地區</span>
                            </div>
                            <div class="flex flex-col mb-[20px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">薪資待遇</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">月薪 31,000~48,000元</span>
                            </div>
                        </div>
                        <!-- 應徵按鈕 -->
                        
                        <button type="button" @click="takejob('fix')"
                            class="group/btn w-full h-[80px] max-2xl:h-[50px] max-md:h-[35px] bg-[#DD4F1B] rounded-[10px] text-[36px] max-2xl:text-[24px] max-md:text-[16px] text-white font-bold flex justify-center items-center gap-[20px] hover:bg-[#DD4F1B]/80">
                            加入中客 點我應徵
                                <img src="../assets/img/icon/white-next.png" alt="白色大於icon" class="w-[30px] max-2xl:w-[20px] max-md:w-[12px] group-hover/btn:translate-x-4 duration-300">
                        </button>
                    </div>
                </div>
                <!-- 洗車工卡片 -->
                <div class="job-card group/card rounded-[32px] pb-[50px] h-[1000px] max-2xl:h-[860px] max-md:h-[600px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] ">
                    <!-- 卡片圖片 -->
                    <div
                        class="w-full h-[37%] relative overflow-hidden rounded-t-[32px] text-white">
                        <img src="../assets/img/img/Hire-4.webp" alt="職缺卡片圖片"
                            class="w-full h-full object-cover group-hover/card:scale-125 duration-500">
                        <div class="inset-0 z-10 absolute mx-[50px] max-2xl:mx-[30px] mb-[19px] border-b-[3px] border-b-white ">
                            <div class="absolute bottom-0 text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold">
                                站工(洗車工)
                            </div>
                        </div>
                    </div>
                    <!-- 卡片內容 -->
                    <div class="w-full px-[50px] max-2xl:px-[30px] py-[40px] max-2xl:py-[20px] flex flex-col">
                        <!-- 文字內容 -->
                        <div class="h-[490px] max-2xl:h-[460px] max-md:h-[320px] max-2xl:pb-[30px] max-md:pb-0 flex flex-col gap-[20px] max-2xl:gap-[10px]">
                            <div class="flex flex-col h-[115px] max-md:h-[80px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">應徵條件</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">具丙級汽車修護證照尤佳，無經驗可。
                                </span>
                            </div>
                            <div class="flex flex-col h-[147px] max-md:h-[80px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">工作地點</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">大台中地區</span>
                            </div>
                            <div class="flex flex-col mb-[20px]">
                                <span class="text-[#DD4F1B] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold">薪資待遇</span>
                                <span class="text-[24px] max-2xl:text-[18px] max-md:text-[14px]">月薪 30,000~35,000元</span>
                            </div>
                        </div>
                        <!-- 應徵按鈕 -->
                        
                        <button type="button" @click="takejob('wash')"
                            class="group/btn w-full h-[80px] max-2xl:h-[50px] max-md:h-[35px] bg-[#DD4F1B] rounded-[10px] text-[36px] max-2xl:text-[24px] max-md:text-[16px] text-white font-bold flex justify-center items-center gap-[20px] hover:bg-[#DD4F1B]/80 ">
                            加入中客 點我應徵
                            <img src="../assets/img/icon/white-next.png" alt="白色大於icon" class="w-[30px] max-2xl:w-[20px] max-md:w-[12px] group-hover/btn:translate-x-4 duration-300">
                        </button>
                    </div>
                </div>

            </section>
        </div>
    </main>
</template>

<style scoped>
.job-card {
    width: calc((100% - 40px) / 2);
}
@media (max-width: 768px) {
    .job-card {
        width: 100%;
    }
}
</style>
