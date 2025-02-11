<script>
import { useCounterStore } from '../stores/counter.js';
import router from '@/router/index.js';
import NavCase3 from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavCase3,
  },
  data() {
    let store = useCounterStore();
    return {
      thing: 'phone',
      search: '',
      store,
      items:store.lostitems,
      showitems: [],
    }
  },
  mounted() {
    this.searchItem();
    this.initScrollEffects();
    this.scrollTop();
  },
  methods: {
    showId(id) {
      this.store.setTakeId(id);
      router.push({
      path: './contactus',
      query: { id: id }
      });
    },
    switchType(type) {
      this.thing = type;
      this.searchItem();
    },
    searchItem() {
      this.showitems = this.items.filter((item) => {
        const matchType = item.class === this.thing;
        const matchSearch = this.search === '' || 
          item.type.includes(this.search) ||
          item.busNumber.includes(this.search) ||
          item.location.includes(this.search);
        return matchType && matchSearch;
      });
      const existingMessage = document.querySelector('.nomessage');
      if (existingMessage) {
        existingMessage.remove();
      }
      if (this.showitems.length === 0) {
        this.$nextTick(() => {
          const table = document.querySelector('table');
          const message = document.createElement('div');
          message.textContent = '查無相關物品';
          message.className = 'nomessage text-center text-2xl font-bold mt-4 text-[#DD4F1B] ';
          table.insertAdjacentElement('afterend', message);
        });
      }
      },
      initScrollEffects() {
            const nav = document.querySelector('#nav3');
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

  },
}
</script>


<template>
  <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
    <!-- 子頁橫幅 -->
    <section id="banner3" class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
      <NavCase3 id="nav3" class="z-[50]" />
      <img src="../assets/img/banner/LostBanner.webp" alt="子頁橫幅" class="w-full h-full object-cover"/>
    </section>
    <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
      <!-- 頁面導航與標題 -->
      <section class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
        <div class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
          <router-link to="/">首頁</router-link> 
          <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2"> 
          中客服務 
          <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2"> 
          失物招領
        </div>
        <div class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
          <span class="ml-[50px] max-md:ml-[25px] py-[7px]">失物招領</span>
        </div>
      </section>
      <!-- 按鈕區與搜尋框 -->
      <section class="flex justify-between mb-[40px] max-lg:flex-wrap max-lg:gap-[20px] max-md:gap-[15px]">
        <!-- 按鈕區 -->
        <div class="button-group w-auto flex gap-[25px] max-2xl:gap-[20px] max-md:gap-[15px]">
          <button v-for="(label, type) in {phone: '手機類', bag: '證件皮包類', other: '其他類'}" 
            :key="type"
            @click="switchType(type)"
            :class="[
              'w-[200px] max-2xl:w-[150px] max-md:w-[100px] h-[70px] max-2xl:h-[60px] max-md:h-[48px] text-2xl font-bold rounded-full text-center max-2xl:text-[20px] max-md:text-[14px]',
              thing === type 
                ? 'text-white bg-[#1B4794]'
                : 'text-[#1B4794] bg-[#ffffff] hover:bg-[#1B4794]/80 hover:text-white hover:border-none border-[#1B4794] border-[3px]'
            ]">
            {{ label }}
          </button>
        </div>
        <!-- 搜尋框 -->
        <form class="w-[400px] max-2xl:w-[360px] max-md:w-[200px]">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div class="relative">
            <input type="text" id="default-search" v-model="search" @input="searchItem"
              class="block w-full p-4 max-md:p-3 ps-9 h-[70px] max-2xl:h-[60px] max-md:h-[48px] text-[24px] max-2xl:text-[20px] max-md:text-[14px] border-[#1B4794] border-[3px] rounded-full bg-gray-50 focus:ring-[#1B4794] focus:ring-opacity-50 focus:outline-none focus:border-[#1B4794]/50"
              placeholder="請輸入名稱/路線/地點" required />
            <div class="search text-white absolute end-2.5 bottom-2.5 px-4 py-2 max-md:px-3">
              <svg class="w-[30px] h-[30px] max-2xl:w-[24px] max-2xl:h-[24px] max-md:w-[15px] max-md:h-[15px] text-[#1B4794]" aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
          </div>
        </form>
      </section>
      <!-- 失物列表 -->
      <section class="mb-[100px] max-2xl:mb-[80px] max-md:mb-[60px]">
        <table
          class="table w-full m-auto rounded-[15px] text-[24px] max-2xl:text-[20px] max-md:text-[14px] font-bold shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
          <thead>
            <tr class="h-[70px] max-md:h-[60px] bg-[#DD4F1B] text-white text-center">
              <th class="w-20% rounded-tl-[15px]">失物編號</th>
              <th class="w-20%">物品<br class="hidden max-sm:block">名稱</th>
              <th class="w-15%">拾獲<br class="hidden max-sm:block">路線</th>
              <th class="w-15%">拾獲<br class="hidden max-sm:block">地點</th>
              <th class="w-15%">拾獲日期</th>
              <th class="w-15% rounded-tr-[15px]">
                <span class="block max-sm:hidden">失物尋回</span>
                <span class="hidden max-sm:block">尋回</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in showitems" :key="item.id" class="text-center">
              <td class="id h-[89px] max-md:h-[70px] border-b-[1px] border-#D9D9D9 text-[#CA1E1D] max-sm:text-[12px]">{{ item.id }}</td>
              <td class="h-[89px] max-md:h-[70px] border-b-[1px] border-#D9D9D9">{{ item.type }}</td>
              <td class="h-[89px] max-md:h-[70px] border-b-[1px] border-#D9D9D9">{{ item.busNumber }}</td>
              <td class="h-[89px] max-md:h-[70px] border-b-[1px] border-#D9D9D9">{{ item.location }}</td>
              <td class="h-[89px] max-md:h-[70px] border-b-[1px] border-#D9D9D9 max-sm:text-[12px] break-words">{{ item.date }}</td>
              <th class="h-[89px] max-md:h-[70px] border-b-[1px] border-#D9D9D9">
                <button type="button" @click="showId(item.id)"
                  class="text-[18px] max-2xl:text-[16px] max-md:text-[12px] max-sm:text-[10px] font-bold text-white px-[15px] max-sm:px-[8px] py-[8px] bg-[#1B4794] rounded-full">
                  <span class="max-sm:hidden">點我聯繫</span>
                  <img src="../assets/img/icon/white-text.png" alt="訊息icon" class="w-3 hidden max-sm:block">
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </section>
      <!-- 分頁按鈕 -->
      <section class="flex gap-[15px] max-md:gap-[10px] justify-center text-[24px] max-2xl:text-[20px] max-md:text-[12px] font-bold">
        <button type="button"
          class="w-[50px] h-[50px] max-md:w-[30px] max-md:h-[30px] text-white bg-[#DD4F1B] rounded-full text-center">1</button>
      </section>
    </div>
  </main>
</template>

<style>
</style>