const buttonLogin = document.getElementById('login');
const loginEmail = document.getElementById('email');
const password = document.getElementById('password');
const buttonSubmit = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');

const showMessage = (event) => {
  event.preventDefault();
  if (loginEmail.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};

buttonLogin.addEventListener('click', showMessage);

const enabledSubmit = (event) => {
  if (event.target.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
};

agreementCheck.addEventListener('click', enabledSubmit);

const inputText = document.querySelector('#textarea');
const count = document.getElementById('counter');

const textareaLengthCheck = (event) => {
  const textAreaLength = event.target.value.length;
  const maxLength = 500;
  const charactersLeft = maxLength - textAreaLength;
  count.innerHTML = charactersLeft;
};

inputText.addEventListener('input', textareaLengthCheck);

const evaluationForm = document.getElementById('evaluation-form');

const userInfos = () => {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = evaluationForm.family.value;
  const evaluation = evaluationForm.rate.value;
  const comments = document.getElementById('textarea').value;
  const contents = [];
  document.querySelectorAll('.subject:checked').forEach((element) => {
    contents.push(element.value);
  });
  const subjects = contents.join(', ');

  return { name, lastname, email, house, family, subjects, evaluation, comments };
};

const sectionUserInfos = () => {
  const person = userInfos();
  evaluationForm.innerHTML = '';
  function field(info) {
    const element = document.createElement('p');
    element.innerText = info;
    evaluationForm.appendChild(element);
  }
  field(`Nome: ${person.name} ${person.lastname}`);
  field(`Email: ${person.email}`);
  field(`Casa: ${person.house}`);
  field(`Família: ${person.family}`);
  field(`Matérias: ${person.subjects}`);
  field(`Avaliação: ${person.evaluation}`);
  field(`Observações: ${person.comments}`);
};

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  if (evaluationForm.checkValidity()) {
    sectionUserInfos();
  }
});
