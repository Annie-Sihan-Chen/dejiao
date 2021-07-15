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
                        <h1>德教美文博客</h1>
                        <div class="wrap-breadcrumb">
                            <ul class="breadcrumbs">
                                <li>
                                    <a href="javascript:;"> 首页 </a>
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
                                <div class="bl-blog-detail">
                                    <div class="head-blog">
                                        <h2 class="title-blog-detail">
                                            {{ detail.name }}
                                        </h2>
                                        <div class="info-blog-detail">
                                            <span class="info-item">
                                                <i
                                                    class="
                                                        ion ion-android-person
                                                    "
                                                ></i>
                                                By
                                                <a>{{detail.writer}}</a>
                                            </span>
                                            <span class="info-item">
                                                <i
                                                    class="
                                                        ion
                                                        ion-ios-pricetags-outline
                                                    "
                                                ></i>
                                                <a>{{ detail.tag }}</a>
                                            </span>
                                            <span class="info-item">
                                                <i
                                                    class="ion ion-android-chat"
                                                ></i>
                                                ({{detail.commentNum || 0}}) Comment
                                            </span>
                                        </div>
                                    </div>
                                    <div class="media-blog-detail">
                                        <div class="pic">
                                            <img
                                                :src="detail.bannerUrl"
                                                alt="封面"
                                            />
                                        </div>
                                        <div class="date">
                                            <!-- <span class="number">08</span> AUG,
                                            2020 -->
                                            {{detail.gmtCreatedStr}}
                                        </div>
                                    </div>
                                    <div class="text-blog-detail">
                                        <!-- <div
                                            class="
                                                wrap-share-blog
                                                sticky-sidebar
                                            "
                                        >
                                            <div class="share">
                                                <span class="namefield">
                                                    Share
                                                </span>
                                                <span class="socials">
                                                    <a
                                                        href="javascript:;"
                                                        class="item-social"
                                                    >
                                                        <i
                                                            class="
                                                                ion
                                                                ion-social-facebook
                                                            "
                                                        ></i>
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        class="item-social"
                                                    >
                                                        <i
                                                            class="
                                                                ion
                                                                ion-social-twitter
                                                            "
                                                        ></i>
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        class="item-social"
                                                    >
                                                        <i
                                                            class="
                                                                ion
                                                                ion-social-googleplus
                                                            "
                                                        ></i>
                                                    </a>
                                                    <a
                                                        href="javascript:;"
                                                        class="item-social"
                                                    >
                                                        <i
                                                            class="
                                                                ion
                                                                ion-social-vimeo
                                                            "
                                                        ></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div> -->
                                        <div class="content-blog">
                                            <div v-html="detail.content"></div>

                                            <div class="tags">
                                                <span class="name-field"
                                                    >Tags:</span
                                                >
                                                <a
                                                    href="javascript:;"
                                                    class="tag-item"
                                                    >{{detail.tag}}</a
                                                >
                                                <!-- <a
                                                    href="javascript:;"
                                                    class="tag-item"
                                                    >film studio</a
                                                > -->
                                            </div>
    <div
                                                class="navigate-blog"
                                                style="margin-top: 20px"
                                            >
                                                <div
                                                    class="navi-item prev-blog"
                                                    v-if="detail.last"
                                                >
                                                    <router-link
                                                        :to="`/singleVideo?id=${detail.last.id}&categoryId=${detail.last.lessonCategoryId}`"
                                                        class="navi-arrow"
                                                    >
                                                        <i
                                                            class="
                                                                ion
                                                                ion-ios-arrow-thin-left
                                                            "
                                                        ></i
                                                    ></router-link>

                                                    <div class="navi-text">
                                                        <div class="name-navi">
                                                            PREVIOUS
                                                        </div>
                                                        <div class="title-navi">
                                                            <router-link
                                                                :to="`/singleVideo?id=${detail.last.id}&categoryId=${detail.last.lessonCategoryId}`"
                                                                >{{
                                                                    detail.last
                                                                        .name
                                                                }}</router-link
                                                            >
                                                        </div>
                                                        <div class="info-navi">
                                                            {{
                                                                detail.last
                                                                    .releaseDateStr
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="navi-item next-blog"
                                                    v-if="detail.next"
                                                >
                                                    <div class="navi-text">
                                                        <div class="name-navi">
                                                            Next
                                                        </div>
                                                        <div class="title-navi">
                                                            <router-link
                                                                :to="`/singleVideo?id=${detail.next.id}&categoryId=${detail.next.lessonCategoryId}`"
                                                                >{{
                                                                    detail.next
                                                                        .name
                                                                }}</router-link
                                                            >
                                                        </div>
                                                        <div class="info-navi">
                                                            {{
                                                                detail.next
                                                                    .releaseDateStr
                                                            }}
                                                        </div>
                                                    </div>
                                                    <router-link
                                                        :to="`/singleVideo?id=${detail.last.id}&categoryId=${detail.last.lessonCategoryId}`"
                                                        class="navi-arrow"
                                                    >
                                                        <i
                                                            class="
                                                                ion
                                                                ion-ios-arrow-thin-right
                                                            "
                                                        ></i
                                                    ></router-link>
                                                </div>
                                            </div>
  <comment
                                                :lessonId="$route.query.id"
                                                lessonType="文章"
                                                :categoryId="
                                                    $route.query.categoryId
                                                "
                                            ></comment>
                                   <related  :lessonId="$route.query.id"
                                                lessonType="文章"
                                                :categoryId="
                                                    $route.query.categoryId
                                                "></related>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </main>
                        <div
                            class="
                                widget-area
                                col-sm-9 col-md-8 col-lg-3
                                sticky-sidebar
                            "
                        >
                            <!-- <aside class="widget widget_search">
                                <form class="search-form">
                                    <label>
                                        <span class="screen-reader-text"
                                            >Search for:</span
                                        >
                                        <input
                                            class="search-field"
                                            type="text"
                                            name="search"
                                            placeholder="What are you looking for ?"
                                        />
                                    </label>
                                    <button
                                        class="search-submit"
                                        type="button"
                                        id="submitSearch"
                                    ></button>
                                </form>
                            </aside>
                            <aside class="widget widget_categories">
                                <h3 class="widget-title">文章分类</h3>
                                <ul>
                                    <li class="cat-item">
                                        <a href="javascript:;"> Film maker </a>
                                        <span class="count">32</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="javascript:;"> Film studio </a>
                                        <span class="count">32</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="javascript:;"> Life style </a>
                                        <span class="count">16</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="javascript:;"> Fashion </a>
                                        <span class="count">08</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="javascript:;"> Film online </a>
                                        <span class="count">45</span>
                                    </li>
                                    <li class="cat-item">
                                        <a href="javascript:;"> Film studio </a>
                                        <span class="count">32</span>
                                    </li>
                                </ul>
                            </aside> -->
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
                                            <div class="post-item" v-for="item in listMostPopular" :key="item.id">
                                                <router-link
                                                    :to="`/singlearticle?id=${item.id}&categoryId=${item.lessonCategoryId}`"
                                                    target="_blank" class="pic"
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
                                                    target="_blank" class="pic"
                                                >
                                                   {{item.name}}
                                                </router-link>
                                                    
                                                    </h4>
                                                    <div class="info">
                                                       {{item.gmtCreatedStr}}
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
import comment from "../global/comment.vue";
import related from "../global/related.vue";
export default {
    components: {
        comment,related
    },
    mounted() {
        this.$http.post("/api/lesson/article/addViews", {
            id: this.$route.query.id,
        });
        this.getDetail();
        this.getlistMostPopular()
    },
    data() {
        return {
            detail: {},
            listMostPopular:[]
        };
    },
    methods: {
         getlistMostPopular() {
            this.$http
                .post("/api/lesson/article/listMostPopular", {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.listMostPopular = response.data.data;
                    }
                });
        },
        getDetail() {
            this.$http
                .get(`/api/lesson/article/detail/${this.$route.query.id}`, {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.detail = response.data.data;
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