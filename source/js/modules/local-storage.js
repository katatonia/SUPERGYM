const form = document.querySelector('form');

const getFormInputs = () => {
  const inputName = form.querySelector('input[name="Имя"]');
  const inputPhone = form.querySelector('input[name="Телефон"]');

  return {
    inputName,
    inputPhone,
  };
};

const onFormSubmit = () => {
  if (form) {
    form.addEventListener('submit', () => {
      const {inputName, inputPhone} = getFormInputs();
      localStorage.setItem('Имя', inputName.value);
      localStorage.setItem('Телефон', inputPhone.value);
    });
  }
};

export {onFormSubmit};
