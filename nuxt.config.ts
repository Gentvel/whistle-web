// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:[
        'element-plus/dist/index.css',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/whistle.scss" as *;'
                }
            }
        }
    }
})


