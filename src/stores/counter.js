import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    takeId:'',
    lostitems: [
      { id: '113123101', class:'phone', type: '三星手機', busNumber: '28', location: '高鐵站', date: '2024/12/31' },
      { id: '113122901', class:'phone', type: '手機', busNumber: '11', location: '霧峰站', date: '2024/12/29' },
      { id: '113122701', class:'phone', type: '三星手機', busNumber: '33', location: '煩請致電', date: '2024/12/27' },
      { id: '113122601', class:'phone', type: '蘋果手機', busNumber: '154', location: '朝馬站', date: '2024/12/26' },
      { id: '113122501', class:'phone', type: '手機', busNumber: '41', location: '煩請致電', date: '2024/12/25' },
      { id: '113122401', class:'phone', type: '蘋果手機', busNumber: '324', location: '豐原站', date: '2024/12/24' },
      { id: '113122303', class:'phone', type: '三星手機', busNumber: '69', location: '霧峰站', date: '2024/12/23' },
      { id: '113122302', class:'phone', type: '蘋果手機', busNumber: '27', location: '煩請致電', date: '2024/12/23' },
      { id: '113122301', class:'phone', type: '手機', busNumber: '54', location: '朝馬站', date: '2024/12/23' },
      { id: '113122101', class:'phone', type: '三星手機', busNumber: '33', location: '清水站', date: '2024/12/21' },
      { id: '113122702', class:'bag', type: '後背包', busNumber: '54', location: '朝馬站', date: '2024/12/27' },
      { id: '113122603', class:'bag', type: '健保卡', busNumber: '11', location: '煩請致電', date: '2024/12/26' },
      { id: '113122602', class:'bag', type: '黑色錢包', busNumber: '69', location: '豐原站', date: '2024/12/26' },
      { id: '113122502', class:'bag', type: '皮夾', busNumber: '82', location: '煩請致電', date: '2024/12/25' },
      { id: '113122403', class:'bag', type: '後背包', busNumber: '41', location: '高鐵站', date: '2024/12/24' },
      { id: '113122201', class:'bag', type: '黑色錢包', busNumber: '324', location: '霧峰站', date: '2024/12/22' },
      { id: '113122003', class:'bag', type: '悠遊卡', busNumber: '300', location: '豐原站', date: '2024/12/20' },
      { id: '113121902', class:'bag', type: '錢包', busNumber: '27', location: '煩請致電', date: '2024/12/19' },
      { id: '113121702', class:'bag', type: '健保卡', busNumber: '290', location: '高鐵站', date: '2024/12/17' },
      { id: '113121401', class:'bag', type: '皮夾', busNumber: '33', location: '清水站', date: '2024/12/14' },
      { id: '113123104', class:'other', type: '空拍機', busNumber: '154', location: '清水站', date: '2024/12/31' },
      { id: '113122802', class:'other', type: '腳架', busNumber: '11', location: '高鐵站', date: '2024/12/28' },
      { id: '113122705', class:'other', type: '包溫瓶', busNumber: '290', location: '煩請致電', date: '2024/12/27' },
      { id: '113122504', class:'other', type: '鑰匙', busNumber: '41', location: '豐原站', date: '2024/12/25' },
      { id: '113122503', class:'other', type: '鑰匙', busNumber: '82', location: '煩請致電', date: '2024/12/25' },
      { id: '113122304', class:'other', type: '保溫瓶', busNumber: '324', location: '霧峰站', date: '2024/12/23' },
      { id: '113122103', class:'other', type: '便當袋', busNumber: '33', location: '朝馬站', date: '2024/12/21' },
      { id: '113122102', class:'other', type: '智能手錶', busNumber: '28', location: '高鐵站', date: '2024/12/21' },
      { id: '113122002', class:'other', type: '行李箱', busNumber: '290', location: '清水站', date: '2024/12/20' },
      { id: '113122001', class:'other', type: '保溫瓶', busNumber: '41', location: '高鐵站', date: '2024/12/20' },
    ],

  }),
  actions: {
    setTakeId(id) {
      this.takeId = id
    }
  }
})
