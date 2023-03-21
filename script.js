fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    // Récupère les données JSON et les transforme en objet JavaScript
    const id = data.slip.id;
    const advice = data.slip.advice;
    
    console.log(id);
    console.log(advice);
    // Sélectionne l'élément HTML où injecter les données
    const title = document.querySelector('#title');
    const text = document.querySelector('#text');

    // Injecte les données dans l'élément HTML sélectionné
    title.innerHTML = `Advice #${id}`;
    text.innerHTML = `"${advice}"`;
  })
  .catch(error => {
    console.error(error);
  });