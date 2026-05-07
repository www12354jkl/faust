export class Project {
    id: number
    type: string
    name: string
    context: string
    language: string[]
    url: string
    web: string

    constructor({ id, type, name, context, language, url, web }: {
        id: number
        type: string
        name: string
        context: string
        language: string[]
        url: string
        web: string
    }) {
        this.id = id
        this.type = type
        this.name = name
        this.context = context
        this.language = language
        this.url = url
        this.web = web
    }
}