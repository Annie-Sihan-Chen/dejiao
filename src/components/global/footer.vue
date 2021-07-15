<template>
    <div>
        <footer class="site-footer layout-1">
            <div class="footer-sidebars">
                <div class="container">
                    <div class="thim-3-col">
                        <aside class="widget widget_thim_layout_builder">
                            <div class="wpb_single_image">
                                <img
                                    src="/assets/images/logo-footer.png"
                                    alt="logo"
                                />
                            </div>
                            <div class="wpb_text_column">
                                <p>
                                    *
                                    德教云书院是构建在互联网上的一个网上学院。<br />
                                    *
                                    德教云书院的宗旨是帮助同学们提升德行和智慧，学习以天道的智慧经营幸福人生。<br />
                                    *
                                    建立在云端的学习平台，答疑解惑，方便同学们学习和实践中华德教体系。<br />
                                </p>
                            </div>
                            <div class="yikes-easy-mc-form layout-footer">
                                <label>
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Email"
                                        v-model="subscribeform.email"
                                    />
                                </label>
                                <button @click="subscribe">SUBSCRIBE</button>
                            </div>
                            <!-- <div
                                class="
                                    bp-element bp-element-social-links
                                    vblog-layout-footer
                                "
                            >
                                <div class="wrap-element">
                                    <a
                                        href="https://www.facebook.com/dejiaoyunshuyuan"
                                        class="social-item"
                                    >
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a
                                        href="https://twitter.com/abc12349540264"
                                        class="social-item"
                                    >
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/channel/UC32kdF6W40BOZBiBys2ycgA"
                                        class="social-item"
                                    >
                                        <i class="fa fa-youtube"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/the_humaneway/"
                                        class="social-item"
                                    >
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </div>
                            </div> -->
                        </aside>
                        <aside class="widget widget_thim_layout_builder">
                            <div
                                class="
                                    bp-element bp-element-posts
                                    vblog-layout-list-footer
                                "
                            >
                                <div class="wrap-element">
                                    <div class="heading-post">
                                        <h3 class="title">最新动态</h3>
                                    </div>
                                    <div class="list-posts">
                                        <div
                                            class="item"
                                            v-for="item in trendsList"
                                            :key="item.lessonId"
                                            @click="goTrends(item)"
                                        >
                                            <div class="pic">
                                                <a>
                                                    <img
                                                        :src="item.bannerUrl"
                                                        alt="IMG"
                                                    />
                                                </a>
                                            </div>
                                            <div class="text">
                                                <h4 class="title">
                                                    <a>
                                                        {{ item.name }}
                                                    </a>
                                                </h4>
                                                <div class="date">
                                                    {{ item.trendsDateStr }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <aside class="widget widget_thim_layout_builder">
                            <div
                                class="
                                    bp-element bp-element-categories
                                    layout-list-1
                                "
                            >
                                <div class="wrap-element">
                                    <h3 class="title">POPULAR CATEGORY</h3>
                                    <ul class="list-categories">
                                        <li
                                            class="cat-item"
                                            v-for="item in popularCategoryList"
                                            :key="item.id"
                                            @click="goCategory(item)"
                                        >
                                            <a>{{ item.name }}</a>
                                            <span class="count">{{
                                                item.lessonNumber
                                            }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="thim-1-col">
                        <div class="copyright-text">
                            Copyright &copy; 2021.dejiao All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div id="thim-preloading">
            <div class="custom-image">
                <img src="/assets/images/wave.gif" alt="Loading" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.getTrends();
        this.getPopularCategory();
    },
    data() {
        return {
            trendsList: [],
            popularCategoryList: [],
            subscribeform: {
                email: "",
            },
        };
    },
    methods: {
        getTrends() {
            this.$http.post("/api/lesson/trends/list", {}).then((response) => {
                if (response.data.code === 0) {
                    this.trendsList = response.data.data;
                }
            });
        },

        subscribe() {
            if (
                !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
                    this.subscribeform.email
                )
            ) {
                warningNotice("提醒", "邮箱格式有误");
                return;
            }
            this.$http
                .post("/api/mail/subscribe", {
                    email: this.subscribeform.email,
                })
                .then((response) => {
                    if (response.data.code === 0) {
                        successNotice("提醒", "订阅成功");
                    }
                });
        },
        goTrends(item) {
            // 视频 、 音频 、 美图 、 文章
            switch (item.lessonType) {
                case "视频":
                    this.$router.push(`/singleVideo?id=${item.lessonId}`);
                    break;
                case "音频":
                    this.$router.push(`/singleVoice?id=${item.lessonId}`);
                    break;
                // case "美图":
                //     this.$router.push(`${item.lessonId}`);
                    // break;
                case "文章":
                    this.$router.push(`/singlearticle?id=${item.lessonId}`);
                    break;
            }
          
        },
        goCategory(item) {
            switch (item.lessonType) {
                case "视频":
                    this.$router.push('/enlightenment/video')
                    break;
                case "音频":
                    this.$router.push('/enlightenment/voice')
                    break;
                case "美图":
                    this.$router.push('/enlightenment/image')
                    break;
                case "文章":
                    this.$router.push('/enlightenment/article')
                    break;
            }
        },
        getPopularCategory() {
            this.$http
                .get("/api/lesson/category/popularCategory", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.popularCategoryList = response.data.data;
                    }
                });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>