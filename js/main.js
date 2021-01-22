let n = document.querySelector('.n');
let m = document.querySelector('.m');
let k = document.querySelector('.k');
let p = document.querySelector('.p');
let A = document.querySelector('.A');
let B = document.querySelector('.B');
let C = document.querySelector('.C');
let btn = document.querySelector('.btn');
let list = document.querySelector('.list');
let xi = [];
let pi = [];

btn.addEventListener('click', function(){
    list.innerHTML = "";
    let mx = 0*((+n.value-(+m.value + +k.value + +p.value)) / n.value) + A.value * m.value / n.value + B.value * k.value / n.value + C.value * p.value / n.value;
    let dx = (0+Math.pow(A.value, 2) * (m.value / n.value) + Math.pow(B.value, 2) * (k.value / n.value) + Math.pow(C.value, 2) * (p.value / n.value)) - Math.pow(mx, 2);
    let sko = Math.sqrt(dx);
    list.innerHTML +=(`
    <table>
        <tr>
        <td>xi</td>
        <td>0</td>
        <td>${A.value}</td>
        <td>${B.value}</td>
        <td>${C.value}</td>
        </tr>
        <tr>
        <td>pi</td>
        <td>${(+n.value-(+m.value + +k.value + +p.value)) / n.value}</td>
        <td>${m.value / n.value}</td>
        <td>${k.value / n.value}</td>
        <td>${p.value / n.value}</td>
        </tr>
      </table>
        <p>
            Билеты без выигрыша: ${+n.value-(+m.value + +k.value + +p.value)}
        </p>

        <li>
            Математическое ожидание: ${mx}
        </li>

        <li>
            Дисперсия:              ${dx}
        </li>

        <li>
            Среднее квадратичное отклонение: ${sko}
        </li>

    `);
});