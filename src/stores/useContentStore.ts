import {defineStore} from "pinia";
import {Article} from "@/model/Article.ts";
import articlesData from "@/assets/data/articles.json"
import projectsData from "@/assets/data/projects.json"
import {Project} from "@/model/Project.ts";

export const useContentStore = defineStore('content',{
    state: () => ({
        articles: articlesData.map(article => ({
            ...article,
            blocks: article.blocks.map(block => {
                if(block.type === "demo"){
                    return {
                        ...block, isRunning: false
                    };
                }
                return block;
            })
        })) as Article[],
        projects: projectsData.map(item => new Project(item as any))
    }),
    getters: {
        getArticleById: (state) => {
            return (id: string) => state.articles.find(item => item.id === id);
        }
    }
})