<template>
    <div class="bpus-index">
        <div class="header">
            <div class="left">{{ setting.title }}</div>
            <div class="right">

                <el-dropdown trigger="click" placement="bottom-start">
                    <el-button type="danger" round icon="fa fa-user"> {{ $session.username }} {{ $session.cx }} <i class="el-icon-arrow-down el-icon--right"></i> </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="$goto('/admin/mod')" icon="fa fa-edit">修改密码</el-dropdown-item>
                        <el-dropdown-item @click.native="logout" icon="fa fa-power-off" divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="slider">
            <ul class="sidebar-menu list-unstyled" style="display: block">
                <li class="sidebar-list-item" v-for="(r,k) in menus" :key="k">
                    <a href="javascript:;" class="sidebar-link text-muted" :class="{active: active == k}" @click.stop="active = active == k ? -1 : k">
                        <i class="mr5" :class="r.icon ? r.icon : 'el-icon-user'"></i>
                        <span>{{ r.label }}</span>
                        <span class="arrow el-icon-caret-right"></span>
                    </a>
                    <collapse-transition>
                        <ul class="sidebar-menu list-unstyled sidebar-submenu" v-show="active == k" style="">
                            <li v-for="(v,j) in r.children" :key="j">
                                <router-link class="sidebar-link text-muted pl-lg-5" :to="v.to" active-class="active1"> {{ v.label }} </router-link>
                            </li>
                        </ul>
                    </collapse-transition>
                </li>
            </ul>
        </div>
        <div class="content-main">
            <router-view></router-view>
        </div>
    </div>
</template>
<style type="text/scss" lang="scss">
    $sliderWidth: 225px;
    $heightHeight: 50px;
    .bpus-index {
        position: relative;
        height: 100%;
        width: 100%;
        .header {
            height: $heightHeight;
            line-height: $heightHeight;
            position: absolute;
            left: 0;
            right: 0;
            box-shadow: 0 0 5px #a3a3a3;
            background: #ffffff;
            .left {
                float: left;
                padding-left: 25px;
                font-weight: 700;
                font-size: 16px;
                color: #4680ff;
            }
            .right {
                float: right;
                padding-right: 20px;
            }
        }
        .pl-lg-5 {
            padding-left: 3rem !important;
        }
        .slider {
            position: fixed;
            left: 0px;
            top: $heightHeight + 5px;
            bottom: 0px;
            width: $sliderWidth;
            background: #ffffff;
            box-shadow: 2px 0 5px #a3a3a3;
            padding: 15px 0;
            overflow: hidden;
            overflow-y: auto;
            .list-unstyled {
                padding-left: 0;
                list-style: none;
            }
            .sidebar-submenu {
                padding: 10px 0;
            }
            .sidebar-menu {
                .sidebar-link {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    align-items: center;
                    transition: background 0.3s;
                    padding: 0.5rem 1.5rem;
                    .arrow {
                        position: absolute;
                        right: 15px;
                    }
                }
                .sidebar-link:hover {
                    text-decoration: none;
                    background: #f5f5f5;
                }
                .sidebar-link.active,
                .sidebar-link:focus {
                    background: #4680ff;
                    color: #fff !important;
                    text-decoration: none;
                }
                .sidebar-link.active1 {
                    background-color: rgba(71, 129, 255, 0.81);
                    color: #fff !important;
                    text-decoration: none;
                }
                .text-muted {
                    color: #6c757d !important;
                }
            }
        }
        .content-main {
            position: absolute;
            left: $sliderWidth;
            top: $heightHeight + 5px;
            right: 0px;
            bottom: 0px;
            padding: 15px;
            overflow: hidden;
            overflow-y: auto;
            .iframe {
                width: 100%;
                height: 98%;
                border: none;
            }
        }
    }
</style>
<script>
    import setting from "@/setting";
    import api from "@/api";
    import menu from "@/views/admin/sidebar";
    import CollapseTransition from "./collapseTransition";
    export default {
        name: "bpus-index",
        components: { CollapseTransition },
        data() {
            return {
                setting,
                active: 0,
            };
        },
        watch: {},
        computed: {
            menus() {
                var cx = this.$session.cx;
                return menu[cx];
            },
        },
        methods: {
            logout() {
                this.$confirm("确定退出登录？", "确认信息").then(() => {
                    // 退出登录
                    this.$store
                        .dispatch("user/logout")
                        .then((res) => {
                            if (res.code == api.code.OK) {
                                this.$message.success("退出登录成功");
                                this.$router.replace("/index");
                            } else {
                                this.$message.error(res.msg);
                            }
                        })
                        .catch((err) => {
                            this.$message.error(err.message);
                        });
                });
            },
        },
        created() {
            var menus = this.menus;
            var active = -1;
            var path = this.$route.path;

            for (var i in menus) {
                var ci = menus[i];
                for (var j in ci.children) {
                    var v = ci.children[j];
                    if (v.to == path) {
                        active = i;
                        break;
                    }
                }
                if (active != -1) break;
            }
            if (active != -1) {
                this.active = active;
            }
        },
        mounted() {},
        destroyed() {},
    };
</script>
