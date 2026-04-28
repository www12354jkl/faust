import {onMounted, onUnmounted} from "vue";
export function useReveal() {
    let observer : IntersectionObserver
    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i)=>{
                if (entry.isIntersecting) {
                    setTimeout(()=>{
                        entry.target.classList.remove("opacity-0","translate-y-6")
                    }, i*80)
                    observer.unobserve(entry.target)
                }
            })
        }, {threshold: 0.1})
        document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    })
    onUnmounted(() => observer?.disconnect())
}