import { defineStore } from 'pinia'

export const useRentStore = defineStore('rent', {
  // 儲存資料
  state: () => {
    return {
      rentData: {
        goday: '',
        gotime: '',
        backday: '',
        backtime: '',
        setoff: '',
        destination: '',
        selectedUnit: '',
        selectedPurpose: '',
        selectedBeloved: '',
        selectedWheel: '',
        totalpeople: '',
        stopOverChoice: '',
        largeinput: '',
        name: '',
        email: '',
        mobile: '',
        phone: '',
        largeinput2: '',
        invoiceType: '',
        takename: '',
        takeaddress: '',
        companyname: '',
        companyid: ''
      }
    }
  },
  actions: {
    setRentData(values) {
      // 更新多筆資料
      this.rentData = { ...this.rentData, ...values };
    },
  },
})
