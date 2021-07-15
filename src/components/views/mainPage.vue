<template>
    <div id="main-content">
        <div
            class="thim-banner_home-1"
            style="background-image: url(/assets/images/home-01.png)"
        >
            <div class="overlay-area"></div>
            <div class="container">
                <div
                    class="bp-element bp-element-st-list-videos vblog-layout-1"
                >
                    <div class="wrap-element">
                        <div class="feature-item">
                            <div class="row">
                                <div class="col-lg-9">
                                    <div class="video">
                                        <img
                                            src="../../assets/images/renleizhidao.png"
                                            alt="IMG"
                                        />
                                        <div class="overlay"></div>
                                        <div class="meta-info">
                                            <div class="imdb">
                                                <span class="value">5</span
                                                >推荐指数
                                            </div>
                                            <div class="label">入门必看</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="text">
                                        <h4 class="title">
                                            <a href="single-video.html">
                                                快速了解德教
                                            </a>
                                        </h4>
                                        <div class="info">
                                            <span class="item-info"
                                                >BY
                                                <a href="javascript:;"
                                                    >jiajia</a
                                                ></span
                                            >
                                            <span class="item-info"
                                                >MAY 1, 2020</span
                                            >
                                            <span class="item-info"
                                                >TV show</span
                                            >
                                        </div>
                                        <div class="description">
                                            当下的人类世界，正处于正义与邪恶的生死决战时刻。天道昭昭，邪不压在，人类需要彻底的大觉醒...
                                        </div>
                                        <a
                                            href="single-video.html"
                                            class="
                                                btn-readmore btn-normal
                                                shape-round
                                            "
                                        >
                                            read more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="
                        bp-element bp-element-st-list-videos
                        vblog-layout-1-1
                    "
                >
                    <div class="wrap-element">
                        <div class="normal-items">
                            <div class="row">
                                <div
                                    class="col-sm-6 col-lg-3"
                                    v-for="item in vediolist"
                                    :key="item.id"
                                >
                                    <div class="item">
                                        <div class="pic">
                                            <router-link
                                                :to="`/singleVideo?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                            >
                                                <img
                                                    :src="item.bannerUrl"
                                                    alt="IMG"
                                                />
                                            </router-link>

                                            <div class="label">
                                                {{ item.tag }}
                                            </div>
                                        </div>
                                        <h4 class="title">
                                            <router-link
                                                :to="`/singleVideo?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                >{{ item.name }}</router-link
                                            >
                                        </h4>
                                        <div class="info">
                                            {{ item.releaseDateStr }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thim-trending-categories_home-1">
            <div class="container about">
                <div
                    class="
                        bp-element bp-element-st-list-categories
                        vblog-layout-slider-1
                    "
                >
                    <div class="wrap-element">
                        <div class="heading-post">
                            <div class="text">
                                <h3 class="title">关于德教</h3>
                                <div class="description">
                                    以天道智慧经营幸福人生
                                </div>
                            </div>
                        </div>
                        <div class="list-posts">
                            <div class="element-font">
                                <div class="title">
                                    <h3>德教的来历是什么？</h3>
                                </div>
                                <div class="elementor-widget-container">
                                    <ul>
                                        <li>
                                            <span style="font-weight: 400">
                                                <span
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                >
                                                    <span
                                                        style="
                                                            vertical-align: inherit;
                                                        "
                                                        >德教这个名字是大有来历的，它是由三皇五帝时期的尧舜所创，融汇了尧舜两位圣君导正政治和导正人心的精髓，是上古先王们的至德要道。</span
                                                    ></span
                                                ></span
                                            >
                                        </li>
                                        <li>
                                            <span style="font-weight: 400"
                                                ><span
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                    ><span
                                                        style="
                                                            vertical-align: inherit;
                                                        "
                                                        >如果照此推行，自然可以象尧舜当年一样，以顺天下，民用和睦，上下无怨，自然而然可以构建起公天下的大同世界。
                                                    </span></span
                                                ></span
                                            >
                                        </li>
                                        <li>
                                            <span style="font-weight: 400"
                                                ><span
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                    ><span
                                                        style="
                                                            vertical-align: inherit;
                                                        "
                                                        >德教的整个体系，是德教团队近三十年的研究结果，它不仅继承了上古的智慧，而且进一步融入了儒释道的精髓，并借鉴了古今中外四大教育典范中的很多成功经验和优点。
                                                    </span></span
                                                ></span
                                            >
                                        </li>
                                        <li>
                                            <span style="font-weight: 400"
                                                ><span
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                    ><span
                                                        style="
                                                            vertical-align: inherit;
                                                        "
                                                        >德教作为一个原创的教化体系，有着非常独特的教化理念，博大精深的内容体系，以及原创的知行合一践行系统，就是为了在当今这个浑浊不堪的黑暗世界中，继往开来，帮助大家以天道的智慧来经营幸福的人生。&nbsp;</span
                                                    ></span
                                                ></span
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="element-picture">
                                <div class="image">
                                    <img
                                        src="https://i0.wp.com/dejiao.org/wp-content/uploads/2021/04/2021e696b0e5bda2e8b1a11.png?fit=733%2C900&ssl=1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="list-posts">
                            <div class="element-picture">
                                <div class="image">
                                    <img
                                        src="https://i0.wp.com/dejiao.org/wp-content/uploads/2021/04/family-love-kids-1404825.jpg?fit=853%2C1280&ssl=1"
                                    />
                                </div>
                            </div>
                            <div class="element-font">
                                <div class="title">
                                    <h3>什么是德教？</h3>
                                </div>
                                <div class="elementor-widget-container">
                                    <ul>
                                        <li>
                                            <span style="font-weight: 400">
                                                <span
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                >
                                                    <span
                                                        style="
                                                            vertical-align: inherit;
                                                        "
                                                    >
                                                        德教既不是宗教，也不是世间普通的教育，而是面向未来的一种有效提升人们德行和智慧的的教化体系。
                                                    </span></span
                                                ></span
                                            >
                                        </li>
                                        <li>
                                            <span style="font-weight: 400"
                                                ><span
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                    ><span
                                                        style="
                                                            vertical-align: inherit;
                                                        "
                                                    >
                                                        未来人类真正最需要的教育，不是仅仅教一些知识技能，而是要提升人们的德行和智慧，要能够解决人们生命中的各种难题，围绕的就是宇宙和人生的规律——道，以教导大家认识道，然后进一步来顺应道和应用道，使大众的为人处事可以做到上合天道，下合人心，内明自心，以符合道的正确方法来经营人人期盼的美好人生，这才是有德行和智慧的新人类。
                                                    </span></span
                                                ></span
                                            >
                                        </li>
                                        <li>
                                            <span style="font-weight: 400"
                                                ><span
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                    ><span
                                                        style="
                                                            vertical-align: inherit;
                                                        "
                                                    >
                                                        这种传承数千年的提升人们德行和智慧的独特教育体系，就是真正的中华德教。
                                                    </span></span
                                                ></span
                                            >
                                        </li>
                                        <li>
                                            <span style="font-weight: 400"
                                                ><span
                                                    style="
                                                        vertical-align: inherit;
                                                    "
                                                    ><span
                                                        style="
                                                            vertical-align: inherit;
                                                        "
                                                    >
                                                        德教的本质其实就是中华传统智慧的现代应用，旨在以中华传统智慧教化人民，学习如何以天道的智慧来经营幸福的人生，并构建整个人类的美好大同世界。&nbsp;
                                                    </span></span
                                                ></span
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thim-popular-video_home-1" v-if="listMostPopular.length">
            <div class="container">
                <div
                    class="
                        bp-element bp-element-st-list-videos
                        vblog-layout-slider-1
                    "
                >
                    <div class="wrap-element">
                        <div class="heading-post">
                            <h3 class="title">popular videos</h3>
                            <router-link to="/enlightenment/video" class="link"
                                >See all videos</router-link
                            >
                        </div>
                        <div class="list-posts">
                            <div
                                class="slide-posts js-call-slick-col"
                                data-numofshow="4"
                                data-numofscroll="1"
                                data-loopslide="1"
                                data-autoscroll="0"
                                data-speedauto="6000"
                                data-responsive="[4, 1], [4, 1], [3, 1], [2, 1], [1, 1]"
                            >
                                <div class="wrap-arrow-slick">
                                    <div class="arow-slick prev-slick">
                                        <i class="ion ion-ios-arrow-left"></i>
                                    </div>
                                    <div class="arow-slick next-slick">
                                        <i class="ion ion-ios-arrow-right"></i>
                                    </div>
                                </div>
                                <div class="slide-slick">
                                    <div
                                        class="item-slick"
                                        v-for="item in listMostPopular"
                                        :key="item.id"
                                    >
                                        <div class="post-item">
                                            <router-link :to="`/singleVideo?id=${item.id}&categoryId=${item.lessonCategoryId}`">

                                          
                                            <div class="pic">
                                                <img
                                                    :src="item.bannerUrl"
                                                    alt="IMG"
                                                />
                                                <div class="overlay"></div>
                                                <div class="meta-info">
                                                    <div class="imdb">
                                                        <span class="value"
                                                            >5</span
                                                        >IMDb
                                                    </div>
                                                    <div
                                                        class="label"
                                                        style="
                                                            background: #e40914;
                                                        "
                                                    >
                                                        {{ item.tag }}
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="title">
                                                <a >
                                                    {{ item.name }}
                                                </a>
                                            </h4>
                                            <div class="info">
                                                {{ item.releaseDateStr }}
                                            </div>
                                              </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thim-trending-categories_home-1" v-if="listMostPopularcategory.length">
            <div class="container">
                <div
                    class="
                        bp-element bp-element-st-list-categories
                        vblog-layout-slider-1
                    "
                >
                    <div class="wrap-element">
                        <div class="heading-post">
                            <div class="text">
                                <h3 class="title">德教精选</h3>
                                <div class="description">
                                    It is a long established fact that a reader
                                </div>
                            </div>
                        </div>
                        <div class="list-posts">
                            <div
                                class="slide-posts js-call-slick-col"
                                data-numofshow="3"
                                data-numofscroll="1"
                                data-loopslide="1"
                                data-autoscroll="0"
                                data-speedauto="6000"
                                data-responsive="[3, 1], [3, 1], [2, 1], [2, 1], [1, 1]"
                            >
                                <div class="wrap-arrow-slick">
                                    <div class="arow-slick prev-slick">
                                        <i class="ion ion-ios-arrow-left"></i>
                                    </div>
                                    <div class="arow-slick next-slick">
                                        <i class="ion ion-ios-arrow-right"></i>
                                    </div>
                                </div>
                                <div class="slide-slick">
                                    <div class="item-slick" v-for="item in listMostPopularcategory" :key="item.id">
                                        <div class="post-item">
                                            <img
                                                :src="item.bannerUrl"
                                                alt="IMG"
                                            />
                                            <div class="overlay"></div>
                                            <a href="#" class="content">
                                                <span class="title"
                                                    >{{item.name}}</span
                                                >
                                               {{item.description}}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thim-news-feed_home-1" v-if="listMostPopularblog.length">
            <div class="container">
                <div class="bp-element bp-element-posts vblog-layout-slider-3">
                    <div class="wrap-element">
                        <div class="heading-post">
                            <h3 class="title">美文推荐</h3>
                            <div class="description">
                                It is a long established fact that a reader
                            </div>
                        </div>
                        <div class="list-posts">
                            <div
                                class="slide-posts js-call-slick-col"
                                data-numofshow="1"
                                data-numofscroll="1"
                                data-loopslide="1"
                                data-autoscroll="0"
                                data-speedauto="6000"
                                data-responsive="[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]"
                            >
                                <div class="wrap-arrow-slick">
                                    <div class="arow-slick prev-slick">
                                        <i class="ion ion-ios-arrow-left"></i>
                                    </div>
                                    <div class="arow-slick next-slick">
                                        <i class="ion ion-ios-arrow-right"></i>
                                    </div>
                                </div>
                                <div class="slide-slick">
                                    <div class="item-slick">
                                        <div class="post-item">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="feature-item">
                                                        <router-link
                                                            :to="`/singlearticle?id=${listMostPopularblog[0].id}&categoryId=${listMostPopularblog[0].categoryId}`"
                                                            target="_blank"
                                                        >
                                                            <img
                                                                :src="
                                                                    listMostPopularblog[0]
                                                                        .bannerUrl
                                                                "
                                                                alt="IMG"
                                                            />
                                                        </router-link>

                                                        <div
                                                            class="overlay"
                                                        ></div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <router-link
                                                                    :to="`/singlearticle?id=${listMostPopularblog[0].id}&categoryId=${listMostPopularblog[0].categoryId}`"
                                                                    target="_blank"
                                                                >
                                                                    <img
                                                                        :src="
                                                                            listMostPopularblog[0]
                                                                                .bannerUrl
                                                                        "
                                                                        alt="IMG"
                                                                    />
                                                                </router-link>
                                                                {{
                                                                    listMostPopularblog[0]
                                                                        .name
                                                                }}
                                                            </h4>
                                                            <div class="info">
                                                                <span
                                                                    class="
                                                                        item-info
                                                                    "
                                                                    >BY
                                                                    <a
                                                                        href="javascript:;"
                                                                        >{{
                                                                            listMostPopularblog[0]
                                                                                .writer
                                                                        }}</a
                                                                    ></span
                                                                >
                                                                <span
                                                                    class="
                                                                        item-info
                                                                    "
                                                                    >{{
                                                                        listMostPopularblog[0]
                                                                            .gmtCreatedStr
                                                                    }}</span
                                                                >
                                                                <span
                                                                    class="
                                                                        item-info
                                                                    "
                                                                    >{{
                                                                        listMostPopularblog[0]
                                                                            .tag
                                                                    }}</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <template
                                                        v-for="(
                                                            item, idx
                                                        ) in listMostPopularblog"
                                                    >
                                                        <div
                                                            class="item"
                                                            v-if="
                                                                idx === 2 ||
                                                                idx === 1
                                                            "
                                                            :key="item.id"
                                                        >
                                                            <div class="pic">
                                                                <router-link
                                                                    :to="`/singlearticle?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                                    target="_blank"
                                                                >
                                                                    <img
                                                                        :src="
                                                                            item.bannerUrl
                                                                        "
                                                                        alt="IMG"
                                                                    />
                                                                </router-link>
                                                            </div>
                                                            <div class="text">
                                                                <div
                                                                    class="info"
                                                                >
                                                                    {{
                                                                        item.gmtCreatedStr
                                                                    }}
                                                                </div>

                                                                <div
                                                                    class="
                                                                        description
                                                                    "
                                                                >
                                                                    {{
                                                                        item.name
                                                                    }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </template>
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
</template>

<script>
export default {
    mounted() {
        this.getList();
        this.getlistMostPopular();
        this.getlistMostPopularblog();
        this.getlistMostPopularcategory();
    },
    data() {
        return {
            vediolist: [],
            listMostPopular: [],
            listMostPopularblog: [],
            listMostPopularcategory: [],
        };
    },
    methods: {
        getlistMostPopularcategory() {
            this.$http
                .get("/api/lesson/category/choice", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.listMostPopularcategory = response.data.data;
                    }
                });
        },
        getlistMostPopularblog() {
            this.$http
                .post("/api/lesson/article/listMostPopular", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.listMostPopularblog = response.data.data;
                    }
                });
        },
        getlistMostPopular() {
            this.$http
                .post("/api/lesson/video/listMostPopular", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.listMostPopular = response.data.data;
                        this.$nextTick(_=>{
                                setInterval(() => {
                                    try {
                                        window.slide_slick_col()
                                    // eslint-disable-next-line no-empty
                                    } catch (error) {
                                    }
                            }, 800);
                        })
                    }
                });
        },
        getList() {
            this.$http
                .post("/api/lesson/video/list", {
                    limit: 4,
                    page: 1,
                })
                .then((response) => {
                    if (response.data.code === 0) {
                        this.vediolist = response.data.data;
                    }
                });
        },
    },
};
</script>

<style lang="css">
@import "../../assets/index.css";
</style>