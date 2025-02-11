<script>
import { useCounterStore } from '../stores/counter.js';
import Robot from '../components/GoogleRobot.vue';
import Swal from 'sweetalert2'
import 'animate.css';
import NavCase4 from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        Robot,
        NavCase4,
    },
    data() {
        return {
            stores: useCounterStore(),
            dropdownOpen: false,
            selectedOption: '',
            mainInput: '',
            name: '',
            phone: '',
            email: '',
            largeinput: '',
            isVerified: false,
            options: [
                { value: 'SUG', label: '建議' },
                { value: 'COM', label: '投訴' },
                { value: 'ASK', label: '詢問' },
                { value: 'GOOD', label: '表揚' },
                { value: 'FIND', label: '尋物' },
            ],
        };
    },
    computed: {
        store() {
            return this.stores;
        }
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (id) {
            this.mainInput = `遺失編號：${id}`;
            this.selectedOption = '尋物';
        } else {
            this.mainInput = '';
            this.selectedOption = '';
        };
        this.initScrollEffects();
        this.scrollTop();
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.dropdownOpen = false;
        },
        handleVerifySuccess(status) {
            this.isVerified = status;
        },
        handleSubmit() {
            if (!this.name || !this.phone || !this.email || !this.selectedOption || !this.mainInput || !this.largeinput) {
                Swal.fire({
                    icon: "warning",
                    title: "請填寫完整資料",
                    showConfirmButton: false,
                    showCloseButton: true,
                    showClass: {
                        popup: ` animate__animated animate__fadeInUp animate__faster`
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutDown animate__faster`
                    }
                });
                return;
            }
            const phoneRegex = /^(09\d{2}-?\d{3}-?\d{3})$/;
            if (!phoneRegex.test(this.phone)) {
                Swal.fire({
                    icon: "error",
                    title: "請輸入正確的電話格式",
                    showConfirmButton: false,
                    showCloseButton: true,
                    showClass: {
                        popup: `animate__animated animate__fadeInUp animate__faster`
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutDown animate__faster`
                    }
                });
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) {
                Swal.fire({
                    icon: "error",
                    title: "請輸入正確的信箱格式",
                    showConfirmButton: false,
                    showCloseButton: true,
                    showClass: {
                        popup: `animate__animated animate__fadeInUp animate__faster`
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutDown animate__faster`
                    }
                });
                return;
            }
            if (!this.isVerified) {
                Swal.fire({
                    icon: "warning",
                    title: "請先完成機器人驗證",
                    showConfirmButton: false,
                    showCloseButton: true,
                    showClass: {
                        popup: ` animate__animated animate__fadeInUp animate__faster`
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutDown animate__faster`
                    }
                });
                return;
            }
            Swal.fire({
                icon: "success",
                title: "您的訊息已成功送出",
                showConfirmButton: true,
                confirmButtonColor: "#DD4F1B",
            }).then(() => {
                // 跳轉回首頁
                this.$router.push('/');
            });
        },
        initScrollEffects() {
            const nav = document.querySelector('#nav4');
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

};
</script>


<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
        <!-- 子頁橫幅 -->
        <section id="banner4"
            class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
            <NavCase4 id="nav4" class="z-[50]" />
            <img src="../assets/img/banner/ContactBanner.webp" alt="子頁橫幅" class="w-full h-full object-cover" />
        </section>
        <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section
                class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div
                    class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[14px]">
                    <router-link to="/">首頁</router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    中客服務
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    聯絡我們
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">
                        聯絡我們
                    </span>
                </div>
            </section>
            <!-- 輸入區內容 -->
            <section
                class="max-w-[1000px] w-full flex flex-col m-auto text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                <!-- 單個輸入區 -->
                <div class="mb-[60px] max-md:mb-[30px]">
                    <label for="default-input" class="block mb-2"><span class="text-[#DD4F1B]">*</span>&nbsp;姓名</label>
                    <input type="text" id="default-input" v-model="name"
                        class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                        placeholder="黃小吉" required>
                </div>
                <!-- 排版輸入區 -->
                <section class="w-full flex flex-wrap justify-between max-md:jusyify-none">
                    <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                        <label for="default-input" class="block mb-2"><span
                                class="text-[#DD4F1B]">*</span>&nbsp;聯絡電話</label>
                        <input type="text" id="default-input" v-model="phone"
                            class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                            placeholder="0988-888-888" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" required>
                    </div>
                    <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                        <label for="default-input" class="block mb-2"><span
                                class="text-[#DD4F1B]">*</span>&nbsp;聯絡信箱</label>
                        <input type="text" id="default-input" v-model="email"
                            class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                            placeholder="alice.wu@gmail.com" required>
                    </div>
                    <!-- 下拉選單 -->
                    <form class="mb-[60px] max-md:mb-[30px] w-[450px] max-md:w-full">
                        <label for="question"
                            class="block mb-2 text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;問題類別
                        </label>
                        <!-- 自製的下拉選單 -->
                        <div class="relative">
                            <button type="button" id="question"
                                class="w-full h-[60px] max-md:h-[48px] text-left bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal px-4 rounded-[8px] focus:outline-none"
                                @click="toggleDropdown">
                                {{ selectedOption || '-請選擇-' }}
                            </button>

                            <ul v-if="dropdownOpen"
                                class="absolute z-10 w-full bg-white border border-[#D9D9D9] rounded-md mt-1">
                                <li v-for="option in options" :key="option.value" @click="selectOption(option.label)"
                                    class="p-4 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal border-[2px] border-b-[#D9D9D9] hover:border-[4px] hover:border-[#DD4F1B] cursor-pointer">
                                    {{ option.label }}
                                </li>
                            </ul>
                        </div>
                    </form>

                    <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                        <label for="default-input" class="block mb-2"><span
                                class="text-[#DD4F1B]">*</span>&nbsp;主旨</label>
                        <input type="text" id="mainInput" v-model="mainInput"
                            class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                    </div>
                </section>
                <!-- 滿版輸入區 -->
                <div class="mb-[60px] max-md:mb-[30px]">
                    <div class="block mb-2"><span class="text-[#DD4F1B]">*</span>&nbsp;諮詢內容</div>
                    <textarea id="large-input" rows="20" wrap="soft" v-model="largeinput"
                        class="inline-block w-full h-[415px] max-2xl:h-[360px] max-md:h-[260px] p-[15px] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal text-start border border-[#D9D9D9] rounded-[8px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-[#D9D9D9] resize-none"
                        placeholder="請輸入您的諮詢內容" required></textarea>
                </div>
                <!-- 機器人確認按鈕 -->
                <div class="mb-[40px]">
                    <Robot @verify-success="handleVerifySuccess" />
                </div>
                <!-- 送出按鈕 -->
                <button @click="handleSubmit"
                    class="w-[200px] max-2xl:w-[150px] max-md:w-[120px] h-[70px] max-2xl:h-[60px]  max-md:h-[48px] justify-center flex items-center gap-[8px] max-md:gap-[4px] text-white bg-[#DD4F1B] hover:bg-[#DD4F1B]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px] text-center">
                    確認送出
                    <img src="../assets/img/icon/white-next.png" alt="白色大於icon" class="w-4 max-md:w-3">
                </button>
            </section>
        </div>
    </main>
</template>

<style scoped></style>
