function assignRenderers(){

    //Elements with renderers attached:
    let csSection = document.getElementById("cs-section");

    //Observer options:
    let csSectionOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    //Intersection Observers:
    new IntersectionObserver(csSectionRender, csSectionOptions).observe(csSection);
}

function csSectionRender(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.style.animation = "render-background 1s ease-in-out";
            entry.target.addEventListener("animationend", () => {
                entry.target.style.opacity = 1;
            });
        }
    });
}

//On load, the intersection observers should be assigned to each component that has one.
window.addEventListener("load", (event) => {
    assignRenderers();
});

