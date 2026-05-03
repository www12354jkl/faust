import projectData from '@/assets/data/projects.json'
import articlesData from '@/assets/data/articles.json'
import {Article} from "@/model/Article.ts";
import {Project} from "@/model/Project.ts";
import {useRoute} from "vue-router";

export function getArticles(){
    return articlesData.map(item => new Article(item as any));
}

export function getArticle(){
    const route = useRoute()
    const articleId = route.params.id as string;
    return getArticleById(articleId);
}

export function getProjects(){
    return projectData.map(item => new Project(item as any));
}
export const getArticleById = (id: string) => {
    return articlesData.map(item => new Article(item as any)).find(item => item.id === id);
}