function toggleOpenButton(ele) {
    if (ele.classList.contains("open")) {
        document.querySelectorAll(".answer-icon").forEach(obj => {
            obj.classList.remove("close")
            obj.classList.add("open")
        })
        ele.classList.remove("open")
        ele.classList.add("close")
    } else {
        ele.classList.add("open")
        ele.classList.remove("close")
    }
}