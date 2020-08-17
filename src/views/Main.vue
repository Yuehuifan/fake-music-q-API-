<template>
    <div class="main">
        <!-- main-header -->
        <main-header
            title="My music"
            @nav-click="toPath"
        />
        <!-- children-router -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        
    </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'


export default {
    components: {
        MainHeader
    },
    methods: {
        toPath(path) {
            this.$router.push(path)
        }
    }
}
</script>