const cardsEl = document.querySelector('#cards .row');

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);


//inseriamo la funzione per aggiungere gli elementi in pagina 
function getMemberMarkup(memberObj) {
  const { name, role, email, img } = memberObj;

  const markup = `
    <div class="col">
      <div class="card d-flex bg-dark m-2 flex-row align-items-center">
        <div class="col-4">
          <img src="${img}" class="img-fluid" alt="${name}">
        </div>
        <div class="text-light ms-3">
          <h5 class="mt-2">${name}</h5>
          <p class="mb-2">${role}</p>
          <p class="mb-2">${email}</p>
        </div>
      </div>
    </div>`

    return markup
}


// iteriamo l'array con il ciclo for e aggiungiamo gli elementi al contenitore
for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  

  const markup = getMemberMarkup(thisMember)
  console.log(markup);
  
  // inseriamo il markup generato
  cardsEl.innerHTML += markup
}
