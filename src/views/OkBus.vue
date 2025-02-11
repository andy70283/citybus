<script>
import Swal from 'sweetalert2';

export default {
    mounted() {
    Swal.fire({
        icon: "success",
        title: "謝謝您的填寫 將由專人與您聯繫",
        showConfirmButton: false,
        showCloseButton: true,
    }).then(() => {
        // 跳轉回首頁
        this.$router.push('/');
    });
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
                class="max-w-[1200px] w-full flex flex-col m-auto text-[24px] max-2xl:text-[20px] max-md:text-[14px] font-bold">
                <!-- 步驟區 -->
                <section class="mb-[75px] max-md:mb-[40px] max-md:text-[12px]">
                    <div class="px-[133px] max-sm:px-[10px] flex flex-row gap-[44px] max-md:gap-[20px]">
                        <div class="rounded-full bg-[#d9d9d9] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/grey-pencil.png" alt="灰鉛筆icon"
                                class="w-[60px] max-md:w-[24px]">
                        </div>
                        <div class="grow mt-[72px] max-md:mt-[24px] border-t-[4px] border-t-[#d9d9d9]">
                        </div>
                        <div class="rounded-full bg-[#d9d9d9] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/grey-check.png" alt="灰打勾icon" class="w-[60px] max-md:w-[24px]">
                        </div>
                        <div class="grow mt-[72px] max-md:mt-[24px] border-t-[4px] border-t-[#d9d9d9]">
                        </div>
                        <div class="rounded-full bg-[#DD4F1B] p-[35px] max-md:p-[12px]">
                            <img src="../assets/img/icon/white-good.png" alt="白色大拇指icon"
                                class="w-[60px] max-md:w-[24px]">
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

            </section>
        </div>
    </main>
</template>

<style scoped>
</style>
