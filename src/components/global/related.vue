<template>
  <div class="related-blog" v-if="related.length">
            <h3 class="related-title">You May Also Like</h3>
            <div class="wrap-element">
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
                                <i class="ion ion-chevron-left"></i>
                            </div>
                            <div class="arow-slick next-slick">
                                <i class="ion ion-chevron-right"></i>
                            </div>
                        </div>
                        <div class="slide-slick">
                            <div class="item-slick" v-for="item in related" :key="item.id">
                                <div class="post-item">
                                    <div class="pic">
                                        <img
                                            :src="item.bannerUrl"
                                            alt="IMG"
                                        />
                                        <div class="overlay"></div>
                                        <div class="meta-info">
                                            <!-- <div class="imdb">
                                                <span class="value">5</span>IMDb
                                            </div> -->
                                            <div
                                                class="label"
                                                style="background: #e40914"
                                            >
                                                {{item.tag}}
                                            </div>
                                        </div>
                                        <a  class="btn-play"></a>
                                    </div>
                                    <h4 class="title">
                                        <a >
                                            {{item.name}}
                                        </a>
                                    </h4>
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
    props: {
        lessonId: [String, Number],
        lessonType: [String, Number],
        categoryId: [String, Number],
    },
    data() {
        return {
            related: [],
        };
    },
    watch: {
        lessonId:{
            handler(){
                this.getList()
            },
            immediate:true
        },
        lessonType:{
            handler(){
                this.getList()
            },
            immediate:true
        },
    },
    methods: {
        getList() {
            this.$http
                .post("/api/lesson/video/list", {
                    lessonCategoryId: this.categoryId,
                    limit: 8,
                    page: 1,
                })
                .then((response) => {
                    if (response.data.code === 0) {
                        this.related = response.data.data;
                    }
                });
        },
    },
};
</script>

<style>

</style>