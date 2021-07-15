<template>
    <div>
        <header class="site-header sticky-header layout-2">
            <div class="header-container">
                <div class="top-header">
                    <div class="container">
                        <div class="wrap-content-header">
                            <div class="header-logo">
                                <a href="/" class="logo">
                                    <img
                                        src="/assets/images/LOGO.png"
                                        alt="IMG"
                                    />
                                </a>
                                <a href="/" class="mobile-logo">
                                    <img
                                        src="/assets/images/LOGO.png"
                                        alt="IMG"
                                    />
                                </a>
                                <a href="/" class="sticky-logo">
                                    <img
                                        src="/assets/images/LOGO.png"
                                        alt="IMG"
                                    />
                                </a>
                            </div>
                            <div class="right-logo">
                                <div class="widget_thim_layout_builder">
                                    <div class="wpb_wrapper">
                                        <div
                                            class="
                                                bp-element
                                                bp-element-st-search-videos
                                                vblog-layout-header-2
                                            "
                                        >
                                            <div class="wrap-element">
                                                <form class="search-form">
                                                    <label
                                                        class="wrap-select2"
                                                        data-style="vblog-search"
                                                    >
                                                        <select ref="searchSelect">
                                                            <option
                                                                value="video"
                                                            >
                                                                视频
                                                            </option>
                                                            <option
                                                                value="voice"
                                                            >
                                                                音频
                                                            </option>
                                                            <option
                                                                value="blog"
                                                            >
                                                                美文
                                                            </option>
                                                        </select>
                                                    </label>
                                                    <div
                                                        type="search"
                                                        class="search-field"
                                                        style="cursor:pointer"
                                                        name="search"
                                                        
                                                        @click="goCate"
                                                    />
                                                    <button class="btn-search">
                                                        <i
                                                            class="
                                                                ion
                                                                ion-android-search
                                                            "
                                                        ></i>
                                                    </button>
                                                </form>
                                                <ul class="list-search-videos">
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- <div
                                            class="
                                                bp-element
                                                bp-element-social-links
                                                vblog-layout-header-2
                                            "
                                        >
                                            <div class="wrap-element">
                                                <a
                                                    href="https://www.facebook.com/dejiaoyunshuyuan"
                                                    class="social-item"
                                                >
                                                    <i
                                                        class="fa fa-facebook"
                                                    ></i>
                                                </a>
                                                <a
                                                    href="https://twitter.com/abc12349540264"
                                                    class="social-item"
                                                >
                                                    <i
                                                        class="fa fa-twitter"
                                                    ></i>
                                                </a>
                                                <a
                                                    href="https://www.youtube.com/channel/UC32kdF6W40BOZBiBys2ycgA"
                                                    class="social-item"
                                                >
                                                    <i
                                                        class="fa fa-youtube"
                                                    ></i>
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/the_humaneway/"
                                                    class="social-item"
                                                >
                                                    <i
                                                        class="fa fa-linkedin"
                                                    ></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                bp-element bp-element-button
                                                shape-round
                                            "
                                        >
                                            <a
                                                href="https://discord.com/channels/721130963463176223/817787681739636753"
                                                class="btn btn-small"
                                            >
                                                进入云书院群
                                            </a>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-header element-to-stick">
                    <div class="container">
                        <div class="wrap-content-header">
                            <div class="menu-mobile-effect navbar-toggle">
                                <div class="text-menu">Menu</div>
                                <div class="icon-wrap">
                                    <i class="ion-navicon"></i>
                                </div>
                            </div>
                            <nav class="main-navigation">
                                <ul class="menu-lists">
                                    <li
                                        :class="[
                                            'menu-item-has-children',
                                            activepage == 1 ? 'active' : '',
                                        ]"
                                    >
                                        <router-link to="/index">
                                            首页
                                        </router-link>
                                    </li>
                                    <li
                                        :class="[
                                            'menu-item-has-children',
                                            activepage == 2 ? 'active' : '',
                                        ]"
                                    >
                                        <router-link to="/about">
                                            德教云书院
                                        </router-link>
                                        <ul class="sub-menu">
                                            <li>
                                                <router-link
                                                    to="/about#whatisdejiao"
                                                >
                                                    什么是德教云书院
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link
                                                    to="/about#LearningContent"
                                                >
                                                    德教云书院的学习内容
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link
                                                    to="/about#howtoget"
                                                >
                                                    如何进入德教云书院
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        :class="[
                                            'menu-item-has-children',
                                            activepage == 3 ? 'active' : '',
                                        ]"
                                    >
                                        <router-link to="/enlightenment/video">
                                            德教启蒙阶段
                                        </router-link>
                                        <ul class="sub-menu">
                                            <li>
                                                <router-link
                                                    to="/enlightenment/video?type=53video"
                                                >
                                                    53集启蒙视频
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link
                                                    to="/enlightenment/voice"
                                                    >德教音频系列</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    to="/enlightenment/article"
                                                    >德教文章系列</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link
                                                    to="/enlightenment/image"
                                                >
                                                    德教美图系列
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        :class="[
                                            'menu-item-has-children',
                                            activepage == 4 ? 'active' : '',
                                        ]"
                                    >
                                        <router-link
                                            to="/enlightenment/video?type=core"
                                        >
                                            德教核心课程
                                        </router-link>
                                    </li>
                                    <li
                                        :class="[
                                            'menu-item-has-children',
                                            activepage == 5 ? 'active' : '',
                                        ]"
                                    >
                                        <router-link
                                            to="/enlightenment/video?type=other"
                                        >
                                            其他系列节目
                                        </router-link>
                                        <ul class="sub-menu">
                                            <!-- <li>
                                        <a href="/other/mrdechat">
                                            德先生乱聊系列
                                        </a>
                                    </li> -->
                                            <li>
                                                <router-link
                                                    to="/enlightenment/video?type=mrdeqa"
                                                >
                                                    德先生答疑解惑
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link
                                                    to="/enlightenment/video?type=article"
                                                >
                                                    德教读书会
                                                </router-link>
                                            </li>
                                            <!-- <li>
                                        <a href="/enlightenment/image">
                                            德教视角系列
                                        </a>
                                    </li> -->
                                        </ul>
                                    </li>
                                    <li
                                        :class="[
                                            activepage == 6 ? 'active' : '',
                                        ]"
                                    >
                                        <router-link to="/contact"
                                            >联系我们
                                        </router-link>
                                        <!-- <a :href="`/contact${activepage == 6?'active':''}`">
                                    联系我们
                                </a> -->
                                    </li>
                                </ul>
                            </nav>
                            <div class="menu-right">
                                <div
                                    class="
                                        bp-element-login-popup
                                        layout-1
                                        show-icon
                                    "
                                >
                                    <div class="login-links">
                                        <template v-if="isLogin">
                                            Welcome {{ userInfo.userName }}!
                                        </template>
                                        <a
                                            class=""
                                            @click="logout"
                                            v-if="isLogin"
                                        >
                                            logout
                                        </a>
                                        <a
                                            v-else
                                            class="login"
                                            data-active=".box-login"
                                            data-effect="mfp-zoom-in"
                                            href="#bp-popup-login"
                                        >
                                            Login
                                        </a>
                                    </div>
                                    <div
                                        id="bp-popup-login"
                                        class="
                                            white-popup
                                            mfp-with-anim mfp-hide
                                        "
                                    >
                                        <div class="loginwrapper">
                                            <div
                                                :class="
                                                    isRegistryPop
                                                        ? ''
                                                        : 'active'
                                                "
                                                class="login-popup box-register"
                                            >
                                                <div
                                                    class="media-content"
                                                    style="
                                                        background-image: url(/assets/images/bg-01.jpg);
                                                    "
                                                ></div>
                                                <div class="inner-login">
                                                    <h3 class="title">
                                                        <span
                                                            class="
                                                                current-title
                                                            "
                                                            >Register</span
                                                        >
                                                        <span>
                                                            <a
                                                                class="
                                                                    display-box
                                                                "
                                                                data-display=".box-login"
                                                                >Login</a
                                                            >
                                                        </span>
                                                    </h3>
                                                    <div class="form-row">
                                                        <div class="wrap-form">
                                                            <div
                                                                class="
                                                                    form-desc
                                                                "
                                                            >
                                                                We will need...
                                                            </div>
                                                            <form
                                                                id="registerform"
                                                            >
                                                                <p
                                                                    class="
                                                                        login-username
                                                                    "
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        id="register-username"
                                                                        placeholder="Username"
                                                                        class="
                                                                            input
                                                                        "
                                                                        v-model="
                                                                            registerData.name
                                                                        "
                                                                    />
                                                                </p>
                                                                <p
                                                                    class="
                                                                        login-password
                                                                    "
                                                                >
                                                                    <input
                                                                        type="password"
                                                                        id="register-password"
                                                                        placeholder="Password"
                                                                        class="
                                                                            input
                                                                        "
                                                                        v-model="
                                                                            registerData.psd
                                                                        "
                                                                    />
                                                                </p>
                                                                <p
                                                                    class="
                                                                        login-password
                                                                    "
                                                                >
                                                                    <input
                                                                        type="password"
                                                                        id="register-password-re"
                                                                        placeholder="Password-re"
                                                                        class="
                                                                            input
                                                                        "
                                                                        v-model="
                                                                            registerData.repsd
                                                                        "
                                                                    />
                                                                </p>

                                                                <p
                                                                    class="
                                                                        button-submit
                                                                    "
                                                                >
                                                                    <input
                                                                        type="submit"
                                                                        @click="
                                                                            register
                                                                        "
                                                                        class="
                                                                            button
                                                                            button-primary
                                                                            button-large
                                                                        "
                                                                        value="Register"
                                                                    />
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                :class="
                                                    !isRegistryPop
                                                        ? ''
                                                        : 'active'
                                                "
                                                class="login-popup box-login"
                                            >
                                                <div
                                                    class="media-content"
                                                    style="
                                                        background-image: url(/assets/images/bg-01.jpg);
                                                    "
                                                ></div>
                                                <div class="inner-login">
                                                    <h3 class="title">
                                                        <span>
                                                            <a
                                                                class="
                                                                    display-box
                                                                "
                                                                data-display=".box-register"
                                                                >Registration</a
                                                            >
                                                        </span>
                                                        <span
                                                            class="
                                                                current-title
                                                            "
                                                            >Login</span
                                                        >
                                                    </h3>
                                                    <div class="form-row">
                                                        <div class="wrap-form">
                                                            <div
                                                                class="
                                                                    form-desc
                                                                "
                                                            >
                                                                We will need...
                                                            </div>
                                                            <form
                                                                id="loginform"
                                                            >
                                                                <p
                                                                    class="
                                                                        login-username
                                                                    "
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        id="login-username"
                                                                        placeholder="Username"
                                                                        class="
                                                                            input
                                                                        "
                                                                        v-model="
                                                                            loginData.name
                                                                        "
                                                                    />
                                                                </p>
                                                                <p
                                                                    class="
                                                                        login-email
                                                                    "
                                                                >
                                                                    <input
                                                                        type="password"
                                                                        id="login-password"
                                                                        placeholder="password"
                                                                        class="
                                                                            input
                                                                        "
                                                                        v-model="
                                                                            loginData.psd
                                                                        "
                                                                    />
                                                                </p>
                                                                <!-- <p
                                                                    class="login-remember"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        name="rememberme"
                                                                        id="rememberme"
                                                                        value="forever"
                                                                    />
                                                                    Remember Me
                                                                </p> -->
                                                                <p
                                                                    class="
                                                                        button-submit
                                                                    "
                                                                >
                                                                    <input
                                                                        type="submit"
                                                                        class="
                                                                            button
                                                                            button-primary
                                                                            button-large
                                                                        "
                                                                        value="登录"
                                                                        @click="
                                                                            login
                                                                        "
                                                                    />
                                                                </p>
                                                                <p
                                                                    class="
                                                                        link-bottom
                                                                    "
                                                                >
                                                                    <a
                                                                        href="#losspw"
                                                                        class="
                                                                            display-box
                                                                        "
                                                                        data-display=".box-lostpass"
                                                                    ></a>
                                                                </p>
                                                            </form>
                                                            <!-- <p class="link-bottom"><a href="#losspw" class="display-box" data-display=".box-lostpass">Lost your password? </a>
                                                    </p> -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="login-popup box-lostpass"
                                            >
                                                <div
                                                    class="
                                                        login-popup
                                                        box-lostpass
                                                    "
                                                >
                                                    <div
                                                        class="media-content"
                                                        style="
                                                            background-image: url(/assets/images/bg-01.jpg);
                                                        "
                                                    ></div>
                                                    <div class="inner-login">
                                                        <h3 class="title">
                                                            <span>
                                                                <a
                                                                    class="
                                                                        display-box
                                                                    "
                                                                    data-display=".box-register"
                                                                    >Registration</a
                                                                >
                                                            </span>
                                                            <span
                                                                class="
                                                                    current-title
                                                                "
                                                            >
                                                                Reset
                                                                Password</span
                                                            >
                                                        </h3>
                                                        <div class="form-row">
                                                            <form
                                                                name="lostpasswordform"
                                                                id="lostpasswordform"
                                                                method="post"
                                                            >
                                                                <p
                                                                    class="
                                                                        description
                                                                    "
                                                                >
                                                                    Please enter
                                                                    your
                                                                    username or
                                                                    email
                                                                    address. You
                                                                    will receive
                                                                    a link to
                                                                    create a new
                                                                    password via
                                                                    email.
                                                                </p>
                                                                <p
                                                                    class="
                                                                        login-username
                                                                    "
                                                                >
                                                                    <input
                                                                        placeholder="Username or email"
                                                                        type="text"
                                                                        name="user_login_lostpass"
                                                                        id="user_login_lostpass"
                                                                        class="
                                                                            input
                                                                        "
                                                                    />
                                                                </p>
                                                                <p>
                                                                    <input
                                                                        type="submit"
                                                                        name="wp-submit-lostpass"
                                                                        id="wp-submit-lostpass"
                                                                        class="
                                                                            button
                                                                            button-primary
                                                                            button-large
                                                                        "
                                                                        value="Reset password"
                                                                    />
                                                                </p>
                                                                <p
                                                                    class="
                                                                        link-bottom
                                                                    "
                                                                >
                                                                    Are you a
                                                                    member?
                                                                    <a
                                                                        class="
                                                                            display-box
                                                                        "
                                                                        data-display=".box-login"
                                                                    >
                                                                        Sign in
                                                                        now
                                                                    </a>
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { routes } from "../../main";
import utils from "@common/utils";
export default {
    data() {
        return {
            registerData: {
                name: "",
                psd: "",
                repsd: "",
            },
            loginData: {
                name: "",
                psd: "",
            },
            isRegistryPop: false,
            userInfo: {},
            activepage: 1,
            isLogin: false,
            type:'video',
        };
    },
    mounted() {
        if (utils.getStore("token")) {
            this.getuserInfo();
        }
    },
    methods: {
        goCate(){
            
            switch (this.$refs.searchSelect.value) {
                case 'video':
                    this.$router.push('/enlightenment/video')
                    break;
                case 'voice':
                    this.$router.push('/enlightenment/voice')
                    break;
                case 'blog':
                    this.$router.push('/enlightenment/article')
                    break;
            
                default:
                    break;
            }
        },
        getuserInfo() {
            this.$http
                .get("/api/member/info")
                .then((response) => {
                    if (response.data.code === 0) {
                        this.userInfo = response.data.data;
                        utils.setStore(
                            "userInfo",
                            JSON.stringify(response.data.data)
                        );
                        this.isLogin = true;
                    } else {
                        utils.removeStore("token");
                        utils.removeStore("userInfo");
                        this.isLogin = false;
                    }
                })
                .catch((err) => {
                    utils.removeStore("token");
                    utils.removeStore("userInfo");
                    this.isLogin = false;
                });
        },
        login() {
            let { name: username, psd: password } = this.loginData;

            this.$http
                .post("/api/member/login", {
                    password: password,
                    rememberMe: true,
                    userName: username,
                })
                .then((response) => {
                    if (response.data.code === 0) {
                        utils.setStore("token", response.data.data.token);
                        this.getuserInfo();
                        successNotice("提醒", "登录成功");
                        window.location.reload();
                    } else {
                        warningNotice(
                            "提醒",
                            response.data.message + "，请先注册"
                        );
                        if (response.data.code === 2001) {
                            $(".login-popup.box-register")
                                .addClass("active")
                                .siblings()
                                .removeClass("active");
                        }
                    }
                });
        },
        logout() {
            this.$http.get("/api/member/logout").then((response) => {
                if (response.data.code === 0) {
                    utils.removeStore("token");
                    utils.removeStore("userInfo");
                    successNotice("提醒", "退出登录");
                    window.location.reload();
                } else {
                    warningNotice("提醒", response.data.message);
                }
                console.log(response.data);
            });
        },
        register() {
            let {
                name: username,
                psd: password,
                repsd: password_re,
            } = this.registerData;
            if (username == "") {
                warningNotice("提醒", "用户名不能为空");
                return;
            }
            if (password == "" || password.length < 6) {
                warningNotice("提醒", "密码不能为空,且大于6个字符");
                return;
            }
            if (password_re == "" || password_re.length < 6) {
                warningNotice("提醒", "请确认密码,与密码设置相同");
                return;
            }
            if (password != password_re) {
                warningNotice("提醒", "前后密码输入不一致");
                return;
            }

            this.$http
                .post("/api/member/register", {
                    password: password,
                    rePassword: password_re,
                    userName: username,
                })
                .then((response) => {
                    if (response.data.code === 0) {
                        successNotice("提醒", "注册成功，快去登录吧");
                        $(".login-popup.box-login")
                            .addClass("active")
                            .siblings()
                            .removeClass("active");
                    } else {
                        warningNotice("提醒", response.data.message);
                    }
                    console.log(response.data);
                });
        },
    },
    watch: {
        $route: {
            handler(to, from) {
                console.log(`to:${to.path},from:${from ? from.path : ""}`);
                let route = routes.find((x) => x.path == to.path);
                this.activepage = route ? route.activePage : 1;
                this.$http.post("/api/statistics/addVisitors");

                setTimeout((_) => {
                    if (window.slide_slick_col) {
                        window.slide_slick_col();
                    }
                }, 500);
            },
            immediate: true,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>