var updateBtns = document.getElementsByClassName('update-cart')

for(var i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var albumProductId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'albumProductId:', albumProductId, 'action:', action)

        console.log('USER:', user)
        if(user === 'AnonymousUser'){
            addCookieItem(productId, albumProductId, action)
        }else{
            updateUserOrder(productId, albumProductId, action)
        }
    })
}

function addCookieItem(productId, albumProductId, action){
    console.log('Not logged in')

    if(action == 'add'){
        if(cart[productId, albumProductId] == undefined){
            cart[productId, albumProductId] = {'quantity':1}
        }else{
            cart[productId, albumProductId]['quantity'] += 1
        }
    }

    if(action == 'remove'){
        cart[productId, albumProductId]['quantity'] -= 1

        if(cart[productId, albumProductId]['quantity'] <= 0){
            console.log('Remove item')
            delete cart[productId]
        }
    }

    console.log('Cart:', cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
    location.reload()

}

function updateUserOrder(productId, albumProductId, action){
    console.log('User is logged in')

    var url = '/update_item/'

    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId':productId, 'albumProductId':albumProductId, 'action':action})
    })

    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log('data:', data)
        location.reload()
    });
}