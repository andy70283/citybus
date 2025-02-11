<script>
import NavCase1 from '@/components/NavCase.vue';
import BigNewsList from '@/components/BigNewsList.vue';
import BigNewsCard from '@/components/BigNewsCard.vue';
import BusNewsList from '@/components/BusNewsList.vue';
import BusNewsCard from '@/components/BusNewsCard.vue';
import HighwayNewsList from '@/components/HighNewsList.vue';
import HighwayNewsCard from '@/components/HighNewsCard.vue';


export default {
    data() {
        return {
            showNewsCard: false,
            activeSection: 'bignews'
        }
    },
    components: {
        NavCase1,
        BigNewsList,
        BigNewsCard,
        BusNewsList,
        BusNewsCard,
        HighwayNewsList,
        HighwayNewsCard,
    },
    mounted() {
        this.scrollTop();
        this.initScrollEffects();
        const route = this.$route;

        // 帶參數
        if (Object.keys(route.query).length) {
            this.showNewsCard = Boolean(route.query?.showCard);
            // 設定 activeSection
            if (route.query?.section) {
                this.activeSection = route.query.section;
                this.$nextTick(() => {
                    const content = document.querySelector('#content');
                    if (content) {
                        window.scrollTo({
                            top: content.offsetTop - window.innerHeight / 4,
                        });
                    }
                });
            }
        }
    },
    methods: {
        initScrollEffects() {
            const nav = document.querySelector('#nav1');
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
        changeOpen(item) {
            this.showNewsCard = item;

            if (item) {
                const content = document.querySelector('#content');
                window.scrollTo({
                    top: content.offsetTop - 100,
                });
            } else {
                const news = document.querySelector('#news');
                window.scrollTo({
                    top: news.offsetTop - 100,
                });
            }
        },
        changeName(item) {
            this.activeSection = item;
        },
        scrollTop() {
            window.scrollTo({
                top: 0,
            });
        },
    },

}
</script>


<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
        <!-- 子頁橫幅 -->
        <section id="banner1"
            class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
            <NavCase1 id="nav1" class="z-[50]" />
            <img src="@/assets/img/banner/news.jpg" alt="子頁橫幅" class="w-full h-full object-cover" />
        </section>
        <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section id="news"
                class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div
                    class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
                    <router-link to="/">首頁</router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    最新公告
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">
                        最新公告
                    </span>
                </div>
            </section>
            <!-- 頁面內容 -->
            <section class="flex max-lg:flex-col text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold"
                id="content">
                <!-- 分類按鈕區 -->
                <div
                    class="mr-[65px] max-lg:mr-0 max-md:text-[14px] flex flex-col max-lg:flex-row max-lg:mb-[40px] gap-[35px] max-lg:gap-[20px] max-md:gap-[15px]">
                    <button id="bignews" @click="activeSection = 'bignews'; showNewsCard = false; scrollNews()" :class="[
                        'w-[270px] max-2xl:w-[220px] max-md:w-[100px] h-[70px] max-md:h-[48px] flex justify-center items-center rounded-full shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)]',
                        activeSection === 'bignews'
                            ? 'bg-[#CA1E1D] text-white'
                            : 'bg-transparent border-[3px] border-[#CA1E1D] text-[#CA1E1D] hover:bg-[#CA1E1D]/80 hover:border-transparent hover:text-white'
                    ]">
                        重要公告</button>
                    <button id="busnews"
                        @click="() => { showNewsCard = false; activeSection = 'busnews'; scrollNews(); }" :class="[
                            'w-[270px] max-2xl:w-[220px] max-md:w-[100px] h-[70px] max-md:h-[48px] flex justify-center items-center rounded-full shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)]',
                            activeSection === 'busnews'
                                ? 'bg-[#E5A328] text-white'
                                : 'bg-transparent border-[3px] border-[#E5A328] text-[#E5A328] hover:bg-[#E5A328]/80 hover:border-transparent hover:text-white'
                        ]">
                        市區公車</button>
                    <button id="highnews"
                        @click="() => { showNewsCard = false; activeSection = 'highnews'; scrollNews(); }" :class="[
                            'w-[270px] max-2xl:w-[220px] max-md:w-[100px] h-[70px] max-md:h-[48px] flex justify-center items-center rounded-full shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)]',
                            activeSection === 'highnews'
                                ? 'bg-[#1B4794] text-white'
                                : 'bg-transparent border-[3px] border-[#1B4794] text-[#1B4794] hover:bg-[#1B4794]/80 hover:border-transparent hover:text-white'
                        ]">
                        國道客運</button>
                </div>
                <!-- 消息條 -->
                <!-- <div v-if="showNewsCard"> -->
                <BigNewsCard v-if="showNewsCard && activeSection === 'bignews'"
                    @click="() => { showNewsCard = false; scrollNews(); }" />
                <BusNewsCard v-if="showNewsCard && activeSection === 'busnews'"
                    @click="() => { showNewsCard = false; scrollNews(); }" />
                <HighwayNewsCard v-if="showNewsCard && activeSection === 'highnews'"
                    @click="() => { showNewsCard = false; scrollNews(); }" />
                <!-- </div> -->
                <!-- <div v-if="!showNewsCard"> -->

                <BigNewsList :is-name="activeSection" :is-open="showNewsCard" @back-open="changeOpen"
                    @back-name="changeName" v-if="!showNewsCard && activeSection === 'bignews'" />
                <BusNewsList :is-name="activeSection" :is-open="showNewsCard" @back-open="changeOpen"
                    @back-name="changeName" v-if="!showNewsCard && activeSection === 'busnews'" />
                <HighwayNewsList :is-name="activeSection" :is-open="showNewsCard" @back-open="changeOpen"
                    @back-name="changeName" v-if="!showNewsCard && activeSection === 'highnews'" />

                <!-- </div> -->
            </section>
        </div>
    </main>
</template>

<style scoped></style>
