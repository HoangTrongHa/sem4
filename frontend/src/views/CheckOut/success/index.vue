d<template>
    <div>
        <ProductItemSuccess 
                    :getDataOrder="getDataOrder"
                />
    </div>
</template>

<script>
import ProductItemSuccess from '@/components/ProductItemSuccess.vue'

export default {
    components: {
        ProductItemSuccess
    },
    data () {
        return {
            dataOrder:[]
        }
    },
    computed: {
        getCode() {
            return this.$route.params.code_order;
        },
        getDataOrder() {
            return this.$store.state.order.filter(items => items.code_order === this.$route.params.code_order)
        }
    }
}
</script>


