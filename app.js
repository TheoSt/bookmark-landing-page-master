let menu_dropdown = document.querySelector("#hamburger-icon");
let nav_menu = document.querySelector(".nav-menu");
let main_logo = document.querySelector("#main-logo");
let close_btn = document.querySelector("#close-btn");
let tab_headings = document.querySelectorAll(".tab-heading");
let tabs = document.querySelectorAll(".tab");
let underline_span = document.querySelectorAll(".tab-heading span");
let arrows_accordion = document.querySelectorAll(".faq-question img");
let email_input = document.querySelector("#email-input");
let form_input = document.querySelector("form");

email_input.addEventListener("invalid", function(e) {
    e.preventDefault();
    console.log("n");
    this.parentElement.classList.add("error");
    this.previousElementSibling.classList.add("error-icon");
    this.nextElementSibling.textContent="Whoops, make sure it's an email";
    this.nextElementSibling.classList.add("error-message");
});

form_input.addEventListener("submit", function(e) {
    e.preventDefault();
    let c = this.children[1];
    c.classList.remove("error");
    c.classList.add("success");
    c.children[0].classList.remove("error-icon");
    c.children[2].classList.remove("error-message");
    c.children[2].textContent = "Thank you,we'll keep you updated";
    c.children[2].classList.add("success-message");


});

arrows_accordion.forEach(a => a.addEventListener("click",function() {
        this.nextElementSibling.classList.toggle("active");
        this.classList.toggle("reversed-arrow");
    })
);

menu_dropdown.addEventListener("click",function() {
    nav_menu.classList.toggle("show");
    main_logo.style.display = "none";
    this.style.display = "none";
});

close_btn.addEventListener("click", function() {
    nav_menu.classList.toggle("show");
    main_logo.style.display = "block";
    menu_dropdown.style.display="block";
});

tab_headings.forEach(t => t.addEventListener("click",function() {
    let heading = this.getAttribute("id");

    for(u of underline_span) {
        if(u.parentElement === this) {
            u.classList.add("heading-underline");
            u.previousElementSibling.classList.add("bold");
        }
        else {
            u.classList.remove("heading-underline");
            u.previousElementSibling.classList.remove("bold");
        }
    }
    

    tabs.forEach(i => {
        i.classList.remove("tab-active");
    })
    
    if(heading==="first-tab-heading") {
        tabs[0].classList.add("tab-active");
        tabs[0].style.opacity = 1;
    }
    else if(heading==="second-tab-heading") {
        tabs[1].classList.add("tab-active");
        tabs[1].style.opacity = 1;
    }
    else {
        tabs[2].classList.add("tab-active");
        tabs[2].style.opacity = 1;
    }
}));