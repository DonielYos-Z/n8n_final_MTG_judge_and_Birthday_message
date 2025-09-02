const init = () => {

}
const onsub = (e) => {
    e.preventDefault()
    console.log("form sent")
    let user = document.getElementById('name').value
    let email = document.getElementById('email').value
    const url = `http://localhost:5678/webhook-test/69b373f2-48ac-4b65-b2b3-285c914426bc?name=${user}&email=${email}`
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
}
init()