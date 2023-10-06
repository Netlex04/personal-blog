
 
const intersect = (className: string, elements: any) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle(className, entry.isIntersecting)
        })
    })
    elements.forEach(element => {
        observer.observe(element)
    })
}
