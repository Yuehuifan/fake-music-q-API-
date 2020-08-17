<template>
    <div class="hot-search">
        <div class="hot-search-list my-3 px-3">
            <span class="text-gray2 text-md">热门搜索</span>
            <br/>
            <ul class="text-gray1 d-flex flex-wrap jc-around">
                <li
                v-for="item of hotSearch"
                :key="item.n"
                class="px-4 py-2"
                @click="hotSearchDetail(item)"
                >
                {{ item.k }}              
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hotSearch: {
            type: Array,
            required: true
        }
    },
    methods: {
        hotSearchDetail(item) {
            this.$emit('userDefinedEvent', item)
            
        }
    }
    
}
</script>