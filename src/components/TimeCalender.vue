<script>
import { ref,watch } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components: {
    Datepicker
  },
  props: {
    dateValue: {
      type: Date,
      required: true
    }
  },
  emits: ['update:timeValue'],
  setup(props, { emit }) {
    const date = ref(props.timeValue);
    watch(() => props.timeValue, (newValue) => {
      date.value = newValue;
    });
    const timeChange = (newDate) => {
      emit('update:timeValue', newDate);
    };

    return { date, timeChange };
  }

};
</script>
<template>
  <div >
    <Datepicker
      v-model="date"
      class="custom-datepicker"
      placeholder="請選擇時間"
      :hide-input-icon="true"
      :time-picker="true"
      :is-24="true"
      :locale="'zh'"
      :only-time="true"
      @update:timeValue="timeChange"
    />
  </div>
</template>

<style scoped>
.custom-datepicker {
  --dp-font-size: 20px;
  --dp-cell-size: 45px;
  width: 450px;
}

@media (max-width: 1536px) {
  .custom-datepicker {
    --dp-font-size: 16px;
  }

  ::v-deep(.dp__input) {
    font-size: 16px !important;
  }

  ::v-deep(.dp__selection_preview) {
    font-size: 16px !important;
  }

  ::v-deep(.dp__action_button) {
    font-size: 16px !important;
  }
}

@media (max-width: 768px) {
  .custom-datepicker {
    --dp-font-size: 16px;
    --dp-cell-size: 48px;
    width: 100%;
  }

  ::v-deep(.dp__input) {
    height: 48px !important;
    font-size: 16px !important;
  }

  ::v-deep(.dp__selection_preview) {
    font-size: 16px !important;
  }

  ::v-deep(.dp__action_button) {
    font-size: 16px !important;
  }
}

:deep(.dp__action_row) {
  height: 100px;
}
:deep(.dp__selection_preview){
  font-size: 20px;
  padding: 10px;
}
:deep(.dp__action_button) {
  font-size: 18px;
  padding: 5px;
}

:deep(.dp__input) {
  height: 60px;
  background-color: rgb(249, 250, 251);
  border: 1px solid rgb(209, 213, 219);
  font-size: 20px;
  border-radius: 8px;
  padding: 2.5px;
  font-weight: 400;
  border-radius: 8px;
  display: block;
  padding: 0.625rem;
}
</style>
