let content = document.querySelector('.content')

function getData(limit, skip) {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,images`)
    .then(res => res.json()) 
    .then(template);
}

function template(data) {
    products = data.products
    let productCards = ''
    products.forEach(element => {
        productCards += `<div class="card" style="width: 18rem;">
                            <img src="${element.images}" class="card-img-top" alt="${element.title}">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>`
    });
    content.innerHTML = ''
    content.innerHTML += productCards
}

let links = document.querySelectorAll('a')

let page = 1

function paginate(page){
    page = page
    let skip = page * 10 - 10
    getData(10, skip)
}

function next(move){
    if (move == 'next'){
        page += 1
    }
    else if (move == 'previous'){
        page -= 1
    }
    let skip = page * 10 - 10
    getData(10, skip)
}

getData(10, 0)

// for (let i = 0; i < links.length; i ++) {
//     links[i].addEventListener('click', function() {
//         getData(10, page * 10)
//     })
// }

// `<div class="product-card">
//                             <h3>${element.title}</h3>
//                             <img src="${element.images}" alt="${element.title}" width="200">
//                             <p><b>Price : ${element.price}</b></p>
//                         </div>`