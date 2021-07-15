<template>
    <div id="main-content">
        <div class="content-area">
            <div class="page-title">
                <div
                    class="main-top"
                    style="
                        background-image: url(assets/images/bg-page-title-01.jpg);
                    "
                >
                    <div class="overlay-top-header"></div>
                    <div class="content container">
                        <h1>德教文章系列</h1>
                        <div class="wrap-breadcrumb">
                            <ul class="breadcrumbs">
                                <li>
                                    <a> 首页 </a>
                                </li>
                                <li>
                                    <span class="breadcrum-icon">/</span>
                                    德教文章
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-content sidebar-right layout-1">
                <div class="container">
                    <div class="row">
                        <main class="site-main col-lg-9">
                            <div class="wrap-main-content">
                                <div
                                    class="blog-list thim-1-col vblog-layout-1"
                                >
                                    <article
                                        class="item-blog image-item"
                                        v-for="item in list"
                                        :key="item.id"
                                    >
                                        <div class="media-item">
                                            <div class="pic">
                                                <router-link
                                                    :to="`/singlearticle?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                    target="_blank"
                                                >
                                                    <img
                                                        :src="item.bannerUrl"
                                                        alt="IMG"
                                                    />
                                                </router-link>
                                            </div>
                                            <div class="date">
                                                {{ item.gmtCreatedStr }}
                                                <!-- <span class="number">08</span> AUG, 2020 -->
                                            </div>
                                        </div>
                                        <div class="text-item">
                                            <h4 class="title">
                                                <router-link
                                                    :to="`/singlearticle?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                    target="_blank"
                                                >
                                                    {{ item.name }}
                                                </router-link>
                                            </h4>
                                            <div class="info">
                                                <span class="info-item">
                                                    <i
                                                        class="
                                                            ion
                                                            ion-android-person
                                                        "
                                                    ></i>
                                                    By <a>{{ item.writer }}</a>
                                                </span>
                                                <span class="info-item">
                                                    <i
                                                        class="
                                                            ion
                                                            ion-ios-pricetags-outline
                                                        "
                                                    ></i>
                                                    <a>{{ item.tag }}</a>
                                                    <!-- <a >Design</a> -->
                                                </span>
                                                <span class="info-item">
                                                    <i
                                                        class="
                                                            ion ion-android-chat
                                                        "
                                                    ></i
                                                    >({{ item.commentNum }})
                                                    Comment
                                                </span>
                                            </div>
                                            <div class="content">
                                                {{ item.content }}
                                            </div>
                                            <router-link
                                                :to="`/singlearticle?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                target="_blank"
                                                class="
                                                    btn-learnmore btn-small
                                                    shape-round
                                                "
                                            >
                                                learn more
                                            </router-link>
                                        </div>
                                    </article>
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
                                            <a  class="page-numbers next">
                                                Next
                                                <i class="ion ion-ios-arrow-thin-right"></i>
                                            </a>
                                        </li> -->
                                </ul>
                            </div>
                        </main>
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
                                    <button
                                        class="search-submit"
                                        @click="getList"
                                        @keyup.enter="getList"
                                    ></button>
                                </div>
                            </aside>
                            <aside class="widget widget_categories">
                                <h3 class="widget-title">文章分类</h3>
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
                                                <router-link
                                                    :to="`/singlearticle?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                >
                                                    <img
                                                        :src="item.bannerUrl"
                                                        alt="IMG"
                                                    />
                                                </router-link>
                                                <div class="text">
                                                    <h4 class="title">
                                                        <router-link
                                                            :to="`/singlearticle?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                        >
                                                            {{ item.name }}
                                                        </router-link>
                                                    </h4>
                                                    <div class="info">
                                                        {{ item.gmtCreatedStr }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
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
        this.getlistMostPopular();
        this.getcategoryList();
        this.getList();
    },
    data() {
        return {
            listMostPopular: [],
            categoryList: [],
            searchValue:'',
            currentCate: {},
            currentPage: 1,
            limit: 8,
            pages: [],
            list: [],
        };
    },
    methods: {
        getList() {
            this.$http
                .post("/api/lesson/article/list", {
                    lessonCategoryId: this.currentCate.id,
                    name:this.searchValue,
                    limit: this.limit,
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
                .get("/api/lesson/category/article", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.categoryList = response.data.data;
                    }
                });
        },
        getlistMostPopular() {
            this.$http
                .post("/api/lesson/article/listMostPopular", {})
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