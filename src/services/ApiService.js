export default class ApiService {

    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    initial(method, body) {
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }

    async getAllItems() {
        const items = await fetch(this.apiUrl)
            .then(data => data.json()).catch(error => error)
        return items
    }

    async getItemById(id) {
        const initial = this.initial('GET', id)
        const data = await fetch(this.apiUrl, initial)
        const item = await data.json()
        return item
    }

    async addItem(newitem) {
        const initial = this.initial('POST', newitem)
        const data = await fetch(this.apiUrl, initial)
        const item = await data.json()
        return item
    }

    async updateItem(newitem) {
        const initial = this.initial('PUT', newitem)
        const data = await fetch(this.apiUrl, initial)
        const item = await data.json()
        return item
    }

    async deleteItem(id) {
        const data = await fetch(this.apiUrl + '/' + id,
            {
                method: 'DELETE'
            })
        const item = await data.json()
        return item
    }
}