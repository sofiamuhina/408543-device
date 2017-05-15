
var write_us_popup = document.querySelector(".modal_content");
var btn = document.querySelector(".company_contacts .btn");
var close = document.querySelector(".modal_content .close");
var shadow_popup = document.querySelector(".shadow");
var delivery_nav = document.querySelector(".navigation_service .delivery");
var warranty_nav = document.querySelector(".navigation_service .warranty");
var credit_nav = document.querySelector(".navigation_service .credit");
var delivery_selected = document.querySelector(".main_container > .delivery");
var warranty_selected = document.querySelector(".main_container > .warranty");
var credit_selected = document.querySelector(".main_container > .credit");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    write_us_popup.classList.add("show_js");
    shadow_popup.classList.add("show_js");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    write_us_popup.classList.remove("show_js");
    shadow_popup.classList.remove("show_js");
});

warranty_nav.addEventListener("click", function(event) {
    event.preventDefault();
    warranty_nav.classList.add("active");
    delivery_nav.classList.remove("active");
    credit_nav.classList.remove("active");
    warranty_selected.classList.add("active");
    delivery_selected.classList.remove("active");
    credit_selected.classList.remove("active");
});

delivery_nav.addEventListener("click", function(event) {
    event.preventDefault();
    warranty_nav.classList.remove("active");
    delivery_nav.classList.add("active");
    credit_nav.classList.remove("active");
    warranty_selected.classList.remove("active");
    delivery_selected.classList.add("active");
    credit_selected.classList.remove("active");
});

credit_nav.addEventListener("click", function(event) {
    event.preventDefault();
    warranty_nav.classList.remove("active");
    delivery_nav.classList.remove("active");
    credit_nav.classList.add("active");
    warranty_selected.classList.remove("active");
    delivery_selected.classList.remove("active");
    credit_selected.classList.add("active");
});