const Notification = (function () {
    const container = document.querySelector('.tasks-wrap .container')

    const show = message => {
        hide()
        const alert = `<div class="notification ${message.class}">${message.text}</div>`
        container.insertAdjacentHTML('afterbegin', alert)

        setTimeout(() => hide(), 2000)
    }

    const hide = () => {
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }
    return {show}
}())