const cases = [
  {
    id: 1,
    title: 'Toyota Camry',
    price: 28312,
    img: 'https://picsum.photos/720?random=1&car,toyota',
    onSale: false,
    type: 'supercar',
    link: '#',
  },
  {
    id: 2,
    title: 'Honda Civic',
    price: 49756,
    img: 'https://picsum.photos/720?random=2&car,Honda',
    onSale: true,
    type: 'suv',
    link: '#',
  },
  {
    id: 3,
    title: 'BMW X5',
    price: 37689,
    img: 'https://picsum.photos/720?random=3&car,BMW',
    onSale: true,
    type: 'supercar',
    link: '#',
  },
  {
    id: 4,
    title: 'Chevrolet Malibu',
    price: 40233,
    img: 'https://picsum.photos/720?random=4&car,Chevrolet',
    onSale: false,
    type: 'suv',
    link: '#',
  },
  {
    id: 5,
    title: 'Mercedes-Benz E-Class',
    price: 19258,
    img: 'https://picsum.photos/720?random=5&car,Mercedes-Benz',
    onSale: true,
    type: 'sedan',
    link: '#',
  },
  {
    id: 6,
    title: 'Audi A4',
    price: 31674,
    img: 'https://picsum.photos/720?random=6&car,Audi',
    onSale: false,
    type: 'sedan',
    link: '#',
  },
  {
    id: 7,
    title: 'Lexus RX',
    price: 48326,
    img: 'https://picsum.photos/720?random=7&car,Lexus',
    type: 'supercar',
    onSale: false,
    link: '#',
  },
  {
    id: 8,
    title: 'Nissan Altima',
    price: 36890,
    img: 'https://picsum.photos/720?random=8&car,Nissan',
    onSale: true,
    type: 'suv',
    link: '#',
  },
  {
    id: 9,
    title: 'Hyundai Sonata',
    price: 29147,
    img: 'https://picsum.photos/720?random=9&car,Hyundai',
    onSale: false,
    type: 'suv',
    link: '#',
  },
  {
    id: 10,
    title: 'Ford Mustang',
    price: 43751,
    img: 'https://picsum.photos/720?random=10&car,Ford',
    type: 'supercar',
    onSale: true,
    link: '#',
  },
  {
    id: 11,
    title: 'Toyota Corolla',
    price: 41872,
    img: 'https://picsum.photos/720?random=11&car,Toyota',
    onSale: false,
    type: 'sedan',
    link: '#',
  },
  {
    id: 12,
    title: 'Honda Accord',
    price: 35491,
    img: 'https://picsum.photos/720?random=12&car,Honda',
    onSale: true,
    type: 'sedan',
    link: '#',
  },
  {
    id: 13,
    title: 'BMW 3 Series',
    price: 26783,
    img: 'https://picsum.photos/720?random=13&car,BMW',
    type: 'supercar',
    onSale: true,
    link: '#',
  },
  {
    id: 14,
    title: 'Chevrolet Silverado',
    price: 49205,
    img: 'https://picsum.photos/720?random=14&car,Chevrolet',
    onSale: false,
    type: 'suv',
    link: '#',
  },
  {
    id: 15,
    title: 'Mercedes-Benz GLC',
    price: 38957,
    img: 'https://picsum.photos/720?random=15&car,Mercedes-Benz',
    onSale: true,
    type: 'sedan',
    link: '#',
  },
  {
    id: 16,
    title: 'Audi Q5',
    price: 43296,
    img: 'https://picsum.photos/720?random=16&car,Audi',
    type: 'supercar',
    onSale: false,
    link: '#',
  },
  {
    id: 17,
    title: 'Lexus IS',
    price: 31548,
    img: 'https://picsum.photos/720?random=17&car,Lexus',
    onSale: false,
    type: 'suv',
    link: '#',
  },
  {
    id: 18,
    title: 'Nissan Rogue',
    price: 27041,
    img: 'https://picsum.photos/720?random=18&car,Nissan',
    onSale: true,
    type: 'sedan',
    link: '#',
  },
  {
    id: 19,
    title: 'Hyundai Tucson',
    price: 44103,
    img: 'https://picsum.photos/720?random=19&car,Hyundai',
    onSale: false,
    type: 'suv',
    link: '#',
  },
  {
    id: 20,
    title: 'Ford Explorer',
    price: 37619,
    img: 'https://picsum.photos/720?random=20&car,Ford',
    type: 'supercar',
    onSale: true,
    link: '#',
  },
];

const refs = {
  casesList: document.querySelector('.cases-list'),
};

function renderCase(singleCase) {
  const { img, title, type, link } = singleCase;
  return `
        <li class="cases-list-item">
            <div class="cases-item-wrapper">
            <div class="cases-img-wrapper">
                <img class="cases-item-img" src=${img} alt=${type} />
                <div class="overlay"></div>
                </div>
                   <a class="cases-item-link" href=${link}>
                   ${title}
                   </a>
            </div>
        </li>
    `;
}

function renderCases(listOfCases) {
  return listOfCases.map(renderCase).join('');
}

const renderedListOfCases = renderCases(cases);

refs.casesList.insertAdjacentHTML('afterbegin', renderedListOfCases);
