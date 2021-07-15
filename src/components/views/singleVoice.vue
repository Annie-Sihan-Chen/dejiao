<template>
    <div id="main-content">
        <div class="content-area">
            <div class="page-title">
                <div
                    class="main-top"
                    style="
                        background-image: url(assets/images/bg-page-title-04.jpg);
                    "
                >
                    <div class="overlay-top-header"></div>
                    <div class="content container">
                        <h1>德教云书院</h1>
                        <div class="description">
                            To start the day in the best way, enjoythe
                            extraordinary buffetbreakfast in the our courtyard
                            caressed
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-content layout-1">
                <div class="container">
                    <div class="row">
                        <main class="site-main col-12">
                            <div class="wrap-main-content">
                                <div class="bl-video-detail">
                                    <div class="player-video">
                                        <div class="bg-video">
                                            <iframe
                                                id="Player-1youtube"
                                                frameborder="0"
                                                allowfullscreen="1"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                title="YouTube video player"
                                                width="100%"
                                                height="660px"
                                                :src="detail.audioUrl"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div class="detail-video">
                                        <div class="info-detail sticky-sidebar">
                                            <div class="inner-info">
                                                <div class="media-video">
                                                    <div class="pic-video">
                                                        <img
                                                            :src="
                                                                detail.bannerUrl
                                                            "
                                                            alt="IMG"
                                                        />
                                                    </div>
                                                    <div class="meta-info">
                                                        <!-- <div class="imdb">
                                                            <span class="value"
                                                                >5</span
                                                            >评分
                                                        </div> -->
                                                        <div class="label">
                                                            {{ detail.tag }}
                                                        </div>
                                                    </div>
                                                    <div class="more-info">
                                                        <!-- <span class="item-info"
                                                            >Rating:
                                                            <i
                                                                class="
                                                                    ion
                                                                    ion-android-star
                                                                "
                                                            ></i
                                                            >8/10
                                                        </span> -->
                                                        <span class="item-info">
                                                            <i
                                                                class="
                                                                    ion ion-eye
                                                                "
                                                            ></i
                                                            >{{ detail.views }}
                                                            Views
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="info-video">
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >Actors:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                            >{{
                                                                detail.actors
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >Writer:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                            >{{
                                                                detail.writer
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >Release Date:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                            >{{
                                                                detail.releaseDateStr
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >Genres:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                            >{{
                                                                detail.genres
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >Country:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                            >{{
                                                                detail.country
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >Runtime:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                            >{{
                                                                detail.runtime
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >Language:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                            >{{
                                                                detail.language
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >Type:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                            >{{
                                                                detail.type
                                                            }}</span
                                                        >
                                                    </div>
                                                    <div class="item-info">
                                                        <span class="name-item"
                                                            >音频下载:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                        >
                                                            <a @click="download"
                                                                >点击下载</a
                                                            >
                                                        </span>
                                                    </div>
                                                    <!-- <div class="item-info">
                                                        <span class="name-item"
                                                            >音频下载:</span
                                                        >
                                                        <span
                                                            class="value-item"
                                                        >
                                                            <a
                                                                href="https://dejiao.org/wp-content/uploads/2021/04/file_example_MP3_700KB.mp3"
                                                                target="_blank"
                                                                rel="noopener"
                                                                download="w3logo"
                                                                >点击下载</a
                                                            >
                                                        </span>
                                                    </div> -->
                                                </div>
                                                <router-link
                                                    @click="
                                                        () => $router.go(-1)
                                                    "
                                                    class="
                                                        btn-watch btn-normal
                                                        shape-round
                                                    "
                                                >
                                                    返回
                                                </router-link>
                                            </div>
                                        </div>
                                        <div class="content-detail">
                                            <div class="field-detail">
                                                <h3 class="title-field">
                                                    音频内容描述
                                                </h3>
                                                <div
                                                    v-html="detail.content"
                                                ></div>
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
                                                lessonType="音频"
                                                :categoryId="
                                                    $route.query.categoryId
                                                "
                                            ></comment>

                                            <related
                                                :lessonId="$route.query.id"
                                                lessonType="音频"
                                                :categoryId="
                                                    $route.query.categoryId
                                                "
                                            ></related>
                                        </div>
                                    </div>
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
        this.$http.post("/api/lesson/audio/addViews", {
            id: this.$route.query.id,
        });
        this.getDetail();
    },
    data() {
        return {
            detail: {},
        };
    },
    methods: {
        download() {
            this.$http.post("/api/statistics/addDownloads");
            window.location.href = this.detail.audioUrl;
        },
        getDetail() {
            this.$http
                .get(`/api/lesson/audio/detail/${this.$route.query.id}`, {})
                .then((response) => {
                    if (response.data.code === 0) {
                        this.detail = response.data.data;
                    }
                });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>