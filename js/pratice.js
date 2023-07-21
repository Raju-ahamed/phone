const phoneData = async (search) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
}
const displayPhone = phones => {
    const phoneConteiner = document.getElementById('phone-conteiner')

    taggleSpin(true);
    phoneConteiner.innerHTML = ``;

    phones = phones.slice(0, 20);
    const foundSearch = document.getElementById('found-search');
    if (phones.length === 0) {
        foundSearch.classList.remove('d-none');
    }
    else {
        foundSearch.classList.add('d-none');
    }
    phones.forEach(phone => {
        console.log(phone)

        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <div class="col">
        <div class="card p-4 h-100">
          <img src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Brand : ${phone.brand}</h5>
            <p class="card-text">phone name:${phone.phone_name}</p>
          </div>
        </div>
      </div> 
        `;
        phoneConteiner.appendChild(phoneDiv);

    });
    taggleSpin(false);

}

document.getElementById('btn-click').addEventListener('click', function () {
    const searchText = document.getElementById('input-field');
    taggleSpin(true);
    // console.log(searchText);
    const search = searchText.value;
    // console.log(search)
    phoneData(search);
    searchText.value = '';
})
const taggleSpin = isTrue => {
    const loadSpin = document.getElementById('spin');
    if (isTrue) {
        loadSpin.classList.remove('d-none')
    }
    else {
        loadSpin.classList.add('d-none')
    }
}



phoneData();