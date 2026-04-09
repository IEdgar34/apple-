import "~/style.css";
import "~/font.css";
import "./assets/scss/style.scss";
window.addEventListener("DOMContentLoaded", () => {
	const burgerBtn = document.querySelector(".burger");
	const navList = document.querySelector(".nav-list-mob");
	const wrapper = document.querySelector(".wrapper");
	const ftContent = document.querySelectorAll(".ft-content");
	const ftContentList = document.querySelectorAll(".ft-content__list");
	const ftContentBtn = document.querySelector(".ft-content-btn");

	burgerBtn.addEventListener("click", () => {
		navList.classList.toggle("nav-list-mob_active");
		burgerBtn.classList.toggle("burger_active");
		document.body.classList.toggle("overflow");

		let attr =
			navList.getAttribute("aria-hidden") === "true" ? "false" : "true";
		navList.setAttribute("aria-hidden", `${attr}`);
	});

	ftContent.forEach((item) => {
		item.addEventListener("pointerdown", (e) => {
			let child = e.currentTarget.querySelector(".ft-content__list");
			let ftContentBtn = e.currentTarget.querySelector(".ft-content-btn ");
			//
            child.classList.toggle('open')
            ftContentBtn.classList.toggle('ft-content-btn_rotate')
			//
			if (child.classList.contains('open')) {
				child.style = `
                height: ${child.scrollHeight}px;
                scale:1;
                pointer-events: unset;
                transition: height 0.3s ,scale 0.5s;
                position:static;
            `;
			}else {
                 child.style = `
               
            `
            }
		});
	});
	ftContentList.forEach(item => {
		item.addEventListener('transitionend',(e) => {
			if(e.propertyName === 'height') {
				item.style.height = 'auto'
			}
		})
	})
});
