import axios from "../axios"

class PostService {
    createPost = async(data) => {
        console.log("formData: " + data);
        const promise = new Promise((resolve,reject) => {
            axios.post('posts',data)
            .then((res) => {
                return(resolve(res))
            })
            .catch((er) => {
                console.log("Error: " + er);
                return(resolve(er))
            })
        })
        return await promise;
    }

    fetchPosts = async() => {
        const promise = new Promise((resolve,reject) => {
            axios.get('posts')
                .then((res) => {
                    return(resolve(res))
                })
                .catch((res) => {
                    return(reject(res))
                })
        })
        return await promise;
    }
}

export default new PostService();