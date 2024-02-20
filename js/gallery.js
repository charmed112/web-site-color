//получение всех необходимых элементов
const gallery = document.querySelectorAll(".image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img"),
    shadow = document.querySelector(".shadow");
window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //передача общей длины img в переменную totalImg
        let newIndex = i; //передача значения i в переменную newIndex
        let clickedImgIndex; //создание новой переменной

        gallery[i].onclick = () => {
            clickedImgIndex = i; //передача индекса кликнутого изображения в созданную переменную (clickedImgIndex)
            function preview() {
                currentImg.textContent = newIndex + 1; //передача текущего индекса img в currentImg varible с добавлением +1
                let imageURL = gallery[newIndex].querySelector("img").src; //получение URL-адреса img, по которому пользователь нажал
                previewImg.src = imageURL; //проходящий пользователь нажал на URL img в previewImg src
            }
            preview(); //вызов вышеуказанной функции

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if (newIndex == 0) { //если значение индекса равно 0, то скрыть prevBtn
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) { //если значение индекса больше и равно длине галереи на -1, то скройте nextBtn
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () => {
                newIndex--; //уменьшение индекса
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++; //увеличение индекса
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show");
            shadow.style.display = "block";
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex; //присвоение индексу img, по которому пользователь впервые нажал, значения newIndex
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }

    }
}