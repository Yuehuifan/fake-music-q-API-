<template>
    <div class="my-swiper">
        <swiper 
        v-if="swiperList.length" 
        :options="swiperOptions"
        ref="mySwiper"
        >
            <swiper-slide
                v-for="(item, index) of swiperList"
                :key="index"
            >
                <img class="w100" :src="item.img" @load="imgLoad">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
  
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
 
export default {
    props: {
        swiperList: {
            type: Array,
            required: true
        },
        swiperOptions: {
            type: Object,
            required: true
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    methods: {
        //图片加载完成
        imgLoad() {
            this.$emit('img-load');
        }
    },
    directives: {
        swiper: directive
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    }
  
}
</script>

<style lang="scss" scoped>
.w100 {
    width: 100%;
}
</style>