console.log('hello world')

const helloWorldBox = document.getElementById('hello-world')

helloWorldBox.innerHTML = 'Hello <b>World</b>'

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response) {
        console.log('success', response)
        helloWorldBox.textContent = response.text
    },
    error: function(error){
        console.log('error', error)
    }
})