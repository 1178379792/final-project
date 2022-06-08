<template>
    <div class="yonghu-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix updt">
                <el-page-header @back="$router.go(-1)" content="编辑用户"> </el-page-header>
            </div>
            <div class="form-database-form">
                <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                    <el-form-item
                        label="账号"
                        prop="zhanghao"
                        required
                        :rules="[{required:true, message:'请填写账号'}, {validator:rule.checkRemote, message:'内容重复了', checktype:'update', module:'yonghu', col:'zhanghao', id:form.id, trigger:'blur'}]"
                    >
                        <el-input type="text" placeholder="输入账号" style="width: 250px" v-model="form.zhanghao" />
                    </el-form-item>

                    <el-form-item label="头像" prop="touxiang"> <e-upload-image v-model="form.touxiang"></e-upload-image> </el-form-item>

                    <el-form-item label="姓名" prop="xingming"> <el-input type="text" placeholder="输入姓名" style="width: 250px" v-model="form.xingming" /> </el-form-item>

                    <el-form-item label="性别" prop="xingbie">
                        <el-select v-model="form.xingbie"
                            ><el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="手机号码" prop="shoujihaoma" :rules="[{validator:rule.checkPhone, message:'请输入正确手机号码'}]">
                        <el-input type="text" placeholder="输入手机号码" style="width: 250px" v-model="form.shoujihaoma" />
                    </el-form-item>

                    <el-form-item label="生日" prop="shengri">
                        <el-date-picker v-model="form.shengri" type="date" :editable="false" value-format="yyyy-MM-dd" placeholder="选择日期"> </el-date-picker>
                    </el-form-item>

                    <el-form-item label="所在城市" prop="suozaichengshi" required :rules="[{required:true, message:'请填写所在城市'}]">
                        <el-input type="text" placeholder="输入所在城市" style="width: 250px" v-model="form.suozaichengshi" />
                    </el-form-item>

                    <el-form-item label="个性签名" prop="gexingqianming">
                        <el-input type="text" placeholder="输入个性签名" style="width: 450px" v-model="form.gexingqianming" />
                    </el-form-item>

                    <el-form-item label="收货地址" prop="shouhuodizhi">
                        <el-input type="text" placeholder="输入收货地址" style="width: 450px" v-model="form.shouhuodizhi" />
                    </el-form-item>

                    <el-form-item v-if="btnText">
                        <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .yonghu-add {
    }
</style>
<script>
    import api from "@/api";
    import rule from "@/utils/rule";
    import { extend } from "@/utils/extend";
    import formUtil from "./form";

    export default {
        name: "yonghu-add",
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
                            .dispatch("yonghu/update", form)
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
                    .dispatch("yonghu/findById", this.id)
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
