<template>
    <div>
        <ProductItemSuccess/>
    </div>
</template>

<script>
    import ProductItemSuccess from '@/components/ProductItemSuccess.vue'

    export default {
        components: {
            ProductItemSuccess
        },
        data() {
            return {
                dataOrder: []
            }
        },
    }
</script>


