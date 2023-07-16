class GithubRequest{
    
    async request_by_since(since){
        const axios = require('axios');

        const link = `https://api.github.com/users?since=${since}`

        return await axios.get(link)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
    }
}

module.exports = GithubRequest