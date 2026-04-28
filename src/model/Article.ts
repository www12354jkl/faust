export class Article{
    id: number
    title: string
    type: string
    time: number
    date: string

    constructor({id, title, type, time, date}:{
        id: number
        title: string
        type: string
        time: number
        date: string
    }) {
        this.id = id
        this.title = title
        this.type = type
        this.time = time
        this.date = date
    }
}