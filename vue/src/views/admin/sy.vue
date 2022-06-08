<template>
    <div class="v-admin-sy">
        <el-row :gutter="50">
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ adminsList.length }}</div>
                    <div class="text">管理员</div>
                </div>
            </el-col>
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ lunbotuList.length }}</div>
                    <div class="text">轮播图</div>
                </div>
            </el-col>
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ wxuserList.length }}</div>
                    <div class="text">微信用户</div>
                </div>
            </el-col>
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ yonghuList.length }}</div>
                    <div class="text">用户</div>
                </div>
            </el-col>
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ tushufenleiList.length }}</div>
                    <div class="text">图书分类</div>
                </div>
            </el-col>
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ tushuxinxiList.length }}</div>
                    <div class="text">图书信息</div>
                </div>
            </el-col>
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ gouwucheList.length }}</div>
                    <div class="text">购物车</div>
                </div>
            </el-col>
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ dingdanList.length }}</div>
                    <div class="text">订单</div>
                </div>
            </el-col>
            <el-col :span="6" style="margin-bottom: 50px">
                <div class="msg-box">
                    <div class="number">{{ dingdandingdanxinxiList.length }}</div>
                    <div class="text">订单订单信息</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style type="text/scss" lang="scss">
    .v-admin-sy {
        padding: 0 20px;
        .msg-box {
            padding: 10px;
            background: #ffffff;
            text-align: center;
            .number {
                padding: 10px 0;
                font-size: 36px;
                font-weight: bold;
                color: #900;
            }

            .text {
                font-size: 16px;
                padding-bottom: 10px;
            }
        }
    }
</style>
<script>
    import store from "@/store";
    const setting = require("@/setting");
    export default {
        name: "v-admin-sy",
        data() {
            return {
                setting,
            };
        },
        watch: {},
        computed: {
            adminsList() {
                return store.state.admins.lists;
            },
            lunbotuList() {
                return store.state.lunbotu.lists;
            },
            wxuserList() {
                return store.state.wxuser.lists;
            },
            yonghuList() {
                return store.state.yonghu.lists;
            },
            tushufenleiList() {
                return store.state.tushufenlei.lists;
            },
            tushuxinxiList() {
                return store.state.tushuxinxi.lists;
            },
            gouwucheList() {
                return store.state.gouwuche.lists;
            },
            dingdanList() {
                return store.state.dingdan.lists;
            },
            dingdandingdanxinxiList() {
                return store.state.dingdandingdanxinxi.lists;
            },
        },
        methods: {},
        created() {
            store.dispatch("admins/selectAll");

            store.dispatch("lunbotu/selectAll");

            store.dispatch("wxuser/selectAll");

            store.dispatch("yonghu/selectAll");

            store.dispatch("tushufenlei/selectAll");

            store.dispatch("tushuxinxi/selectAll");

            store.dispatch("gouwuche/selectAll");

            store.dispatch("dingdan/selectAll");

            store.dispatch("dingdandingdanxinxi/selectAll");
        },
        mounted() {},
        destroyed() {},
    };
</script>
