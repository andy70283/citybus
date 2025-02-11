

<script setup>
const image01 = './assets/img/navandfooter/busicon.png';
const image02 = './assets/img/navandfooter/FB.png';
const image03 = './assets/img/navandfooter/LINE.png';
const image04 = './assets/img/navandfooter/Mail.png';
console.log(image04);
</script>

<template>
    <header class="absolute -translate-x-2/4 left-1/2 max-w-[1440px] m-auto w-full flex justify-center">
        <nav
            class="w-full h-[127px] bg-[#ffffff] rounded-[18px] flex mt-[53px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-[10]">
            <div class="w-[280px] h-full flex justify-center items-center">
                <router-link to="/" class="w-fit h-fit flex">
                    <img :src="image01" alt="busicon-top">
                </router-link>
            </div>
            <div class="w-[983px] h-full text-[24px] flex gap-[31px] font-bold">
                <div class="w-[138px] group h-full flex justify-center pt-[49px]">
                    <span class="relative w-fit h-fit flex flex-col gap-[9px]">關於我們
                        <div
                            class="w-[270px] absolute top-[78px] right-[50%] translate-x-[50%]  bg-[#ffffff] rounded-bl-[12px] rounded-br-[12px] border-b border-b-[#D9D9D9] z-[10] hidden group-hover:block">
                            <router-link to="/"
                                class="w-full h-[68px] flex justify-center items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[#3b3b3b] border-b border-b-[#D9D9D9] transition ease duration-300 hover:border-b-[#DD4F1B] hover:text-[#DD4F1B]">
                                <span>公司簡介</span>
                            </router-link>
                            <router-link to="/stopinfo"
                                class="w-full h-[68px] flex justify-center items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[#3b3b3b] border-b border-b-[#D9D9D9] transition ease duration-300 hover:border-b-[#DD4F1B] hover:text-[#DD4F1B] rounded-b-[12px]">
                                <span>站場簡介</span>
                            </router-link>
                        </div>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </span>
                </div>
                <div class="w-[138px] h-full flex justify-center pt-[49px]">
                    <router-link to="/allnews" class="group w-fit h-fit flex flex-col gap-[9px]">
                        <span>最新公告</span>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </router-link>
                </div>
                <div class="w-[138px] h-full flex justify-center pt-[49px]">
                    <router-link to="/routesearch" class="group w-fit h-fit flex flex-col gap-[9px]">
                        <span>路線查詢</span>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </router-link>
                </div>

                <div class="w-[138px] h-full flex justify-center pt-[49px]">
                    <router-link to="/" class="group w-fit h-fit flex flex-col gap-[9px]">
                        <span>包車服務</span>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </router-link>
                </div>
                <div class="w-[138px] group h-full flex justify-center pt-[49px]">
                    <div>
                        <span class="relative w-fit h-fit flex flex-col gap-[9px]">中客服務
                            <div
                                class="w-[270px] absolute top-[78px] right-1/2 translate-x-[50%] hidden bg-[#ffffff] z-[10] group-hover:block rounded-b-[12px]">
                                <router-link to="/lostinfo"
                                    class="w-full h-[68px] flex justify-center items-center pt-10px pb-10px pl-20px pr-20px text-[#3b3b3b] transition ease duration-300 border-b border-b-[#D9D9D9] hover:text-[#DD4F1B] hover:border-b-[#DD4F1B]">
                                    <span>失物招領</span>
                                </router-link>
                                <router-link to="/contactus"
                                    class="w-full h-[68px] flex justify-center items-center pt-10px pb-10px pl-20px pr-20px text-[#3b3b3b] transition ease duration-300 border-b border-b-[#D9D9D9] hover:text-[#DD4F1B] hover:border-b-[#DD4F1B]">
                                    <span>聯絡我們</span>
                                </router-link>
                                <router-link to="/contractone"
                                    class="w-full h-[68px] flex justify-center items-center pt-10px pb-10px pl-20px pr-20px text-[#3b3b3b] transition ease duration-300 border-b border-b-[#D9D9D9] rounded-b-[12px] hover:text-[#DD4F1B] hover:border-b-[#DD4F1B]">
                                    <span>運送契約</span>
                                </router-link>
                            </div>
                            <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                        </span>
                    </div>
                </div>
                <div class="w-[138px] h-full flex justify-center pt-[49px]">
                    <router-link to="/hire" class="group w-fit h-fit flex flex-col gap-[9px]">
                        <span>人力招募</span>
                        <div class="w-[96px] h-[3px] bg-[#DD4F1B] hidden z-[11] group-hover:block"></div>
                    </router-link>
                </div>
            </div>
            <div class="flex justify-center items-center text-[16px] font-[500] gap-[21px] grow">
                <div class="text-[#ffffff] rounded-full flex justify-center items-center group">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class="transition ease duration-300 group-hover:fill-[#1B4794]" width="40" height="40"
                            rx="20" fill="#DD4F1B" />
                        <path
                            d="M19.1229 18.6477H17.3501C17.282 18.2689 17.1551 17.9356 16.9695 17.6477C16.7839 17.3598 16.5566 17.1155 16.2876 16.9148C16.0187 16.714 15.7176 16.5625 15.3842 16.4602C15.0547 16.358 14.7043 16.3068 14.3331 16.3068C13.6626 16.3068 13.0623 16.4754 12.532 16.8125C12.0054 17.1496 11.5888 17.6439 11.282 18.2955C10.9789 18.947 10.8274 19.7424 10.8274 20.6818C10.8274 21.6288 10.9789 22.428 11.282 23.0795C11.5888 23.7311 12.0073 24.2235 12.5376 24.5568C13.0679 24.8902 13.6645 25.0568 14.3274 25.0568C14.6948 25.0568 15.0433 25.0076 15.3729 24.9091C15.7062 24.8068 16.0073 24.6572 16.2763 24.4602C16.5452 24.2633 16.7725 24.0227 16.9581 23.7386C17.1475 23.4508 17.2782 23.1212 17.3501 22.75L19.1229 22.7557C19.0282 23.3277 18.8445 23.8542 18.5717 24.3352C18.3028 24.8125 17.9562 25.2254 17.532 25.5739C17.1115 25.9186 16.6304 26.1856 16.0888 26.375C15.5471 26.5644 14.9562 26.6591 14.3161 26.6591C13.3085 26.6591 12.4107 26.4205 11.6229 25.9432C10.835 25.4621 10.2138 24.7746 9.75923 23.8807C9.30848 22.9867 9.0831 21.9205 9.0831 20.6818C9.0831 19.4394 9.31037 18.3731 9.76491 17.483C10.2195 16.589 10.8407 15.9034 11.6286 15.4261C12.4164 14.9451 13.3123 14.7045 14.3161 14.7045C14.9335 14.7045 15.5092 14.7936 16.0433 14.9716C16.5812 15.1458 17.0642 15.4034 17.4922 15.7443C17.9202 16.0814 18.2744 16.4943 18.5547 16.983C18.835 17.4678 19.0244 18.0227 19.1229 18.6477ZM21.2237 26.5V14.8636H22.9794V19.9205H28.7805V14.8636H30.5419V26.5H28.7805V21.4261H22.9794V26.5H21.2237Z"
                            fill="white" />
                    </svg>
                </div>
                <div class="text-[#ffffff] rounded-full flex justify-center items-center group">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class="transition ease duration-300 group-hover:fill-[#1B4794]" width="40" height="40"
                            rx="20" fill="#DD4F1B" />
                        <path
                            d="M10.4815 26.5V14.8636H17.777V16.375H12.2372V19.9205H17.3963V21.4261H12.2372V24.9886H17.8452V26.5H10.4815ZM29.5142 14.8636V26.5H27.9006L21.9858 17.9659H21.8778V26.5H20.1222V14.8636H21.7472L27.6676 23.4091H27.7756V14.8636H29.5142Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
        </nav>
    </header>
    
    <footer class="w-full h-[397px] font-bold flex flex-col items-center shadow-[0_-4px_30px_0px_rgba(0,0,0,0.15)]">
        <div class="w-[1440px] h-[307px] bg-[#ffffff] flex justify-between pt-[60px]">
            <div class="w-fit h-[185px] gap-[20px] flex flex-col items-center">
                <div class="w-[249px] h-[107px] flex gap-[33px]">
                    <img :src="image01" alt="busicon-bottom">
                </div>
                <div class="w-[228px] h-[58px] flex gap-[25px]">
                    <a href="">
                        <img :src="image02/FB.png" alt="FB">
                    </a>
                    <a href="">
                        <img :src="image03" alt="LINE">
                    </a>
                    <a href="">
                        <img :src="image04" alt="Mail">
                    </a>
                </div>
            </div>
            <div class="w-fit h-[199px] flex items-center gap-[35px]">
                <div class="w-[20px] h-full flex justify-center items-center">
                    <div class="w-[10px] h-[179px] bg-[#DD4F1B]"></div>
                </div>
                <div class="w-fit h-[179px] text-[24px] flex flex-col justify-between">
                    <span>地址：台中市西區民權路235號</span>
                    <span>TEL：(04) 2305-5898</span>
                    <span>傳真：(04) 2305-5898 </span>
                    <span>免付費服務電話：0800-800-126</span>
                </div>
            </div>
            <div class="w-fit h-[191px] flex gap-[42px] font-bold">
                <div class="w-fit h-[111px] flex flex-col justify-between">
                    <div class="w-[150px] h-[35px] text-[20px] flex border-b border-b-[#3b3b3b] items-center gap-[17px]">
                        <span>關於我們</span>
                    </div>
                    <router-link to="/" class="w-fit h-[22px] text-[18px] flex items-center gap-[25px] group">
                            <span class="group-hover:text-[#DD4F1B]">公司簡介</span>
                            <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-current group-hover:fill-[#DD4F1B]"
                                    d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                    fill="#3B3B3B" />
                            </svg>
                    </router-link>
                    <router-link to="/stopinfo" class="w-fit h-[22px] text-[18px] flex items-center gap-[25px] group">
                            <span class="group-hover:text-[#DD4F1B]">站場簡介</span>
                            <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-current group-hover:fill-[#DD4F1B]"
                                    d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                    fill="#3B3B3B" />
                            </svg>
                    </router-link>
                </div>
                <div class="w-fit h-[149px] flex flex-col justify-between">
                    <div class="w-[150px] h-[35px] text-[20px] flex border-b border-b-[#3b3b3b] items-center gap-[17px]">
                        <span>中客服務</span>
                    </div>
                    <router-link to="/lostinfo" class="w-fit h-[22px] text-[18px] flex items-center gap-[25px] group">
                            <span class="group-hover:text-[#DD4F1B]">失物招領</span>
                            <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-current group-hover:fill-[#DD4F1B]"
                                    d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                    fill="#3B3B3B" />
                            </svg>
                    </router-link>
                    <router-link to="/contactus" class="w-fit h-[22px] text-[18px] flex items-center gap-[25px] group">
                            <span class="group-hover:text-[#DD4F1B]">聯絡我們</span>
                            <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-current group-hover:fill-[#DD4F1B]"
                                    d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                    fill="#3B3B3B" />
                            </svg>
                    </router-link>
                    <router-link to="/contractone" class="w-fit h-[22px] text-[18px] flex items-center gap-[25px] group">
                            <span class="group-hover:text-[#DD4F1B]">運送契約</span>
                            <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-current group-hover:fill-[#DD4F1B]"
                                    d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                    fill="#3B3B3B" />
                            </svg>
                    </router-link>
                </div>
                <div class="w=fit h-[179px] flex flex-col justify-between">
                    <div class="w-[150px] h-[35px] text-[20px] flex border-b border-b-[#3b3b3b] items-center gap-[17px]">
                        <router-link to="/allnews" class="w-fit flex items-center gap-[17px] group">
                                <span>最新公告</span>
                                <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                        fill="#DD4F1B" />
                                </svg>
                        </router-link>
                    </div>
                    <div class="w-[150px] h-[35px] text-[20px] flex border-b border-b-[#3b3b3b] items-center gap-[17px]">
                        <router-link to="/routesearch" class="w-fit flex items-center gap-[17px] group">
                                <span>路線查詢</span>
                                <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                        fill="#DD4F1B" />
                                </svg>
                        </router-link>
                    </div>
                    <div class="w-[150px] h-[35px] text-[20px] flex border-b border-b-[#3b3b3b] items-center gap-[17px]">
                        <router-link to="/" class="w-fit flex items-center gap-[17px] group">
                                <span>包車服務</span>
                                <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                        fill="#DD4F1B" />
                                </svg>
                        </router-link>
                    </div>
                    <div class="w-[150px] h-[35px] text-[20px] flex border-b border-b-[#3b3b3b] items-center gap-[17px]">
                        <router-link to="/hire" class="w-fit flex items-center gap-[17px] group">
                                <span>人力招募</span>
                                <svg class="transition ease duration-300 group-hover:translate-x-[10px]" width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9L16 9V7L0 7L0 9Z"
                                        fill="#DD4F1B" />
                                </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[1440px] h-[90px] bg-[#ffffff] flex justify-center items-center">©台中汽車客運股份有限公司 2012@tcbus.com.tw All Rights Reserved
        </div>
    </footer>
</template>