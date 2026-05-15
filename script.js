const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => {
            btn.classList.remove("active-btn");
        });

        tab.classList.add("active-btn");

    });

});