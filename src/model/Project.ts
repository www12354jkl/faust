export class Project {
    id: number
    type: string
    name: string
    context: string
    language: string[]

    constructor({ id, type, name, context, language }: {
        id: number
        type: string
        name: string
        context: string
        language: string[]
    }) {
        this.id = id
        this.type = type
        this.name = name
        this.context = context
        this.language = language
    }
}