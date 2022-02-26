import Rest from './RestMicroservices'
const PostService={
    findbyuserid: Rest.postService+"/post/findbyuserid",
    commendadd: Rest.postService+"/comment/add"
}
export default PostService