//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные в массив, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода почты. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.

const formElem = document.querySelector('.workers_form');
let workersArr = [];

const cardsRender = () => {

    const cardsContainer = document.querySelector('.cards_container');
    cardsContainer.innerText = '';

    workersArr.forEach(({ firstname, lastname, age, rate, days, email, photo, progress }) => {
        const container = document.createElement('div');
        container.classList.add('card');
        const firstnameElem = document.createElement('p');
        const lastnameElem = document.createElement('p');
        const ageElem = document.createElement('p');
        const salaryElem = document.createElement('p');
        const photoElem = document.createElement('img');
        const emailElem = document.createElement('a');
        const progressContainer = document.createElement('div');
        const progressLine = document.createElement('div');


        photoElem.setAttribute('src', photo);
        photoElem.setAttribute('alt', 'photo of worker');
        emailElem.setAttribute('href', `mailto:${email}`);


        firstnameElem.innerText = `First name: ${firstname}`;
        lastnameElem.innerText = `Last name: ${lastname}`;
        ageElem.innerText = `Age: ${age}`;
        salaryElem.innerText = `Salary: ${rate * days}`;
        emailElem.innerText = email;
        progressLine.style.width = progress;
        progressLine.innerText = progress + '%';

        progressLine.classList.add('progress-line');
        progressContainer.classList.add('progress-container');


        progressContainer.append(progressLine);
        container.append(firstnameElem, lastnameElem, ageElem, salaryElem, emailElem, photoElem, progressContainer);
        cardsContainer.append(container)
    })
}

formElem.addEventListener('submit', e => {
    e.preventDefault();
    const { firstname, lastname, age, rate, days, email, photo, progress } = e.target;
    workersArr.push({
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value,
        rate: rate.value,
        days: days.value,
        email: email.value,
        photo: photo.value,
        progress: progress.value,

    })
    firstname.value = '',
        lastname.value = '';
    age.value = '';
    rate.value = '';
    days.value = '';
    email.value = '';
    photo.value = '';
    progress.value = '';

    console.log(workersArr);
    cardsRender()
})