<script setup lang="ts">
import { reactive, ref } from 'vue';
import vueRecaptcha from 'vue3-recaptcha2';

const isVerified = ref(false);
const emit = defineEmits(['verifySuccess']);

const instance_vueRecaptchaV2 = reactive({
    data_v2SiteKey: '6LcFi7QqAAAAAK92dxpI80AT4FqnNsZdh_32vUY4',
    recaptchaVerified: () => {
        isVerified.value = true;
        emit('verifySuccess', true);
    },
    recaptchaExpired: () => {
        isVerified.value = false;
        emit('verifySuccess', false);
    },
    recaptchaFailed: () => {
        isVerified.value = false;
        emit('verifySuccess', false);
    },
});
</script>

<template>
        <vue-recaptcha
                :sitekey="instance_vueRecaptchaV2.data_v2SiteKey"
                size="normal"
                theme="light"
                hl="zh-TW"
                @verify="instance_vueRecaptchaV2.recaptchaVerified"
                @expire="instance_vueRecaptchaV2.recaptchaExpired"
                @fail="instance_vueRecaptchaV2.recaptchaFailed"
        />
</template>
