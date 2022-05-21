// const maskElements = document.querySelectorAll("[data-mascara]")

// const masks = {
//     matricula: mascaraMatricula
// }

// function mascaraMatricula(el) {
//     el.addEventListener("keydown", ev => {
//         const key = ev.key
//         if (key == "a") {
//             ev.preventDefault()
//         }
//     })
// }

// maskElements.forEach(el => {
//     const maskName = el.dataset.mascara
//     const fnMask = masks[maskName]
//     fnMask(el)
// })

const actionBar = document.querySelector("div.action-bar")
const btAdd = actionBar.querySelector(".bt-add")
const btSearch = actionBar.querySelector(".bt-search")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")

btAdd.addEventListener("click", () => {
    const cloneModal = templateModalAluno.content.cloneNode(true)
    container.prepend(cloneModal)

    const audio = new Audio('./click_sound.wav')
    audio.play()
    return
})

btSearch.addEventListener("click", () => {
    const audio = new Audio('./click_sound.wav')
    audio.play()
    return
})

container.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-close")
    if (btClose) {
        const modal = ev.target.closest(".modal")
        modal.remove()
    }
})

container.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-close")
    const btSave = ev.target.closest(".bt-save")
    if (btClose) {
        const audio = new Audio('./close_modal.wav')
        audio.play()
        return
    }
    if (btSave) {
        const audio = new Audio('./save_sound.wav')
        audio.play()
        return
    }
})