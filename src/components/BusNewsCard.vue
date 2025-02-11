<script></script>

<template>
    <div class="flex-grow text-[24px] max-2xl:text-[20px] max-md:text-[16px] font-bold overflow-wrap break-word">
        <!-- 單則公告卡片 -->
        <div
            class="w-full max-w-[1105px] p-[100px] max-2xl:p-[80px] max-md:p-[40px] max-sm:p-[25px] border-[8px] rounded-[20px] border-[#E5A328] flex flex-col">
            <div
                class="w-[110px] py-[5px] max-md:w-[85px] mb-[40px] max-sm:mb-[30px] gap-[17px] max-md:gap-[12px] flex items-center text-[18px] max-2xl:text-[16px] max-md:text-[14px] border-b border-b-[#3b3b3b] cursor-pointer">
                <img src="../assets/img/icon/arrow-l.png" alt="灰左箭頭" class="w-[16px] max-md:w-[12px]">
                回到列表
            </div>
            <div class="w-full border-l-[8px] px-[25px] py-[5px] border-l-[#E5A328] mb-[50px] max-sm:mb-[40px]">
                <div class="flex flex-col gap-[8px]">
                    <div class="flex gap-[12px] items-center">
                        <span class="w-[120px] max-md:w-[90px] text-[18px] max-2xl:text-[16px] max-md:text-[14px]">
                            2024.12.26
                        </span>
                        <span
                            class="text-white text-[16px] max-2xl:text-[14px] max-md:text-[12px] px-[12px] py-[3px] bg-[#E5A328] rounded-[5px]">
                            班次變更
                        </span>
                    </div>
                    <span class="text-[32px] max-2xl:text-[24px] max-md:text-[20px]">
                        284路班次時刻調整
                    </span>
                </div>

            </div>

            <span class="text-[#CA1E1D] mb-[20px]">
                自114年1月1日起，調整班次時刻。
            </span>
            <table class="w-full text-center rtl:text-center">
                <thead class=" text-white font-bold h-[70px]">
                    <tr>
                        <th scope="col" class="w-[22%]   bg-[#E5A328]/40">

                        </th>
                        <th scope="col" class="w-[39%] bg-[#E5A328]">
                            臺中車站 (成功路口)
                        </th>
                        <th scope="col" class="w-[39%] bg-[#E5A328]">
                            修平科技大學
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <th scope="row" class="h-[120px]  bg-[#E5A328]/70 text-white">
                            平日
                        </th>
                        <td class="font-normal border-b border-r">
                            <div class="flex max-sm:flex-col gap-[10px] items-center justify-center">
                                18:00
                                <img src="../assets/img/icon/arrow-r.png" alt="灰右箭頭" class="w-[16px] max-sm:rotate-90">
                                <span class="text-[#CA1E1D]">
                                    18:20
                                </span>
                            </div>
                        </td>
                        <td class="font-normal border-b border-r">
                            <div class="flex max-sm:flex-col gap-[10px] items-center justify-center">
                                19:00
                                <img src="../assets/img/icon/arrow-r.png" alt="灰右箭頭" class="w-[16px] max-sm:rotate-90">
                                <span class="text-[#CA1E1D]">
                                    19:15
                                </span>
                            </div>
                        </td>

                    </tr>
                    <tr class="">
                        <th scope="row" class="h-[120px] bg-[#E5A328]/70 text-white">
                            例假日
                        </th>
                        <td class="font-normal border-b border-r">
                            維持原本時刻
                        </td>
                        <td class="font-normal border-b border-r">
                            維持原本時刻
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<style></style>