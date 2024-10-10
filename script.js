{const wrapper = document.querySelector(".wrapper.post")
const API_LINK = "https://jsonplaceholder.typicode.com/posts"
async function getData(api) {
    const response = await fetch(api)
    response
    .json()
    .then(res => createCard(res))
    .catch(er => console.log(er))
    
}
getData(API_LINK)

function createCard(data){
    data.forEach((post)=>{
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML= `
           <h3>${post.title}</h3>
            <p>${post.body}</p>
        `
        wrapper.appendChild(div)
        console.log(div)
    })
}}

{
    const wrapper = document.querySelector(".wrapper.albums")
    const API_LINK = "https://jsonplaceholder.typicode.com/albums"
    async function getData(api){
        const response = await fetch(api)
        response
        .json()
        .then(res => createCard(res))
        .catch(er => console.log(er))
    }
    getData(API_LINK)

function createCard(data){
    data.forEach((albums)=>{
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML= `
           <h3>${albums.title}</h3>
        `
        wrapper.appendChild(div)
        console.log(div)
    })
}}

{
    const wrapper = document.querySelector(".wrapper.users")
    const API_LINK = "https://jsonplaceholder.typicode.com/users"
    async function getData(api) {
        const response = await fetch(api)
        response
        .json()
        .then(res=> createCard(res))
        .catch(er=> console.log(er))
        
    }
    getData(API_LINK)
    function createCard(data){
        data.forEach((users)=>{
            let div = document.createElement("div")
            div.className = "card"
            div.innerHTML= `
           <p>Name: ${users.name}</p>
           <p>Username${users.username}</p>
           <p>Email: ${users.email}</p>
           <h3>Address</h3>
           <p>Street: ${users.address.street}</p>
           <p>Suite: ${users.address.suite}</p>
           <p>City: ${users.address.city}</p>
           <p>Zipcode: ${users.address.zipcode}</p>
           <p>Lat: ${users.address.geo.lat}</p>
           <p>Lng: ${users.address.geo.lng}</p>
           <h3>Company</h3>
           <p>Phone: ${users.phone}</p>
           <p>Website: ${users.website}</p>
           <p>Name: ${users.company.name}</p>
           <p>CatchPhrase: ${users.company.catchPhrase}</p>
           <p>Bs: ${users.company.bs}</p>
           
           `
            wrapper.appendChild(div)
            console.log(div)

            
            

        })
    }
}
              