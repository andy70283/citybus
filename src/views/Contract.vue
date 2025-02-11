<script>
import ContractOne from '@/components/ContractOneCase.vue'
import ContractTwo from '@/components/ContractTwoCase.vue'
import ContractThree from '@/components/ContractThreeCase.vue'
import NavCase5 from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        NavCase5,
        ContractOne,
        ContractTwo,
        ContractThree,
    },
    data() {
        return {
            showContractOne: true,
            showContractTwo: false,
            showContractThree: false
        }
    },
    mounted() {
        this.initScrollEffects();
        this.scrollTop();
    },
    methods: {
        initScrollEffects() {
            const nav = document.querySelector('#nav5');
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
                top: 0
            });
        }
    }
}
</script>


<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
        <!-- 子頁橫幅 -->
        <section id="banner5"
            class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
            <NavCase5 id="nav5" class="z-[50]" />
            <img src="../assets/img/banner/RuleBanner.webp" alt="子頁橫幅" class="w-full h-full object-cover" />
        </section>
        <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section
                class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div
                    class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
                    <router-link to="/">首頁</router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    中客服務
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    運送契約
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">
                        運送契約
                    </span>
                </div>
            </section>
            <!-- 按鈕區 -->
            <section class="flex justify-between mb-[80px] max-md:mb-[40px]">
                <!-- 按鈕區 -->
                <div class="w-auto flex flex-wrap gap-[25px] max-2xl:gap-[20px] max-md:gap-[15px] max-md:flex-nowrap justify-start items-center">
                    <div @click="showContractOne = true; showContractTwo = false; showContractThree = false" id="btn1"
                        :class="[
                            'flex justify-center items-center w-auto h-[70px] max-2xl:h-[60px] max-md:w-[100px] max-md:h-[48px] px-[15px] max-md:px-0 text-2xl max-2xl:text-[20px] max-md:text-[14px] font-bold rounded-full text-center border-[#1B4794] border-[3px] cursor-pointer',
                            showContractOne ? 'text-white bg-[#1B4794]' : 'text-[#1B4794] bg-white hover:bg-[#1B4794]/80 hover:text-white hover:border-transparent'
                        ]">
                        <span class="block max-sm:hidden">旅客運送定型化契約</span>
                        <span class="hidden max-sm:block">運送契約</span>
                    </div>
                    <div @click="showContractOne = false; showContractTwo = true; showContractThree = false" id="btn2"
                        :class="[
                            'flex justify-center items-center w-auto h-[70px] max-2xl:h-[60px] max-md:w-[100px] max-md:h-[48px] px-[15px] max-md:px-0 text-2xl max-2xl:text-[20px] max-md:text-[14px] font-bold rounded-full text-center border-[#1B4794] border-[3px] cursor-pointer',
                            showContractTwo ? 'text-white bg-[#1B4794]' : 'text-[#1B4794] bg-white hover:bg-[#1B4794]/80 hover:text-white hover:border-transparent'
                        ]">
                        <span class="block max-sm:hidden">性騷擾防治申訴及調查處理辦法</span>
                        <span class="hidden max-sm:block">性騷擾防治</span>
                    </div>
                    <div @click="showContractOne = false; showContractTwo = false; showContractThree = true" id="btn3"
                        :class="[
                            'flex justify-center items-center w-auto h-[70px] max-2xl:h-[60px] max-md:w-[100px] max-md:h-[48px] px-[15px] max-md:px-0 text-2xl max-2xl:text-[20px] max-md:text-[14px] font-bold rounded-full text-center border-[#1B4794] border-[3px] cursor-pointer',
                            showContractThree ? 'text-white bg-[#1B4794]' : 'text-[#1B4794] bg-white hover:bg-[#1B4794]/80 hover:text-white hover:border-transparent'
                        ]">
                        <span class="block max-sm:hidden">公路汽車客運業無記名票證定型化契約應記載及不得記載事項</span>
                        <span class="hidden max-sm:block">票證契約</span>
                    </div>
                    <!-- <router-link to ="/contracttwo" id="btn2" class="flex items-center w-auto h-[70px] px-[15px] text-2xl font-bold rounded-full text-center text-[#1B4794] bg-[#ffffff] hover:bg-[#1B4794]/80 hover:text-white  hover:border-transparent border-[#1B4794] border-[3px]">性騷擾防治法申訴及調查處理辦法</router-link>
                    <router-link to ="/contractthree" id="btn3" class="flex items-center w-auto h-[70px] px-[15px] text-2xl font-bold rounded-full text-center text-[#1B4794] bg-[#ffffff] hover:bg-[#1B4794]/80 hover:text-white  hover:border-transparent border-[#1B4794] border-[3px]">公路汽車客運業無記名票證定型化契約應記載及不得記載事項</router-link> -->
                </div>
            </section>
            <!-- 契約內容 -->
            <ContractOne v-if="showContractOne" />
            <ContractTwo v-if="showContractTwo" />
            <ContractThree v-if="showContractThree" />
        </div>
    </main>
</template>

<style></style>