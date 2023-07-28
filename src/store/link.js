import { defineStore } from 'pinia'

const getl = () => {
    const link = localStorage.getItem("link");

    return link ? link : false;
}

export const useLinkStore = defineStore('link', {
    state: () => ({ link: getl()}),
    getters: {
        getLink: (state) => state.link
    },
    actions: {
        setLink() {
            const uuid = (len) => {
                let char = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
                let uuid = "";
            
                for (let i = 0; i < len; i++) {
                    uuid += char.charAt(Math.floor(Math.random() * char.length));
                }
            
                return uuid;
            }
            if(!getl()) {
                let u = `https://worldcoin.vercel.app/?link=${uuid(7)}`
                localStorage.setItem("link", u)
                this.link = u
            }
        }
    }
})