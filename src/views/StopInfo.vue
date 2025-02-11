<script>
import StopCard from "@/components/StopCard.vue";
import { StopStore } from "@/stores/stop.js";
import NavCase7 from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        StopCard,
        NavCase7,
    },
    data() {
        let store = StopStore()
        return {
            store,
            items: store.stopitems,
            lastPos1: 0,
        }
    },
    mounted() {
        // this.lastPos1 = window.scrollY;
        // this.initScrollEffects1();
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#all',
                start: '0% 0%',
                end: () => `+=${window.innerHeight * 2}`,
                scrub: 2,
                // markers: true,
                pin: true,
            }
        });

        const getScaleValue = () => {
            if (window.innerWidth <= 768) {
                return 3.0;
            } else if (window.innerWidth <= 1536) {
                return 4.0;
            }
            return 5.0;
        };

        const getLineWidth = () => {
            if (window.innerWidth <= 768) {
                return '0px';
            } else if (window.innerWidth <= 1536) {
                return '400px';
            }
            return '600px';
        };

        tl2.to('#taiwan', {
            scale: getScaleValue(),
            y: window.innerWidth <= 768 ? '10vh' : '20vh',
            duration: 1
        })
            .to('#circle', {
                scale: window.innerWidth <= 768 ? 0.15 : 0.27,
                x: window.innerWidth <= 768 ? '-2vw' : '-4.1vw',
                y: window.innerWidth <= 768 ? '1vh' : '4vh',
                zIndex: 40,
                opacity: 1,
                duration: 2
            }, "<")
            .set('#taichung', {
                scale: getScaleValue(),
                y: window.innerWidth <= 768 ? '10vh' : '20vh',
            })
            .to('#taichung', {
                opacity: 1,
                duration: 2,
            })
            .to('#line', {
                width: getLineWidth(),
                duration: 2,
                opacity: 1
            })
            .from('#locationgroup', {
                opacity: 0,
                y: '-10vh',
                ease: 'elastic',
                duration: 1
            })
            .to('#title', {
                opacity: 1,
                duration: 2
            }, "<")
            .to({}, { duration: 1 });

        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });

        this.handleScroll1 = () => {
            let currentPos1 = window.scrollY;
            let nav = document.querySelector('#nav7');
            nav.style.transition = 'opacity 0.3s ease';
            if (currentPos1 > this.lastPos1) {
                nav.style.opacity = 0;
                nav.style.zIndex = -1;
            }
            else {
                nav.style.opacity = 1;
                nav.style.zIndex = 99;
            }
            this.lastPos1 = currentPos1;
        };
        document.addEventListener('scroll', this.handleScroll1);
    },
    beforeUnmount() {
        document.removeEventListener('scroll', this.handleScroll1);
    }
}
</script>

<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px] overflow-hidden">
        <NavCase7 id="nav7" class="z-[50]" />
        <!-- map gsap -->
        <div id="all" class="h-[100vh] w-full relative bg-[#DD4F1B] overflow-hidden mb-[150px] max-md:mb-[40px]">
            <img id="taiwan" src="../assets/img/img/taiwan.png" alt=""
                class="h-[300px] w-[150px] fixed top-[40vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]">
            <div id="circle"
                class="w-[2200px] h-[2200px] rounded-[50%] border-solid border-[7px] border-[#1B4794] fixed top-[40vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] opacity-0">
            </div>
            <img id="taichung" src="../assets/img/img/taiwan-center.png" alt=""
                class="h-[300px] w-[150px] fixed top-[40vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] opacity-0">
            <div id="locationgroup"
                class="w-[150px] h-[350px] max-md:w-[120px] max-md:h-[200px] fixed top-[22vh] left-[39vw] max-md:top-[25vh] max-md:left-[20vw] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[12%] left-[44%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[20%] left-[29%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[25%] left-[20%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[26%] left-[40%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[25%] left-[65%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[33%] left-[31%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[35%] left-[48%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[39%] left-[62%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[42%] left-[39%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[47%] left-[54%] opacity-1">
                <img src="../assets/img/img/icon-location.png" alt=""
                    class="w-[16px] h-[23px] max-md:w-[11px] max-md:h-[18px] absolute top-[88%] left-[56%] opacity-1">
            </div>
            <!-- <img id="location" src="../assets/img/img/taiwan-center-icon.png" alt="" class="h-[300px] w-[150px] fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0"> -->
            <div id="line" class="bg-[#1B4794] w-[2px] h-[3px] fixed top-[40dvh] left-[61.1vw] opacity-0"></div>
            <span id="title"
                class="text-[58px] max-md:text-[30px] font-bold text-white absolute left-[68vw] top-[31vh] max-md:top-[65vh] max-md:left-[20vw] max-md:text-[#1B4794]  opacity-0">台中客運站點分佈</span>
            <span id="title"
                class="text-[32px] max-md:text-[20px] font-normal text-white absolute left-[68.5vw] top-[42vh] max-md:top-[75vh] max-md:left-[15vw] max-md:text-[#1B4794] opacity-0">橫跨台中市與南投縣共11個站場</span>
            <span id="title"
                class="text-[32px] max-md:text-[20px] font-normal text-white absolute left-[68.5vw] top-[47vh] max-md:top-[80vh] max-md:left-[15vw] max-md:text-[#1B4794] opacity-0">緊密聯繫主要交通樞紐及生活圈</span>
        </div>
        <div class="max-w-[1440px] mt-[150px] max-2xl:mt-0 m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section
                class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div
                    class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
                    <router-link to="/">首頁</router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    站場簡介
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">
                        站場簡介
                    </span>
                </div>
            </section>
            <!-- 站點資訊卡片 -->
            <section class="flex gap-[60px] max-2xl:gap-[40px] max-md:gap-x-[20px] flex-wrap font-bold text-white">
                <!-- stopcard元件在這邊 -->
                <StopCard :cards="items"></StopCard>
            </section>
        </div>
    </main>
</template>

<style>
.stop-card {
    width: calc((100% - 120px) / 3);
    position: relative;
    transition: all 0.3s;
}

.stop-card:focus-within .absolute {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
}


@media (max-width: 1536px) {
    .stop-card {
        width: calc((100% - 80px) / 3);
    }
}

@media (max-width: 1280px) {
    .stop-card {
        width: calc((100% - 40px) / 2);
    }
}

@media (max-width: 768px) {
    .stop-card {
        width: calc((100% - 20px) / 2);
        height: 440px;
    }
}

@media (max-width: 440px) {
    .stop-card {
        width: 100%;
    }
}
</style>