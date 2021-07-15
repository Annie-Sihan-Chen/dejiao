<template>
    <div>
        <div class="comments-area">
            <div class="list-comments">
                <h3 class="comments-title" ref="comments-title">
                    {{ tree.count }} comments
                </h3>
                <ul
                    class="comment-list"
                    v-for="item in tree.commentList"
                    :key="item.id"
                >
                    <li class="comment">
                        <img class="avatar" :src="item.avatarUrl" alt="IMG" />
                        <div class="content-comment">
                            <div class="author">
                                <span class="author-name">{{ item.name }}</span>
                                <span class="comment-extra-info">{{
                                    item.gmtCreatedStr
                                }}</span>
                                <span class="link-reply-edit"
                                    ><a
                                        @click="gocomment(item)"
                                        class="comment-reply-link"
                                        >Reply</a
                                    ></span
                                >
                            </div>
                            <div class="message">
                                <p>
                                    {{ item.comment }}
                                </p>
                            </div>
                        </div>
                        <ul class="children">
                            <li
                                class="comment"
                                v-for="sub in item.children"
                                :key="sub.id"
                            >
                                <img
                                    class="avatar"
                                    :src="sub.avatarUrl"
                                    alt="IMG"
                                />
                                <div class="content-comment">
                                    <div class="author">
                                        <span class="author-name">{{
                                            sub.name
                                        }}</span>
                                        <span class="comment-extra-info">{{
                                            sub.gmtCreatedStr
                                        }}</span>
                                        <!-- <span class="link-reply-edit"
                                            ><a
                                                href="javascript:;"
                                                class="comment-reply-link"
                                                >Reply</a
                                            ></span
                                        > -->
                                    </div>
                                    <div class="message">
                                        <p>
                                            {{ sub.comment }}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="form-comment">
            <div id="respond" class="comment-respond">
                <h3
                    id="reply-title"
                    ref="reply-title"
                    class="comment-reply-title"
                >
                    发表评论
                    <small>
                        <a href="javascript:;" style="display: none"
                            >Cancel Reply</a
                        >
                    </small>
                </h3>
                <div class="comment-form" novalidate="">
                    <p class="comment-notes">
                        <span id="email-notes"
                            >Your email address will not be published.</span
                        >
                        Required fields are marked
                        <span class="required">*</span>
                    </p>
                    <div class="comment-meta">
                        <div class="row">
                            <div class="col-md-6">
                                <p class="comment-form-author">
                                    <input
                                        placeholder="Your Name *"
                                        type="text"
                                        v-model="form.name"
                                        size="30"
                                    />
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p class="comment-form-email">
                                    <input
                                        placeholder="Email *"
                                        type="text"
                                        v-model="form.email"
                                        size="30"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="comment-message">
                        <p class="comment-form-comment">
                            <textarea
                                placeholder="Enter your comment *"
                                v-model="form.comment"
                                cols="45"
                                rows="8"
                            ></textarea>
                        </p>
                    </div>
                    <p class="form-submit">
                        <input
                            @click="addComment"
                            class="submit"
                            value="提交"
                        />
                    </p>
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
            tree: {},
            currentComment: "",
            form: {
                comment: "",
                email: "",
                name: "",
            },
        };
    },
    watch: {
        lessonId: {
            handler() {
                this.getTree();
            },
            immediate: true,
        },
        lessonType: {
            handler() {
                this.getTree();
            },
            immediate: true,
        },
    },
    methods: {
        getTree() {
            if (this.lessonId && this.lessonType) {
                this.$http
                    .post("/api/lesson/comment/tree", {
                        lessonId: this.lessonId,
                        lessonType: this.lessonType,
                    })
                    .then((response) => {
                        if (response.data.code === 0) {
                            this.tree = response.data.data;
                        }
                    });
            }
        },
        gocomment(e) {
            this.currentComment = e;
            this.$refs["reply-title"].scrollIntoView();
        },
        addComment() {
            if (
                !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
                    this.form.email
                )
            ) {
                warningNotice("提醒", "邮箱格式有误");
                return;
            }

            if (this.form.name === "") {
                warningNotice("提醒", "名称不能为空");
                return;
            }
            if (this.form.comment === "") {
                warningNotice("提醒", "评论不能为空");
                return;
            }
            this.$http
                .post("/api/lesson/comment/add", {
                    comment: this.form.comment,
                    email: this.form.email,
                    lessonId: this.lessonId,
                    lessonType: this.lessonType,
                    name: this.form.name,
                    replyId: this.currentComment.id || "",
                })
                .then((response) => {
                    if (response.data.code === 0) {
                        this.form = { comment: "", email: "", name: "" };
                        this.getTree();
                        successNotice("提醒", "发表成功");
                        this.currentComment = {};

                        this.$refs["comments-title"].scrollIntoView();
                    }
                });
        },
    },
};
</script>

<style>
</style>