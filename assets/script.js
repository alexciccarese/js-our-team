const cardsEl = document.querySelector('#cards .row');

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

console.log(teamMembers);


//inseriamo la funzione per aggiungere gli elementi in pagina 
function getMemberMarkup(memberObj) {
  const { name, role, email, img } = memberObj;

  const markup = `
    <div class="col-12  col-md-6 col-lg-4 p-0">
      <div class="d-flex bg-dark me-3 flex-row align-items-center rounded-0">
        <div class="col-4">
          <img src="${img}" class="img-fluid" alt="${name}">
        </div>
        <div class="text-light ms-3 p-2">
          <h5 class="name mt-1">${name}</h5>
          <p class="role mb-2">${role}</p>
          <p class="email mb-2">${email}</p>
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
