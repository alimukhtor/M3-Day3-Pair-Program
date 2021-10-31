const loadUser = () =>{
  fetch("https://api.pexels.com/v1/search?query=Ocean", {
  "method": "GET",
  "headers": {
      Authorization: "563492ad6f91700001000001c5e5fe28a8174b6f8963eb819ccabd92"
  }
})
  .then(resp => {
    return resp.json()
  })
  .then(data => {
    const getRow = document.querySelector('.album .row');
    console.log(data.photos)
    const image = data.photos.map( element => `
      <div class="card mb-4 shadow-sm">
      <img src=${element.src.small}>

        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button"  class="btn btn-sm btn-outline-secondary">Hide</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>

      `)
    getRow.innerHTML = image

  })
}

const loadUser1 = () =>{
  fetch("https://api.pexels.com/v1/search?query=Tigers", {
  "method": "GET",
  "headers": {
      Authorization: "563492ad6f91700001000001c5e5fe28a8174b6f8963eb819ccabd92"
  }
})
  .then(resp => {
    return resp.json()
  })
  .then(data => {
    const getRow = document.querySelector('.album .row');
    const getButton = document.querySelector('.btn');


    console.log(data.photos)
    const image = data.photos.map( element => `  <div class="card mb-4 shadow-sm">
    <div class="card mb-4 shadow-sm">
      <img src=${element.src.small}>

        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button"  class="btn btn-sm btn-outline-secondary">Hide</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
      `)
    getRow.innerHTML = ''
    getRow.innerHTML += image

  })
}
