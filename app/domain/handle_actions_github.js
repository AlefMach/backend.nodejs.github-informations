class HandleActionsGithub {
    constructor(){
        this.GithubRequest = require('../infra/adapters/github_requests')
    }

    async handle_get_by_since(since, appLink) {
        const github = new this.GithubRequest()

        const resp = await github.request_by_since(since);

        if(resp && resp.status == 200) {
            const data = resp.data.slice(0, 10)

            const last_item_data = data[data.length - 1]

            const next_page_number = last_item_data.id

            const link_next = `${appLink}/api/users?since=${next_page_number}`

            return {
                'data': data, 
                'next_page_link': link_next
            }
        }else {
            return resp
        }
    }

}

module.exports = HandleActionsGithub