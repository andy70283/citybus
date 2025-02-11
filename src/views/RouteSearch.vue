<script>
import ShowModal from "@/components/ShowModal.vue";
import { RouteSearchStore } from '../stores/route.js';
import NavCase2 from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "App",
    components: {
        ShowModal,
        NavCase2
    },
    data() {
        let store = RouteSearchStore();
        return {
            store,
            items: store.caritems,
            thing: 'city',
            search: '',
            showitems: [],
            currentPage: 1,
            itemsPerPage: 14,
            btnshow: false,
            showitem: {},
            showimg: '',
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.showitems.length / this.itemsPerPage);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.showitems.slice(start, end);
        }
    },
    mounted() {
        this.searchItem();
        this.initScrollEffects2();
        this.scrollTop();
    },
    methods: {
        switchType(type) {
            this.thing = type;
            this.searchItem();
        },
        searchItem() {
            this.currentPage = 1;
            this.showitems = this.items.filter((item) => {
                const matchType = item.class === this.thing;
                const searchTerm = this.search.toLowerCase();
                const matchSearch = searchTerm === '' ||
                    item.title.toLowerCase().includes(searchTerm) ||
                    item.stop1.toLowerCase().includes(searchTerm) ||
                    item.stop2.toLowerCase().includes(searchTerm);
                return matchType && matchSearch;
            });
            const existingMessage = document.querySelector('.nomessage');
            if (existingMessage) {
                existingMessage.remove();
            }
            if (this.showitems.length === 0) {
                this.$nextTick(() => {
                    const container = document.querySelector('section.flex.flex-wrap');
                    const message = document.createElement('div');
                    message.textContent = '查無相關路線';
                    message.className = 'nomessage text-center text-5xl font-bold mt-4 text-[#DD4F1B] w-full';
                    container.appendChild(message);
                });
            }
        },
        closeModal(item) {
            this.btnshow = item;
        },
        openModal(choie, item) {
            this.showitem = item;
            this.showimg = choie;
            this.btnshow = true;
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
            });
        },
        scrollup() {
            const up = document.querySelector('#up');
            window.scrollTo({
                top: up.offsetTop - 80,
            });
        },
        initScrollEffects2() {
            const nav = document.querySelector('#nav2');
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

    },
};
</script>

<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
        <!-- 子頁橫幅 -->
        <section id="banner2"
            class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
            <NavCase2 id="nav2" class="z-[50]" />
            <img src="../assets/img/banner/RouteBanner.jpg" alt="子頁橫幅" class="w-full h-full object-cover" />
        </section>
        <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section
                class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div
                    class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
                    <router-link to="/">首頁</router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    路線查詢
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">
                        路線查詢
                    </span>
                </div>
            </section>
            <!-- 按鈕區與外部連結與搜尋框 -->
            <section class="flex justify-between mb-[40px] max-lg:flex-wrap max-lg:gap-[20px] max-md:gap-[15px]" id="up">
                <section class="flex flex-nowrap gap-[50px] max-2xl:gap-[30px] max-md:gap-[20px] font-bold">
                    <div class="w-auto flex gap-[25px] max-2xl:gap-[20px] max-md:gap-[15px]">
                        <button v-for="(label, type) in { city: '台中市公車', high: '長途客運' }" :key="type"
                            @click="switchType(type)" :class="[
                                'w-[200px] max-2xl:w-[150px] max-md:w-[100px] h-[70px] max-2xl:h-[60px] max-md:h-[48px] text-2xl font-bold rounded-full text-center max-2xl:text-[20px] max-md:text-[14px]',
                                thing === type
                                    ? 'text-white bg-[#1B4794]'
                                    : 'text-[#1B4794] bg-[#ffffff] hover:bg-[#1B4794]/80 hover:text-white hover:border-none border-[3px] border-[#1B4794]'
                            ]">
                            {{ label }}
                        </button>
                    </div>
                    <!-- 外部連結 -->
                    <div
                        class="text-[#DD4F1B] flex max-sm:flex-col gap-[25px] max-md:gap-[15px] max-sm:gap-[4px] w-auto text-[24px] max-2xl:text-[20px] max-md:text-[12px]">
                        <a title="跳轉外部網站" href="https://citybus.taichung.gov.tw/ebus/fare/all" target="_blank"
                            rel="noopener noreferrer" class="flex items-center">
                            <span class="group flex border-b-[2px] border-b-[#DD4F1B] transition pb-[2px] max-sm:pb-0">
                                票價查詢<img src="../assets/img/icon/orange-upperright.png" alt="右上箭頭"
                                    class="w-[35px] h-[35px] max-2xl:w-[30px] max-2xl:h-[30px] max-md:w-[20px] max-md:h-[20px] ml-[4px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            </span>
                        </a>
                        <a title="跳轉外部網站" href="https://citybus.taichung.gov.tw/ebus/driving-map" target="_blank"
                            rel="noopener noreferrer" class="flex items-center">
                            <span class="group flex border-b-[2px] border-b-[#DD4F1B] transition pb-[2px] max-sm:pb-0">
                                公車動態<img src="../assets/img/icon/orange-upperright.png" alt="右上箭頭"
                                    class="w-[35px] h-[35px] max-2xl:w-[30px] max-2xl:h-[30px] max-md:w-[20px] max-md:h-[20px] ml-[4px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            </span>
                        </a>
                    </div>
                </section>
                <!-- 搜尋框 -->
                <form class="w-[400px] max-2xl:w-[360px] max-md:w-[200px]">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div class="relative">
                        <input type="text" id="default-search" v-model="search" @input="searchItem"
                            class="block w-full p-4 max-md:p-3 ps-9 h-[70px] max-2xl:h-[60px] max-md:h-[48px] text-[24px] max-2xl:text-[20px] max-md:text-[14px] border-[#1B4794] border-[3px] rounded-full bg-gray-50 focus:ring-[#1B4794] focus:ring-opacity-50 focus:outline-none focus:border-[#1B4794]/50"
                            placeholder="請輸入車號/站名" required />
                        <div type="submit" class="text-white absolute end-2.5 bottom-2.5 px-4 py-2 max-md:px-3">
                            <svg class="w-[30px] h-[30px] max-2xl:w-[24px] max-2xl:h-[24px] max-md:w-[15px] max-md:h-[15px] text-[#1B4794] hover:text-[#1B4794]/80"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                    </div>
                </form>
            </section>
            <!-- 路線查詢卡片區 -->
            <section
                class="flex flex-wrap w-full mb-[100px] max-2xl:mb-[80px] max-md:mb-[60px] gap-[40px] max-lg:gap-[20px]">
                <!-- 單張卡片 -->
                <div v-for="(item, index) in paginatedData" :key="index"
                    class="route-card h-[255px] max-2xl:h-[220px] max-md:h-[140px] px-[42px] py-[19px] max-md:px-[30px] max-md:py-[10px]  flex max-lg:flex-col bg-[#FFF7EF] border-[3px] border-[#D9D9D9] rounded-[32px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
                    <div class="flex flex-col max-lg:flex-row py-[21px] max-md:py-[10px] justify-between text-[20px] max-2xl:text-[16px] max-md:text-[12px] font-bold">
                        <div class="flex flex-col max-lg:flex-grow max-lg:mr-[40px]  border-b-[2px] border-b-[#DD4F1B]">
                            <span class="text-[#1B4794]">固定班次
                            </span>
                            <span
                                class="text-[#DD4F1B] text-[58px] max-2xl:text-[36px] max-md:text-[24px] leading-[70px] max-2xl:leading-[50px] max-md:leading-[35px] pb-[7px] ">
                                {{ item.title }}
                            </span>
                        </div>
                        <div class="flex max-lg:flex-col gap-[10px]">
                            <!-- 票價表按鈕 -->
                            <button @click="openModal('startimg1', item, '路線圖')"
                                class="flex items-center gap-2 max-md:gap-1 text-white bg-[#DD4F1B] hover:bg-[#DD4F1B]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px] px-[17px] py-[6.5px] max-2xl:px-[12px] max-md:px-[8px] max-2xl:py-[4px] text-center">
                                路線圖
                                <img src="../assets/img/icon/white-next.png" alt="白色大於icon"
                                    class="w-4 max-2xl:w-3 max-md:w-2">
                            </button>
                            <!-- 路線圖按鈕 -->
                            <button @click="openModal('startimg2', item, '時刻表')" 
                                class="flex items-center gap-2 max-md:gap-1 text-white bg-[#DD4F1B] hover:bg-[#DD4F1B]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px] px-[17px] py-[6.5px] max-2xl:px-[12px] max-md:px-[8px] max-2xl:py-[4px] text-center">
                                時刻表
                                <img src="../assets/img/icon/white-next.png" alt="白色大於icon"
                                    class="w-4 max-2xl:w-3 max-md:w-2">
                            </button>
                        </div>
                    </div>
                    <div
                        class="h-full mx-[32px] max-lg:mx-[20px] border-l-[3px] border-dashed border-[#D9D9D9] max-lg:hidden">
                    </div>
                    <div
                        class="flex flex-col max-lg:flex-row grow items-center max-lg:jusitify-center font-bold text-[24px] max-2xl:text-[20px] max-md:text-[14px] py-[45px] max-2xl:py-[30px] max-lg:py-0">
                        <span>{{ item.stop1 }}</span>
                        <div class="h-full my-[12px] border-l-[2px] border-[#3b3b3b] max-lg:hidden"></div>
                        <span class="hidden max-lg:block">&nbsp;-&nbsp;</span>
                        <span>{{ item.stop2 }}</span>
                    </div>
                </div>

            </section>
            <!-- 分頁按鈕 -->
            <section class="flex gap-[15px] max-md:gap-[10px] justify-center">
                <button v-for="page in totalPages" :key="page" @click="currentPage = page; scrollup()" :class="[
                    'w-[50px] h-[50px] max-md:w-[30px] max-md:h-[30px] rounded',
                    currentPage === page
                        ? 'text-white bg-[#DD4F1B] text-[24px] max-2xl:text-[20px] max-md:text-[12px] font-bold rounded-full text-center'
                        : 'text-black  text-[24px] max-2xl:text-[20px] max-md:text-[12px] font-bold rounded-full text-center hover:bg-[#DD4F1B] hover:text-white'
                ]">
                    {{ page }}
                </button>
            </section>
        </div>
        <div v-if="btnshow"
            class="backdrop-blur-[7px] fixed h-[100vh] top-0 left-0 right-0 flex justify-center items-center">
            <ShowModal :colse-btn="btnshow" :show-img="showimg" :show-item="showitem" @close-modal="closeModal" />
        </div>
    </main>
</template>

<style scoped>
.route-card {
    width: calc((100% - 40px) / 2);
}

@media (max-width: 1024px) {
    .route-card {
        width: calc((100% - 20px) / 2);
    }
}

@media (max-width: 640px) {
    .route-card {
        width: 100%;
    }
}
</style>