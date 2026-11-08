export function initRecord(){

    const saveBtn = document.getElementById('savebtn');
    const recordContainer = document.querySelector('.record-container');
    const outputArea = document.getElementById('output-area');
    const inputForm = document.getElementById('input-form')

    const roastMap = {
        'a' : '浅煎り',
        'b' : '中煎り',
        'c' : '深煎り'
    };

    saveBtn.addEventListener('click', () =>{
        const beanNameInput = document.getElementById('input-bean').value
        const roastRadio = document.querySelector('input[name = "roast"]:checked');
        const dateInput = document.getElementById('input-date').value;

        if (!beanNameInput || !roastRadio || !dateInput) {
            alert('すべての項目を入力してください')
            return;
        }

        const roastText = roastMap[roastRadio.value];

        const newRecord = document.createElement('div');
        newRecord.classList.add('bean-record');

        newRecord.innerHTML = `
            <p class ="bean-name">${beanNameInput}</p>
            <p class ="roast-level">${roastText}</p>
            <p class ="roast-date">${dateInput}</p>


        `;


        recordContainer.insertBefore(newRecord, outputArea);

        inputForm.reset();


    });
}
