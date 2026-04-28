export function useScrollTo(id: string){
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}