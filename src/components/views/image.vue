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
                        <h1>德教美图欣赏</h1>
                        <div class="wrap-breadcrumb">
                            <ul class="breadcrumbs">
                                <li>
                                    <a href="javascript:;"> 首页 </a>
                                </li>
                                <li>
                                    <span class="breadcrum-icon">/</span>
                                    德教美图
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-content layout-1">
                <div class="container">
                    <div class="row">
                        <main class="site-main col-12">
                            <div class="wrap-main-content">
                                <div class="thim-author_list-authors-page">
                                    <div class="authors-list">
                                        <div
                                            class="
                                                wrap-element
                                                js-call-isotope-filter
                                            "
                                        >
                                            <div class="heading-element">
                                                <div class="wrap-filter-group">
                                                    <div
                                                        class="
                                                            filter-tope-group
                                                        "
                                                    >
                                                        <span
                                                            :class="[
                                                                'item-tope',
                                                                currentCate.id ==
                                                                item.id
                                                                    ? 'active'
                                                                    : '',
                                                            ]"
                                                            v-for="item in categoryList"
                                                            :key="item.id"
                                                        >
                                                            {{ item.name }}
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- <div class="total-item">
                                                    Total Post: <span class="number-total">30</span>
                                                </div> -->
                                            </div>
                                            <div class="row isotope-grid">
                                                <div
                                                    class="
                                                        col-sm-6
                                                        col-md-4
                                                        col-lg-3
                                                        isotope-item
                                                    "
                                                    v-for="item in list"
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
                                                                    btn-play
                                                                    popup-youtube
                                                                "
                                                                target="_blank"
                                                                :href="
                                                                    item.bannerUrl
                                                                "
                                                            ></a>
                                                        </div>
                                                        <div
                                                            class="text-author"
                                                        >
                                                            <h4
                                                                class="
                                                                    name-author
                                                                "
                                                            >
                                                                <a>
                                                                    {{
                                                                        item.name
                                                                    }}
                                                                </a>
                                                            </h4>
                                                            <div
                                                                class="
                                                                    info-author
                                                                "
                                                            >
                                                                {{
                                                                    item.content
                                                                }}
                                                            </div>
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
                                            <a  class="page-numbers next">
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
        // this.getlistMostPopular();
        this.getcategoryList();
        this.getList();
    },
    data() {
        return {
            listMostPopular: [],
            categoryList: [],
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
                .post("/api/lesson/video/list", {
                    lessonCategoryId: this.currentCate.id,
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
                .get("/api/lesson/category/video", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.categoryList = response.data.data;
                    }
                });
        },
        getlistMostPopular() {
            this.$http
                .post("/api/lesson/video/listMostPopular", {})
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
.mfp-wrap iframe {
    background-color: transparent;
}
.mfp-wrap iframe body {
    text-align: center;
}
</style>