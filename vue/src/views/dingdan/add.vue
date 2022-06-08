<template>
    <div class="dingdan-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title"> 添加订单</span>
            </div>
            <div class="form-database-form">
                <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                    <el-form-item label="订单编号" prop="dingdanbianhao" :rules="[{required:true, message:'请填写订单编号'}]">
                        <el-input type="text" placeholder="输入订单编号" style="width: 250px" v-model="form.dingdanbianhao" />
                    </el-form-item>

                    <el-form-item label="订单信息" prop="dingdanxinxi">
                        <e-dataset-table table="gouwuche" :where="{ goumairen : $session.username  }" order="id desc" var="dataSets">
                            <template v-slot="{dataSets}">
                                <div id="dataListdingdanxinxi" style="text-align: left">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>名称</th>
                                                <th>图片</th>
                                                <th>分类</th>
                                                <th>库存</th>
                                                <th>价格</th>
                                                <th>购买数量</th>
                                                <th>小计</th>
                                                <th>购买人</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="dataMap in dataSets">
                                                <td>{{ dataMap.mingcheng }}</td>
                                                <td><e-img :src="dataMap.tupian" style="max-width: 120px" /></td>
                                                <td><e-select-view module="tushufenlei" :value="dataMap.fenlei" select="id" show="fenlei"></e-select-view></td>
                                                <td>{{ dataMap.kucun }}</td>
                                                <td>{{ dataMap.jiage }}</td>
                                                <td>{{ dataMap.goumaishuliang }}</td>
                                                <td>{{ dataMap.xiaoji }}</td>
                                                <td>{{ dataMap.goumairen }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </template>
                        </e-dataset-table>
                    </el-form-item>

                    <el-form-item
                        label="订单金额"
                        prop="dingdanjine"
                        required
                        :rules="[{required:true, message:'请填写订单金额'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]"
                    >
                        <el-input type="number" placeholder="输入订单金额" style="width: 250px" v-model.number="form.dingdanjine" />
                    </el-form-item>

                    <el-form-item label="姓名" prop="xingming"> <el-input type="text" placeholder="输入姓名" style="width: 250px" v-model="form.xingming" /> </el-form-item>

                    <el-form-item label="联系电话" prop="lianxidianhua" :rules="[{validator:rule.checkPhone, message:'请输入正确手机号码'}]">
                        <el-input type="text" placeholder="输入联系电话" style="width: 250px" v-model="form.lianxidianhua" />
                    </el-form-item>

                    <el-form-item label="收货地址" prop="shouhuodizhi">
                        <el-input type="text" placeholder="输入收货地址" style="width: 450px" v-model="form.shouhuodizhi" />
                    </el-form-item>

                    <el-form-item label="下单人" prop="xiadanren"> <el-input v-model="form.xiadanren" readonly style="width: 250px"></el-input> </el-form-item>

                    <el-form-item v-if="btnText">
                        <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .dingdan-add {
    }
</style>
<script>
    import api from "@/api";
    import rule from "@/utils/rule";
    import { extend } from "@/utils/extend";
    import formUtil from "./form";

    export default {
        name: "dingdan-add",
        data() {
            return {
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
                            .dispatch("dingdan/insert", form)
                            .then((res) => {
                                this.loading = false;
                                if (res.code == 0) {
                                    this.$message.success("添加成功");
                                    this.loadInfo();
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
            },
        },
        created() {
            this.loadInfo();
        },
        mounted() {},
        destroyed() {},
    };
</script>
