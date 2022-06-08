<template>
    <div class="bpus-login">
        <el-row :gutter="50">
            <el-col :md="14">
                <img src="./image/illustration.png" />
            </el-col>
            <el-col :md="10">
                <h2 class="bpus-title">{{ setting.title }}</h2>
                <div class="bpus-desc">欢迎使用{{ setting.title }}后台管理系统</div>
                <form method="post" action="javascript:;" @submit="login">
                    <div class="bplus-group">
                        <el-input type="" v-model="form.username" placeholder="请输入账号" prefix-icon="el-icon-user"></el-input>
                    </div>
                    <div class="bplus-group">
                        <el-input type="password" v-model="form.pwd" placeholder="请输入密码" prefix-icon="el-icon-user"></el-input>
                    </div>
                    <div class="bplus-group pagerandom">
                        <el-input v-model="form.pagerandom" placeholder="请输入验证码" prefix-icon="el-icon-code"></el-input>
                        <e-img
                            alt="刷新验证码"
                            title="点击刷新验证码"
                            @click="loadCaptch"
                            :src="captchUrl"
                            class="randcode"
                            style="cursor: pointer; padding-top: 10px; width: 60px; height: 30px; float: right"
                        ></e-img>
                    </div>
                    <div class="bplus-group">
                        <el-select name="cx" v-model="form.cx" style="width: 100%">
                            <el-option :value="r" :key="r" :label="r" v-for="r in rules"></el-option>
                        </el-select>
                    </div>
                    <div class="bplus-group">
                        <el-button type="success" native-type="submit">登录</el-button>
                    </div>
                </form>
            </el-col>
        </el-row>
    </div>
</template>
<style type="text/scss" lang="scss">
    .bpus-login {
        width: 1140px;
        margin: 0 auto;
        padding-top: 100px;
        height: 100%;
        .bpus-title {
            color: #4680ff !important;
        }
        .bpus-desc {
            margin-bottom: 30px;
        }
        .bplus-group {
            margin-bottom: 20px;
            .el-input input {
                height: 48px;
                line-height: 48px;
                border-radius: 50px;
            }
        }
        .pagerandom {
            position: relative;
            .el-input input {
                padding-right: 120px;
            }
            .randcode {
                position: absolute;
                right: 20px;
                top: 5px;
            }
        }
    }
</style>
<script>
    import setting from "@/setting";
    import api from "@/api";

    export default {
        name: "bpus-login",
        data() {
            return {
                setting,
                captchUrl: "",
                loading: false,
                form: {
                    username: "",
                    pwd: "",
                    cx: "管理员",

                    /* 验证码段 */
                    pagerandom: "",
                    a: "a",
                    /* 验证码段 */
                },
                rules: ["管理员"],
            };
        },
        watch: {},
        computed: {},
        methods: {
            login() {
                this.loading = true;
                this.$store
                    .dispatch("user/login", this.form)
                    .then((res) => {
                        this.loading = false;
                        if (res.code == api.code.OK) {
                            this.$message.success("登录成功");
                            var redirect = this.$route.query.redirect;
                            if (redirect) {
                                this.$router.replace(redirect);
                            } else {
                                this.$router.replace("/admin/sy");
                            }
                        } else {
                            this.$message.error(res.msg);
                        }
                        if (res.code == 20) {
                            this.loadCaptch();
                        }
                    })
                    .catch((err) => {
                        this.loading = false;
                        this.$message.error(err.message);
                    });
            },
            loadCaptch() {
                api.captch().then((res) => {
                    console.log(res);
                    this.form.captchToken = res.token;
                    this.captchUrl = res.url;
                });
            },
        },
        created() {
            this.loadCaptch();
        },
        mounted() {},
        destroyed() {},
    };
</script>
