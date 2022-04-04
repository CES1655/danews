//========== Loader ==========
onload = () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 2500);

    // //========== Sticky menu ==========
    // if (window.matchMedia("(max-width: 979px)").matches) {
    //     window.addEventListener("scroll", () => {
    //         const menuScroll = document.querySelector(".menu_items");
    //         // const scrolled = window.scrollY;
    //         // console.log(scrolled);
        
    //         if (window.scrollY >= 62) {
    //             menuScroll.classList.add("sticky");
    //         } else {
    //             menuScroll.classList.remove("sticky")
    //         }
    //     })
    // }
}

// window.addEventListener("load", () => {
//     const load = document.getElementById("loader");
//     load.style.display = "none";
// })

//========== Show menu ==========
const btnMenu = document.querySelector(".navigation_menu");
const menu = document.querySelector(".menu_items");
const menuWrapper = document.querySelector(".navigation__main");

if(btnMenu) {
    btnMenu.addEventListener("click", () => {
        if (menuWrapper.classList.contains("menu__show")) {
            setTimeout(() => {
                menuWrapper.classList.remove("menu__show");
            }, 200);
            menu.style.animation = "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
        } else {
            menuWrapper.classList.add("menu__show");
            menu.style.animation = "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
        }
        //console.log("Hello")
    })
}