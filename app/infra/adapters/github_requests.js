class GithubRequest{

    constructor(){
        this.axios = require('axios');
    }
    
    async request_by_since(since) {
        const link = `https://api.github.com/users?since=${since}`

        return await this.axios.get(link)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
    }

    async request_details_by_username(username) {
        const link = `https://api.github.com/users/${username}`

        return await this.axios.get(link)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
    }

    async request_repos_by_username(username) {
        const link = `https://api.github.com/users/${username}/repos`

        return await this.axios.get(link)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
    }
}

module.exports = GithubRequest