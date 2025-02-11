<script>
import Robot from '../components/GoogleRobot.vue';
import Swal from 'sweetalert2'
import 'animate.css';
import NavCase9 from '@/components/NavCase.vue'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Vue3Dropzone from "@jaxtheprime/vue3-dropzone";
import '@jaxtheprime/vue3-dropzone/dist/style.css';
import { ref, computed } from 'vue';
import MonthCalender from '@/components/MonthCalender.vue';
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        Robot,
        NavCase9,
        Vue3Dropzone,
        MonthCalender,
    },
    setup() {
        const birth = ref(null);
        const takebuscard = ref(null);
        const takebigcard = ref(null);
        const traindate = ref(null);
        const formatDate = (date) => {
            if (date) {
                return date.toLocaleDateString('en-CA');
            }
            return '';
        };
        const birthDate = computed(() => formatDate(birth.value));
        const takebuscardDate = computed(() => formatDate(takebuscard.value));
        const takebigcardDate = computed(() => formatDate(takebigcard.value));
        const traindateDate = computed(() => formatDate(traindate.value));
        const check = () => {
            if (!birth.value || !takebuscard.value || !takebigcard.value || !traindate.value) {
                Swal.fire({
                    icon: "error",
                    title: "請填寫完整日期",
                    confirmButtonColor: "#DD4F1B",
                });
                return false;
            }
            return true;

        };
        return { birth, takebuscard, birthDate, takebuscardDate, takebigcard, takebigcardDate, traindate, traindateDate, check };

    },
    data() {
        return {
            files: ref([]),
            dropdownOpen: false,
            selectedOption: '',
            category: '',
            name: '',
            idnumber: '',
            phone: '',
            email: '',
            emname: '',
            emphone: '',
            address: '',
            phoneaddress: '',
            busnumber: '',
            isVerified: false,
            options: [
                { value: 'FAM', label: '家屬' },
                { value: 'COU', label: '親戚' },
                { value: 'FRI', label: '朋友' },
            ],
        };
    },
    mounted() {
        this.scrollTop();
        this.initScrollEffects();
        const urlParams = new URLSearchParams(window.location.search);
        const job = urlParams.get('job');
        if (job === 'driver') {
            this.category = '駕駛員';
        } else if (job === 'basic') {
            this.category = '基層幹部';
        } else if (job === 'fix') {
            this.category = '汽車修護技工';
        } else if (job === 'wash') {
            this.category = '站工(洗車工)';
        } else {
            this.category = '';
        }
    },
    methods: {
        initScrollEffects() {
            const nav = document.querySelector('#nav9');
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
            if (!this.name || !this.phone || !this.email || !this.selectedOption || !this.emname || !this.emphone || !this.address || !this.phoneaddress || !this.busnumber || !this.idnumber || !this.isAgreed) {
                Swal.fire({
                    icon: "error",
                    title: "請填寫完整",
                    confirmButtonColor: "#DD4F1B",
                });
                return;
            }
            const phoneRegex = /^(09\d{2}-?\d{3}-?\d{3})$/;
            if (!phoneRegex.test(this.phone)) {
                Swal.fire({
                    icon: "error",
                    title: "請輸入正確手機格式",
                    confirmButtonColor: "#DD4F1B",
                });
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) {
                Swal.fire({
                    icon: "error",
                    title: "請輸入正確信箱格式",
                    confirmButtonColor: "#DD4F1B",
                });
                return;
            }
            if (!this.isVerified) {
                Swal.fire({
                    icon: "error",
                    title: "請先完成機器人驗證",
                    confirmButtonColor: "#DD4F1B",
                });
                return;
            }
            Swal.fire({
                icon: "success",
                title: "您的資料已成功送出",
                showConfirmButton: true,
                confirmButtonColor: "#DD4F1B",
            }).then(() => {
                // 跳轉回首頁
                this.$router.push('/');
            });
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
        <NavCase9 id="nav9" />
        <section id="banner9"
            class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
            <img src="../assets/img/banner/HireBanner.webp" alt="子頁橫幅" class="w-full h-full object-cover" />
        </section>
        <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section
                class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div
                    class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
                    <router-link to="/">首頁</router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    <router-link to="/hire">人力招募 </router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    履歷投遞
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">
                        履歷投遞
                    </span>
                </div>
            </section>
            <!-- 輸入區內容 -->
            <section
                class="max-w-[1000px] w-full flex flex-col m-auto text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                <section class="flex justify-between max-md:flex-wrap max-md:flex-col">
                    <div class="flex flex-col">
                        <!-- 投遞類別 -->
                        <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                            <label for="default-input" class="block mb-2"><span
                                    class="text-[#DD4F1B]">*</span>&nbsp;投遞類別</label>
                            <input type="text" id="category" v-model="category"
                                class="w-[450px] max-md:w-full  h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                required>
                        </div>
                        <!-- 姓名 -->
                        <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                            <label for="default-input" class="block mb-2"><span
                                    class="text-[#DD4F1B]">*</span>&nbsp;姓名</label>
                            <input type="text" id="default-input" v-model="name"
                                class="w-[450px] max-md:w-full  h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                placeholder="黃小吉" required>
                        </div>
                        <!-- 身分證字號 -->
                        <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                            <label class="block mb-2"><span class="text-[#DD4F1B]">*</span>&nbsp;身分證字號</label>
                            <input type="text" id="default-input" v-model="idnumber"
                                class="w-[450px] max-md:w-full  h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                required>
                        </div>
                    </div>
                    <!-- 照片上傳區 -->
                    <div class="max-md:mb-[30px] w-[450px] max-md:w-full">
                        <div class="block mb-2"><span class="text-[#DD4F1B]">*</span>&nbsp;上傳兩吋半身照 (請勿上傳生活照)</div>
                        <div class="flex items-center justify-center w-full h-[calc(100%-96px)] text-[16px] max-md:text-[10px]">
                            <Vue3Dropzone v-model="files.value" :width="'100%'" :height="'100%'" :imgheight="'400px'"
                                :imgwidth="'100%'" :accept="'image/*'" :imgstyle="{ objectFit: 'cover' }"
                                style="cursor: pointer;">
                                <template #placeholder-img>
                                </template>
                                <template #title>請點擊上傳</template>
                                <template #button="{ fileInput }">
                                    <button @click="fileInput?.click()" class="custom-button">SVG, PNG, JPG or
                                        GIF</button>
                                </template>
                                <template #description>檔案不可超過5mb</template>
                            </Vue3Dropzone>
                        </div>
                    </div>
                </section>
                <!-- 排版輸入區 -->
                <section class="w-full flex flex-wrap justify-between">
                    <!-- 生日 -->
                    <div class="w-[450px] max-md:w-full  relative mb-[60px] max-md:mb-[30px]">
                        <div class="mb-2">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;生日
                        </div>
                        <MonthCalender v-model="birth" />
                    </div>
                    <!-- 性別 -->
                    <div class="mb-[60px] w-[450px] max-md:w-full  max-md:mb-[30px]">
                        <label class="block mb-2">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;性別</label>
                        <div class="flex items-center h-[60px] max-md:h-[48px]">
                            <div class="mr-[20px]">
                                <input id="default-radio-1" type="radio" value="male" v-model="gender" name="gender"
                                    class="w-5 h-5 max-md:w-4 max-md:h-4 text-[#DD4F1B] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                                <label for="default-radio-1"
                                    class="ms-2 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal text-gray-900">生理男</label>
                            </div>
                            <div class="">
                                <input id="default-radio-2" type="radio" value="female" v-model="gender" name="gender"
                                    class="w-5 h-5 max-md:w-4 max-md:h-4 text-[#DD4F1B] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                                <label for="default-radio-2"
                                    class="ms-2 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal text-gray-900">生理女</label>
                            </div>
                        </div>
                    </div>
                    <!-- 行動電話 -->
                    <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                        <label class="block mb-2">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;行動電話</label>
                        <input type="text" id="default-input" v-model="phone"
                            class="w-[450px] max-md:w-full  h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                            placeholder="0988-888-888" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" required>
                    </div>
                    <!-- 緊急聯絡人資料 -->
                    <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                        <label class="block mb-2"><span class="text-[#DD4F1B]">*</span>&nbsp;聯絡信箱</label>
                        <input type="text" id="default-input" v-model="email"
                            class="w-[450px] max-md:w-full  h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                            placeholder="alice.wu@gmail.com" required>
                    </div>
                    <!-- 緊急聯絡人關係選單 -->
                    <form class="mb-[60px] w-[450px] max-md:w-full  max-md:mb-[30px]">
                        <label for="question"
                            class="block mb-2 text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;緊急聯絡人/關係
                        </label>
                        <div class="flex gap-[10px] max-md:w-full">
                            <input type="text" id="default-input" v-model="emname"
                                class="w-[220px] max-md:w-2/3 h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                placeholder="黃大吉" required>
                            <!-- 自製的下拉選單 -->
                            <div class="relative max-md:w-1/3">
                                <button type="button" id="question"
                                    class="w-[220px] max-md:w-full h-[60px] max-md:h-[48px] text-left bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal px-4 rounded-[8px] focus:outline-none"
                                    @click="toggleDropdown">
                                    {{ selectedOption || '-請選擇-' }}
                                </button>

                                <ul v-if="dropdownOpen"
                                    class="absolute z-10 w-full bg-white border border-[#D9D9D9] rounded-md mt-1">
                                    <li v-for="option in options" :key="option.value"
                                        @click="selectOption(option.label)"
                                        class="p-4 max-md:p-3 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal border-[2px] border-b-[#D9D9D9] hover:border-[4px] hover:border-[#DD4F1B] cursor-pointer">
                                        {{ option.label }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                    <!-- 緊急聯絡人電話 -->
                    <div class="mb-[60px] max-md:mb-[30px] max-md:w-full">
                        <label class="block mb-2">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;緊急聯絡人電話</label>
                        <input type="text" id="default-input" v-model="emphone"
                            class="w-[450px] max-md:w-full  h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                            placeholder="0988-888-888" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" required>
                    </div>
                    <!-- 戶籍地址 -->
                    <div class="w-full mb-[60px] max-md:mb-[30px]">
                        <label class="block mb-2"><span class="text-[#DD4F1B]">*</span>&nbsp;戶籍地址</label>
                        <input type="text" id="address" v-model="address"
                            class="w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                            required>
                    </div>
                    <!-- 通訊地址 -->
                    <div class="w-full mb-[60px] max-md:mb-[30px]">
                        <label class="mb-2 flex">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;
                            通訊地址
                            <div class="ml-6">
                                <input id="default-checkbox" type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    @change="phoneaddress = $event.target.checked ? address : ''">
                                <label for="default-checkbox"
                                    class="ms-2 text-base max-2xl:text-[14px] max-md:text-[12px]">同戶籍地址</label>
                            </div>
                        </label>
                        <input type="text" id="phoneaddress" v-model="phoneaddress"
                            class="w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                            required>
                    </div>
                    <!-- 職業大客車取照日期   -->
                    <div class="w-[450px] max-md:w-full  relative mb-[60px] max-md:mb-[30px]">
                        <div class="mb-2">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;職業大客車取照日期
                        </div>
                        <MonthCalender v-model="takebuscard" />
                    </div>
                    <!-- 職業連結車取照日期   -->
                    <div class="w-[450px] max-md:w-full  relative mb-[60px] max-md:mb-[30px]">
                        <div class="mb-2">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;職業連結車取照日期
                        </div>
                        <MonthCalender v-model="takebigcard" />
                    </div>
                    <!-- 駕照管轄編號 -->
                    <div class="mb-[100px] max-md:mb-[30px] max-md:w-full">
                        <label class="block mb-2"><span class="text-[#DD4F1B]">*</span>&nbsp;駕照管轄編號</label>
                        <input type="text" id="default-input" v-model="busnumber"
                            class="w-[450px] max-md:w-full  h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                            required>
                    </div>
                    <!-- 「大客車職業駕駛人定期訓練」日期   -->
                    <div class="w-[450px] max-md:w-full  relative mb-[100px] max-md:mb-[60px]">
                        <div class="mb-2">
                            <span class="text-[#DD4F1B]">*</span>&nbsp;「大客車職業駕駛人定期訓練」日期
                        </div>
                        <MonthCalender v-model="traindate" />
                    </div>
                </section>
            </section>
            <section class="max-w-[1000px] w-full m-auto">
                <!-- 文字敘述 -->
                <div class="w-auto">
                    <p
                        class="mb-[25px] text-[32px] max-2xl:text-[24px] max-md:text-[16px] font-bold text-[#1B4794] p-[10px] border-b-[2px] border-b-[#DD4F1B]">
                        應徵人員資料蒐集告知及聲明
                    </p>
                </div>
                <div class="w-full text-[20px] max-2xl:text-[14px] max-md:text-[12px] mb-[20px]">
                    <p>
                        一、本公司基於人力資源規劃之徵才需要，為人事管理之目的，蒐集台端之個人資料。
                    </p>
                    <p>
                        二、台端資料以應徵本次職務為限，本公司自收到台端之履歷表將保存一年，逾限即停止處理、利用並刪除之。
                    </p>
                    <p>
                        三、台端若未完整及確實填寫，本公司將無法進行必要之徵才審核及處理作業。
                    </p>
                </div>
                <!-- 個資確認按鈕 -->
                <div class="flex items-center mb-[100px] max-2xl:mb-[60px]">
                    <input id="default-checkbox" type="checkbox" v-model="isAgreed"
                        class="w-6 h-6 max-2xl:w-4 max-2xl:h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        required>
                    <label
                        class="ms-2 text-[24px] max-2xl:text-[18px] max-md:text-[14px] font-bold text-[#DD4F1B]">
                        我已閱讀並且同意提供本人資料
                    </label>
                </div>
                <!-- 機器人確認按鈕 -->
                <div class="mb-[40px]">
                    <Robot @verify-success="handleVerifySuccess" />
                </div>
                <!-- 送出按鈕 -->
                <button @click="() => {
                    if (check()) {
                        handleSubmit();
                    }
                }"
                    class="text-[24px] max-2xl:text-[20px] max-md:text-[16px] w-[200px] max-2xl:w-[150px] max-md:w-[120px] h-[70px] max-2xl:h-[60px]  max-md:h-[48px] justify-center flex items-center gap-[8px] max-md:gap-[4px] text-white bg-[#DD4F1B] hover:bg-[#DD4F1B]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px] text-center">
                    確認送出
                    <img src="../assets/img/icon/white-next.png" alt="白色大於icon" class="w-4 max-md:w-3">
                </button>
            </section>
        </div>
    </main>
</template>

<style scoped>
.dropzone {
    width: 100%;
    height: 100%;
}
</style>
