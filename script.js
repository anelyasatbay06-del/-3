function showTask(taskNumber) {
    const cards = document.querySelectorAll('.task-card');
    const buttons = document.querySelectorAll('.tab-btn');

    cards.forEach(card => card.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(`task${taskNumber}`).classList.add('active');
    buttons[taskNumber - 1].classList.add('active');
}

function runTask1() {
    const name = document.getElementById('t1_name').value;
    const age = Number(document.getElementById('t1_age').value);
    const spec = document.getElementById('t1_spec').value;
    const status = age >= 18 ? "Ересек студент" : "Кәмелетке толмаған студент";
    console.log(`Аты-жөні: ${name}, Жасы: ${age}, Мамандығы: ${spec}, Статус: ${status}`);
    document.getElementById('res1').innerText = `Студент: ${name}\nЖасы: ${age}\nМамандығы: ${spec}\nНәтиже: ${status}`;
}

function runTask2() {
    const a = Number(document.getElementById('t2_num1').value);
    const b = Number(document.getElementById('t2_num2').value);
    const sum = a + b, diff = a - b, mult = a * b;
    const div = b !== 0 ? (a / b).toFixed(2) : "0-ге бөлуге болмайды";
    let comp = a > b ? `${a} > ${b}` : (b > a ? `${b} > ${a}` : "Сандар тең");
    document.getElementById('res2').innerText = `Қосындысы: ${sum}\nАйырмасы: ${diff}\nКөбейтіндісі: ${mult}\nБөліндісі: ${div}\nСалыстыру: ${comp}`;
}

function runTask3() {
    const n = Number(document.getElementById('t3_num').value);
    let sign = n > 0 ? "Оң сан" : (n < 0 ? "Теріс сан" : "Нөл");
    let parity = (n % 2 === 0 && n !== 0) ? "Жұп сан" : (n === 0 ? "Нөл" : "Тақ сан");
    let div10 = n % 10 === 0 ? "10-ға бөлінеді" : "10-ға бөлінбейді";
    document.getElementById('res3').innerText = `Нәтиже:\n- ${sign}\n- ${parity}\n- ${div10}`;
}

function runTask4() {
    const m1 = Number(document.getElementById('t4_m1').value);
    const m2 = Number(document.getElementById('t4_m2').value);
    const m3 = Number(document.getElementById('t4_m3').value);
    const att = Number(document.getElementById('t4_att').value);
    const avg = (m1 + m2 + m3) / 3;
    let grade = avg >= 90 ? "Өте жақсы" : (avg >= 75 ? "Жақсы" : (avg >= 50 ? "Қанағаттанарлық" : "Қанағаттанарлықсыз"));
    let access = (avg > 50 && att > 75) ? "Емтиханға жіберілді" : "Емтиханға жіберілмеді";
    document.getElementById('res4').innerText = `Орташа балл: ${avg.toFixed(1)}\nБаға: ${grade}\nРұқсат: ${access}`;
}

function runTask5() {
    const price = Number(document.getElementById('t5_price').value);
    const count = Number(document.getElementById('t5_count').value);
    const total = price * count;
    let discount = total > 50000 ? 0.15 : (total > 30000 ? 0.10 : 0);
    const finalTotal = total - (total * discount);
    document.getElementById('res5').innerText = `Жалпы сома: ${total} тг\nЖеңілдік: ${discount * 100}%\nТөленетін сома: ${finalTotal} тг`;
}

function runTask6() {
    const hour = Number(document.getElementById('t6_hour').value);
    let msg = "";
    if (hour < 0 || hour > 23 || isNaN(hour)) msg = "Қате уақыт";
    else if (hour >= 6 && hour <= 11) msg = "Қайырлы таң";
    else if (hour >= 12 && hour <= 17) msg = "Қайырлы күн";
    else if (hour >= 18 && hour <= 22) msg = "Қайырлы кеш";
    else msg = "Қайырлы түн";
    document.getElementById('res6').innerText = msg;
}

function runTask7() {
    const a = Number(document.getElementById('t7_n1').value);
    const b = Number(document.getElementById('t7_n2').value);
    const c = Number(document.getElementById('t7_n3').value);
    let max = a; if (b > max) max = b; if (c > max) max = c;
    let min = a; if (b < min) min = b; if (c < min) min = c;
    const avg = (a + b + c) / 3;
    let evenCount = (a % 2 === 0 ? 1 : 0) + (b % 2 === 0 ? 1 : 0) + (c % 2 === 0 ? 1 : 0);
    document.getElementById('res7').innerText = `Ең үлкен сан: ${max}\nЕң кіші сан: ${min}\nОрташа мәні: ${avg.toFixed(2)}\nЖұп сандар саны: ${evenCount}`;
}

function runTask8() {
    const age = Number(document.getElementById('t8_age').value);
    const income = Number(document.getElementById('t8_income').value);
    const exp = Number(document.getElementById('t8_exp').value);
    if (age >= 21 && income >= 250000 && exp >= 1) {
        document.getElementById('res8').innerText = "Несие мақұлданды";
    } else {
        document.getElementById('res8').innerText = "Несие берілмейді";
    }
}

function runTask9() {
    const exam = Number(document.getElementById('t9_exam').value);
    const prac = Number(document.getElementById('t9_prac').value);
    let isPassed = (exam > 50 && prac > 60);
    let gradeMsg = exam > 90 ? "Өте жақсы нәтиже" : (exam >= 75 ? "Жақсы нәтиже" : (exam >= 50 ? "Өтті" : "Өтпеді"));
    document.getElementById('res9').innerText = `Мәртебесі: ${isPassed ? "Студент өтті" : "Студент өтпеді"}\nНәтиже: ${gradeMsg}`;
}

function runTask10() {
    const name = document.getElementById('t10_name').value;
    const age = Number(document.getElementById('t10_age').value);
    const m1 = Number(document.getElementById('t10_m1').value);
    const m2 = Number(document.getElementById('t10_m2').value);
    const m3 = Number(document.getElementById('t10_m3').value);
    const att = Number(document.getElementById('t10_att').value);
    const hasCard = document.getElementById('t10_card').value === "yes";

    const avg = (m1 + m2 + m3) / 3;
    let max = m1; if (m2 > max) max = m2; if (m3 > max) max = m3;
    let min = m1; if (m2 < min) min = m2; if (m3 < min) min = m3;

    let resMsg = avg >= 75 ? "Жақсы үлгерім" : (avg >= 50 ? "Орташа үлгерім" : "Төмен үлгерім");
    let examAccess = (avg >= 50 && att >= 75 && hasCard) ? "Жіберілді" : "Жіберілмеді";
    let isTopStudent = (avg > 90 || att > 90) ? "Иә, «Үздік студент»" : "Жоқ";

    document.getElementById('res10').innerText = 
        `Студент: ${name} (${age} жас)\nОрташа балл: ${avg.toFixed(1)}\n` +
        `Ең жоғары баға: ${max}, Ең төмен баға: ${min}\n` +
        `Оқу нәтижесі: ${resMsg}\nЕмтиханға жіберілуі: ${examAccess}\n` +
        `Үздік студент мәртебесі: ${isTopStudent}`;
}