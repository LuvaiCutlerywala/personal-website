let theme = "dark";

function changeTheme(){
    let body = document.querySelector("body");
    let sidebar = document.querySelector("#sidebar");

    if(theme === 'dark'){
        body.style.backgroundImage = 'radial-gradient(#d8dee9, #e5e9f0)';
        sidebar.style.backgroundColor = "#eceff4";
        console.log("Switching to light theme");
        theme = 'light';
    } else {
        body.style.backgroundImage = 'radial-gradient(#434c5e, #4c566a)';
        sidebar.style.backgroundColor = 'black';
        console.log("Switching to dark theme");
        theme = 'dark'; 
    }
}

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
window.addEventListener("load", () => {
    assignRenderers();
    
});

