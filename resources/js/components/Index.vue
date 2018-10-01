<template>
    <div id="main">
        <header id="header">
            <h1>
                Laravel Vue SPA
            </h1>
            <navigationMenu></navigationMenu>
        </header>

        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import navigationMenu from './Menu.vue'

    export default {
        data() {
            return {}
        },

        components: {
            navigationMenu
        }
    }
</script>