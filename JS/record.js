export function initRecord(){

    const saveBtn = document.getElementById('savebtn');
    const recordContainer = document.querySelector('.record-container');
    const inputForm = document.getElementById('input-form');

    const roastMap = {
        'a' : '浅煎り',
        'b' : '中煎り',
        'c' : '深煎り'
    };

    function outputBeanRecord(data) {
        const newRecord = document.createElement('div');
        newRecord.classList.add('bean-record');

        newRecord.innerHTML = `
            <p class ="bean-name">${data.name}</p>
            <p class ="roast-level">${data.roast}</p>
            <p class ="roast-date">${data.date}</p>
            <p class ="peak-time">${data.peakTime}</p>
            <button id="deletebtn"><i class="fa-solid fa-trash"></i></button>
        `;

        recordContainer.appendChild(newRecord);
    }

    const savedData = localStorage.getItem('BeansData');
    if (savedData) {
        const beansArray = JSON.parse(savedData);
        beansArray.forEach(bean => {
            outputBeanRecord(bean);
        });
    }

    saveBtn.addEventListener('click', () =>{
        const beanNameInput = document.getElementById('input-bean').value
        const roastRadio = document.querySelector('input[name = "roast"]:checked');
        const dateInput = document.getElementById('input-date').value;

        if (!beanNameInput || !roastRadio || !dateInput) {
            alert('すべての項目を入力してください')
            return;
        }

        const roastText = roastMap[roastRadio.value];

        const roastDate = new Date(dateInput);
        roastDate.setHours(0,0,0,0);

        const today = new Date();
        today.setHours(0,0,0,0);

        const diffDays = Math.floor((today - roastDate) / (1000 * 60 * 60* 24));

        let peakTimeText = '';
        if (diffDays < 0){
            peakTimeText = '未来の日付です';
        }else if (diffDays < 7){
            peakTimeText = 'エイジング中';
        }else if (diffDays >= 7 && diffDays < 22){
            peakTimeText = '飲み頃です!';
        }else {
            peakTimeText = 'お早めに';
        }

        const formatDate = new Intl.DateTimeFormat('ja-JP', {month: '2-digit', day: '2-digit'});
        const outputDate = formatDate.format(roastDate);

        const currentBeanData = {
            name : beanNameInput,
            roast : roastText,
            date : outputDate,
            peakTime : peakTimeText
        };

        outputBeanRecord(currentBeanData);

        let beansList = [];

        const existingData = localStorage.getItem('BeansData');
        if (existingData) {
            beansList = JSON.parse(existingData);
        }

        beansList.push(currentBeanData);
        localStorage.setItem('BeansData', JSON.stringify(beansList));

        inputForm.reset();

    });

        

}
