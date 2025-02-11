<script>
import 'animate.css';
export default {
    data() {
        return {
            // 租車單位
            unitDropdownOpen: false,
            selectedUnit: '',
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
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (id) {
            this.mainInput = `遺失編號：${id}`;
            this.selectedOption = '尋物';
        } else {
            this.mainInput = '';
            this.selectedOption = '';
        }
        this.scrollTop();
    },
    methods: {
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
            this.$router.push('/');
        },
        scrollTop() {
            const windowHeight = window.innerHeight;
            window.scrollTo({
                top: windowHeight / 1,
            });
        },
    },
    
    computed: {
        store() {
            return this.stores;
        }
    }
};
</script>

<template>
    <main class="mb-[200px] max-2xl:mb-[120px] max-md:mb-[60px]">
        <!-- 子頁橫幅 -->
        <section class="w-full h-[640px] max-2xl:h-[480px] max-md:h-[360px] max-sm:h-[240px] mb-[106px] max-2xl:mb-0">
            <img src="../assets/img/banner/RentBanner.webp" alt="子頁橫幅" class="w-full h-full object-cover" />
        </section>
        <div class="max-w-[1440px] m-auto w-full max-2xl:p-[50px] max-md:p-[25px]">
            <!-- 頁面導航與標題 -->
            <section class="mb-[125px] max-2xl:mb-[100px] max-md:mb-[50px] gap-[40px] max-md:gap-[20px] flex flex-col justify-between">
                <div class="text-[24px] w-auto h-[30px] flex font-bold gap-[28px] max-md:gap-[20px] items-center max-2xl:text-[20px] max-md:text-[12px]">
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
            <section class="max-w-[1200px] w-full flex flex-col m-auto text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold">
                <!-- 步驟區 -->
                <section class="mb-[75px] max-md:mb-[40px] max-md:text-[12px]">
                    <div class="px-[133px] max-sm:px-[10px] flex flex-row gap-[44px] max-md:gap-[20px]">
                        <div class="rounded-full bg-[#d9d9d9] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/grey-pencil.png" alt="灰色鉛筆icon" class="w-[60px] max-md:w-[24px]">
                        </div>
                        <div class="grow mt-[72px] max-md:mt-[24px] border-t-[4px] border-t-[#d9d9d9]">
                        </div>
                        <div class="rounded-full bg-[#DD4F1B] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/white-check.png" alt="白色打勾icon" class="w-[60px] max-md:w-[24px]">
                        </div>
                        <div class="grow mt-[72px] max-md:mt-[24px] border-t-[4px] border-t-[#d9d9d9]">
                        </div>
                        <div class="rounded-full bg-[#d9d9d9] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/grey-good.png" alt="灰大拇指icon" class="w-[60px] max-md:w-[24px]">
                        </div>
                    </div>
                    <div class="px-[145px] max-2xl:px-[160px] max-md:px-[130px] max-sm:px-[10px] flex flex-row justify-between">
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
                <!-- 預約資料確認區 -->
                <section class="mb-[100px] max-md:mb-[60px]">
                    <div
                    class="w-full py-[26px] max-md:py-[16px] flex items-center justify-center gap-[30px] max-md:gap-[15px] rounded-t-[15px] text-white text-[32px] max-2xl:text-[24px] max-md:text-[18px] bg-[#1B4794]">
                        <img src="../assets/img/icon/white-tag.png" alt="白色標籤icon" class="w-[32px] max-2xl:w-[24px] max-md:w-[18px]">
                        無障礙包車-預約資料確認
                    </div>
                    <div
                        class="w-full p-[100px] max-md:p-[30px] max-sm:p-[15px] max-sm:pb-[30px] flex flex-col border-[3px] border-[#d9d9d9] border-t-transparent rounded-b-[15px] shadow-[0_5px_15px_0px_rgba(0,0,0,0.25)]">
                        <!-- 訂車資訊區 -->
                        <div class="flex max-xl:flex-col w-full mb-[70px] max-sm:mb-[40px]">
                            <!-- 標題 -->
                            <spam class="text-[32px] max-2xl:text-[24px] max-md:text-[18px] text-[#1B4794] mr-[70px] max-xl:mb-[40px] max-md:mb-[20px]">
                                訂車資訊</spam>
                            <div class="grow border-l-[2px] border-l-[#DD4F1B] pl-[40px] max-md:pl-[12px]">
                                <table class="flex max-xl:flex-col justify-between">
                                    <!-- 表格文字內容 -->
                                    <tbody class="w-full flex flex-col">
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">去程日期</th>
                                            <td class="font-normal">2025.01.28(二)</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">去程時間</th>
                                            <td class="font-normal">08:00 AM</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">回程日期</th>
                                            <td class="font-normal">2025.01.29(三)</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">結束行程時間</th>
                                            <td class="font-normal">17:00 PM</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">出發地</th>
                                            <td class="font-normal">逢甲大學</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">目的地</th>
                                            <td class="font-normal">中台禪寺</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">租車單位</th>
                                            <td class="font-normal">個人</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">租車用途</th>
                                            <td class="font-normal">旅遊</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">身心障礙人數</th>
                                            <td class="font-normal">3人以上</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">輪椅數量</th>
                                            <td class="font-normal">3輛以上</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">總搭乘人數</th>
                                            <td class="font-normal">12人</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">途中是否停靠</th>
                                            <td class="font-normal">是</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">用車行程規劃</th>
                                            <td class="font-normal">如下</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!-- 用車規劃 -->
                                <div
                                    class="w-full max-w-[751px] max-xl:max-w-full rounded-[8px] p-[15px] text-[20px] max-2xl:text-[18px] max-md:text-[14px] border-[3px] border-[#d9d9d9] font-normal">
                                    EX.2025.01.28 (二)<br>
                                    逢甲大學 / 08:30 出發<br>
                                    中台禪寺 / 10:30-13:30<br>
                                    魚池老街+日月潭 / 14:30-17:30<br>
                                    日月潭湖畔飯店 / 18:00<br>
                                    <br>
                                    2025.01.29 (三)<br>
                                    日月潭湖畔飯店 / 09:30出發<br>
                                    埔里酒廠+中社花市 / 11:00-14:00<br>
                                    清水休息站 / 停留30分鐘<br>
                                    逢甲大學 / 16:30前抵達
                                </div>
                            </div>
                        </div>
                        <!-- 聯絡資訊區 -->
                        <div class="flex max-xl:flex-col w-full mb-[70px] max-sm:mb-[40px]">
                            <!-- 標題 -->
                            <spam class="text-[32px] max-2xl:text-[24px] max-md:text-[18px] text-[#1B4794] mr-[70px] max-xl:mb-[40px] max-md:mb-[20px]">
                                聯絡資訊</spam>
                            <div class="grow border-l-[2px] border-l-[#DD4F1B] pl-[40px] max-md:pl-[12px]">
                                <table class="flex justify-between">
                                    <!-- 表格文字內容 -->
                                    <tbody class="w-full flex flex-col">
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">聯絡人姓名</th>
                                            <td class="font-normal">楊樂樂</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">電子信箱</th>
                                            <td class="font-normal">anita.chiu@gmail.com</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">行動電話</th>
                                            <td class="font-normal">0988-888-888</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">市話</th>
                                            <td class="font-normal">04-27060000</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">備註</th>
                                            <td class="font-normal">如下</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!-- 備註 -->
                                <div
                                    class="w-full max-w-[751px] max-xl:max-w-full rounded-[8px] p-[15px] text-[20px] max-2xl:text-[18px] max-md:text-[14px] border-[3px] border-[#d9d9d9] font-normal break-words">
                                    我們這次有三台輪椅需要一起乘車，有一台是電動輪椅，比較重一點，希望車內能有足夠的空間，讓孩子們的輪椅不會靠得太擠，避免互相碰撞。
                                </div>
                            </div>
                        </div>
                        <!-- 發票資訊區 -->
                        <div class="flex max-xl:flex-col w-full">
                            <!-- 標題 -->
                            <spam class="text-[32px] max-2xl:text-[24px] max-md:text-[18px] text-[#1B4794] mr-[70px] max-xl:mb-[40px] max-md:mb-[20px]">
                                發票資訊</spam>
                            <div class="grow border-l-[2px] border-l-[#DD4F1B] pl-[40px] max-md:pl-[12px]">
                                <table class="flex justify-between">
                                    <!-- 表格文字內容 -->
                                    <tbody class="w-full flex flex-col">
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">發票開立</th>
                                            <td class="font-normal">個人紙本發票</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">收件人</th>
                                            <td class="font-normal">楊怒怒</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">地址</th>
                                            <td class="font-normal">台中市西屯區文華路100號</td>
                                        </tr>
                                        <tr class="w-full flex justify-between mb-[40px] max-md:mb-[25px] max-sm:mb-[15px]">
                                            <th scope="row">公司抬頭</th>
                                            <td class="font-normal">-----</td>
                                        </tr>
                                        <tr class="w-full flex justify-between">
                                            <th scope="row">統一編號</th>
                                            <td class="font-normal">-----</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 送出按鈕 -->
                <section class="flex ">
                    <router-link to="/rentbus"
                            class="w-[200px] max-2xl:w-[150px] max-md:w-[120px] h-[70px] max-2xl:h-[60px]  max-md:h-[48px] m-auto flex items-center justify-center gap-[8px] max-md:gap-[4px] text-white bg-[#1B4794] hover:bg-[#1B4794]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px]">
                            <img src="../assets/img/icon/white-back.png" alt="白色小於icon" class="w-4 max-md:w-3">
                            修改資料
                        
                    </router-link>
                    <button @click="$router.push('/okbus')"
                        class="w-[200px] max-2xl:w-[150px] max-md:w-[120px] h-[70px] max-2xl:h-[60px]  max-md:h-[48px] m-auto flex items-center justify-center gap-[8px] max-md:gap-[4px] text-white bg-[#DD4F1B] hover:bg-[#DD4F1B]/80 focus:ring-2 focus:ring-[#D9D9D9]/80 focus:outline-none rounded-[15px]">
                        確認送出
                        <img src="../assets/img/icon/white-next.png" alt="白色大於icon" class="w-4 max-md:w-3">
                    </button>
                </section>
            </section>
        </div>
    </main>
</template>

<style scoped></style>
