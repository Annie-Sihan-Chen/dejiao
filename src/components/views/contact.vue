<template>
    <div id="main-content">
        <div class="content-area">
            <div class="page-title">
                <div
                    class="main-top"
                    style="
                        background-image: url(assets/images/bg-page-title-03.jpg);
                    "
                >
                    <div class="overlay-top-header"></div>
                    <div class="content container">
                        <h1>德教云书院</h1>
                        <div class="wrap-breadcrumb">
                            <ul class="breadcrumbs">
                                <li>
                                    <router-link to="/">首页</router-link>
                                </li>
                                <li>
                                    <span class="breadcrum-icon">/</span>
                                    联系我们
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-content layout-1">
                <main class="site-main">
                    <div class="wrap-main-content">
                        <div class="thim-contact-info_contact-page">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-4">
                                        <div
                                            class="
                                                bp-element bp-element-icon-box
                                                vblog-layout-2
                                                align-center
                                            "
                                        >
                                            <div class="icon-box">
                                                <div class="icon-image">
                                                    <i
                                                        class="
                                                            ion ion-android-pin
                                                        "
                                                    ></i>
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">
                                                        Our Location
                                                    </h3>
                                                    <div class="description">
                                                        {{ info.ourLocation }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div
                                            class="
                                                bp-element bp-element-icon-box
                                                vblog-layout-2
                                                align-center
                                            "
                                        >
                                            <div class="icon-box">
                                                <div class="icon-image">
                                                    <i
                                                        class="
                                                            ion ion-android-call
                                                        "
                                                    ></i>
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">
                                                        Call Us
                                                    </h3>
                                                    <div class="description">
                                                        <a>{{info.ourPhone }}</a>
                                                        <!-- <br />
                                                        <a href="javascript:;"
                                                            >202-555-0135</a
                                                        > -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div
                                            class="
                                                bp-element bp-element-icon-box
                                                vblog-layout-2
                                                align-center
                                            "
                                        >
                                            <div class="icon-box">
                                                <div class="icon-image">
                                                    <i
                                                        class="ion ion-email"
                                                    ></i>
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">
                                                        Message
                                                    </h3>
                                                    <div class="description">
                                                        <a
                                                            ><span
                                                                class="
                                                                    __cf_email__
                                                                "
                                                                
                                                                >{{
                                                                    info.ourEmail
                                                                }}</span
                                                            ></a
                                                        >
                                                        <!-- <br />
                                                        <a href="javascript:;"
                                                            ><span
                                                                class="
                                                                    __cf_email__
                                                                "
                                                                data-cfemail="335a5d555c1e404643435c4147735e5254011d505c5e"
                                                                >[email&#160;protected]</span
                                                            ></a
                                                        > -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="col-sm-6 col-lg-3">
                                        <div
                                            class="
                                                bp-element bp-element-icon-box
                                                vblog-layout-2
                                                align-center
                                            "
                                        >
                                            <div class="icon-box">
                                                <div class="icon-image">
                                                    <i
                                                        class="ion ion-thumbsup"
                                                    ></i>
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">
                                                        Follow Us
                                                    </h3>
                                                    <div class="description">
                                                        <a
                                                            href="https://www.facebook.com/dejiaoyunshuyuan"
                                                            class="social-item"
                                                            target="_blank"
                                                        >
                                                            <i
                                                                class="
                                                                    fa
                                                                    fa-facebook
                                                                "
                                                            ></i>
                                                        </a>
                                                        <a
                                                            href="https://twitter.com/abc12349540264"
                                                            class="social-item"
                                                            target="_blank"
                                                        >
                                                            <i
                                                                class="
                                                                    fa
                                                                    fa-twitter
                                                                "
                                                            ></i>
                                                        </a>
                                                        <a
                                                            href="https://www.youtube.com/channel/UC32kdF6W40BOZBiBys2ycgA"
                                                            class="social-item"
                                                            target="_blank"
                                                        >
                                                            <i
                                                                class="
                                                                    fa
                                                                    fa-youtube
                                                                "
                                                            ></i>
                                                        </a>
                                                        <a
                                                            href="https://www.instagram.com/the_humaneway/"
                                                            class="social-item"
                                                            target="_blank"
                                                        >
                                                            <i
                                                                class="
                                                                    fa
                                                                    fa-linkedin
                                                                "
                                                            ></i>
                                                        </a>
                                                        <a
                                                            href="https://discord.com/channels/721130963463176223/817787681739636753"
                                                            class="social-item"
                                                            target="_blank"
                                                        >
                                                            <i
                                                                class="
                                                                    fa
                                                                    fa-cc-discover
                                                                "
                                                            ></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                                <div class="divline_contact-page"></div>
                            </div>
                        </div>

                        <div class="thim-send-message_contact-page">
                            <div class="container">
                                <div
                                    class="
                                        bp-element bp-element-heading
                                        align-center
                                    "
                                >
                                    <h3 class="title">Send a message</h3>
                                    <div class="description">
                                        Your email address will not be
                                        published. Required fields are marked.
                                    </div>
                                </div>
                                <div class="contact-form">
                                    <label class="wrap-input">
                                        <input
                                            type="text"
                                            v-model="form.name"
                                            placeholder="Name*"
                                        />
                                    </label>
                                    <label class="wrap-input">
                                        <input
                                            type="text"
                                            v-model="form.email"
                                            placeholder="Email*"
                                        />
                                    </label>
                                    <label class="wrap-input">
                                        <input
                                            type="text"
                                            v-model="form.phone"
                                            placeholder="Phone Number*"
                                        />
                                    </label>
                                    <label class="wrap-input full-width">
                                        <input
                                            type="text"
                                            v-model="form.subject"
                                            placeholder="Subject*"
                                        />
                                    </label>
                                    <label class="wap-textarea">
                                        <textarea
                                            v-model="form.message"
                                            placeholder="Message*"
                                        ></textarea>
                                    </label>
                                    <input
                                        @click="submit"
                                        class="form-submit"
                                        value="send your message"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.getInfo();
    },
    data() {
        return {
            info: {},
            form: {
                email: "",
                message: "",
                name: "",
                phone: "",
                subject: "",
            },
        };
    },
    methods: {
        getInfo() {
            this.$http.get("/api/contactUs/info", {}).then((response) => {
                if (response.data.code === 0) {
                    this.info = response.data.data;
                }
            });
        },
        submit() {
            let form = this.form;

            if (
                !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
                    this.form.email
                )
            ) {
                warningNotice("提醒", "邮箱格式有误");
                return;
            }
            if (
                !/^((1[0-9]{2})+\d{8})$/.test(
                    this.form.phone
                )
            ) {
                warningNotice("提醒", "手机号格式有误");
                return;
            }
           if(this.form.name === ''){
                warningNotice("提醒", "名称不能为空");
               return
           }
           if(this.form.subject === ''){
                warningNotice("提醒", "课程不能为空");
               return
           }
           if(this.form.message === ''){
                warningNotice("提醒", "message不能为空");
               return
           }
            this.$http
                .post("/api/member/message/add", form)
                .then((response) => {
                    if (response.data.code === 0) {
                        successNotice("提醒", "提交成功");
                    } else {
                        warningNotice("提醒", response.data.message);
                    }
                });
        },
    },
};
</script>

<style lang="css" scoped>
.white {
    background: white;
}
.wrap-element .slide-videos {
    width: 100%;
    position: relative;
}
.slide-videos .wrap-arrow-slick .arow-slick {
    pointer-events: auto;
    cursor: pointer;
    font-size: 20px;
    line-height: 1;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(37, 37, 37, 0.6);
    transition: all 0.2s;
}
.slide-videos .wrap-arrow-slick {
    pointer-events: none;
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.elementor-widget-wrap {
    position: relative;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
}
.elementor-widget-wrap video {
    max-width: 100%;
    width: 100%;
    margin: 0;
    line-height: 1;
    border: none;
}
</style>