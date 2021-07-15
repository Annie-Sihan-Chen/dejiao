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
                                    <router-link to="/index">首页</router-link>
                                </li>
                                <li>
                                    <span class="breadcrum-icon">/</span>
                                    德教启蒙阶段
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-content sidebar-right layout-1">
                <div class="container">
                    <div class="row">
                        <div
                            class="
                                widget-area
                                col-sm-9 col-md-8 col-lg-3
                                sticky-sidebar
                            "
                        >
                            <aside class="widget widget_search">
                                <div class="search-form">
                                    <label>
                                        <span class="screen-reader-text"
                                            >Search for:</span
                                        >
                                        <input
                                            class="search-field"
                                            type="text"
                                            name="search"
                                            v-model="searchValue"
                                            placeholder="What are you looking for ?"
                                        />
                                    </label>
                                    <input
                                        class="search-submit"
                                        @click="getList"
                                        @keyup.enter="getList"
                                    />
                                </div>
                            </aside>
                            <aside class="widget widget_categories">
                                <h3 class="widget-title">德教音频类别</h3>
                                <ul>
                                    <li
                                        class="cat-item"
                                        v-for="item in categoryList"
                                        :key="item.id"
                                        @click="setCurrentCate(item)"
                                        :style="{
                                            color:
                                                currentCate.id == item.id
                                                    ? '#dd392e'
                                                    : '#6e6e6e',
                                        }"
                                    >
                                        <a>
                                            {{ item.name }}
                                        </a>
                                        <span class="count">{{
                                            item.lessonNumber
                                        }}</span>
                                    </li>
                                </ul>
                            </aside>
                            <aside class="widget widget_thim_layout_builder">
                                <div
                                    class="
                                        bp-element bp-element-posts
                                        layout-list-2
                                    "
                                >
                                    <div class="wrap-element">
                                        <div class="heading-post">
                                            <h3 class="title">Most Popular</h3>
                                        </div>
                                        <div class="list-posts">
                                            <div
                                                class="post-item"
                                                v-for="item in listMostPopular"
                                                :key="item.id"
                                            >
                                                <a href="/" class="pic">
                                                    <img
                                                        :src="item.bannerUrl"
                                                        alt="IMG"
                                                    />
                                                </a>
                                                <div class="text">
                                                    <h4 class="title">
                                                        <a
                                                            href="single-blog.html"
                                                        >
                                                            {{ item.name }}
                                                        </a>
                                                    </h4>
                                                    <div class="info">
                                                        {{
                                                            item.releaseDateStr
                                                        }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            <!-- <aside class="widget widget_tag_cloud">
                                <h3 class="widget-title">
                                    音频云标签
                                </h3>
                                <div class="tagcloud">
                                    <a href="javascript:;" class="tag-cloud-link">
                                        Film oline
                                    </a>
                                    <a href="javascript:;" class="tag-cloud-link">
                                        Creative
                                    </a>
                                    <a href="javascript:;" class="tag-cloud-link">
                                        Design
                                    </a>
                                    <a href="javascript:;" class="tag-cloud-link">
                                        Landing
                                    </a>
                                    <a href="javascript:;" class="tag-cloud-link">
                                        Skill
                                    </a>
                                </div>
                            </aside>
                            <aside class="widget widget_text">
                                <div class="textwidget">
                                    <a href="javascript:;">
                                        <img src="assets/images/post-07.jpg" alt="IMG">
                                    </a>
                                </div>
                            </aside> -->
                        </div>
                        <main class="site-main col-lg-9">
                            <div class="wrap-main-content">
                                <div class="thim-videos_list-videos-page">
                                    <div class="videos-list">
                                        <div
                                            class="
                                                wrap-element
                                                js-call-isotope-filter
                                            "
                                        >
                                            <div class="row isotope-grid">
                                                <div
                                                    v-for="item in list"
                                                    :key="item.id"
                                                    class="
                                                        col-sm-6
                                                        col-md-4
                                                        col-lg-3
                                                        isotope-item
                                                    "
                                                >
                                                    <div class="item-post">
                                                        <div class="pic-item">
                                                            <img
                                                                :src="
                                                                    item.bannerUrl
                                                                "
                                                                alt="IMG"
                                                            />
                                                            <div
                                                                class="overlay"
                                                            ></div>
                                                            <div
                                                                class="
                                                                    meta-info
                                                                "
                                                            >
                                                                <!-- <div class="imdb">
                                                                    <span class="value">5</span>IMDb
                                                                </div> -->
                                                                <div
                                                                    class="
                                                                        label
                                                                    "
                                                                    style="
                                                                        background: #e40914;
                                                                    "
                                                                >
                                                                    {{
                                                                        item.tag
                                                                    }}
                                                                </div>
                                                            </div>
                                                            <router-link
                                                                :to="`/singleVoice?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                                class="btn-play"
                                                            ></router-link>
                                                        </div>
                                                        <div class="text-item">
                                                            <h4 class="title">
                                                                <router-link
                                                                    :to="`/singleVoice?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                                    class="
                                                                        btn-play
                                                                    "
                                                                    >{{
                                                                        item.name
                                                                    }}</router-link
                                                                >
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul class="loop-pagination">
                                        <li
                                            v-for="(item, idx) in pages"
                                            :key="idx"
                                            @click="setCurrentPage(idx + 1)"
                                        >
                                            <a
                                                class="page-numbers"
                                                :class="[
                                                    'page-numbers',
                                                    currentPage == idx + 1
                                                        ? 'current'
                                                        : '',
                                                ]"
                                            >
                                                {{ idx + 1 }}
                                            </a>
                                        </li>
                                        <!-- <li>
                                            <a href="javascript:;" class="page-numbers next">
                                                Next
                                                <i class="ion ion-ios-arrow-thin-right"></i>
                                            </a>
                                        </li> -->
                                    </ul>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.getlistMostPopular();
        this.getcategoryList();
        this.getList();
    },
    data() {
        return {
            listMostPopular: [],
            categoryList: [],
            currentCate: {},
            currentPage: 1,
            searchValue:'',
            limit: 8,
            pages: [],
            list: [],
        };
    },
    methods: {
        getList() {
            this.$http
                .post("/api/lesson/audio/list", {
                    lessonCategoryId: this.currentCate.id,
                    limit: this.limit,
                    name:this.searchValue,
                    page: this.currentPage,
                })
                .then((response) => {
                    if (response.data.code === 0) {
                        this.list = response.data.data;
                        this.pages = Array(
                            Math.ceil(response.data.data.length / this.limit)
                        ).fill(1);
                    }
                });
        },
        getcategoryList() {
            this.$http
                .get("/api/lesson/category/audio", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.categoryList = response.data.data;
                    }
                });
        },
        getlistMostPopular() {
            this.$http
                .post("/api/lesson/audio/listMostPopular", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.listMostPopular = response.data.data;
                    }
                });
        },
        setCurrentCate(item) {
            this.currentCate = item;
            this.currentPage = 1;
            this.pages = [];
            this.getList();
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
    },
};
</script>

<style lang="css">
@import "../../assets/index.css";
</style>