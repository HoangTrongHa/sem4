<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Danh mục</h1>
        <Form @refreshData="refreshData"/>
        <ol class="breadcrumb mb-4"></ol>
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                Danh sách danh mục
            </div>
            <div class="card-body">
                <div class="loading">
                    <div v-if="loading" class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <List :categories="categories" :loading="loading"/>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "@/components/category/list";
    import Form from "@/components/category/form";
    import {api} from "../../apis";

    export default {
        name: "Category",
        components: {
            List,
            Form
        },
        data() {
            return {
                categories: [],
                loading: false,
                dialog: false,
            };
        },
        async created() {
            await this.loadPage();
        },
        methods: {
            refreshData() {
                this.loadPage();
            },
            async loadPage() {
                try {
                    this.loading = true;
                    const result = await api.categoryList();
                    this.categories = result.data;
                } catch (e) {
                    console.log(e.response);
                } finally {
                    this.loading = false;
                }
            }
        }
    };
</script>

<style scoped>
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
