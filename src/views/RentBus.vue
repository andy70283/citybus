<script>
import Robot from '@/components/GoogleRobot.vue';
import 'animate.css';
import NavCase8 from '@/components/NavCase.vue'
import { ref } from 'vue';
import MonthCalender from '@/components/MonthCalender.vue';
import TimeCalender from '@/components/TimeCalender.vue';
import { useRentStore } from '@/stores/rent';

export default {
    components: {
        Robot,
        NavCase8,
        MonthCalender,
        TimeCalender,
    },
    data() {
        return {
            // 租車單位
            stores: useRentStore(),
            files: ref([]),
            unitDropdownOpen: false,
            selectedUnit: '',
            goday: ref(''),
            gotime: ref(''),
            backday: ref(''),
            backtime: ref(''),
            isVerified: false,
            invoiceType: '',
            setoff: '',
            destination: '',
            totalpeople: '',
            stopOverChoice: '',
            largeinput: '',
            largeinput2: '',
            name: '',
            email: '',
            mobile: '',
            phone: '',
            companyname: '',
            companyid: '',
            takename: '',
            takeaddress: '',
            unitOptions: [
                { value: 'OFFICIAL', label: '公家機關' },
                { value: 'COMPANY', label: '企業' },
                { value: 'SCHOOL', label: '學校' },
                { value: 'PERSON', label: '個人' },
            ],

            // 租車用途
            purposeDropdownOpen: false,
            selectedPurpose: '',
            purposeOptions: [
                { value: 'HOSPITAL', label: '就醫' },
                { value: 'TRAVEL', label: '旅遊' },
                { value: 'AIRPORT', label: '接機' },
                { value: 'ELSE', label: '其他' },
            ],
            // 身心障礙人數
            belovedDropdownOpen: false,
            selectedBeloved: '',
            belovedOptions: [
                { value: 'one', label: '1' },
                { value: 'two', label: '2' },
                { value: 'three', label: '3人以上' },
            ],

            // 輪椅數量
            wheelDropdownOpen: false,
            selectedWheel: '',
            wheelOptions: [
                { value: 'one', label: '1' },
                { value: 'two', label: '2' },
                { value: 'three', label: '3輛以上' },
            ],
        };
    },
    mounted() {
            this.initScrollEffects();
            this.scrollTop();
            this.getSelectedValues();
        },
    methods: {
        getSelectedValues() {
            return {
                unit: this.selectedUnit,
                purpose: this.selectedPurpose,
                beloved: this.selectedBeloved,
                wheel: this.selectedWheel,
            };
        },
        toggleDropdown(dropdownName) {
            this[dropdownName] = !this[dropdownName];
        },
        selectOption(selectedField, option) {
            this[selectedField] = option;
            this[selectedField.replace('selected', '').toLowerCase() + 'DropdownOpen'] = false;
        },
        handleVerifySuccess(status) {
            this.isVerified = status;
        },
        handleSubmit() {
            this.$router.push('/checkbus');
        },
        initScrollEffects() {
            const nav = document.querySelector('#nav8');
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
        updateRentData() {
            const date = new Date(this.goday);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份從0開始
            const day = String(date.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            const store = useRentStore();
            store.setRentData({
                setoff: this.setoff,
                destination: this.destination,
                totalpeople: this.totalpeople,
                goday: formattedDate,
            });
        },
    }
</script>

<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
        <!-- 子頁橫幅 -->
        <section id="banner8"
            class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
            <NavCase8 id="nav8" class="z-[50]" />
            <img src="../assets/img/banner/RentBanner.webp" alt="子頁橫幅" class="w-full h-full object-cover" />
        </section>
        <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section
                class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div
                    class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
                    <router-link to="/">首頁</router-link>
                    <img src="../assets/img/icon/grey-next.png" alt="大於icon" class="w-4 max-2xl:w-3 max-md:w-2">
                    包車服務
                </div>
                <div
                    class="text-[58px] max-2xl:text-[36px] max-md:text-[24px] font-bold w-auto border-l-[11px] max-md:border-l-[8px] border-l-[#DD4F1B]">
                    <span class="ml-[50px] max-md:ml-[25px] py-[7px]">
                        包車服務
                    </span>
                </div>
            </section>
            <!--  -->
            <section
                class="max-w-[1200px] w-full flex flex-col m-auto text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                <!-- 步驟區 -->
                <section class="mb-[75px] max-md:mb-[40px] max-md:text-[12px]">
                    <div class="px-[133px] max-sm:px-[10px] flex flex-row gap-[44px] max-md:gap-[20px]">
                        <div class="rounded-full bg-[#DD4F1B] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/white-pencil.png" alt="白色鉛筆icon"
                                class="w-[60px] max-md:w-[24px]">
                        </div>
                        <div class="grow mt-[72px] max-md:mt-[24px] border-t-[4px] border-t-[#d9d9d9]">
                        </div>
                        <div class="rounded-full bg-[#d9d9d9] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/grey-check.png" alt="灰打勾icon" class="w-[60px] max-md:w-[24px]">
                        </div>
                        <div class="grow mt-[72px] max-md:mt-[24px] border-t-[4px] border-t-[#d9d9d9]">
                        </div>
                        <div class="rounded-full bg-[#d9d9d9] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/grey-good.png" alt="灰大拇指icon" class="w-[60px] max-md:w-[24px]">
                        </div>
                    </div>
                    <div
                        class="px-[145px] max-2xl:px-[160px] max-md:px-[130px] max-sm:px-[10px] flex flex-row justify-between">
                        <div class="text-center mt-[15px] font-normal">
                            STEP.1<br>填寫資料
                        </div>
                        <div class="text-center mt-[15px] font-normal">
                            STEP.2<br>確認資料
                        </div>
                        <div class="text-center mt-[15px] font-normal">
                            STEP.3<br>完成預訂
                        </div>
                    </div>
                </section>
                <!-- 訂車資訊輸入區 -->
                <section class="mb-[100px] max-md:mb-[60px]">
                    <div
                        class="w-full py-[26px] max-md:py-[16px] flex items-center justify-center gap-[30px] max-md:gap-[15px] rounded-t-[15px] text-white text-[32px] max-2xl:text-[24px] max-md:text-[18px] bg-[#1B4794]">
                        <img src="../assets/img/icon/white-tag.png" alt="白色標籤icon"
                            class="w-[32px] max-2xl:w-[24px] max-md:w-[18px]">
                        訂車資訊
                    </div>
                    <div
                        class="w-full p-[100px] max-md:p-[30px] max-sm:p-[15px] max-sm:pb-[30px] border-[3px] border-[#d9d9d9] border-t-transparent rounded-b-[15px] shadow-[0_5px_15px_0px_rgba(0,0,0,0.25)]">
                        <!-- 排版輸入區 -->
                        <div class="w-full flex flex-wrap justify-between max-md:flex-col">
                            <!-- 去程日期 -->
                            <div class="w-[450px] max-md:w-full relative mb-[60px] max-md:mb-[30px]">
                                <div class="mb-2">
                                    <span class="text-[#DD4F1B]">*</span>&nbsp;去程日期
                                </div>
                                <MonthCalender v-model="goday" @update:modelValue="updateRentData" />
                            </div>
                            <!-- 去程時間 -->
                            <form class="w-[450px] max-md:w-full mb-[60px] max-md:mb-[30px]">
                                <label for="time">
                                    <div class="mb-2">
                                        <span class="text-[#DD4F1B]">*</span>&nbsp;去程時間
                                    </div>
                                </label>
                                <div class="relative">
                                    <TimeCalender v-model="gotime" />
                                </div>
                            </form>
                            <!-- 回程日期 -->
                            <div class="w-[450px] max-md:w-full relative mb-[60px] max-md:mb-[30px]">
                                <div class="mb-2">
                                    <span class="text-[#DD4F1B]">*</span>&nbsp;回程日期
                                </div>
                                <MonthCalender v-model="backday" />
                            </div>
                            <!-- 回程時間 -->
                            <form class="w-[450px] max-md:w-full mb-[60px] max-md:mb-[30px]">
                                <label for="time">
                                    <div class="mb-2">
                                        <span class="text-[#DD4F1B]">*</span>&nbsp;結束行程時間
                                    </div>
                                </label>
                                <div class="relative">
                                    <TimeCalender v-model="backtime" />
                                </div>
                            </form>
                            <!-- 出發地 -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="setoff" class="block mb-2"><span
                                        class="text-[#DD4F1B]">*</span>&nbsp;出發地</label>
                                <input type="text" id="setoff" v-model="setoff" @input="updateRentData"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="EX.逢甲大學" required>
                            </div>
                            <!-- 目的地  -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="destination" class="block mb-2"><span
                                        class="text-[#DD4F1B]">*</span>&nbsp;目的地</label>
                                <input type="text" id="destination" v-model="destination" @input="updateRentData"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="EX.中台禪寺" required>
                                <span
                                    class="text-[18px] max-2xl:text-[16px] max-md:text-[12px] text-[#DD4F1B] px-[10px]">請填寫用車至最遠的地點</span>
                            </div>
                            <!-- 租車單位 -->
                            <form class="mb-[60px] max-md:mb-[30px] w-[450px] max-md:w-full">
                                <label for="unit"
                                    class="block mb-2 text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                                    <span class="text-[#DD4F1B]">*</span>&nbsp;租車單位
                                </label>
                                <div class="relative">
                                    <button type="button" id="unit"
                                        class="w-full h-[60px] max-md:h-[48px] text-left bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal px-4 rounded-[8px] focus:outline-none"
                                        @click="toggleDropdown('unitDropdownOpen')">
                                        {{ selectedUnit || '-請選擇-' }}
                                    </button>
                                    <ul v-if="unitDropdownOpen"
                                        class="absolute z-10 w-full bg-white border border-[#D9D9D9] rounded-md mt-1">
                                        <li v-for="option in unitOptions" :key="option.value"
                                            @click="selectOption('selectedUnit', option.label)"
                                            class="p-4 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal border-[2px] border-b-[#D9D9D9] hover:border-[4px] hover:border-[#DD4F1B] cursor-pointer">
                                            {{ option.label }}
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <!-- 租車用途 -->
                            <form class="mb-[60px] max-md:mb-[30px] w-[450px] max-md:w-full">
                                <label for="purpose"
                                    class="block mb-2 text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                                    <span class="text-[#DD4F1B]">*</span>&nbsp;租車用途
                                </label>
                                <div class="relative">
                                    <button type="button" id="purpose"
                                        class="w-full h-[60px] max-md:h-[48px] text-left bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal px-4 rounded-[8px] focus:outline-none"
                                        @click="toggleDropdown('purposeDropdownOpen')">
                                        {{ selectedPurpose || '-請選擇-' }}
                                    </button>
                                    <ul v-if="purposeDropdownOpen"
                                        class="absolute z-10 w-full bg-white border border-[#D9D9D9] rounded-md mt-1">
                                        <li v-for="option in purposeOptions" :key="option.value"
                                            @click="selectOption('selectedPurpose', option.label)"
                                            class="p-4 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal border-[2px] border-b-[#D9D9D9] hover:border-[4px] hover:border-[#DD4F1B] cursor-pointer">
                                            {{ option.label }}
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <!-- 身心障礙人數 -->
                            <form class="mb-[60px] max-md:mb-[30px] w-[450px] max-md:w-full">
                                <label for="beloved"
                                    class="block mb-2 text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                                    <span class="text-[#DD4F1B]">*</span>&nbsp;身心障礙人數
                                </label>
                                <div class="relative">
                                    <button type="button" id="beloved"
                                        class="w-full h-[60px] max-md:h-[48px] text-left bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal px-4 rounded-[8px] focus:outline-none"
                                        @click="toggleDropdown('belovedDropdownOpen')">
                                        {{ selectedBeloved || '-請選擇-' }}
                                    </button>
                                    <ul v-if="belovedDropdownOpen"
                                        class="absolute z-10 w-full bg-white border border-[#D9D9D9] rounded-md mt-1">
                                        <li v-for="option in belovedOptions" :key="option.value"
                                            @click="selectOption('selectedBeloved', option.label)"
                                            class="p-4 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal border-[2px] border-b-[#D9D9D9] hover:border-[4px] hover:border-[#DD4F1B] cursor-pointer">
                                            {{ option.label }}
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <!-- 輪椅數量 -->
                            <form class="mb-[60px] max-md:mb-[30px] w-[450px] max-md:w-full">
                                <label for="wheel"
                                    class="block mb-2 text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                                    <span class="text-[#DD4F1B]">*</span>&nbsp;輪椅數量
                                </label>
                                <div class="relative">
                                    <button type="button" id="wheel"
                                        class="w-full h-[60px] max-md:h-[48px] text-left bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal px-4 rounded-[8px] focus:outline-none"
                                        @click="toggleDropdown('wheelDropdownOpen')">
                                        {{ selectedWheel || '-請選擇-' }}
                                    </button>
                                    <ul v-if="wheelDropdownOpen"
                                        class="absolute z-10 w-full bg-white border border-[#D9D9D9] rounded-md mt-1">
                                        <li v-for="option in wheelOptions" :key="option.value"
                                            @click="selectOption('selectedWheel', option.label)"
                                            class="p-4 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal border-[2px] border-b-[#D9D9D9] hover:border-[4px] hover:border-[#DD4F1B] cursor-pointer">
                                            {{ option.label }}
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <!-- 總搭乘人數 -->
                            <div class="mb-[60px] max-md:mb-[30px] w-full">
                                <label for="totalpeople" class="block mb-2"><span
                                        class="text-[#DD4F1B]">*</span>&nbsp;總搭乘人數</label>
                                <input type="text" id="totalpeople" v-model="totalpeople" @input="updateRentData"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="EX.25人" required>
                            </div>
                            <!-- 途中是否停靠 -->
                            <div class="mb-[60px] max-md:mb-[30px] w-[450px] max-md:w-full ">
                                <label for="default-input" class="block mb-2">
                                    <span class="text-[#DD4F1B]">*</span>&nbsp;途中是否停靠</label>
                                <div class="flex items-center h-[60px] max-md:h-[48px]">
                                    <div class="mr-[20px]">
                                        <input id="default-radio-1" type="radio" v-model="stopOverChoice" value="yes"
                                            name="default-radio"
                                            class="w-5 h-5 max-md:w-4 max-md:h-4 text-[#DD4F1B] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                                        <label for="default-radio-1"
                                            class="ms-2 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal">是</label>
                                    </div>
                                    <div class="">
                                        <input id="default-radio-2" type="radio" v-model="stopOverChoice" value="no"
                                            name="default-radio"
                                            class="w-5 h-5 max-md:w-4 max-md:h-4 text-[#DD4F1B] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                                        <label for="default-radio-2"
                                            class="ms-2 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal">否</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 滿版輸入區 -->
                        <div class="">
                            <div class="block mb-2">
                                <span class="text-[#DD4F1B]">*</span>&nbsp;用車行程規劃
                                <span class="text-[#DD4F1B] max-2xl:text-[16px] max-md:text-[12px]">
                                    (途中如需停車，請填寫停靠地點﹑預計停靠時間段，可先初估提供報價)
                                </span>
                            </div>
                            <textarea id="large-input" rows="20" wrap="soft" v-model="largeinput"
                                class="inline-block w-full h-[415px] max-md:h-[320px] p-[15px] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal text-start border border-[#D9D9D9] rounded-[8px]  bg-gray-50 leading-8  focus:ring-blue-500 focus:border-blue-500 placeholder-[#D9D9D9] placeholder:leading-8 max-md:placeholder:leading-6 resize-none"
                                placeholder="EX.2025.01.28 (二)
逢甲大學 / 08:30 出發
中台禪寺 / 10:30-13:30
魚池老街+日月潭 / 14:30-17:30
日月潭湖畔飯店 / 18:00

2025.01.29 (三)
日月潭湖畔飯店 / 09:30出發
埔里酒廠+中社花市 / 11:00-14:00
清水休息站 / 停留30分鐘
逢甲大學 / 16:30前抵達" required></textarea>
                        </div>
                    </div>
                </section>

                <!-- 聯絡資訊輸入區 -->
                <section class="mb-[100px] max-md:mb-[60px]">
                    <div
                        class="w-full py-[26px] max-md:py-[16px] flex items-center justify-center gap-[30px] max-md:gap-[15px] rounded-t-[15px] text-white text-[32px] max-2xl:text-[24px] max-md:text-[18px] bg-[#1B4794]">
                        <img src="../assets/img/icon/white-tag.png" alt="白色標籤icon"
                            class="w-[32px] max-2xl:w-[24px] max-md:w-[18px]">
                        聯絡資訊
                    </div>
                    <div
                        class="w-full p-[100px] max-md:p-[30px] max-sm:p-[15px] max-sm:pb-[30px] border-[3px] border-[#d9d9d9] border-t-transparent rounded-b-[15px] shadow-[0_5px_15px_0px_rgba(0,0,0,0.25)]">
                        <!-- 排版輸入區 -->
                        <div class="w-full flex flex-wrap justify-between max-md:flex-col">
                            <!-- 聯絡人姓名 -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="default-input" class="block mb-2"><span
                                        class="text-[#DD4F1B]">*</span>&nbsp;聯絡人姓名</label>
                                <input type="text" id="default-input" v-model="name"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="楊樂樂" required>
                            </div>
                            <!-- 聯絡信箱 -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="default-input" class="block mb-2"><span
                                        class="text-[#DD4F1B]">*</span>&nbsp;聯絡信箱</label>
                                <input type="text" id="default-input" v-model="email"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="anita.chiu@gmail.com" required>
                            </div>
                            <!-- 行動電話 -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="default-input" class="block mb-2"><span
                                        class="text-[#DD4F1B]">*</span>&nbsp;行動電話</label>
                                <input type="text" id="default-input" v-model="mobile"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="0988-888-888" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" required>
                            </div>
                            <!-- 市話 -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="default-input" class="block mb-2">
                                    市話
                                </label>
                                <input type="text" id="default-input" v-model="phone"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="04-27060000" pattern="[0-9]{2}-[0-9]{8}" required>
                            </div>
                        </div>
                        <!-- 滿版輸入區 -->
                        <div class="">
                            <div class="block mb-2">
                                備註
                            </div>
                            <textarea id="large-input" rows="20" wrap="soft" v-model="largeinput2"
                                class="inline-block w-full h-[415px] max-md:h-[320px] p-[15px] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal text-start border border-[#D9D9D9] rounded-[8px] bg-gray-50 leading-8 focus:ring-blue-500 focus:border-blue-500 placeholder-[#D9D9D9] placeholder:leading-8 resize-none"
                                placeholder="如有需特別注意的事項，可備註說明" required></textarea>
                        </div>
                    </div>
                </section>
                <!-- 發票資訊輸入區 -->
                <section class="mb-[100px] max-md:mb-[60px]">
                    <div
                        class="w-full py-[26px] max-md:py-[16px] flex items-center justify-center gap-[30px] max-md:gap-[15px] rounded-t-[15px] text-white text-[32px] max-2xl:text-[24px] max-md:text-[18px] bg-[#1B4794]">
                        <img src="../assets/img/icon/white-tag.png" alt="白色標籤icon"
                            class="w-[32px] max-2xl:w-[24px] max-md:w-[18px]">
                        發票資訊
                    </div>
                    <div
                        class="w-full p-[100px] max-md:p-[30px] max-sm:p-[15px] max-sm:pb-[30px] border-[3px] border-[#d9d9d9] border-t-transparent rounded-b-[15px] shadow-[0_5px_15px_0px_rgba(0,0,0,0.25)]">
                        <!-- 單行輸入區 -->
                        <div>
                            <!-- 發票開立   -->
                            <div class="mb-[60px] max-md:mb-[30px] w-[450px] max-md:w-full ">
                                <label for="default-input" class="block mb-2">
                                    <span class="text-[#DD4F1B]">*</span>&nbsp;發票開立</label>
                                <div class="flex items-center h-[60px] max-md:h-[48px]">
                                    <div class="mr-[20px]">
                                        <input id="default-radio-reciept-1" type="radio" value="personal"
                                            v-model="invoiceType" name="default-radio-reciept"
                                            class="w-5 h-5 max-md:w-4 max-md:h-4 text-[#DD4F1B] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                                        <label for="default-radio-reciept-1"
                                            class="ms-2 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal">個人紙本發票</label>
                                    </div>
                                    <div class="">
                                        <input id="default-radio-reciept-2" type="radio" value="company"
                                            v-model="invoiceType" name="default-radio-reciept"
                                            class="w-5 h-5 max-md:w-4 max-md:h-4 text-[#DD4F1B] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                                        <label for="default-radio-reciept-2"
                                            class="ms-2 text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal">公司報帳</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 排版輸入區 -->
                        <div class="w-full flex flex-wrap justify-between max-md:flex-col">
                            <!-- 收件人 -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="default-input" class="block mb-2"><span
                                        class="text-[#DD4F1B]">*</span>&nbsp;收件人</label>
                                <input type="text" id="default-input" v-model="takename"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="楊怒怒" required>
                            </div>
                            <!-- 收件地址 -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="default-input" class="block mb-2"><span
                                        class="text-[#DD4F1B]">*</span>&nbsp;收件地址</label>
                                <input type="text" id="default-input" v-model="takeaddress"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="台中市西屯區文華路100號" required>
                            </div>
                            <!-- 公司抬頭 -->
                            <div class="mb-[60px] max-md:mb-[30px]">
                                <label for="default-input" class="block mb-2">
                                    公司抬頭
                                </label>
                                <input type="text" id="default-input" v-model="companyname"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="請輸入公司抬頭" required>
                            </div>
                            <!-- 統一編號 -->
                            <div class="">
                                <label for="default-input" class="block mb-2">
                                    統一編號
                                </label>
                                <input type="text" id="default-input" v-model="companyid"
                                    class="w-[450px] max-md:w-full h-[60px] max-md:h-[48px] bg-gray-50 border border-[#D9D9D9] text-[20px] max-2xl:text-[18px] max-md:text-[16px] font-normal rounded-[8px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-[#D9D9D9]"
                                    placeholder="請輸入統一編號" required>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- 個資確認按鈕 -->
                <div class="m-auto flex items-center mb-[40px]">
                    <input id="default-checkbox" type="checkbox" value=""
                        class="w-6 h-6 max-2xl:w-4 max-2xl:h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        required>
                    <label for="default-checkbox"
                        class="ms-2 text-[24px] max-2xl:text-[18px] max-md:text-[14px] font-bold text-[#DD4F1B]">
                        我已詳閱<a href="" class="text-[#1B4794] border-b-2 border-b-[#1B4794]">個資授權說明</a>，並同意接受內容
                    </label>
                </div>
                <!-- 機器人確認按鈕 -->
                <div class="mb-[90px] m-auto max-md:mb-[40px]">
                    <Robot @verify-success="handleVerifySuccess" />
                </div>
                <!-- 送出按鈕 -->
                <button @click="handleSubmit"
                    class="m-auto w-[200px] max-2xl:w-[150px] max-md:w-[120px] h-[70px] max-2xl:h-[60px]  max-md:h-[48px] justify-center flex items-center gap-[8px] max-md:gap-[4px] text-white bg-[#DD4F1B] hover:bg-[#DD4F1B]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px] text-center">
                    下一步
                    <img src="../assets/img/icon/white-next.png" alt="白色大於icon" class="w-4 max-md:w-3">
                </button>
            </section>
        </div>
    </main>
</template>

<style scoped></style>
