<script setup>
const props = defineProps({
    showItem: Object,
    showImg: String,
    colseBtn: Boolean,
});
const emit = defineEmits(['closeModal']);
console.log(emit)
const closebtn = () => {
    emit('closeModal', !props.colseBtn);
    console.log(props.colseBtn);
};
console.log(props.showItem);
</script>


<template>
    <div v-if="props.colseBtn"
        class="flex z-50 justify-center items-center ">
        <div class="">
            <!-- 模態框內容 -->
            <div class="flex flex-col justify-center bg-white rounded-lg shadow ">
                 <div class="flex flex-row p-4">
                     <!-- 模態框頭部 -->
                     <div class="border-b rounded-t">
                         <h3 class="text-xl font-semibold text-gray-900">
                            {{ props.showImg === 'startimg1' ? '路線圖' : '時刻表' }}
                         </h3>
                     </div>
                    <!-- 關閉按鈕 -->
                     <button type="button" @click="closebtn"
                         class=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                         <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd"
                                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                 clip-rule="evenodd"></path>
                         </svg>
                         <span class="sr-only">Close modal</span>
                     </button>
                 </div>
                <!-- 模態框內容 -->
                <div class="">
                    <img class=" h-[80vh] max-lg:w-full max-lg:h-auto" :src="props.showItem[props.showImg]" alt="票價表圖片">
                </div>
            </div>
        </div>
    </div>
</template>