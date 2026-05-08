const filterItem = document.querySelector(".projects-section-filter");
const filterImg = document.querySelectorAll(".project-image");

window.onload = () => {
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("projects-item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");
                if (filterImages == filterName || filterName == "all"){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            })
        }
    }
}