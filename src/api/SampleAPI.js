// Sample Api
// https://reqres.in/api/users/2

/*
function SampleAPI() {
    fetch('https://reqres.in/api/users/2')
    .then(response => (response.json()))
    .then(({data}) => {
        console.log('Success', data)
        return JSON.stringify(data)
    })
    //.then(data => (console.log('Success: ', data.data)))
    .catch(error => (console.error('Error: ', error)));
}
*/

async function SampleAPI() {
    const response = await fetch('https://reqres.in/api/users/2')

    var data = await response.json()
    console.log(data.data)
    return JSON.stringify(data.data)
}

export default SampleAPI
