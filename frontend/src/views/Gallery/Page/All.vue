<template>
    <div>
        <BaseGallary :propData="getGalary"/>
    </div>
</template>

<script>
    import BaseGallary from "@/components/base/BaseGallary.vue"

    export default {
        components: {
            BaseGallary
        },
        computed: {
            getGalary() {
                return this.$store.state.gallery
            }
        }
    }
</script>