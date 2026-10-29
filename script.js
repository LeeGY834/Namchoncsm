// ==============================================
// 상품 가격 수정은 이 아래 PRODUCTS의 price 값만 변경하세요.
// 예: price: 39000 → price: 42000
// 가격 단위는 원이며 쉼표 없이 숫자로 입력합니다.
// ==============================================
const PRODUCTS = {
  beef: [
    {name:'한우특수모듬구이',price:39000,image:'beef-special.jpg'},
    {name:'한우꽃등심',price:42000,image:'beef-ribeye.jpg'},
    {name:'한우사태',price:16000,image:'beef-shank.jpg'},
    {name:'한우국거리',price:15000,image:'beef-soup.jpg'},
    {name:'한우불고기',price:14000,image:'beef-bulgogi.jpg'}
  ],
  pork: [
    {name:'생삼겹살',price:15000,image:'pork-belly.jpg'},
    {name:'생목살',price:15000,image:'pork-neck.jpg'},
    {name:'생앞다리살',price:12000,image:'pork-shoulder.jpg'},
    {name:'생등뼈',price:6000,image:'pork-bone.jpg'}
  ],
  marinated: [
    {name:'양념고추장불고기',price:13000,image:'marinated-gochu.jpg'},
    {name:'양념소불고기',price:13000,image:'marinated-beef.jpg'},
    {name:'양념닭갈비',price:12000,image:'marinated-ribs.jpg'}
  ],
  frozen: [
    {name:'한우왕우족',price:18000,image:'frozen-ox-tail.jpg'},
    {name:'한우왕사골',price:16000,image:'frozen-bones.jpg'},
    {name:'한돈대패삼겹살',price:12000,image:'frozen-pork-belly.jpg'},
    {name:'수입추억의삼겹살',price:11000,image:'frozen-import-belly.jpg'},
    {name:'수입소불고기',price:11000,image:'frozen-beef.jpg'}
  ],
  ready: [
    {name:'직접우린 사골곰국',price:7000,image:'ready-soup.jpg'},
    {name:'과일숙성왕구이',price:13000,image:'ready-bulgogi.jpg'},
    {name:'계란(대)',price:6000,image:'ready-eggs.jpg'},
    {name:'흑마늘 훈제오리',price:17000,image:'ready-duck.jpg'}
  ]
};
// 주의: 현재 가격은 이미지 시안에 기재된 예시 가격입니다.
// 판매 전에 실제 판매가와 가격 단위를 확인해 주세요.
for (const [category,products] of Object.entries(PRODUCTS)) {
  const grid=document.getElementById(category+'Grid');
  if(!grid)continue;
  for(const product of products){
    const card=document.createElement('article');card.className='product-card';
    const img=document.createElement('img');img.src='assets/'+product.image;img.alt=product.name;img.loading='lazy';
    const name=document.createElement('div');name.className='product-name';name.textContent=product.name;
    const price=document.createElement('div');price.className='product-price';price.textContent=Number(product.price).toLocaleString('ko-KR')+'원';
    card.append(img,name,price);grid.appendChild(card);
  }
}
const nav=document.getElementById('siteNav');const toggle=document.getElementById('menuToggle');
toggle.addEventListener('click',()=>{nav.hidden=!nav.hidden;toggle.setAttribute('aria-expanded',String(!nav.hidden));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.hidden=true;toggle.setAttribute('aria-expanded','false');}));
const modal=document.getElementById('popup');
const today=()=>new Date().toLocaleDateString('en-CA');
const showPopup=()=>{modal.hidden=false;document.body.style.overflow='hidden';};
const closePopup=()=>{modal.hidden=true;document.body.style.overflow='';};
document.getElementById('openPopup').addEventListener('click',()=>{nav.hidden=true;showPopup();});
document.getElementById('closePopup').addEventListener('click',closePopup);
document.getElementById('closePopupBottom').addEventListener('click',closePopup);
document.getElementById('hideToday').addEventListener('click',()=>{localStorage.setItem('namchon-hide-popup',today());closePopup();});
modal.addEventListener('click',e=>{if(e.target===modal)closePopup();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePopup();});
if(localStorage.getItem('namchon-hide-popup')!==today())window.addEventListener('load',()=>setTimeout(showPopup,350));
