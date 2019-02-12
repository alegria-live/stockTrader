<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                
            </div>
        </div>        
    </div>
</template>

<script>
    import appHeader from './components/Header.vue'
    export default {
        components: {
            appHeader
        },
        created() {
            this.$store.dispatch('initStocks')
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
<style scoped>
    
    .fade-enter-active.slide-leave-active {
        transition: opacity 0.5s ease-in-out;
    }  
    .fade-enter {
        /* transform: translateY(-100vw); */
        opacity: 0;
    }
    .fade-leave-to {
        /* transform: translateY(100vw); */
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 400ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 400ms ease-out forwards;
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity:1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
    @keyframes slide-in {
        from {
             transform: translateY(1);
            opacity:0;
        }
        to {
            transform: translateY(0);
            opacity:1;
        }
    }
</style>
