import { defineStore } from 'pinia'

export const StopStore = defineStore('stop', {
  state: () => ({
stopitems:[
    {
        name: "臺中轉運站",
        phone: "(04)2225-0910",
        routes: ["新竹", "竹山", "埔里(國6及中投)", "北港", "台西"],
        image: "./image/stop/Stop-img-1.webp",
        url: "https://maps.app.goo.gl/Ukr9i5UW7KoWuaPUA",
    },
    {
        name: "高鐵停車場",
        phone: "(04)2338-4802",
        routes: ["11", "15", "26", "27", "29", "33", "35", "41", "54", "69", "70", "72", "93", "100", "133", "142", "154", "156", "163", "290", "357"],
        image: "./image/stop/Stop-img-2.webp",
        url: "https://maps.app.goo.gl/aCv737VdjJ6PZxj79",
    },
    {
        name: "豐原停車場",
        phone: "(04)2522-3793",
        routes: ["12", "66", "72", "901(副)"],
        image: "./image/stop/Stop-img-3.webp",
        url: "https://maps.app.goo.gl/oNDCxQb5bMZxHKnRA",
    },
    {
        name: "沙鹿停車場",
        phone: "(04)2615-4012",
        routes: ["6", "8", "14(副)", "28", "54", "82", "82延", "101", "108", "324", "357", "659"],
        image: "./image/stop/Stop-img-4.webp",
        url: "https://maps.app.goo.gl/s9PmTqEVsrSSaouc8",
    },
    {
        name: "梧棲停車場",
        phone: "(04)2658-2432",
        routes: ["300", "307", "307副", "309", "310"],
        image: "./image/stop/Stop-img-5.webp",
        url: "https://maps.app.goo.gl/AxKWkUrhnyqB4wpa6",
    },
    {
        name: "清水停車場",
        phone: "(04)2622-9880",
        routes: ["500", "304"],
        image: "./image/stop/Stop-img-6.webp",
        url: "https://maps.app.goo.gl/L1bVhQfjScWebj21A",
    },
    {
        name: "大甲停車場",
        phone: "(04)2680-1924",
        routes: ["93", "97", "154", "157", "657", "659", "811"],
        image: "./image/stop/Stop-img-7.webp",
        url: "https://maps.app.goo.gl/zzRoWwbKc8bvfUVUA",
    },
    {
        name: "霧峰停車場",
        phone: "(04)2332-6997",
        routes: ["12", "107", "108", "131", "132", "133", "200", "243", "245", "284", "304", "307"],
        image: "./image/stop/Stop-img-8.webp",
        url: "https://maps.app.goo.gl/Eo6jQZDWumanYTaC7",
    },
    {
        name: "東海停車場",
        phone: "(04)2652-4620",
        routes: ["28", "60", "245", "290", "324", "325", "675"],
        image: "./image/stop/Stop-img-9.webp",
        url: "https://maps.app.goo.gl/bnHcRMGzQZVxYufA9",
    },
    {
        name: "朝馬站(秋紅谷)",
        phone: "(04)2706-5675",
        routes: ["國道 新竹", "國道 北港", "國道 台西"],
        image: "./image/stop/Stop-img-10.webp",
        url: "https://maps.app.goo.gl/wiMWJLWXWETZXg5v8",
    },
    {
        name: "竹山站",
        phone: "(049)2656-301",
        routes: ["國道 竹山"],
        image: "./image/stop/Stop-img-11.webp",
        url: "https://maps.app.goo.gl/ViTgU8T1vFMF9Usw9",
    },
],
}),
actions: {
    
  }
})