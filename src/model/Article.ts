import type { Block } from './Block' // 看你要不要把 Block 也单独定义

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