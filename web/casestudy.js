class product {
    constructor(photo, type, dec, price, sale, href, quan) {
        this.photo = photo;
        this.type = type;
        this.dec = dec;
        this.price = price;
        this.sale = sale
        this.href = href
        this.quan = quan

    }
}
let tb = document.getElementById('products')
let products = [
    new product("honkai.png", "ACCOUNT HONKAI STAR RAIL", "ACC reroll seele/bailu/clara/...", 600000, 5, 1),
    new product("valorant.png", "ACCOUNT VALORANT", "ACC valorant giá rẻ chỉ từ 200k đến 1m sở hữu ngay acc xịn", 200000, 7,1),
    new product("dst.png", "DON'T STARVE TOGETHER", "Hỗ trợ mua game don't starve together đang giảm giá tới 90%", 16500, 90, 1),
    new product("genshin.png", "ACCOUNT GENSHIN IMPACT", "ACC genshin impact giá rẻ (trấn + nhân vật)", 250000, 0, 1),
    new product("kazuha.png", "KAZUHA", "(Kazuha + trấn) giá siêu rẻ ", 400000, 0, 1),
    new product("klee.png", "KLEE", "Klee giá = 1 ly cafe", 50000, 0, 2),
    new product("mona.png", "MONA C6+RAIDEN C3", "Mnona C6 + Raiden c3 nuke ", 400000, 0, 1),
    new product("zhongi.png", "Zhongli+Trấn", "Zhongli C2 + giáo nịnh thần", 200000, 0, 1)
]
for (let i = 0; i < products.length; i++) {
    console.log(i.photo)
    tb.innerHTML += `
                
                <div class="product" >
                    <img class="photo-product" src="${products[i].photo}" alt="">
                    <p class="type">${products[i].type}</p>
                    <p class="dec">${products[i].dec}</p>
                    <div>
                        <span class="price">${formatCurrency(products[i].price)}</span>
                        
                    </div>
                    <div class="onsale">
                        <span class="sale">-${products[i].sale}%</span>
                    </div>
                    <div>
                        <button  type="button" onclick="addpr(${i})">
                            
                            <span>Thêm Vào Giỏ Hàng</span>
                        </button>
                    </div>       
                </div>
        `

}

function formatCurrency(number) {
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
let cart = [  
];
function show() {
    let sp = "";
    for (let i = 0; i < cart.length; i++) {
        sp += `
            <div class="cart">
                <div class="cart-sp" style="display: flex;">
                    <img src="${cart[i].photo}" alt="">
                    <p>${cart[i].dec}</p>
                </div>
                <div class="cart-pr">
                    <p style="color: red "><del style="color: black ;font-size:13px  ;text-shadow:none"></del>  ${formatCurrency(cart[i].price)}</p>
            
                    <p style="display: flex;">
                        <button onclick="tru(${i})" style="margin-left :20px">-</button>
                        <input type="number" readonly class="sl" value="${cart[i].quan}" width=20px>
                        <button onclick="cong(${i})">+</button>
                    </p>
                    <p style="color: red  ">${formatCurrency(cart[i].price * cart[i].quan)}</p>   
                    <p>
                    <button onclick="buy(${i})"> Mua hàng</button>
                    <button onclick="del(${i})">xoá</button>
                    
                    </p>
                    
                </div>
            </div>`


    }

    document.getElementById('cart').innerHTML = sp
}

function addpr(i) {
    if (cart.indexOf(products[i]) != -1) {
        products[i].quan += 1
    } else {
        products[i].quan = 1
        cart.push(products[i])
    }
    document.getElementById('cart').innerHTML = ""
    show()
}

function del(i) {
    cart.splice(i, 1)
    document.getElementById('cart').innerHTML = ""
    show()
}
function tru(i) {
    cart[i].quan -= 1;
    if (cart[i].quan < 0) {
        if (confirm('bạn có muốn xoá sản phẩm ra khỏi giỏ hàng không') == true) {
            del(i);
        } else {
            cart[i].quan = 0
        }
    }
    document.getElementById('cart').innerHTML = ""
    show()
}
function cong(i) {
    cart[i].quan += 1;
    document.getElementById('cart').innerHTML = ""
    show()
}
function buy(i) {
    document.getElementById('dec').value = cart[i].dec
    document.getElementById('soluong').value = cart[i].quan
    document.getElementById('dongia').value = cart[i].price
    document.getElementById('thanhtien').value = cart[i].quan * cart[i].price
    document.getElementById('form-buy').style.display = "block"

}
function cancel() {
    document.getElementById('form-buy').style.display = "none"
}