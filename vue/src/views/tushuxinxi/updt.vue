<template>
    <div class="tushuxinxi-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix updt">
                <el-page-header @back="$router.go(-1)" content="编辑图书信息"> </el-page-header>
            </div>
            <div class="form-database-form">
                <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                    <el-form-item label="编号" prop="bianhao" :rules="[{required:true, message:'请填写编号'}]">
                        <el-input type="text" placeholder="输入编号" style="width: 250px" v-model="form.bianhao" />
                    </el-form-item>

                    <el-form-item label="名称" prop="mingcheng" required :rules="[{required:true, message:'请填写名称'}]">
                        <el-input type="text" placeholder="输入名称" style="width: 450px" v-model="form.mingcheng" />
                    </el-form-item>

                    <el-form-item label="图片" prop="tupian"> <e-upload-image v-model="form.tupian"></e-upload-image> </el-form-item>

                    <el-form-item label="分类" prop="fenlei">
                        <el-select v-model="form.fenlei"><e-select-option type="option" module="tushufenlei" value="id" label="fenlei"></e-select-option></el-select>
                    </el-form-item>

                    <el-form-item label="作者" prop="zuozhe"> <el-input type="text" placeholder="输入作者" style="width: 250px" v-model="form.zuozhe" /> </el-form-item>

                    <el-form-item label="出版社" prop="chubanshe"> <el-input type="text" placeholder="输入出版社" style="width: 250px" v-model="form.chubanshe" /> </el-form-item>

                    <el-form-item label="库存" prop="kucun" required :rules="[{required:true, message:'请填写库存'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                        <el-input type="number" placeholder="输入库存" style="width: 250px" v-model.number="form.kucun" />
                    </el-form-item>

                    <el-form-item label="价格" prop="jiage" required :rules="[{required:true, message:'请填写价格'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                        <el-input type="number" placeholder="输入价格" style="width: 250px" v-model.number="form.jiage" />
                    </el-form-item>

                    <el-form-item label="描述" prop="miaoshu"> <e-editor v-model="form.miaoshu"></e-editor> </el-form-item>

                    <el-form-item v-if="btnText">
                        <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .tushuxinxi-add {
    }
</style>
<script>
    import api from "@/api";
    import rule from "@/utils/rule";
    import { extend } from "@/utils/extend";
    import formUtil from "./form";

    export default {
        name: "tushuxinxi-add",
        data() {
            return {
                rule,
                loading: false,
                form: {},
            };
        },
        watch: {
            id: {
                handler() {
                    this.loadInfo();
                },
            },
        },
        props: {
            isRead: {
                type: Boolean,
                default: true,
            },
            btnText: {
                type: String,
                default: "提交",
            },
            id: {
                type: [String, Number],
                required: true,
            },
        },

        computed: {},
        methods: {
            submit() {
                this.$refs.formModel
                    .validate()
                    .then((res) => {
                        if (this.loading) return;
                        this.loading = true;
                        var form = this.form;

                        this.$store
                            .dispatch("tushuxinxi/update", form)
                            .then((res) => {
                                this.loading = false;
                                if (res.code == 0) {
                                    this.$message.success("更新成功");
                                    this.$router.go(-1);
                                } else {
                                    this.$message.error(res.msg);
                                }
                            })
                            .catch((err) => {
                                this.loading = false;
                                this.$message.error(err.message);
                            });
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            },
            loadInfo() {
                if (this.loading) return;
                var form = this.form;
                this.form = formUtil.createForm();

                // 更新数据,获取数据
                this.loading = true;
                this.$store
                    .dispatch("tushuxinxi/findById", this.id)
                    .then((res) => {
                        this.loading = false;
                        this.form = res;
                    })
                    .catch((err) => {
                        this.loading = false;
                        this.$message.error(err.message);
                        this.$router.go(-1);
                    });
            },
        },
        created() {
            this.loadInfo();
        },
        mounted() {},
        destroyed() {},
    };
</script>
