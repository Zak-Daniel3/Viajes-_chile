
$(document).ready(function () {

    let git = $("#github")
    let face = $("#facebook")
    let link = $("#linkedin")
    let twit = $("#twitter")

    git.click(function () {

        $(location).attr('href', 'https://github.com/')

    })

    face.click(function () {

        $(location).attr('href', 'https://facebook.com/')

    })

    link.click(function () {

        $(location).attr('href', 'https://linkedin.com/')

    })

    twit.click(function () {

        $(location).attr('href', 'https://twitter.com/')

    })


})


