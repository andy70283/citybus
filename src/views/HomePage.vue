<script>
import NavCase from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Vue3Marquee } from 'vue3-marquee'
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        NavCase,
        Vue3Marquee,
        // GoTopCase,
    },
    data() {
        return {
            lastPos: 0,
            showGoTop: false,
        };
    },
    mounted() {
        this.scrollTop();
        this.initScrollEffects();
        // car gsap
        let tl1 = gsap.timeline({ repeat: -1 });
        const duration = window.innerWidth <= 640 ? 3 : 5;

        tl1.fromTo('#buscar', {
            x: -1200,
        }, {
            x: 100,
            duration: duration,
            ease: "power3.inOut",
        })
            .to('#man', {
                x: window.innerWidth <= 640 ? 100 : -10,
                opacity: 0,
            })
            .fromTo('#buscar', {
                x: 100,
            }, {
                x: 1400,
                duration: duration + 1,
                ease: "power3.inOut",
            })
        gsap.fromTo('#buscar', {
            y: 0.5,
        }, {
            y: 10,
            duration: 0.3,
            repeat: -1,
            yoyo: true,
        });
        // word gsap
        gsap.fromTo('#bannerword1', {
            x: -500,
            opacity: 0,
        }, {
            x: 0,
            duration: 2,
            opacity: 1,
            delay: 0.5,
        });
        gsap.fromTo('#bannerword2', {
            x: 500,
            opacity: 0,
        }, {
            x: 0,
            duration: 2,
            opacity: 1,
            delay: 1.5,
        });
        //opendoor gsap
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: '#openall',
            start: () => window.innerWidth <= 640 ? '-45% 0%' : '0% 0%',
            end: () => window.innerWidth <= 640 ? '100px' : '+=100%', 
            scrub: 2,
            pin: window.innerWidth > 640, // 只在大於640px時pin
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
            // markers: true,
            }
        });
        if (window.innerWidth <= 640) {
            tl.fromTo('#open', {
            height: '0px',
            width: '1920px',
            opacity: 1,
            }, {
            height: '70vh',
            opacity: 1,
            duration: 1,
            ease: "power2.out"
            })
            .fromTo('.word', {
                y: -50,
                opacity: 0
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out"
            })
            .to({}, { duration: 0.5 });
        } else {
            tl.fromTo('#open', {
                width: '500px',
                opacity: 1,
            }, {
                width: '1920px',
                height: '780px',
                opacity: 1,
                duration: 1
            })
                .fromTo('.word', {
                    y: 250,
                    opacity: 0
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.8,
                })
                .to({}, { duration: 0.5 });
        }
    },
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
            });
        },
        goToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        initScrollEffects() {
            const nav = document.querySelector('#nav');
            nav.style.transition = 'opacity 0.3s ease';
            const handleScroll = () => {
                let currentPos = window.scrollY;
                this.showGoTop = currentPos > window.innerHeight * 1.1;

                if (currentPos < this.lastPos && currentPos < window.innerHeight * 0.8) {
                    nav.style.opacity = 1;
                    nav.style.zIndex = 99;
                } else if (currentPos > this.lastPos && currentPos > window.innerHeight * 0.8) {
                    nav.style.opacity = 0;
                    nav.style.zIndex = -1;
                }
                this.lastPos = currentPos;
            };
            document.addEventListener('scroll', handleScroll);
            this.handleScroll = handleScroll;
        },
    },
};
</script>

<template>

    <!-- 內容大框框 -->
    <main class="text-[#FFFFFF] overflow-hidden sm-home:w-full">
        <NavCase id="nav" class="text-black z-[99] opacity-100" />
        <!-- 首頁banner -->
        <section id="banner" ref="banner"
            class="w-full h-screen relative flex mb-[200px] flex-col sm-home:mb-[50px] sm-home:h-fit">
            <div class="w-full sm-home:h-[681px]">
                <img class="h-full w-full object-cover" src="../assets/img/HomePage/homepage-banner.png" alt="banner">
            </div>
            <div id="bannerword1"
                class="w-[747px] h-[218px] text-white text-[180px] absolute top-[223px] left-[74px] font-bold sm-home:w-[286px] sm-home:h-[77px] sm-home:text-[64px] sm-home:top-[103px] sm-home:left-[27px]">
                搭乘中客</div>
            <div id="bannerword2"
                class="w-[800px] h-[155px] text-white font-bold text-[128px] absolute top-[751px] right-[0px] sm-home:[241px] sm-home:h-[140px] sm-home:text-[58px] sm-home:top-[516px] sm-home:left-[107px] sm-home:hidden">
                享受幸福時刻</div>

            <!-- 640 -->
            <div id="bannerword2"
                class="hidden text-[#ffffff] font-bold absolute sm-home:text-[58px]  bottom-[126px] right-[0px] flex-col sm-home:flex items-end pr-[25px] sm-home:items-end sm-home:bottom-[0] sm-home:right-0 sm-home:pr-[25px] sm-home:pb-[130px] sm-home:leading-[1.2]">
                <span class="w-fit h-fit">享受</span>
                <span class="w-fit h-fit whitespace-nowrap">幸福時刻</span>
            </div>

            <!-- 臨時快訊 -->
            <section id="underbanner"
                class="w-full h-[115px] flex justify-center items-center bg-[#1B4794] sm-home:h-[110px] sm-home:items-start sm-home:px-[25px]">
                <div
                    class="max-w-[1440px] h-full flex items-center gap-[87px] sm-home:w-full sm-home:h-fit sm-home:gap-[0px] sm-home:flex-col sm-home:items-start ">
                    <span
                        class="font-bold text-[36px] sm-home:font-normal sm-home:text-[12px] sm-home:mt-[26px]">臨時快訊</span>
                    <div class="w-[1px] h-[74px] bg-[#FFFFFF] sm-home:w-[50px] sm-home:h-[1px] sm-home:mb-[15px]"></div>
                    <div class="max-w-[1050px] sm-home:w-full">
                        <Vue3Marquee :pauseOnHover="true" :speed="0.5">
                            <span
                                class="text-[24px] sm-home:font-bold sm-home:text-[16px]">中央流行疫情指揮中心今（3）日為因應COVID-19疫情，由陳時中指揮官於18：00召開臨時記者會，說明相關防疫作為等事宜。</span>
                        </Vue3Marquee>
                    </div>
                </div>
            </section>
        </section>


        <!-- 四個卡片(包車服務、失物招領、聯絡我們、人才招募) -->
        <div
            class="max-w-[1440px] w-full h-fit m-auto flex gap-[27px] mb-[200px]  sm-home:h-fit sm-home:gap-[10px] sm-home:mb-[70px] sm-home:grid grid-cols-2 sm-home:px-[25px] justify-center ">

            <!-- 包車服務卡片 -->
            <router-link to="/rentbus"
                class="w-[340px] h-[400px] relative overflow-hidden group rounded-[15px] sm-home:w-full sm-home:h-[150px] sm-home:rounded-[10px]">
                <img class="h-full w-full transition-all duration-300 ease group-hover:scale-[1.09]"
                    src="../assets/img/HomePage/4card-1.png" alt="包車服務">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ease group-hover:opacity-0 ">
                </div>
                <div
                    class="w-fit h-[48px] flex items-center gap-[10px] absolute bottom-[31px] left-[35px] group sm-home:h-[20px] sm-home:gap-[30px] sm-home:bottom-[15px] sm-home:left-[15px]">
                    <span class="text-[40px] font-bold sm-home:text-[16px] sm-home:whitespace-nowrap">包車服務</span>
                    <div
                        class="w-[42px] h-[42px] flex justify-center items-center rounded-full group-hover:bg-[#DD4F1B] group-hover:translate-x-[10px] transition-all duration-300 ease sm-home:w-[20px] sm-home:h-[20px] sm-home:bg-[#DD4F1B]">
                        <img src="../assets/img/HomePage/Arrow.png" alt=""
                            class="group-hover:block sm-home:w-[8px] sm-home:h-[8px]">
                    </div>
                </div>
            </router-link>

            <!-- 失物招領卡片 -->
            <router-link to="/lostinfo"
                class="w-[340px] h-[400px] relative overflow-hidden group rounded-[15px] sm-home:w-full sm-home:h-[150px] sm-home:rounded-[10px]">
                <img class="h-full w-full transition-all duration-300 ease group-hover:scale-[1.09] "
                    src="../assets/img/HomePage/4card-2.png" alt="失物招領">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ease group-hover:opacity-0">
                </div>
                <div
                    class="w-fit h-[48px] flex items-center gap-[10px] absolute bottom-[31px] left-[35px] group sm-home:h-[20px] sm-home:gap-[30px] sm-home:bottom-[15px] sm-home:left-[15px]">
                    <span class="text-[40px] font-bold sm-home:text-[16px] sm-home:whitespace-nowrap">失物招領</span>
                    <div
                        class="w-[42px] h-[42px] flex justify-center items-center rounded-full group-hover:bg-[#DD4F1B] group-hover:translate-x-[10px] transition-all duration-300 ease sm-home:w-[20px] sm-home:h-[20px] sm-home:bg-[#DD4F1B]">
                        <img src="../assets/img/HomePage/Arrow.png" alt=""
                            class="group-hover:block sm-home:w-[8px] sm-home:h-[8px]">
                    </div>
                </div>
            </router-link>

            <!-- 聯絡我們卡片 -->
            <router-link to="/contactus"
                class="w-[340px] h-[400px] relative overflow-hidden group rounded-[15px] sm-home:w-full sm-home:h-[150px] sm-home:rounded-[10px]">
                <img class="h-full w-full transition-all duration-300 ease group-hover:scale-[1.09]"
                    src="../assets/img/HomePage/4card-3.webp" alt="聯絡我們">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ease group-hover:opacity-0">
                </div>
                <div
                    class="w-fit h-[48px] flex items-center gap-[10px] absolute bottom-[31px] left-[35px] group sm-home:h-[20px] sm-home:gap-[30px] sm-home:bottom-[15px] sm-home:left-[15px]">
                    <span class="text-[40px] font-bold sm-home:text-[16px] sm-home:whitespace-nowrap">聯絡我們</span>
                    <div
                        class="w-[42px] h-[42px] flex justify-center items-center rounded-full group-hover:bg-[#DD4F1B] group-hover:translate-x-[10px] transition-all duration-300 ease sm-home:w-[20px] sm-home:h-[20px] sm-home:bg-[#DD4F1B]">
                        <img src="../assets/img/HomePage/Arrow.png" alt=""
                            class="group-hover:block sm-home:w-[8px] sm-home:h-[8px]">
                    </div>
                </div>
            </router-link>

            <!-- 人才招募卡片 -->
            <router-link to="/hire"
                class="w-[340px] h-[400px] relative overflow-hidden group rounded-[15px] sm-home:w-full sm-home:h-[150px] sm-home:rounded-[10px]">
                <img class="h-full w-full transition-all duration-300 ease group-hover:scale-[1.09]"
                    src="../assets/img/HomePage/4card-4.png" alt="人才招募">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ease group-hover:opacity-0">
                </div>
                <div
                    class="w-fit h-[48px] flex items-center gap-[10px] absolute bottom-[31px] left-[35px] group sm-home:h-[20px] sm-home:gap-[30px] sm-home:bottom-[15px] sm-home:left-[15px]">
                    <span class="text-[40px] font-bold sm-home:text-[16px] sm-home:whitespace-nowrap">人才招募</span>
                    <div
                        class="w-[42px] h-[42px] flex justify-center items-center rounded-full group-hover:bg-[#DD4F1B] group-hover:translate-x-[10px] transition-all duration-300 ease sm-home:w-[20px] sm-home:h-[20px] sm-home:bg-[#DD4F1B]">
                        <img src="../assets/img/HomePage/Arrow.png" alt=""
                            class="group-hover:block sm-home:w-[8px] sm-home:h-[8px]">
                    </div>
                </div>
            </router-link>

        </div>

        <!-- 最新公告 -->
        <div
            class="max-w-[1465px] h-[822px] m-auto w-full text-[#3B3B3B] mb-[200px] px-[25px] relative sm-home:w-full sm-home:h-fit sm-home:mb-[74px] sm-home:px-[25px]">

            <!-- 最新公告標題 -->
            <section class="h-[84px] mb-[37px] sm-home:h-fit sm-home:mb-[23px]">
                <div
                    class="text-[58px] font-bold w-[291px] h-[84px] text-right border-l-[11px] border-l-[#DD4F1B] sm-home:text-[20px] sm-home:w-[98px] sm-home:h-[30px] sm-home:border-l-[3px]">
                    最新公告
                </div>
            </section>

            <!-- 五則最新公告內容 -->
            <section class="text-[24px]">

                <!-- 最新公告內容1 -->
                <router-link :to="{ name: 'allnews', query: { section: 'bignews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:h-fit sm-home:py-[0px] sm-home:hidden">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300 sm-home:hidden">
                        </span>
                        <div
                            class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px] sm-home:items-start sm-home:border-l-[0px] sm-home:flex-nowrap sm-home:flex-col">
                            <span
                                class="hidden mr-[100px] font-medium sm-home:mr-[0px] sm-home:font-normal sm-home:text-[10px] sm-home:block">2024.12.20</span>
                            <div
                                class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#CA1E1D] flex justify-center items-center rounded-[8px] sm-home:w-[50px] sm-home:h-[20px] sm-home:ml-[0px] sm-home:mr-[0px] sm-home:rounded-[4px]">
                                <span class="font-bold text-[#FFFFFF] sm-home:text-[10px]">重要公告 </span>
                            </div>
                            <span class="mr-[100px] font-medium sm-home:hidden">2024.12.20</span>

                            <div class="flex-grow font-medium sm-home:font-normal sm-home:text-[14px] sm-home:block">
                                114年春節連假優惠措施</div>
                            <div class="w-[42px] h-[42px] flex justify-center items-center sm-home:hidden">
                                <span
                                    class="w-[16px] h-[16px] bg-[#DD4F1B] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full transition-all duration-300">
                                    <img src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                        class="hidden group-hover:block w-[16px]">
                                </span>
                            </div>
                        </div>
                    </div>

                </router-link>

                <!-- 640打開的最新消息1 -->
                <router-link :to="{ name: 'allnews', query: { section: 'bignews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:h-fit sm-home:py-[0px] hidden sm-home:block">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300 sm-home:hidden">
                        </span>
                        <div
                            class="w-full items-center justify-between h-[74px] border-l-[5px] pr-[50px] sm-home:items-start sm-home:border-l-[0px] sm-home:flex-nowrap sm-home:flex-col sm-home:pr-[0px]">
                            <div class="flex items-center gap-[10px]">
                                <span
                                    class="hidden mr-[100px] font-medium sm-home:mr-[0px] sm-home:font-normal sm-home:text-[10px] sm-home:block">2024.12.20</span>
                                <div
                                    class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#CA1E1D] flex justify-center items-center rounded-[8px] sm-home:w-[50px] sm-home:h-[20px] sm-home:ml-[0px] sm-home:mr-[0px] sm-home:rounded-[4px]">
                                    <span class="font-bold text-[#FFFFFF] sm-home:text-[10px]">重要公告 </span>
                                </div>
                            </div>

                            <div
                                class="w-full font-medium sm-home:font-normal sm-home:text-[14px] flex items-center gap-[29px] ">
                                <span class="flex-grow h-[54px] flex items-center">114年春節連假優惠措施</span>
                                <svg class="mr-[27px]" width="9" height="8" viewBox="0 0 9 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.52812 4.33672C8.71409 4.15075 8.71409 3.84925 8.52812 3.66328L5.49767 0.632826C5.3117 0.446861 5.0102 0.446861 4.82423 0.632826C4.63827 0.818789 4.63827 1.1203 4.82423 1.30626L7.51797 4L4.82423 6.69374C4.63827 6.8797 4.63827 7.18121 4.82423 7.36718C5.01019 7.55314 5.3117 7.55314 5.49767 7.36718L8.52812 4.33672ZM0.191406 4.47619L8.19141 4.47619L8.19141 3.52381L0.191406 3.52381L0.191406 4.47619Z"
                                        fill="#DD4F1B" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </router-link>

                <!-- 最新公告內容2 -->
                <router-link :to="{ name: 'allnews', query: { section: 'busnews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:hidden">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300">
                        </span>
                        <div class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px]">
                            <div
                                class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#E5A328] flex justify-center items-center rounded-[8px]">
                                <span class="font-bold text-[#FFFFFF]">市區公車</span>
                            </div>
                            <span class="mr-[100px] font-medium">2024.12.18</span>
                            <span class="flex-grow font-medium">284路公車12/18起調整發車時刻</span>
                            <div class="w-[42px] h-[42px] flex justify-center items-center">
                                <span
                                    class="w-[16px] h-[16px] bg-[#DD4F1B] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full transition-all duration-300">
                                    <img src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                        class="hidden group-hover:block w-[16px]">
                                </span>
                            </div>
                        </div>

                    </div>
                </router-link>

                <!-- 640打開的最新消息2 -->
                <router-link :to="{ name: 'allnews', query: { section: 'busnews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:h-fit sm-home:py-[0px] hidden sm-home:block sm-home:mt-[15px]">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300 sm-home:hidden">
                        </span>
                        <div
                            class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px] sm-home:items-start sm-home:border-l-[0px] sm-home:flex-nowrap sm-home:flex-col sm-home:pr-[0px]">
                            <div class="flex items-center gap-[10px]">
                                <span
                                    class="hidden mr-[100px] font-medium sm-home:mr-[0px] sm-home:font-normal sm-home:text-[10px] sm-home:block">2024.12.18</span>
                                <div
                                    class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#E5A328] flex justify-center items-center rounded-[8px] sm-home:w-[50px] sm-home:h-[20px] sm-home:ml-[0px] sm-home:mr-[0px] sm-home:rounded-[4px]">
                                    <span class="font-bold text-[#FFFFFF] sm-home:text-[10px]">市區公車 </span>
                                </div>
                            </div>

                            <div
                                class="w-full font-medium sm-home:font-normal sm-home:text-[14px] flex items-center gap-[29px]">
                                <span class="flex-grow h-[54px] flex items-center">284路公車12/18起調整發車時刻</span>
                                <svg class="mr-[27px]" width="9" height="8" viewBox="0 0 9 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.52812 4.33672C8.71409 4.15075 8.71409 3.84925 8.52812 3.66328L5.49767 0.632826C5.3117 0.446861 5.0102 0.446861 4.82423 0.632826C4.63827 0.818789 4.63827 1.1203 4.82423 1.30626L7.51797 4L4.82423 6.69374C4.63827 6.8797 4.63827 7.18121 4.82423 7.36718C5.01019 7.55314 5.3117 7.55314 5.49767 7.36718L8.52812 4.33672ZM0.191406 4.47619L8.19141 4.47619L8.19141 3.52381L0.191406 3.52381L0.191406 4.47619Z"
                                        fill="#DD4F1B" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </router-link>

                <!-- 最新公告內容3 -->
                <router-link :to="{ name: 'allnews', query: { section: 'highnews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:hidden">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300">
                        </span>
                        <div class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px]">
                            <div
                                class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#1B4794] flex justify-center items-center rounded-[8px]">
                                <span class="font-bold text-[#FFFFFF]">國道客運</span>
                            </div>
                            <span class="mr-[100px] font-medium">2024.12.10</span>
                            <span class="flex-grow font-medium">28、54、675路11/30起站位更名公告</span>
                            <div class="w-[42px] h-[42px] flex justify-center items-center">
                                <span
                                    class="w-[16px] h-[16px] bg-[#DD4F1B] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full transition-all duration-300">
                                    <img src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                        class="hidden group-hover:block w-[16px]">
                                </span>
                            </div>
                        </div>

                    </div>
                </router-link>

                <!-- 640打開的最新消息3 -->
                <router-link :to="{ name: 'allnews', query: { section: 'highnews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:h-fit sm-home:py-[0px] hidden sm-home:block sm-home:mt-[15px]">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300 sm-home:hidden">
                        </span>
                        <div
                            class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px] sm-home:items-start sm-home:border-l-[0px] sm-home:flex-nowrap sm-home:flex-col sm-home:pr-[0px]">
                            <div class="flex items-center gap-[10px]">
                                <span
                                    class="hidden mr-[100px] font-medium sm-home:mr-[0px] sm-home:font-normal sm-home:text-[10px] sm-home:block">2024.12.10</span>
                                <div
                                    class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#1B4794] flex justify-center items-center rounded-[8px] sm-home:w-[50px] sm-home:h-[20px] sm-home:ml-[0px] sm-home:mr-[0px] sm-home:rounded-[4px]">
                                    <span class="font-bold text-[#FFFFFF] sm-home:text-[10px]">國道客運</span>
                                </div>
                            </div>

                            <div
                                class="w-full font-medium sm-home:font-normal sm-home:text-[14px] flex items-center gap-[29px]">
                                <span class="flex-grow h-[54px] flex items-center">28、54、675路11/30起站位更名公告</span>
                                <svg class="mr-[27px]" width="9" height="8" viewBox="0 0 9 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.52812 4.33672C8.71409 4.15075 8.71409 3.84925 8.52812 3.66328L5.49767 0.632826C5.3117 0.446861 5.0102 0.446861 4.82423 0.632826C4.63827 0.818789 4.63827 1.1203 4.82423 1.30626L7.51797 4L4.82423 6.69374C4.63827 6.8797 4.63827 7.18121 4.82423 7.36718C5.01019 7.55314 5.3117 7.55314 5.49767 7.36718L8.52812 4.33672ZM0.191406 4.47619L8.19141 4.47619L8.19141 3.52381L0.191406 3.52381L0.191406 4.47619Z"
                                        fill="#DD4F1B" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </router-link>

                <!-- 最新公告內容4 -->
                <router-link :to="{ name: 'allnews', query: { section: 'busnews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:hidden">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300">
                        </span>
                        <div class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px]">
                            <div
                                class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#E5A328] flex justify-center items-center rounded-[8px]">
                                <span class="font-bold text-[#FFFFFF]">市區公車</span>
                            </div>
                            <span class="mr-[100px] font-medium">2024.12.04</span>
                            <span class="flex-grow font-medium">12路、12延自11/23起調整發車時刻</span>
                            <div class="w-[42px] h-[42px] flex justify-center items-center">
                                <span
                                    class="w-[16px] h-[16px] bg-[#DD4F1B] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full transition-all duration-300">
                                    <img src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                        class="hidden group-hover:block w-[16px]">
                                </span>
                            </div>
                        </div>
                    </div>
                </router-link>

                <!-- 640打開的最新消息4 -->
                <router-link :to="{ name: 'allnews', query: { section: 'busnews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:h-fit sm-home:py-[0px] hidden sm-home:block sm-home:mt-[15px]">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300 sm-home:hidden">
                        </span>
                        <div
                            class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px] sm-home:items-start sm-home:border-l-[0px] sm-home:flex-nowrap sm-home:flex-col sm-home:pr-[0px]">
                            <div class="flex items-center gap-[10px]">
                                <span
                                    class="hidden mr-[100px] font-medium sm-home:mr-[0px] sm-home:font-normal sm-home:text-[10px] sm-home:block">2024.12.04</span>
                                <div
                                    class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#E5A328] flex justify-center items-center rounded-[8px] sm-home:w-[50px] sm-home:h-[20px] sm-home:ml-[0px] sm-home:mr-[0px] sm-home:rounded-[4px]">
                                    <span class="font-bold text-[#FFFFFF] sm-home:text-[10px]">市區公車</span>
                                </div>
                            </div>

                            <div
                                class="w-full font-medium sm-home:font-normal sm-home:text-[14px] flex items-center gap-[29px]">
                                <span class="flex-grow h-[54px] flex items-center">12路、12延自11/23起調整發車時刻</span>
                                <svg class="mr-[27px]" width="9" height="8" viewBox="0 0 9 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.52812 4.33672C8.71409 4.15075 8.71409 3.84925 8.52812 3.66328L5.49767 0.632826C5.3117 0.446861 5.0102 0.446861 4.82423 0.632826C4.63827 0.818789 4.63827 1.1203 4.82423 1.30626L7.51797 4L4.82423 6.69374C4.63827 6.8797 4.63827 7.18121 4.82423 7.36718C5.01019 7.55314 5.3117 7.55314 5.49767 7.36718L8.52812 4.33672ZM0.191406 4.47619L8.19141 4.47619L8.19141 3.52381L0.191406 3.52381L0.191406 4.47619Z"
                                        fill="#DD4F1B" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </router-link>

                <!-- 最新公告內容5 -->
                <router-link :to="{ name: 'allnews', query: { section: 'bignews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:hidden">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300">
                        </span>
                        <div class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px]">
                            <div
                                class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#CA1E1D] flex justify-center items-center rounded-[8px]">
                                <span class="font-bold text-[#FFFFFF]">重要公告 </span>
                            </div>
                            <span class="mr-[100px] font-medium">2024.11.30</span>
                            <span class="flex-grow font-medium">113年度臺中市低碳運輸獎勵辦法</span>
                            <div class="w-[42px] h-[42px] flex justify-center items-center">
                                <span
                                    class="w-[16px] h-[16px] bg-[#DD4F1B] rounded-full flex justify-center items-center group-hover:w-full group-hover:h-full transition-all duration-300">
                                    <img src="../assets/img/icon/whitw-arrow-r.png" alt=""
                                        class="hidden group-hover:block w-[16px]">
                                </span>
                            </div>
                        </div>

                    </div>
                </router-link>
                <!-- 640打開的最新消息5 -->
                <router-link :to="{ name: 'allnews', query: { section: 'bignews', showCard: true } }">
                    <div
                        class="w-full h-[120px] py-[23px] group relative border-b-[1px] border-b-[#d9d9d9] sm-home:h-fit sm-home:py-[0px] hidden sm-home:block sm-home:mt-[15px]">
                        <span
                            class="absolute bottom-0 left-0 w-0 h-[3px] bg-[#DD4F1B] group-hover:w-full transition-all duration-300 sm-home:hidden">
                        </span>
                        <div
                            class="flex items-center justify-between h-[74px] border-l-[5px] pr-[50px] sm-home:items-start sm-home:border-l-[0px] sm-home:flex-nowrap sm-home:flex-col sm-home:pr-[0px]">
                            <div class="flex items-center gap-[10px]">
                                <span
                                    class="hidden mr-[100px] font-medium sm-home:mr-[0px] sm-home:font-normal sm-home:text-[10px] sm-home:block">2024.11.30</span>
                                <div
                                    class="w-[130px] h-[50px] ml-[95px] mr-[100px] bg-[#CA1E1D] flex justify-center items-center rounded-[8px] sm-home:w-[50px] sm-home:h-[20px] sm-home:ml-[0px] sm-home:mr-[0px] sm-home:rounded-[4px]">
                                    <span class="font-bold text-[#FFFFFF] sm-home:text-[10px]">重要公告 </span>
                                </div>
                            </div>

                            <div
                                class="w-full font-medium sm-home:font-normal sm-home:text-[14px] flex items-center gap-[29px]">
                                <span class="flex-grow h-[54px] flex items-center">113年度臺中市低碳運輸獎勵辦法</span>
                                <svg class="mr-[27px]" width="9" height="8" viewBox="0 0 9 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.52812 4.33672C8.71409 4.15075 8.71409 3.84925 8.52812 3.66328L5.49767 0.632826C5.3117 0.446861 5.0102 0.446861 4.82423 0.632826C4.63827 0.818789 4.63827 1.1203 4.82423 1.30626L7.51797 4L4.82423 6.69374C4.63827 6.8797 4.63827 7.18121 4.82423 7.36718C5.01019 7.55314 5.3117 7.55314 5.49767 7.36718L8.52812 4.33672ZM0.191406 4.47619L8.19141 4.47619L8.19141 3.52381L0.191406 3.52381L0.191406 4.47619Z"
                                        fill="#DD4F1B" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </router-link>
            </section>

            <!-- 最新公告All News按鈕 -->
            <router-link to="/allnews" @click="scrollTop"
                class="w-[145px] h-[43px] flex justify-center items-center text-[18px] text-[#ffffff] font-bold bg-[#DD4F1B] rounded-[20px] absolute left-[1255px] bottom-0 gap-[7px] hover:bg-[#1B4794] hover:w-[163px] hover:gap-[13px] transform ease duration-300 sm-home:h-[40px] sm-home:text-[12px] sm-home:left-[50%] sm-home:-translate-x-1/2 sm-home:bottom-[-15%] z-[50]">
                <span>All News</span>
                <svg class="sm-home:hidden" width="14" height="16" viewBox="0 0 14 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.2929L7.34315 0.928933C6.95262 0.538409 6.31946 0.538409 5.92893 0.928933C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34314 15.0711L13.7071 8.70711ZM-1.74846e-07 9L13 9L13 7L1.74846e-07 7L-1.74846e-07 9Z"
                        fill="white" />
                </svg>
            </router-link>
        </div>

        <!-- 開門、文字畫入動畫大banner -->
        <div id="openall" class="h-[100vh] sm:mb-[200px] sm-home:mb-[100px] sm-home:h-[70vh] translate-y-[-10%]">
            <div id="open"
                class="w-[500px] h-full sm-h-[780px] relative top-[100px] left-[50%] translate-x-[-50%] flex">
                <div
                    class="h-[260px] absolute top-[104px] left-[240px] font-bold flex flex-col justify-between sm-home:h-[130px] sm-home:pl-[25px]">
                    <span class="word text-[72px] opacity-0 sm-home:text-[36px] sm-home:translate-x-[70%]">我們堅信，</span>
                    <span
                        class="word text-[48px] opacity-0 sm-home:text-[20px] sm-home:translate-x-[70%]">公車不僅是城市的交通工具，</span>
                    <span
                        class="word w-[742px] text-[48px] border-b-[6px] border-b-[#ffffff] opacity-0 sm-home:text-[20px] sm-home:translate-x-[70%] sm-home:border-none">更是連結社區與未來的重要橋梁。</span>
                </div>
            </div>
        </div>

        <!-- 關於我們及三張卡片 -->
        <section
            class="max-w-[1440px] max-h-[827px] m-auto mb-[200px] text-[#3B3B3B] flex justify-between sm-home:w-full sm-home:h-fit sm-home:px-[25px] sm-home:mb-[110px]">

            <!-- 關於我們 -->
            <div class="w-[432px] sm-home:w-full sm-home:h-fit sm-home:flex sm-home:flex-col">

                <!-- 關於我們標題 -->
                <div
                    class="text-[58px] font-bold w-[291px] h-[84px] text-right border-l-[11px] border-l-[#DD4F1B] mb-[50px] sm-home:text-[20px] sm-home:border-l-[3px] sm-home:mb-[23px] sm-home:w-[97px] sm-home:h-[30px]">
                    關於我們
                </div>

                <!-- 關於我們內容 -->
                <div
                    class="text-[24px] h-[374px] mb-[40px] font-medium sm-home:text-[14px] sm-home:h-fit sm-home:mb-[40px] sm-home:font-normal">
                    台中客運致力於打造安全、友善、永續 的公共交通服務，融合「行車安全」、
                    「服務品質」、「營運績效」三大核心理念，為乘客提供可靠且高效的出行體驗。
                    <br><br>
                    台中客運將不斷前行，以人為本，融合活力與專業，走向更加智慧化與永續化的未來交通。我們期待，成為您日常出行的最佳夥伴！
                </div>

                <!-- 手機板卡片 -->

                <div id="cargo"
                    class="w-full sm-home:h-full justify-between hidden sm-home:flex sm-home:gap-[21px] sm-home:mb-[60px]">
                    <div class=""><img class=" mt-[25px]" src="../assets/img/HomePage/3card-1.png" alt="卡片1">
                    </div>
                    <div class=""><img class="" src="../assets/img/HomePage/3card-2.png" alt="卡片2"></div>
                    <div class=""><img class="mt-[25px]" src="../assets/img/HomePage/3card-3.png" alt="卡片3">
                    </div>
                </div>


                <!-- About Us按鈕 -->
                <router-link to="/aboutus" @click="scrollTop"
                    class="w-[145px] h-[43px] flex justify-center items-center text-[18px] text-[#ffffff] font-bold bg-[#DD4F1B] rounded-[20px] gap-[7px] hover:bg-[#1B4794] hover:w-[163px] hover:gap-[13px] transform ease duration-300 sm-home:m-auto sm-home:text-[12px] sm-home:h-[40px]">
                    <span>About Us</span>
                    <svg class="sm-home:hidden" width="14" height="16" viewBox="0 0 14 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.2929L7.34315 0.928933C6.95262 0.538409 6.31946 0.538409 5.92893 0.928933C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34314 15.0711L13.7071 8.70711ZM-1.74846e-07 9L13 9L13 7L1.74846e-07 7L-1.74846e-07 9Z"
                            fill="white" />
                    </svg>
                </router-link>

            </div>

            <!-- 關於我們三張卡片 電腦版 -->
            <div id="cargo" class="w-[831px] flex justify-between sm-home:hidden">
                <img class="w-[240px] h-[576px] mt-[72px]" src="../assets/img/HomePage/3card-1.png" alt="卡片1">
                <img class="w-[240px] h-[576px] mt-[229px]" src="../assets/img/HomePage/3card-2.png" alt="卡片2">
                <img class="w-[240px] h-[576px] mt-[72px]" src="../assets/img/HomePage/3card-3.png" alt="卡片3">
            </div>
        </section>

        <!-- 服務網點 -->
        <div class="relative w-full bg-[#ffffff] flex justify-center">
            <svg id="buscar" class="relative -bottom-[10px] sm-home:translate-y-[10px] " width="386" height="123" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M285.359 80.73C285.359 80.73 313.201 79.8863 307.051 110.26H368.042L379.432 108.15C385.338 106.885 384.916 102.244 384.916 102.244L384.495 97.1822L378.589 6.90592C378.589 6.90592 377.745 1.8437 372.683 1H187.405H9.04644C9.04644 1 3.98421 1 3.98421 6.90592L3.14051 89.5889L1.4531 91.2763C1.4531 91.2763 0.609401 102.768 1.4531 104.193L10.7338 105.619L33.5138 109.838H40.2635C39.1385 105.057 38.2036 95.4948 44.9037 87.9015C45.3904 87.3498 50.8097 80.73 60.9341 80.73C60.9341 80.73 87.0889 80.3081 83.2923 109.838H197.218H241.2H264.689C263.282 106.463 263.423 97.6041 265.954 92.12C265.954 92.12 270.594 80.73 285.359 80.73Z"
                    fill="white" stroke="#3B3B3B" stroke-width="2" stroke-miterlimit="10" />
                <path
                    d="M383.999 98.4479L382.766 84.5268H324.169L269.328 73.9805H265.11H4.20959L4.20898 87.4798H43.9988C48.4988 81.5 57.1918 79.659 60.8479 79.7996C71.9988 80.2283 77.0301 85.2299 78.9988 87.4798H161.334H267.999C275.499 79 285.293 79.7996 285.293 79.7996C300.999 80.071 307.296 90.0784 307.999 95L324.169 98.4479H383.999Z"
                    fill="#DD4F1B" />
                <path d="M4.30078 71.8711H269.33L325.436 82.4174H382.5" stroke="#DD4F1B" stroke-width="2" />
                <path d="M332 8.86076L337.838 2H371.965C373.941 2 377.814 2.91984 378.153 8.86076L379 20H332V8.86076Z"
                    fill="#DD4F1B" />
                <path d="M264.268 9.01521L270 2H287.5L281.985 9.01521H264.268Z" fill="#1F35C1" />
                <path d="M286.625 9.01521L292 2H310L304.343 9.01521H286.625Z" fill="#CA1E1D" />
                <path d="M309.404 9.01521L315 2H333L327.122 9.01521H309.404Z" fill="#1F35C1" />
                <rect x="7.78125" y="8.17139" width="365.324" height="59.0592" rx="3" fill="#3B3B3B" />
                <path
                    d="M160.121 108.572H118.677C117.546 108.572 116.619 107.61 116.619 106.438V28.8673C116.619 27.6946 117.546 26.7329 118.677 26.7329H160.121C161.252 26.7329 162.179 27.6946 162.179 28.8673V106.438C162.179 107.61 161.252 108.572 160.121 108.572Z"
                    fill="#2B2B2B" />
                <path
                    d="M365.984 108.572H324.54C323.41 108.572 322.482 107.61 322.482 106.438V28.8673C322.482 27.6946 323.41 26.7329 324.54 26.7329H365.984C367.115 26.7329 368.042 27.6946 368.042 28.8673V106.438C368.042 107.61 367.115 108.572 365.984 108.572Z"
                    fill="#2B2B2B" />
                <path
                    d="M138.573 106.041H119.977C119.521 106.041 119.15 105.669 119.15 105.214V29.2467C119.15 28.7911 119.521 28.4199 119.977 28.4199H138.573C139.028 28.4199 139.399 28.7911 139.399 29.2467V105.214C139.399 105.669 139.028 106.041 138.573 106.041Z"
                    fill="white" stroke="#3B3B3B" stroke-miterlimit="10" />
                <path
                    d="M158.821 106.041H140.225C139.77 106.041 139.398 105.669 139.398 105.214V29.2467C139.398 28.7911 139.77 28.4199 140.225 28.4199H158.821C159.276 28.4199 159.647 28.7911 159.647 29.2467V105.214C159.647 105.669 159.276 106.041 158.821 106.041Z"
                    fill="white" stroke="#3B3B3B" stroke-miterlimit="10" />
                <path d="M157.116 31.7954H141.93V89.1673H157.116V31.7954Z" fill="#EDF6FF" />
                <path d="M136.868 31.7954H121.682V89.1673H136.868V31.7954Z" fill="#EDF6FF" />
                <path
                    d="M344.436 106.041H325.84C325.385 106.041 325.014 105.669 325.014 105.214V29.2467C325.014 28.7911 325.385 28.4199 325.84 28.4199H344.436C344.891 28.4199 345.263 28.7911 345.263 29.2467V105.214C345.263 105.669 344.891 106.041 344.436 106.041Z"
                    fill="white" stroke="#3B3B3B" stroke-miterlimit="10" />
                <path
                    d="M364.684 106.041H346.088C345.633 106.041 345.262 105.669 345.262 105.214V29.2467C345.262 28.7911 345.633 28.4199 346.088 28.4199H364.684C365.14 28.4199 365.511 28.7911 365.511 29.2467V105.214C365.511 105.669 365.14 106.041 364.684 106.041Z"
                    fill="white" stroke="#3B3B3B" stroke-miterlimit="10" />
                <path d="M342.732 31.7954H327.545V89.1673H342.732V31.7954Z" fill="#EDF6FF" />
                <path d="M362.98 31.7954H347.793V89.1673H362.98V31.7954Z" fill="#EDF6FF" />
                <path d="M166.896 24.7021H213.988V63.3562H166.896V24.7021Z" fill="#EDF6FF" stroke="white" />
                <path d="M217.52 24.7021H264.611V63.3562H217.52V24.7021Z" fill="#EDF6FF" stroke="white" />
                <path d="M112.4 63.8562V24.2021H64.3086V52.863L112.4 63.8562Z" fill="#EDF6FF" stroke="white" />
                <path d="M268.141 24.7021H315.232V63.3562H268.141V24.7021Z" fill="#EDF6FF" stroke="white" />
                <path d="M14.1875 24.7021H61.2786V52.3881H14.1875V24.7021Z" fill="#EDF6FF" stroke="white" />
                <path d="M64.8086 12.8896H111.9V21.1704H64.8086V12.8896Z" fill="#EDF6FF" stroke="white" />
                <path d="M166.896 12.8896H213.988V21.1704H166.896V12.8896Z" fill="#EDF6FF" stroke="white" />
                <path d="M217.52 12.8896H264.611V21.1704H217.52V12.8896Z" fill="#EDF6FF" stroke="white" />
                <path d="M268.141 12.8896H315.232V21.1704H268.141V12.8896Z" fill="#EDF6FF" stroke="white" />
                <path d="M14.1875 12.8896H61.2786V21.1704H14.1875V12.8896Z" fill="#EDF6FF" stroke="white" />
                <path
                    d="M378.59 8.17139L383.228 78.0154C383.275 78.8371 382.36 79.0425 381.896 79.0425H377.457C375.681 79.0425 374.941 77.673 374.793 76.9882V10.7392C374.793 9.09579 375.977 8.34257 376.569 8.17139H378.59Z"
                    fill="#3B3B3B" />
                <path
                    d="M378.588 9.85889L382.806 73.1367C382.835 73.8899 383.084 74.8241 382.806 74.8241H378.921C377.855 74.8241 377.411 73.5687 377.322 72.941V12.2127C377.322 10.7063 377.389 10.0158 377.744 9.85889H378.588Z"
                    fill="#EDF6FF" stroke="white" />
                <rect x="314.045" y="96.7603" width="5.06222" height="2.53111" fill="#CA1E1D" />
                <rect x="211.957" y="96.7603" width="5.06222" height="2.53111" fill="#CA1E1D" />
                <rect x="107.338" y="96.7603" width="5.06222" height="2.53111" fill="#CA1E1D" />
                <rect x="27.1855" y="96.7603" width="5.06222" height="2.53111" fill="#CA1E1D" />
                <rect x="42.373" y="84.1045" width="38.3885" height="38.3885" rx="19.1943" fill="#3B3B3B" />
                <rect x="49.373" y="91.1045" width="24" height="24" rx="12" fill="#D9D9D9" />
                <rect x="60.373" y="97.1045" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="67.373" y="102.104" width="2" height="2" rx="1" transform="rotate(90 67.373 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 66.2383 106.466)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 59.2383 106.466)" fill="#3B3B3B" />
                <rect x="60.373" y="107.104" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="57.373" y="102.104" width="2" height="2" rx="1" transform="rotate(90 57.373 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 59.2383 99.4663)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 66.2383 99.4663)" fill="#3B3B3B" />
                <rect x="49.373" y="91.1045" width="24" height="24" rx="12" fill="#D9D9D9" />
                <rect x="60.373" y="97.1045" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="67.373" y="102.104" width="2" height="2" rx="1" transform="rotate(90 67.373 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 66.2383 106.466)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 59.2383 106.466)" fill="#3B3B3B" />
                <rect x="60.373" y="107.104" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="57.373" y="102.104" width="2" height="2" rx="1" transform="rotate(90 57.373 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 59.2383 99.4663)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 66.2383 99.4663)" fill="#3B3B3B" />
                <circle cx="61.373" cy="103.104" r="3" fill="#3B3B3B" />
                <rect x="266.799" y="84.1045" width="38.3885" height="38.3885" rx="19.1943" fill="#3B3B3B" />
                <rect x="273.799" y="91.1045" width="24" height="24" rx="12" fill="#D9D9D9" />
                <rect x="284.799" y="97.1045" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="291.799" y="102.104" width="2" height="2" rx="1" transform="rotate(90 291.799 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 290.664 106.466)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 283.664 106.466)" fill="#3B3B3B" />
                <rect x="284.799" y="107.104" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="281.799" y="102.104" width="2" height="2" rx="1" transform="rotate(90 281.799 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 283.664 99.4663)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 290.664 99.4663)" fill="#3B3B3B" />
                <rect x="273.799" y="91.1045" width="24" height="24" rx="12" fill="#D9D9D9" />
                <rect x="284.799" y="97.1045" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="291.799" y="102.104" width="2" height="2" rx="1" transform="rotate(90 291.799 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 290.664 106.466)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 283.664 106.466)" fill="#3B3B3B" />
                <rect x="284.799" y="107.104" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="281.799" y="102.104" width="2" height="2" rx="1" transform="rotate(90 281.799 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 283.664 99.4663)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 290.664 99.4663)" fill="#3B3B3B" />
                <circle cx="285.799" cy="103.104" r="3" fill="#3B3B3B" />
                <path d="M166.5 50.5L194.5 25H205L166.5 62V50.5Z" fill="white" />
                <path d="M64 49.5L92 24H102.5L70.5 54L64 53V49.5Z" fill="white" />
                <path d="M14 49.5L41.5 24.5H52L21 52H14V49.5Z" fill="white" />
                <path d="M218 50.5L246 25H256.5L218 62V50.5Z" fill="white" />
                <path d="M268 50.5L296 25H306.5L268 62V50.5Z" fill="white" />
                <path d="M326 50.5L344 33V45L326 62V50.5Z" fill="white" />
                <path d="M120 50.5L138 33V45L120 62V50.5Z" fill="white" />
                <path d="M346 32.5L348.5 30H360.5L346 43.5V32.5Z" fill="white" />
                <path d="M140 32.5L142.5 30H154.5L140 43.5V32.5Z" fill="white" />
                <path d="M166.5 30.5L172.5 25H182L166.5 39.5V30.5Z" fill="white" />
                <path d="M64 29.5L70 24H79.5L64 38.5V29.5Z" fill="white" />
                <path d="M14 29.5L19.5 25H28.5L14 38.5V29.5Z" fill="white" />
                <path d="M218 30.5L224 25H233.5L218 39.5V30.5Z" fill="white" />
                <path d="M268 30.5L274 25H283.5L268 39.5V30.5Z" fill="white" />
                <path d="M327 75.5L343.5 60.5V72L327 87V75.5Z" fill="white" />
                <path d="M121 75.5L137.5 60.5V72L121 87V75.5Z" fill="white" />
                <path d="M347 57.5L363.5 41.5V53L347 69V57.5Z" fill="white" />
                <path d="M141 57.5L157.5 41.5V53L141 69V57.5Z" fill="white" />
                <path d="M377 32L380 29L380.5 39.5L377 43V32Z" fill="white" />
                <path d="M377 45L380.5 41.5V43L377 46.5V45Z" fill="white" />
                <path d="M169 63.5L208.5 25H210.5L171.5 63.5H169Z" fill="white" />
                <path d="M74 55L106 24H108L75.5 55.5L74 55Z" fill="white" />
                <path d="M26 52.5L56 24.5H57.5L28 52.5H26Z" fill="white" />
                <path d="M220.5 63.5L260 25H262L223 63.5H220.5Z" fill="white" />
                <path d="M270.5 63.5L310 25H312L273 63.5H270.5Z" fill="white" />
                <path d="M326 45.5L341.5 30.5H343.5L326 47.5V45.5Z" fill="white" />
                <path d="M120 45.5L135.5 30.5H137.5L120 47.5V45.5Z" fill="white" />
                <path d="M327 90L343.5 74V76L327 92V90Z" fill="white" />
                <path d="M121 90L137.5 74V76L121 92V90Z" fill="white" />
                <path d="M347 71L363.5 55V57L347 73V71Z" fill="white" />
                <path d="M141 71L157.5 55V57L141 73V71Z" fill="white" />
                <path d="M198 21L206 13H214V14.5L207 21H198Z" fill="white" />
                <path d="M95.5 21L103.5 13H111.5V14.5L104.5 21H95.5Z" fill="white" />
                <path d="M45.5 21L53.5 13H61.5V14.5L54.5 21H45.5Z" fill="white" />
                <path d="M249.5 21L259 13H264.5V15.5L259 21H249.5Z" fill="white" />
                <path d="M299.5 21L309 13H315V15L309 21H299.5Z" fill="white" />
                <path d="M175 21L183 13H191H193L184.5 21H175Z" fill="white" />
                <path d="M72.5 21L80.5 13H88.5H90.5L82 21H72.5Z" fill="white" />
                <path d="M22.5 21L30.5 13H38.5H40.5L32 21H22.5Z" fill="white" />
                <path d="M227 21L235 13H244H244.5L236.5 21H227Z" fill="white" />
                <path d="M277 21L285 13H294H294.5L286.5 21H277Z" fill="white" />
            </svg>

            <!-- <svg id="buscar" class="relative -bottom-[10px] sm-home:translate-y-[10px] " width="384px" height="122px"
                viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M285.359 80.73C285.359 80.73 313.201 79.8863 307.051 110.26H368.042L379.432 108.15C385.338 106.885 384.916 102.244 384.916 102.244L384.495 97.1822L378.589 6.90592C378.589 6.90592 377.745 1.8437 372.683 1H187.405H9.04644C9.04644 1 3.98421 1 3.98421 6.90592L3.14051 89.5889L1.4531 91.2763C1.4531 91.2763 0.609401 102.768 1.4531 104.193L10.7338 105.619L33.5138 109.838H40.2635C39.1385 105.057 38.2036 95.4948 44.9037 87.9015C45.3904 87.3498 50.8097 80.73 60.9341 80.73C60.9341 80.73 87.0889 80.3081 83.2923 109.838H197.218H241.2H264.689C263.282 106.463 263.423 97.6041 265.954 92.12C265.954 92.12 270.594 80.73 285.359 80.73Z"
                    fill="white" stroke="#3B3B3B" stroke-width="2" stroke-miterlimit="10" />
                <path
                    d="M384.495 98.4479L383.23 84.5268H324.17L269.33 73.9805H265.111H4.51351L4.37329 87.4798H43.772C48.0414 81.6293 57.1933 79.659 60.8493 79.7996C71.8276 79.7996 77.3983 85.2299 79.3669 87.4798H161.335H267.466C274.926 78.5798 285.294 79.7996 285.294 79.7996C300.818 79.4621 307.767 90.1256 308.47 95.0472L324.17 98.4479H384.495Z"
                    fill="#DD4F1B" />
                <path d="M4.52737 71.8711H269.33L325.436 82.4174H383.23" stroke="#DD4F1B" stroke-width="2" />
                <path
                    d="M332.184 9.01521L338.933 1.42188H371.838C373.806 1.42188 377.828 2.94054 378.165 9.01521L379.009 20.4052H332.184V9.01521Z"
                    fill="#DD4F1B" />
                <path d="M264.268 9.01521L270.174 1.42188H287.891L281.985 9.01521H264.268Z" fill="#1F35C1" />
                <path d="M286.625 9.01521L292.531 1.42188H310.249L304.343 9.01521H286.625Z" fill="#CA1E1D" />
                <path d="M309.404 9.01521L315.31 1.42188H333.028L327.122 9.01521H309.404Z" fill="#1F35C1" />
                <rect x="7.78125" y="8.17139" width="365.324" height="59.0592" rx="3" fill="#3B3B3B" />
                <path
                    d="M160.121 108.572H118.677C117.546 108.572 116.619 107.61 116.619 106.438V28.8673C116.619 27.6946 117.546 26.7329 118.677 26.7329H160.121C161.252 26.7329 162.179 27.6946 162.179 28.8673V106.438C162.179 107.61 161.252 108.572 160.121 108.572Z"
                    fill="#2B2B2B" />
                <path
                    d="M365.984 108.572H324.54C323.41 108.572 322.482 107.61 322.482 106.438V28.8673C322.482 27.6946 323.41 26.7329 324.54 26.7329H365.984C367.115 26.7329 368.042 27.6946 368.042 28.8673V106.438C368.042 107.61 367.115 108.572 365.984 108.572Z"
                    fill="#2B2B2B" />
                <path
                    d="M138.573 106.041H119.977C119.521 106.041 119.15 105.669 119.15 105.214V29.2467C119.15 28.7911 119.521 28.4199 119.977 28.4199H138.573C139.028 28.4199 139.399 28.7911 139.399 29.2467V105.214C139.399 105.669 139.028 106.041 138.573 106.041Z"
                    fill="white" stroke="#3B3B3B" stroke-miterlimit="10" />
                <path
                    d="M158.821 106.041H140.225C139.77 106.041 139.398 105.669 139.398 105.214V29.2467C139.398 28.7911 139.77 28.4199 140.225 28.4199H158.821C159.276 28.4199 159.647 28.7911 159.647 29.2467V105.214C159.647 105.669 159.276 106.041 158.821 106.041Z"
                    fill="white" stroke="#3B3B3B" stroke-miterlimit="10" />
                <path d="M157.116 31.7954H141.93V89.1673H157.116V31.7954Z" fill="#D9D9D9" />
                <path d="M136.868 31.7954H121.682V89.1673H136.868V31.7954Z" fill="#D9D9D9" />
                <path
                    d="M344.436 106.041H325.84C325.385 106.041 325.014 105.669 325.014 105.214V29.2467C325.014 28.7911 325.385 28.4199 325.84 28.4199H344.436C344.891 28.4199 345.263 28.7911 345.263 29.2467V105.214C345.263 105.669 344.891 106.041 344.436 106.041Z"
                    fill="white" stroke="#3B3B3B" stroke-miterlimit="10" />
                <path
                    d="M364.684 106.041H346.088C345.633 106.041 345.262 105.669 345.262 105.214V29.2467C345.262 28.7911 345.633 28.4199 346.088 28.4199H364.684C365.14 28.4199 365.511 28.7911 365.511 29.2467V105.214C365.511 105.669 365.14 106.041 364.684 106.041Z"
                    fill="white" stroke="#3B3B3B" stroke-miterlimit="10" />
                <path d="M342.732 31.7954H327.545V89.1673H342.732V31.7954Z" fill="#D9D9D9" />
                <path d="M362.98 31.7954H347.793V89.1673H362.98V31.7954Z" fill="#D9D9D9" />
                <path d="M166.396 24.2021H214.488V63.8562H166.396V24.2021Z" fill="#D9D9D9" />
                <path d="M217.02 24.2021H265.111V63.8562H217.02V24.2021Z" fill="#D9D9D9" />
                <path d="M112.4 63.8562V24.2021H64.3086V52.863L112.4 63.8562Z" fill="#D9D9D9" />
                <path d="M267.641 24.2021H315.732V63.8562H267.641V24.2021Z" fill="#D9D9D9" />
                <path d="M13.6875 24.2021H61.7786V52.8881H13.6875V24.2021Z" fill="#D9D9D9" />
                <path d="M64.3086 12.3896H112.4V21.6704H64.3086V12.3896Z" fill="#D9D9D9" />
                <path d="M166.396 12.3896H214.488V21.6704H166.396V12.3896Z" fill="#D9D9D9" />
                <path d="M217.02 12.3896H265.111V21.6704H217.02V12.3896Z" fill="#D9D9D9" />
                <path d="M267.641 12.3896H315.732V21.6704H267.641V12.3896Z" fill="#D9D9D9" />
                <path d="M13.6875 12.3896H61.7786V21.6704H13.6875V12.3896Z" fill="#D9D9D9" />
                <path
                    d="M378.59 8.17139L383.228 78.0154C383.275 78.8371 382.36 79.0425 381.896 79.0425H377.457C375.681 79.0425 374.941 77.673 374.793 76.9882V10.7392C374.793 9.09579 375.977 8.34257 376.569 8.17139H378.59Z"
                    fill="#3B3B3B" />
                <path
                    d="M378.588 9.85889L382.806 73.1367C382.835 73.8899 383.084 74.8241 382.806 74.8241H378.921C377.855 74.8241 377.411 73.5687 377.322 72.941V12.2127C377.322 10.7063 377.389 10.0158 377.744 9.85889H378.588Z"
                    fill="#D9D9D9" />
                <rect x="314.045" y="96.7603" width="5.06222" height="2.53111" fill="#CA1E1D" />
                <rect x="211.957" y="96.7603" width="5.06222" height="2.53111" fill="#CA1E1D" />
                <rect x="107.338" y="96.7603" width="5.06222" height="2.53111" fill="#CA1E1D" />
                <rect x="27.1855" y="96.7603" width="5.06222" height="2.53111" fill="#CA1E1D" />
                <rect x="42.373" y="84.1045" width="38.3885" height="38.3885" rx="19.1943" fill="#3B3B3B" />
                <rect x="49.373" y="91.1045" width="24" height="24" rx="12" fill="#D9D9D9" />
                <rect x="60.373" y="97.1045" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="67.373" y="102.104" width="2" height="2" rx="1" transform="rotate(90 67.373 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 66.2383 106.466)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 59.2383 106.466)" fill="#3B3B3B" />
                <rect x="60.373" y="107.104" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="57.373" y="102.104" width="2" height="2" rx="1" transform="rotate(90 57.373 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 59.2383 99.4663)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 66.2383 99.4663)" fill="#3B3B3B" />
                <rect x="49.373" y="91.1045" width="24" height="24" rx="12" fill="#D9D9D9" />
                <rect x="60.373" y="97.1045" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="67.373" y="102.104" width="2" height="2" rx="1" transform="rotate(90 67.373 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 66.2383 106.466)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 59.2383 106.466)" fill="#3B3B3B" />
                <rect x="60.373" y="107.104" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="57.373" y="102.104" width="2" height="2" rx="1" transform="rotate(90 57.373 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 59.2383 99.4663)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 66.2383 99.4663)" fill="#3B3B3B" />
                <circle cx="61.373" cy="103.104" r="3" fill="#3B3B3B" />
                <rect x="266.799" y="84.1045" width="38.3885" height="38.3885" rx="19.1943" fill="#3B3B3B" />
                <rect x="273.799" y="91.1045" width="24" height="24" rx="12" fill="#D9D9D9" />
                <rect x="284.799" y="97.1045" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="291.799" y="102.104" width="2" height="2" rx="1" transform="rotate(90 291.799 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 290.664 106.466)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 283.664 106.466)" fill="#3B3B3B" />
                <rect x="284.799" y="107.104" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="281.799" y="102.104" width="2" height="2" rx="1" transform="rotate(90 281.799 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 283.664 99.4663)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 290.664 99.4663)" fill="#3B3B3B" />
                <rect x="273.799" y="91.1045" width="24" height="24" rx="12" fill="#D9D9D9" />
                <rect x="284.799" y="97.1045" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="291.799" y="102.104" width="2" height="2" rx="1" transform="rotate(90 291.799 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 290.664 106.466)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 283.664 106.466)" fill="#3B3B3B" />
                <rect x="284.799" y="107.104" width="2" height="2" rx="1" fill="#3B3B3B" />
                <rect x="281.799" y="102.104" width="2" height="2" rx="1" transform="rotate(90 281.799 102.104)"
                    fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 283.664 99.4663)" fill="#3B3B3B" />
                <rect width="2" height="2.00068" rx="1"
                    transform="matrix(-0.69986 0.71428 -0.732547 -0.680717 290.664 99.4663)" fill="#3B3B3B" />
                <circle cx="285.799" cy="103.104" r="3" fill="#3B3B3B" />
            </svg> -->
            <svg width="302" height="122" class="sm-home:w-[150px] sm-home:h-[80px] sm-home:translate-y-[42px]"
                viewBox="0 0 302 914" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dx="-1" />
                        <feGaussianBlur stdDeviation="0.3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1412_4733" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1412_4733" result="shape" />
                    </filter>
                </defs>
            </svg>
            <img id="man" src="../assets/img/HomePage/people.png"
                class="h-[153px] bg-transparent absolute left-[53vw] sm-home:w-[120px] sm-home:h-[100px] sm-home:translate-y-[45px] sm-home:translate-x-[45px]"
                alt="">
        </div>

        <!-- 相關連結大外框 -->
        <section class="w-full h-[820px] flex justify-center items-center bg-[#DD4F1B] sm-home:h-fit sm-home:px-[25px]">


            <!-- 相關連結內容 -->
            <div class="max-w-[1440px] h-full w-full text-[#FFFFFF]">
                <div
                    class="text-[58px] font-bold w-[291px] h-[84px] text-right leading-[84px] border-l-[11px] border-l-[#ffffff] mt-[111px] mb-[50px] sm-home:text-[20px] sm-home:w-[100px] sm-home:h-[30px] sm-home:leading-[30px] sm-home:border-l-[3px] sm-home:mt-[40px] sm-home:mb-[27px]">
                    相關連結
                </div>
                <span class="text-[24px] font-bold sm-home:text-[12px] sm-home:font-normal">政府機關</span>
                <Vue3Marquee :duration="35" :pauseOnHover="true">
                    <div
                        class="w-full h-[140px] mt-[20px] mb-[50px] flex overflow-hidden cursor-pointer sm-home:h-[70px] sm-home:mt-[8px] sm-home:mb-[20px]">
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.motc.gov.tw/ch/index" target="_blank"><img
                                    class="w-full h-full" src="../assets/img/HomePage/up-swiper1.png"
                                    alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.thb.gov.tw/" target="_blank"><img class="w-full h-full"
                                    src="../assets/img/HomePage/up-swiper2.png" alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.traffic.taichung.gov.tw/" target="_blank"><img
                                    class="w-full h-full" src="../assets/img/HomePage/up-swiper3.png"
                                    alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.taichung.gov.tw/" target="_blank"><img
                                    class="w-full h-full" src="../assets/img/HomePage/up-swiper4.png"
                                    alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.dot.gov.taipei/" target="_blank"><img
                                    class="w-full h-full" src="../assets/img/HomePage/up-swiper5.png"
                                    alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.gov.taipei/" target="_blank"><img class="w-full h-full"
                                    src="../assets/img/HomePage/up-swiper6.png" alt="swiper-png"></a>
                        </div>

                    </div>
                </Vue3Marquee>

                <span class="text-[24px] font-bold mb-[20px] sm-home:text-[12px] sm-home:font-normal">大眾運輸機關</span>
                <Vue3Marquee :duration="35" :pauseOnHover="true">
                    <div
                        class="w-full h-[140px] mt-[20px] mb-[0px] flex overflow-hidden cursor-pointer sm-home:h-[70px] sm-home:mt-[8px] sm-home:mb-[56px]">
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.tpebus.com.tw/" target="_blank"><img
                                    class="w-full h-full" src="../assets/img/HomePage/dw-swiper1.png"
                                    alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.ebus.com.tw/" target="_blank"><img class="w-full h-full"
                                    src="../assets/img/HomePage/dw-swiper2.png" alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.kingbus.com.tw/index.html" target="_blank"><img
                                    class="w-full h-full" src="../assets/img/HomePage/dw-swiper3.png"
                                    alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.ubus.com.tw/" target="_blank"><img class="w-full h-full"
                                    src="../assets/img/HomePage/dw-swiper4.png" alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.ksbus.com.tw/" target="_blank"><img
                                    class="w-full h-full" src="../assets/img/HomePage/dw-swiper5.png"
                                    alt="swiper-png"></a>
                        </div>
                        <div
                            class="bg-[#ffffff] rounded-[15px] flex justify-center items-center w-[310px] h-full px-[24px] mr-[30px] sm-home:rounded-[10px] sm-home:w-[155px] sm-home:px-[16px] sm-home:mr-[12px]">
                            <a title="跳轉外部網站" href="https://www.mtcbus.com.tw/" target="_blank"></a><img
                                class="w-full h-full" src="../assets/img/HomePage/dw-swiper6.png" alt="swiper-png">
                        </div>

                    </div>
                </Vue3Marquee>
            </div>


        </section>

    </main>

</template>

<style>
#open {

    background-image: url('../assets/img/HomePage/mid-bus.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}

#bannerword1,
#bannerword2 {
    text-shadow: rgb(17, 17, 17) 0.1em 0.1em 0.2em
}
</style>