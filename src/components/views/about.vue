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
                                    <a href="/"> 首页 </a>
                                </li>
                                <li>
                                    <span class="breadcrum-icon">/</span>
                                    德教云书院
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-content layout-1 white">
                <main class="site-main">
                    <div class="wrap-main-content">
                        <div class="thim-about_about-page">
                            <div class="container">
                                <div
                                    class="
                                        bp-element bp-element-heading
                                        align-center
                                    "
                                >
                                    <h3 class="title" id="whatisdejiao">
                                        什么是德教云书院？
                                    </h3>
                                    <div class="content">
                                        <ul>
                                            <li>
                                                德教云书院是构建在互联网上的一个网上学院。
                                            </li>
                                            <li>
                                                德教云书院的宗旨是帮助同学们提升德行和智慧，学习以天道的智慧经营幸福人生。
                                            </li>
                                            <li>
                                                建立在云端的学习平台，答疑解惑，方便同学们学习和实践中华德教体系。
                                            </li>
                                            <li>
                                                设立在Discord之上，永久入群链接为：<a
                                                    href="https://discord.gg/rS6eTq9"
                                                    >https://discord.gg/rS6eTq9</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    class="
                                        bp-element bp-element-counter-box
                                        align-center
                                        vblog-layout-1
                                        show-line
                                    "
                                >
                                    <div class="item">
                                        <span class="number">{{downloadInfo.visitors}}</span>
                                        <span class="text">Visitor</span>
                                    </div>
                                    <div class="item">
                                        <span class="number">{{downloadInfo.downloads}}</span>
                                        <span class="text">Download</span>
                                    </div>
                                    <div class="item">
                                        <span class="number">{{downloadInfo.videos}}</span>
                                        <span class="text">Videos</span>
                                    </div>
                                </div>
                                <div
                                    class="
                                        bp-element bp-element-st-list-videos
                                        vblog-layout-slider-4
                                    "
                                >
                                    <div class="wrap-element">
                                        <div
                                            class="
                                                slide-videos
                                                js-call-slick-col
                                            "
                                            data-numofshow="1"
                                            data-numofscroll="1"
                                            data-loopslide="1"
                                            data-autoscroll="0"
                                            data-speedauto="6000"
                                            data-responsive="[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]"
                                        >
                                            <div class="wrap-arrow-slick">
                                                <div
                                                    class="
                                                        arow-slick
                                                        prev-slick
                                                    "
                                                >
                                                    <i
                                                        class="
                                                            ion
                                                            ion-ios-arrow-left
                                                        "
                                                    ></i>
                                                </div>
                                                <div
                                                    class="
                                                        arow-slick
                                                        next-slick
                                                    "
                                                >
                                                    <i
                                                        class="
                                                            ion
                                                            ion-ios-arrow-right
                                                        "
                                                    ></i>
                                                </div>
                                            </div>
                                            <div class="slide-slick">
                                                <div class="item-slick">
                                                    <div class="item-video">
                                                        <img
                                                            src="../../assets/images/dejiao-about-01.jpg"
                                                            alt="IMG"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-slick">
                                                    <div class="item-video">
                                                        <img
                                                            src="../../assets/images/dejiao-about-02.jpg"
                                                            alt="IMG"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="item-slick">
                                                    <div class="item-video">
                                                        <img
                                                            src="../../assets/images/dejiao-about-03.jpg"
                                                            alt="IMG"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wrap-dot-slick"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="thim-services_about-page">
                            <div class="container">
                                <div
                                    class="
                                        bp-element bp-element-heading
                                        align-center
                                    "
                                >
                                    <h3 class="title" id="LearningContent">
                                        德教云书院的学习内容
                                    </h3>
                                    <div class="description">
                                        Let’s make great things together!
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                        <div
                                            class="
                                                bp-element bp-element-icon-box
                                                align-center
                                                vblog-layout-1
                                            "
                                        >
                                            <div class="icon-box">
                                                <div class="icon-image">
                                                    <img
                                                        src="assets/images/icon-box-01.png"
                                                        alt="IMG"
                                                    />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">
                                                        Film Production
                                                    </h3>
                                                    <div class="description">
                                                        Lorem ipsum dolor sit a
                                                        met, consectetur dipi
                                                        elit, sed do eiusmod
                                                        tempor incididunt ut
                                                        labore et dolore magna
                                                        aliqua.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            class="
                                                bp-element bp-element-icon-box
                                                align-center
                                                vblog-layout-1
                                            "
                                        >
                                            <div class="icon-box">
                                                <div class="icon-image">
                                                    <img
                                                        src="assets/images/icon-box-02.png"
                                                        alt="IMG"
                                                    />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">
                                                        Film Production
                                                    </h3>
                                                    <div class="description">
                                                        Lorem ipsum dolor sit a
                                                        met, consectetur dipi
                                                        elit, sed do eiusmod
                                                        tempor incididunt ut
                                                        labore et dolore magna
                                                        aliqua.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            class="
                                                bp-element bp-element-icon-box
                                                align-center
                                                vblog-layout-1
                                            "
                                        >
                                            <div class="icon-box">
                                                <div class="icon-image">
                                                    <img
                                                        src="assets/images/icon-box-03.png"
                                                        alt="IMG"
                                                    />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">
                                                        Film Production
                                                    </h3>
                                                    <div class="description">
                                                        Lorem ipsum dolor sit a
                                                        met, consectetur dipi
                                                        elit, sed do eiusmod
                                                        tempor incididunt ut
                                                        labore et dolore magna
                                                        aliqua.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="
                                thim-partner_about-page
                                thim-services_about-page
                            "
                        >
                            <div class="container">
                                <div
                                    class="
                                        bp-element bp-element-heading
                                        align-center
                                    "
                                >
                                    <h3 class="title">老同学收获感言</h3>
                                </div>
                                <div
                                    class="
                                        bp-element bp-element-brands
                                        vblog-layout-slider-1
                                    "
                                >
                                    <div class="wrap-element">
                                        <div
                                            class="
                                                slide-brands
                                                js-call-slick-col
                                            "
                                            data-numofshow="5"
                                            data-numofscroll="1"
                                            data-loopslide="1"
                                            data-autoscroll="1"
                                            data-speedauto="3000"
                                            data-responsive="[5, 1], [4, 1], [3, 1], [2, 1], [1, 1]"
                                        >
                                            <div class="slide-slick">
                                                <div
                                                    class="item-slick"
                                                    v-for="item in testimonials"
                                                    :key="item.id"
                                                >
                                                    <div class="brand-item">
                                                        <img
                                                            :src="
                                                                item.bannerUrl
                                                            "
                                                            alt="IMG"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="thim-team_about-page">
                            <div class="container">
                                <div
                                    class="
                                        bp-element bp-element-heading
                                        align-center
                                    "
                                >
                                    <h3 class="title">我们的团队</h3>
                                    <div class="description">
                                        Let’s make great things together!
                                    </div>
                                </div>

                                <div
                                    class="
                                        bp-element bp-element-our-team
                                        layout-5
                                    "
                                >
                                    <div class="wrap-element">
                                        <div class="row">
                                            <div
                                                class="col-sm-6 col-md-3"
                                                v-for="item in teamList"
                                                :key="item.id"
                                            >
                                                <div class="author-item">
                                                    <div class="pic-author">
                                                        <img
                                                            :src="
                                                                item.bannerUrl
                                                            "
                                                            alt="IMG"
                                                        />
                                                        <a
                                                            class="
                                                                overlay-author
                                                            "
                                                        ></a>
                                                    </div>
                                                    <div class="text-author">
                                                        <h4 class="name-author">
                                                            <a
                                                            >
                                                                {{ item.name }}
                                                            </a>
                                                        </h4>
                                                        <div
                                                            class="info-author"
                                                        >
                                                            {{ item.tag }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="thim-services_about-page">
                            <div class="container">
                                <div
                                    class="
                                        bp-element bp-element-heading
                                        align-center
                                    "
                                >
                                    <h3 class="title" id="howtoget">
                                        如何进入德教云书院
                                    </h3>
                                    <div class="description">
                                        Let’s make great things together!
                                    </div>
                                </div>

                                <div class="row elementor-widget-wrap">
                                    <div class="col-md-6">
                                        <video
                                            class="elementor-video"
                                            src="https://videos.files.wordpress.com/3r23wekm/e6af8fe99b86e696b0e78987e5b0be0326_mp4_hd.mp4"
                                            controls=""
                                            controlslist="nodownload"
                                        ></video>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="
                                                bp-element bp-element-icon-box
                                                align-center
                                                vblog-layout-1
                                            "
                                        >
                                            <div class="icon-box">
                                                <div class="icon-image">
                                                    <img
                                                        src="assets/images/icon-box-02.png"
                                                        alt="IMG"
                                                    />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">
                                                        Film Production
                                                    </h3>
                                                    <div class="description">
                                                        Lorem ipsum dolor sit a
                                                        met, consectetur dipi
                                                        elit, sed do eiusmod
                                                        tempor incididunt ut
                                                        labore et dolore magna
                                                        aliqua.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
        this.getTeamList();
        this.gettestimonialsList();
        this.getDownload()
    },
    data() {
        return {
            teamList: [],
            testimonials: [],
            downloadInfo:{}
        };
    },
    methods: {
        getDownload() {
            this.$http.get("/api/statistics/total", {}).then((response) => {
                if (response.data.code === 0) {
                    this.downloadInfo = response.data.data;
                }
            });
        },
        getTeamList() {
            this.$http.post("/api/our/team/list", {}).then((response) => {
                if (response.data.code === 0) {
                    this.teamList = response.data.data;
                }
            });
        },
//         gettestimonials() {
//             this.$http.post("/api/student/testimonials/list", {
//                  "limit": 10,
//   "page": 1,
//             }).then((response) => {
//                 if (response.data.code === 0) {
//                     this.testimonials = response.data.data;
//                 }
//             });
//         },
        gettestimonialsList() {
            this.$http
                .post("/api/student/testimonials/list", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.testimonials = response.data.data;
                    }
                });
        },
    },
    watch: {
        $route: {
            handler(to, from) {
                if (this.$route.hash) {
                    if (document.querySelector(this.$route.hash)) {
                        document
                            .querySelector(this.$route.hash)
                            .scrollIntoView();
                    } else {
                        this.$nextTick((_) => {
                            setTimeout(() => {
                                document
                                    .querySelector(this.$route.hash)
                                    .scrollIntoView();
                            }, 800);
                        });
                    }
                }
            },
            immediate: true,
        },
    },
};
</script>

<style lang="css" >
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