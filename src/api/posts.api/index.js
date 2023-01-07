import {DefaultAPIInterface} from "@/api";

export const PostsAPI = {
    getPosts() {
        const url = '/posts';
        return DefaultAPIInterface(url)
    },

    getPost(id) {
        const url = '/posts/' + id;
        return DefaultAPIInterface(url)
    },
}
