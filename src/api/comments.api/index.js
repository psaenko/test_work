import {DefaultAPIInterface} from "@/api";

export const CommentsAPI = {
    getComments(postId) {
        const url = '/comments?postId=' + postId;
        return DefaultAPIInterface(url)
    },
}
