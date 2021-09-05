<template>
    <div>
        <!-- Button trigger modal -->
        <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
        >
            Thêm danh mục
        </button>

        <!-- Modal -->
        <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Create category
                        </h5>
                        <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" v-model="name"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                                type="button"
                                @click="createCategory"
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                        >
                            save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {api} from "../../../apis";

    export default {
        name: "form.vue",
        data() {
            return {
                name: ""
            };
        },
        methods: {
            async createCategory() {
                try {
                    await api.addCategory({name: this.name});
                    this.name = "";
                } catch (e) {
                    console.log(e.response);
                } finally {
                    this.$emit("refreshData");
                }
            }
        }
    };
</script>

<style scoped></style>
