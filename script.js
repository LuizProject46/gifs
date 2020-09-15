const key = 'rpIL8rQqz3YzPdvKLUX3qyxe97YoB5Qs'


listGif = ()=>{
  let url = `http://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=5`
  var html = ''
  fetch(url).then(response=>{
    response.json().then(res =>{
     res.data.forEach(element => {
      
      var el = document.createElement('div')
      el.classList.add('card')
       el.innerHTML = `
       <img style="border-radius:9px;"width="390" height="330"  src="${element.images.original.url}"/>
       `

       document.getElementById('content').appendChild(el)
     
     });
     
    
    })
  })

  

}

searchGif = (name)=>{
  let url = `http://api.giphy.com/v1/gifs/search?q=${name}&api_key=${key}&limit=5`
  var gifs = document.getElementsByClassName('card')
  
  for(let i = 0;i < gifs.length;i++){
    gifs[i].style.display = 'none'
  }
  

  fetch(url).then(response =>{
    response.json().then(res=>{
      res.data.forEach(element =>{
        var el = document.createElement('div')
        el.classList.add('card')
         el.innerHTML = `
         <img style="border-radius:9px;"width="390" height="330"  src="${element.images.original.url}"/>
         `
  
         document.getElementById('content').appendChild(el)
      })
      
    })
  })
}

listGif()