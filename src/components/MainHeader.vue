<template>
    <div class="main-header">
        <div class="title text-primary text-lg text-center text-weight-7 pt-2">
            {{ title }}
        </div>

        <div class="nav-list">
            <ul class="d-flex jc-around py-3 text-gray1 text-sm">
                <li
                    v-for="item in navList"
                    :key="item.name"
                    :class="{ 'nav-active': isActive(item.path) }"
                    @click="navClick(item.path)"
                >{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Yuehui Music'
        }
    },
    data() {
        return {
            navList: [
                { path: '/recommand', name: '推荐' },
                { path: '/singer', name: '歌手' },
                { path: '/rank', name: '排行' },
                { path: '/search', name: '搜索' },
            ]
        }
    },
    methods: {
        isActive(path) {
            if(path === this.$route.path) {
                return true
            }
            if (path === '/recommand' && this.$route.path === '/') {
                return true
            }
            return false
        },
        navClick(path) {
            this.$emit('nav-click', path);
        }
    }
}
</script>