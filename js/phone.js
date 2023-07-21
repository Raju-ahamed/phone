const phoneDetails = async (search) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  phoneInfo(data.data);
}
const phoneInfo = phones => {
  console.log(phones);
  const mobileConteiner = document.getElementById('mobile-conteiner');
  phones = phones.slice(0, 20);

  // d-none work
  const displayNotFound = document.getElementById('not-found');
  if (phones.length === 0) {
    // d-none 
    displayNotFound.classList.remove('d-none')
  }
  else {
    displayNotFound.classList.add('d-none')
  }
  mobileConteiner.innerHTML = ``;
  phones.forEach(phone => {
    const phoneDiv = document.createElement('div');
    phoneDiv.innerHTML = `
         <div class="col w-50 m-4 p-8">
        <div class="card p-4">
          <img src="${phone.image}" class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title">Brand :${phone.brand}</h5>
            <h5 class="card-title">Phone Name :${phone.phone_name}</h5>
            <p class="card-text">
              phone details :${phone.slug}
            </p>
          </div>
        </div>
      </div>
      `;
    mobileConteiner.appendChild(phoneDiv)

  })

  toggleLoading(false);
}

document.getElementById('search-option').addEventListener('click', function () {
  toggleLoading(true);
  const searchField = document.getElementById('input-field');

  // console.log(searchField);


  const search = searchField.value;
  searchField.value = '';
  phoneDetails(search);
})
const toggleLoading = isLoading => {
  const loadingPages = document.getElementById('loading-pages');
  if (isLoading) {
    loadingPages.classList.remove('d-none')

  }
  else {
    loadingPages.classList.add('d-none')
  }
}




phoneDetails();