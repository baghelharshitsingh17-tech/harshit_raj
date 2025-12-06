let m = document.getElementById('minus')
 let p = document.getElementById('plus')
 let q = document.getElementById('qty')
 let t = document.getElementById('total')

let qnt = 1;
// let qntt = qnt
let price = 249;
p.addEventListener('click', function(){
    qnt++
    q.textContent = qnt
    t.textContent = price*qnt
})
m.addEventListener('click', function(){
    if(qnt>0){
        qnt--
        q.textContent = qnt
        t.textContent = price*qnt
        
    }
})


let m_1 = document.getElementById('minus_1')
let p_1 = document.getElementById('plus_1')
let q_1 = document.getElementById('qty_1')
let t_1 = document.getElementById('total_1')

let qnt_1 = 1;
let price_1 = 339;

p_1.addEventListener('click', function(){
    qnt_1++
    q_1.textContent = qnt_1
    t_1.textContent = price_1 * qnt_1
})

m_1.addEventListener('click', function(){
    if(qnt_1 > 0){
        qnt_1--
        q_1.textContent = qnt_1
        t_1.textContent = price_1 * qnt_1
    }
})