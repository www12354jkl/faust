import type { Block } from './Block'

export class Article {
    id: string
    title: string
    category: string
    readTime: number
    date: string
    summary: string
    blocks: Block[]

    constructor({ id, title, category, readTime, date, summary, blocks }: {
        id: string
        title: string
        category: string
        readTime: number
        date: string
        summary: string
        blocks: Block[]
    }) {
        this.id = id
        this.title = title
        this.category = category
        this.readTime = readTime
        this.date = date
        this.summary = summary
        this.blocks = blocks
    }
}