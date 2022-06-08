<template>
    <div class="gouwuche-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title"> 添加购物车</span>
            </div>
            <div class="form-database-form">
                <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                    <el-form-item v-if="isRead" label="编号" prop="bianhao"> {{ form.bianhao }} </el-form-item>

                    <el-form-item v-if="isRead" label="名称" prop="mingcheng"> {{ form.mingcheng }} </el-form-item>

                    <el-form-item v-if="isRead" label="图片" prop="tupian"> <e-img :src="form.tupian" style="max-width: 120px" /> </el-form-item>

                    <el-form-item v-if="isRead" label="分类" prop="fenlei">
                        <e-select-view module="tushufenlei" :value="form.fenlei" select="id" show="fenlei"></e-select-view>
                    </el-form-item>

                    <el-form-item v-if="isRead" label="库存" prop="kucun" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]"> {{ form.kucun }} </el-form-item>

                    <el-form-item v-if="isRead" label="价格" prop="jiage" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]"> {{ form.jiage }} </el-form-item>

                    <el-form-item
                        label="购买数量"
                        prop="goumaishuliang"
                        required
                        :rules="[{required:true, message:'请填写购买数量'}, {validator:rule.checkNumber, message:'输入一个有效数字'}, {validator:rule.checkMin, message:'最小为1', value:1}, {validator:rule.checkMax, message:'库存不足', value:readMap.kucun}]"
                    >
                        <el-input type="number" placeholder="输入购买数量" style="width: 250px" v-model.number="form.goumaishuliang" />
                    </el-form-item>

                    <el-form-item label="购买人" prop="goumairen"> <el-input v-model="form.goumairen" readonly style="width: 250px"></el-input> </el-form-item>

                    <el-form-item v-if="btnText">
                        <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .gouwuche-add {
    }
</style>
<script>
    import api from "@/api";
    import rule from "@/utils/rule";
    import { extend } from "@/utils/extend";
    import formUtil from "./form";

    export default {
        name: "gouwuche-add",
        data() {
            return {
                readMap: {},
                rule,
                loading: false,
                form: {},
            };
        },
        watch: {},
        props: {
            isRead: {
                type: Boolean,
                default: true,
            },
            btnText: {
                type: String,
                default: "提交",
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
                            .dispatch("gouwuche/insert", form)
                            .then((res) => {
                                this.loading = false;
                                if (res.code == 0) {
                                    this.$message.success("添加成功");
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

                // 获取模块得数据
                this.loading = true;
                formUtil
                    .loadInfo(this.$route.query.id)
                    .then((res) => {
                        this.loading = false;
                        this.form = res.form;
                        this.readMap = res.readMap;
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
