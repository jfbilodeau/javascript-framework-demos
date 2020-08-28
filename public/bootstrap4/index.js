$(() => {
    $('#commandGreet').click(() => {
        const body = {
            name: $('#fieldName').val()
        }

        $.post('/hello', body, (response) => {
            $('#labelMessage').text(response.message)
        })
    })
})
