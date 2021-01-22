let n = document.querySelector('.n');
let m = document.querySelector('.m');
let k = document.querySelector('.k');
let p = document.querySelector('.p');
let A = document.querySelector('.A');
let B = document.querySelector('.B');
let C = document.querySelector('.C');
let btn = document.querySelector('.btn');
let list = document.querySelector('.list');
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
            М(х) Математическое ожидание: ${mx}
        </li>

        <li>
            D(х) Дисперсия:              ${dx}
        </li>

        <li>
            &delta;(х) Среднее квадратичное отклонение: ${sko}
        </li>

    `);
});

//------task1--------------------------------------------------------------------------------------------------------------------------------------------------------------

let inpN = document.querySelector('.inpN');
let btnT1 = document.querySelector('.btnT1');
let table = document.querySelector('.tableT1');
let result = document.querySelector('.tabResult');
let xi = [];
let pi = [];
pi[0]=0.17;
pi[1]=0.03;
pi[2]=0.16;
pi[3]=0.07;
pi[4]=0.12;
pi[5]=0.4;
pi[6]=0.04;
pi[7]=0.01;

btnT1.addEventListener('click', function(){
    
    xi[0]=+inpN.value - 10;
    xi[1]=+inpN.value - 6;
    xi[2]=+inpN.value - 2;
    xi[3]=+inpN.value;
    xi[4]=+inpN.value + 1;
    xi[5]=+inpN.value + 3;
    xi[6]=+inpN.value + 5;
    xi[7]=+inpN.value + 8;

    let mxt1 = xi[0]*pi[0] + xi[1]*pi[1] +xi[2]*pi[2] +xi[3]*pi[3] +xi[4]*pi[4] +xi[5]*pi[5] +xi[6]*pi[6] +xi[7]*pi[7];
    let dxt1 = Math.pow(xi[0], 2) * pi[0] + Math.pow(xi[1], 2) * pi[1] +Math.pow(xi[2], 2) * pi[2] +Math.pow(xi[3], 2) * pi[3] +Math.pow(xi[4], 2) * pi[4] +Math.pow(xi[5], 2) * pi[5] +Math.pow(xi[6], 2) * pi[6] +Math.pow(xi[7], 2) * pi[7] - Math.pow(mxt1, 2);
    let skot1 = Math.sqrt(dxt1);

    if(inpN.value==""){
        alert('Заполниет поле n!')
    }else{
        table.innerHTML = "";
        table.innerHTML = (`
        <tr>
            <td>xi</td>
            <td>${xi[0]}</td>
            <td>${xi[1]}</td>
            <td>${xi[2]}</td>
            <td>${xi[3]}</td>
            <td>${xi[4]}</td>
            <td>${xi[5]}</td>
            <td>${xi[6]}</td>
            <td>${xi[7]}</td>
        </tr>
        <tr>
            <td>pi</td>
            <td>${pi[0]}</td>
            <td>${pi[1]}</td>
            <td>${pi[2]}</td>
            <td>${pi[3]}</td>
            <td>${pi[4]}</td>
            <td>${pi[5]}</td>
            <td>${pi[6]}</td>
            <td>${pi[7]}</td>
        </tr>

    `);

        result.innerHTML = (`
            <tr>
                <td>M(x)</td>
                <td>${mxt1}</td>
            </tr>
            <tr>
                <td>D(x)</td>
                <td>${dxt1}</td>
            </tr>
            <tr>
                <td>&delta;(х)</td>
                <td>${skot1}</td>
            </tr>
        `);

    }
    
});
