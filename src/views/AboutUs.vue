<script>
import NavCase10 from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import IconBus from '@/components/icons/IconBus.vue';
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        NavCase10,
        IconBus,
    },
    mounted() {
        this.scrollTop();
        this.initScrollEffects();
        //  ---------------------- banner gsap ----------------------
        let tl = gsap.timeline();
        tl.to("#hide", {
            duration: 1.5,
            clipPath: "inset(0 0 0 100%)",
        })
        tl.fromTo("#bannerword1", {
            y: 200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
        })
        tl.fromTo("#bannerword2", {
            y: 200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: -0.5
        });
        //  ---------------------- history gsap ----------------------
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#history',
                start: '0% 75%',
                end: '0% 75%',
                // markers: true,
            }
        });
        tl1.from("#history p", {
            y: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.3
        })
        tl1.from("#history li", {
            y: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            delay: -0.5
        });
        // ---------------------- box1 gsap -----------------------
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#box1',
                start: '0% 80%',
                end: '0% 80%',
                // markers: true,
            }
        });
        tl2.to(["#buscar", "#box1", "#border"], {
            duration: 1,
            opacity: 1,
            x: 0,
            stagger: 0
        })
        tl2.from("#word1 p", {
            duration: 1,
            opacity: 0,
            x: -1000,
            stagger: 0.5,
            delay: -0.5
        })
        tl2.from("#word1 li", {
            duration: 1,
            opacity: 0,
            x: -1000,
            delay: -0.5
        });
        // ---------------------- box2 gsap -----------------------
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#box2',
                start: '0% 80%',
                end: '0% 80%',
                // markers: true,
            }
        });
        tl3.to(["#stop", "#box2", "#border2"], {
            duration: 1,
            opacity: 1,
            x: 0,
            stagger: 0
        })
        tl3.from("#word2 p", {
            duration: 1,
            opacity: 0,
            x: 1000,
            stagger: 0.5,
            delay: -0.5
        })
        tl3.from("#word2 li", {
            duration: 1,
            opacity: 0,
            x: 1000,
            delay: -0.5
        });
        // ---------------------- box3 gsap -----------------------
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '#box3',
                start: '0% 80%',
                end: '0% 80%',
                // markers: true,
            }
        });
        tl4.to(["#man", "#box3", "#border3"], {
            duration: 1,
            opacity: 1,
            x: 0,
            stagger: 0
        })
        tl4.from("#word3 p", {
            duration: 1,
            opacity: 0,
            x: -1000,
            stagger: 0.5,
            delay: -0.5
        })
        tl4.from("#word3 li", {
            duration: 1,
            opacity: 0,
            x: -1000,
            delay: -0.5
        });

    },
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
            });
        },
        initScrollEffects() {
            const nav = document.querySelector('#nav10');
            nav.style.transition = 'opacity 0.3s ease'; // Add transition
            const handleScroll = () => {
                let currentPos = window.scrollY;
                if (currentPos < this.lastPos && currentPos < window.innerHeight * 0.9) {
                    nav.style.opacity = 1;
                    nav.style.zIndex = 99;
                } else if (currentPos > this.lastPos && currentPos > window.innerHeight * 0.9) {
                    nav.style.opacity = 0; 
                    nav.style.zIndex = -1;
                }
                this.lastPos = currentPos;
            };
            document.addEventListener('scroll', handleScroll);
            this.handleScroll = handleScroll;
        },

    },
}
</script>


<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
        <!-- 子頁橫幅 -->
        <NavCase10 id="nav10" class="z-[99]" />
        <section class="w-full h-screen mb-[106px] max-2xl:mb-0">
            <div id="hide" class="w-full h-full bg-[#1B4794] absolute opacity-40 z-[50]"></div>
            <img src="../assets/img/banner/AboutusBanner.jpg" alt="子頁橫幅"
                class="relative w-full h-full object-cover opacity-80">
            <div
                class="absolute bottom-0 right-0 p-[100px] max-2xl:p-[50px] max-md:px-[25px] font-bold text-white text-[48px] text-right">
                <p id="bannerword1"
                    class="title2 text-[90px] max-2xl:text-[72px] max-md:text-[40px] max-sm:text-[32px]">
                    以年輕化經營團隊
                </p>
                <p id="bannerword2"
                    class="title2 text-[90px] max-2xl:text-[72px] max-md:text-[40px] max-sm:text-[32px]">
                    持續增進和社區乘客之間更好的互動
                </p>
            </div>
        </section>
        <div
            class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px] text-[24px] max-2xl:text-[20px] max-md:text-[14px] font-bold">
            <!-- 頁面導航與標題 -->
            <section
                class="mb-[165px] max-2xl:mb-[120px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div
                    class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
                    <router-link to="/">首頁</router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    公司簡介
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">公司簡介</span>
                </div>
            </section>
            <!-- 公司歷史 -->
            <section id="history"
                class="w-auto mb-[280px] max-2xl:mb-[180px] max-md:mb-[120px] flex flex-col justify-center items-center">
                <p
                    class="text-[#1B4794] text-[40px] max-2xl:text-[28px] max-md:text-[20px] mb-[40px] max-2xl:mb-[30px] max-md:mb-[20px]">
                    公司歷史</p>
                <p class="text-center mb-[20px] ">
                    台中客運原名「台中市公共汽車股份有限公司」
                    <br>
                    <!-- 現今以年輕化的經營團隊，持續增進和社區乘客之間更好的互動為己任。 -->
                </p>
                <div class="text-center">
                    <li class="list-disc font-normal">民國47年2月受臺中市政府委託經營客運業務而設立。</li>
                    <li class="list-disc font-normal">民國63年8月配合政府發展觀光事業增設遊覽客運業，提供國民旅遊交通服務。</li>
                    <li class="list-disc font-normal">民國64年2月則配合台中縣市都市發展及民眾需求，拓展市外長途公路客運業務。</li>
                    <li class="list-disc font-normal">民國69年，公司名稱變更為「台中汽車客運股份有限公司」，擴大服務營運層面及民行需求。</li>
                </div>
            </section>


            <!---------------------------------- 核心價值box1 ------------------------------------>
            <section id="box1"
                class="flex relative justify-start items-center mb-[140px] border-l-[16px] border-l-[#1B4794] opacity-0">
                <!-------------------------------- 公車圖 ------------------------------->
                <div id="buscar" class="w-[275px] h-[87px] absolute top-0 left-1/3 -translate-y-full max-md:scale-75 max-md:-translate-y-[76px] max-sm:left-0 opacity-0 ">
                        <IconBus/>
                </div>
                <!-------------------------------- box1 word ------------------------------->
                <div id="border"
                    class="rounded-r-[15px] p-[50px] max-sm:p-[30px] border-[2px] border-[#d9d9d9] opacity-0">
                    <div id="word1" class="opacity-100">
                        <p class="text-[#DD4F1B] text-[40px] max-2xl:text-[28px] max-md:text-[20px] mb-[25px]">核心價值</p>
                        <p class="mb-[25px] max-md:text-[16px]">
                            實施人性化管理、建立「以人為本」的企業經營理念，<br class="block max-sm:hidden">營造良好的工作環境，供給員工合理的福利及待遇。培養「顧客至上」的觀念。
                        </p>
                        <div class="ml-[10px]">
                            <li class="list-disc font-normal">主管幹部的顧客是駕駛員、技工</li>
                            <li class="list-disc font-normal">技工的顧客是駕駛員</li>
                            <li class="list-disc font-normal">駕駛員的顧客是乘客</li>
                            <li class="list-disc font-normal">市民大眾都是我們的顧客</li>
                        </div>
                    </div>
                </div>
            </section>

            <!----------------------------------- 友善服務box2 ------------------------------------>
            <section id="box2"
                class="flex relative justify-end items-center mb-[140px] border-r-[16px] border-r-[#1B4794] opacity-0">
                <div id="stop"
                    class="w-[302px] h-[122px] absolute top-0 -translate-y-full right-0 opacity-0 max-md:scale-75 max-md:-translate-y-[105px]">
                    <svg width="100%" height="100%" viewBox="0 0 302 914" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.7573 1.31395H298.861C300.422 1.31395 301.687 2.57901 301.687 4.13953V437.847C301.687 439.408 300.422 440.673 298.861 440.673H10.7573V1.31395Z"
                            fill="white" stroke="#D9D9D9" stroke-width="0.627907" />
                        <path d="M23 397.793H301.599V436.866C301.599 438.6 300.194 440.005 298.46 440.005H23V397.793Z"
                            fill="#6B5535" />
                        <path d="M22.8848 1H298.345C300.079 1 301.484 2.40562 301.484 4.13954V152.963H22.8848V1Z"
                            fill="#E5A328" />
                        <g filter="url(#filter0_d_1412_4733)">
                            <rect x="2" y="1" width="21.2042" height="911.78" fill="#D9D9D9" />
                        </g>
                        <ellipse cx="60.3133" cy="117.623" rx="15.9031" ry="15.9031" fill="#CA1E1D" />
                        <rect x="23" y="271" width="278.6" height="27" fill="#599EF8" />
                        <circle cx="49.7103" cy="297.858" r="26.5052" fill="#599EF8" />
                        <defs>
                            <filter id="filter0_d_1412_4733" x="0.4" y="0.4" width="22.8051" height="912.98"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-1" />
                                <feGaussianBlur stdDeviation="0.3" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1412_4733" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1412_4733"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <!--------------------------------- box2 word ---------------------------->
                <div id="border2"
                    class="rounded-l-[15px] p-[50px] max-sm:p-[30px] border-[2px] border-[#d9d9d9] opacity-0 overflow-hidden">
                    <div id="word2" class="opacity-100">
                        <p class="text-[#DD4F1B] text-[40px] max-2xl:text-[28px] max-md:text-[20px] mb-[25px]">友善服務</p>
                        <p class="mb-[25px] max-md:text-[16px]">
                            我們深知每位乘客的需求，致力於提供無障礙交通環境，<br class="block max-sm:hidden">用溫暖的服務態度，拉近我們與每位乘客的距離。
                        </p>
                        <div class="ml-[10px]">
                            <li class="list-disc font-normal">提供無障礙車型專屬包車服務，關注弱勢群體的乘車需求。</li>
                            <li class="list-disc font-normal">配備輪椅升降系統的無障礙公車，保障行動不便旅客的出行便利。</li>
                            <li class="list-disc font-normal">車內設置優先座及多處扶手，方便年長及行動不便者使用。</li>
                            <li class="list-disc font-normal">提供最整潔的車容及最安全、親切的行車服務。</li>
                        </div>
                    </div>
                </div>
            </section>

            <!----------------------------------- 專業品質 box3 ------------------>
            <section id="box3"
                class="flex relative justify-start items-center border-l-[16px] border-l-[#1B4794] opacity-0">
                <img id="man" src="../assets/img/HomePage/people.png"
                    class="h-[153px] absolute top-0 -translate-y-[82%] left-[20%] max-md:scale-75 max-md:-translate-y-[112px]" alt="等車的人 opacity-0">
                <!--------------------------------- box3 word ---------------------------->
                <div id="border3"
                    class="rounded-r-[15px] p-[50px] max-sm:p-[30px] border-[2px] border-[#d9d9d9] opacity-0">
                    <div id="word3" class="opacity-100">
                        <p class="text-[#DD4F1B] text-[40px] max-2xl:text-[28px] max-md:text-[20px] mb-[25px]">專業品質</p>
                        <p class="mb-[25px] max-md:text-[16px]">將「行車安全」、「服務品質」及「營運績效」三者融為一體，<br class="block max-sm:hidden">導為相輔相成的良性循環，奠定公司永續經營的基業。
                        </p>
                        <div class="ml-[10px]">
                            <li class="list-disc font-normal">營造良好的工作環境，供給員工合理的福利及待遇。</li>
                            <li class="list-disc font-normal">嚴格遵守交通安全規範，確保每班車都穩定可靠。</li>
                            <li class="list-disc font-normal">強化司機培訓，提升駕駛技術與安全意識。</li>
                            <li class="list-disc font-normal">定期維護車輛與設備，降低事故風險。</li>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </main>
</template>

<style scoped>
.title1,
.title2 {
    text-shadow: rgb(17, 17, 17) 0.1em 0.1em 0.2em
}
</style>
