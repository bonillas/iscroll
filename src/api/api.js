export const fetchImages = (page=1)=>{
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    .then(response=>response.json())
    .then(result=>result)
    .catch(e=>"error")
}