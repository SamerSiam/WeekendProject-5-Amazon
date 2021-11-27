const carousel=[
{
    id:0,
    description:'Canon EOS 2000D / Rebel T7 DSLR Camera with EF-S 18-55mm Zoom Lens + SanDisk 32GB Memory Card + Tripod + Case + Wideangle Lenses + ZeeTech Accessory Bundle (20pc Bundle)',
    img:'./images/id_0.jpg',
    rating:4.5,
    price: '$100.00',
},

{
    id:1,
    description:'Canon EOS 2000D / Rebel T7 DSLR Camera with EF-S 18-55mm Zoom Lens + SanDisk 32GB Memory Card + Tripod + Case + Wideangle Lenses + ZeeTech Accessory Bundle (20pc Bundle)',
    img:'./images/id_1.jpg',
    rating:4.0,
    price: '$450.00',
},
{
    id:2,
    description:'Canon EOS 2000D / Rebel T7 DSLR Camera with EF-S 18-55mm Zoom Lens + SanDisk 32GB Memory Card + Tripod + Case + Wideangle Lenses + ZeeTech Accessory Bundle (20pc Bundle)',
    img:'./images/id_2.jpg',
    rating:3,
    price: '$730.00',
},

{
    id:3,
    description:'Canon EOS 2000D / Rebel T7 DSLR Camera with EF-S 18-55mm Zoom Lens + SanDisk 32GB Memory Card + Tripod + Case + Wideangle Lenses + ZeeTech Accessory Bundle (20pc Bundle)',
    img:'./images/id_3.jpg',
    rating:2,
    price: '$100.00',
},
{
    id:4,
    description:'Canon EOS 2000D / Rebel T7 DSLR Camera with EF-S 18-55mm Zoom Lens + SanDisk 32GB Memory Card + Tripod + Case + Wideangle Lenses + ZeeTech Accessory Bundle (20pc Bundle)',
    img:'./images/id_4.jpg',
    rating:5,
    price: '$250.00',
},

  {  id:5,
    description:'Canon EOS 2000D / Rebel T7 DSLR Camera with EF-S 18-55mm Zoom Lens + SanDisk 32GB Memory Card + Tripod + Case + Wideangle Lenses + ZeeTech Accessory Bundle (20pc Bundle)',
    img:'./images/id_2.jpg',
    rating:5,
    price: '$250.00',
},
]


const caroselaContainer=document.querySelector('.carosel');
let currentIndex=0;

function getCarousel(startIndex){
    const caroselaContainer=document.querySelector('.carosel');
    carousel.forEach((car)=>{
    const id= car.id;
    const desc=car.description;
    const imageUrl= car.img;
    const rating=car.rating;
    const price=car.price;
    

    caroselaContainer.innerHTML +=`<div class="carousel-card">
            <img src=${imageUrl}>
            <div class="card-name">
            <a class="description-links" href="#">
                <p>${desc}</p>
                </a>
            </div> 
            <div class="card-rating">
            <i class="a-star-5"></i>
            <span class="card-rating">${rating}</span>
            </div>
            <div class="card-price">
                <p>${price}</p>
            </div>`
    
    });
    
    
    

}
getCarousel();