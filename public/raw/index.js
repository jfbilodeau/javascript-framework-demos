(() => {
    window.addEventListener('load', () => {
        const commandGreet = document.getElementById('commandGreet')

        commandGreet.addEventListener('click', async () => {
            const fieldName = document.getElementById('fieldName')
            const name = fieldName.value
            const body = {
                name
            }

            const response = await fetch('/hello', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json'
                },
            })

            const json = await response.json()

            const labelMessage = document.getElementById('labelMessage')

            labelMessage.innerText = json.message
        })
    })

})()
