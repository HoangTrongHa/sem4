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
                return this.$store.state.gallery.filter(item => item.cate_id === "1")
            }
        }
    }
</script>