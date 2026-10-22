/* ============================================================
   SOLE™ Premium Footwear — main.js
   ============================================================ */

/* ===================================================
   PRODUCT DATA WITH AI IMAGE PROMPTS
   =================================================== */
const PRODUCTS = [
  // ── MEN CASUAL ──
  { id:1,  name:"Urban Runner Pro",    cat:"Men · Sneakers",      gender:"men",  sub:"sneakers",   price:2499, oldPrice:3499, badge:"sale", color:"#4a7c6f", desc:"Lightweight city runner with responsive cushioning and breathable mesh upper. Perfect for all-day wear.", image:"Mens/1.Urban-Runner-Pro.png" },
  { id:2,  name:"Street Classic Low",  cat:"Men · Sneakers",      gender:"men",  sub:"sneakers",   price:1899, oldPrice:null, badge:"new",  color:"#c8863a", desc:"Clean silhouette with premium canvas upper. Versatile enough for any casual occasion.", image:"Mens/2.Street-Classic-Low.png" },
  { id:3,  name:"Heritage Boot",       cat:"Men · Boots",         gender:"men",  sub:"boots",      price:4299, oldPrice:5499, badge:"sale", color:"#6b4c2a", desc:"Full-grain leather boots with Goodyear welt construction. Built to last a lifetime.", image:"Mens/3.Heritage-Boot.png" },
  { id:4,  name:"Trail Ranger Boot",   cat:"Men · Boots",         gender:"men",  sub:"boots",      price:3799, oldPrice:null, badge:"new",  color:"#3a2a1a", desc:"Rugged ankle boot with waterproof lining and anti-slip outsole. For the modern explorer.", image:"Mens/4.Trail-Ranger-Boot.png" },
  { id:5,  name:"Penny Loafer Elite",  cat:"Men · Loafers",       gender:"men",  sub:"loafers",    price:2799, oldPrice:null, badge:"",     color:"#8b6b4a", desc:"Classic penny loafer in premium suede. Effortlessly smart for both office and leisure.", image:"Mens/5.Penny-Loafer-Elite.png" },
  { id:6,  name:"Moc-Toe Casual",      cat:"Men · Loafers",       gender:"men",  sub:"loafers",    price:2299, oldPrice:2799, badge:"sale", color:"#5a4a3a", desc:"Soft moc-toe loafer with hand-stitched detailing. Weekend comfort at its finest.", image:"Mens/6.Moc-Toe-Casual.png" },
  { id:7,  name:"Slide One Mule",      cat:"Men · Mules",         gender:"men",  sub:"mules",      price:1499, oldPrice:null, badge:"new",  color:"#8a7a6a", desc:"Open-back slip-on mule with cushioned insole. Relaxed style for home and outdoors.", image:"Mens/7.Slide-One-Mule.png" },
  { id:8,  name:"Backless Comfort",    cat:"Men · Mules",         gender:"men",  sub:"mules",      price:1299, oldPrice:1599, badge:"sale", color:"#6a5a4a", desc:"Lightweight backless mule with memory foam footbed. Ideal for quick errands.", image:"Mens/8.Backless-Comfort.png" },
  { id:9,  name:"Italian Driver",      cat:"Men · Driving Shoes", gender:"men",  sub:"driving",    price:3299, oldPrice:null, badge:"",     color:"#7a4a2a", desc:"Pebble-rubber sole driving shoe in soft nappa leather. Designed for precision and style.", image:"Mens/9.Italian-Driver.png" },
  { id:10, name:"Racing Classic",      cat:"Men · Driving Shoes", gender:"men",  sub:"driving",    price:2999, oldPrice:3499, badge:"sale", color:"#4a3a2a", desc:"Signature driving moccasin with rubber nub sole. The perfect co-pilot for every journey.", image:"Mens/10.Racing-Classic.png" },
  // ── MEN FORMAL ──
  { id:11, name:"Oxford Grand",        cat:"Men · Oxford",        gender:"men",  sub:"oxford",     price:5499, oldPrice:6999, badge:"",     color:"#1a1a1a", desc:"Hand-stitched full-brogue oxford in rich tan calfskin. The pinnacle of formal footwear.", image:"Mens/11.Oxford-Grand.png" },
  { id:12, name:"Tan Balmoral",        cat:"Men · Oxford",        gender:"men",  sub:"oxford",     price:4999, oldPrice:null, badge:"new",  color:"#7a4a2a", desc:"Sleek cap-toe balmoral oxford in polished tan leather. Boardroom-ready elegance.", image:"Mens/12.Tan-Balmoral.png" },
  { id:13, name:"Slip-on Elegance",    cat:"Men · Slip-on",       gender:"men",  sub:"slipon",     price:3499, oldPrice:4199, badge:"sale", color:"#2a2a2a", desc:"Elastic gore slip-on with a clean cap-toe finish. Boardroom ready in seconds.", image:"Mens/13.Slip-on-Elegance.png" },
  { id:14, name:"Woven Slip-on",       cat:"Men · Slip-on",       gender:"men",  sub:"slipon",     price:2999, oldPrice:null, badge:"",     color:"#4a4a4a", desc:"Perforated leather slip-on with woven vamp detail. Refined comfort, zero fuss.", image:"Mens/14.Woven-Slip-on.png" },
  { id:15, name:"Monk Strap Twin",     cat:"Men · Monk Shoes",    gender:"men",  sub:"monk",       price:4799, oldPrice:5999, badge:"",     color:"#4a3a2a", desc:"Double monk strap with gold buckles. The sophisticated choice for the modern gentleman.", image:"Mens/15.Monk-Strap-Twin.png" },
  { id:16, name:"Single Monk",         cat:"Men · Monk Shoes",    gender:"men",  sub:"monk",       price:3999, oldPrice:null, badge:"new",  color:"#2a1a0a", desc:"Classic single-buckle monk strap in polished black leather. Sharp, structured, stunning.", image:"Mens/16.Single-Monk.png" },
  { id:17, name:"Derby Classic",       cat:"Men · Derby",         gender:"men",  sub:"derby",      price:3999, oldPrice:null, badge:"new",  color:"#2a2a2a", desc:"Open-lacing derby with a clean cap-toe design. Versatile for business and formal.", image:"Mens/17.Derby-Classic.png" },
  { id:18, name:"Tan Derby",           cat:"Men · Derby",         gender:"men",  sub:"derby",      price:3499, oldPrice:3999, badge:"sale", color:"#8a5a2a", desc:"Smooth leather derby in warm tan with a closed lace system. All-day formal comfort.", image:"Mens/18.Tan-Derby.png" },
  { id:19, name:"Brogue Full Wing",    cat:"Men · Brogue",        gender:"men",  sub:"brogue",     price:4499, oldPrice:5499, badge:"",     color:"#7a4a2a", desc:"Full wingtip brogue in cognac leather with medallion toe. Character in every step.", image:"Mens/19.Brogue-Full-Wing.png" },
  { id:20, name:"Semi Brogue",         cat:"Men · Brogue",        gender:"men",  sub:"brogue",     price:3799, oldPrice:null, badge:"new",  color:"#1a1a1a", desc:"Subtle perforations on a cap-toe oxford silhouette. The boardroom brogue redefined.", image:"Mens/20.Semi-Brogue.png" },
  // ── MEN SPORTS ──
  { id:21, name:"SpeedRun X2",         cat:"Men · Running",       gender:"men",  sub:"running",    price:3299, oldPrice:4199, badge:"sale", color:"#1a3a6a", desc:"Engineered mesh upper with nitrogen-infused midsole for elite performance.", image:"Mens/21.SpeedRun-X2.png" },
  { id:22, name:"UltraStride Pro",     cat:"Men · Running",       gender:"men",  sub:"running",    price:2999, oldPrice:null, badge:"new",  color:"#1a1a4a", desc:"Ultra-light carbon fiber plate shoe for runners who want every millisecond.", image:"Mens/22.UltraStride-Pro.png" },
  { id:23, name:"WalkEasy Pro",        cat:"Men · Walking",       gender:"men",  sub:"walking",    price:2199, oldPrice:null, badge:"new",  color:"#2a5a3a", desc:"Memory foam insole with anti-slip rubber outsole. Walk farther, walk better.", image:"Mens/23.WalkEasy-Pro.png" },
  { id:24, name:"StrollMate Comfort",  cat:"Men · Walking",       gender:"men",  sub:"walking",    price:1899, oldPrice:2199, badge:"sale", color:"#4a6a3a", desc:"Breathable knit upper with wide fit design. Perfect for everyday walks.", image:"Mens/24.StrollMate-Comfort.png" },
  // ── MEN FLIP FLOPS ──
  { id:25, name:"Foam Slide Classic",  cat:"Men · Flip Flops",    gender:"men",  sub:"flipflops",  price:499,  oldPrice:799,  badge:"sale", color:"#3a6b8a", desc:"Ultra-cushioned EVA sole with contoured footbed for maximum poolside comfort.", image:"Mens/25.Foam-Slide-Classic.png" },
  { id:26, name:"Leather Slide",       cat:"Men · Flip Flops",    gender:"men",  sub:"flipflops",  price:799,  oldPrice:null, badge:"new",  color:"#7a5a3a", desc:"Genuine leather upper with a sculptured rubber sole. Elevated casual at its best.", image:"Mens/26.Leather-Slide.png" },
  // ── MEN SANDALS ──
  { id:27, name:"Floater Sport",       cat:"Men · Sandals",       gender:"men",  sub:"sandals",    price:1199, oldPrice:null, badge:"new",  color:"#5a7a3a", desc:"Adjustable velcro straps with waterproof upper. Great for outdoor adventures.", image:"Mens/27.Floater-Sport.png" },
  { id:28, name:"Trail Sandal",        cat:"Men · Sandals",       gender:"men",  sub:"sandals",    price:999,  oldPrice:1299, badge:"sale", color:"#4a5a2a", desc:"Multi-strap sandal with grippy rubber outsole. Built for rugged terrain and style.", image:"Mens/28.Trail-Sandal.png" },
  // ── WOMEN CASUAL ──
  { id:29, name:"Pastel Runner W",     cat:"Women · Sneakers",    gender:"women",sub:"sneakers",   price:1899, oldPrice:null, badge:"new",  color:"#a08aba", desc:"Fashion-forward chunky sole sneaker with pastel colorway. Comfortable and trendy.", image:"Womens/1.Pastel-Runner-W.png" },
  { id:30, name:"Rooler Sneaker",      cat:"Women · Sneakers",    gender:"women",sub:"sneakers",   price:2199, oldPrice:2599, badge:"sale", color:"#8a6a9a", desc:"Vibrant low-top sneaker with cushioned midsole. For those who walk with energy.", image:"Womens/2.Rooler-Sneaker.png" },
  { id:31, name:"Slim Loafer W",       cat:"Women · Loafers",     gender:"women",sub:"loafers",    price:1999, oldPrice:null, badge:"",     color:"#c8a87a", desc:"Slim silhouette loafer with metallic bit hardware. Day-to-dinner versatility.", image:"Womens/3.Slim-Loafer-W.png" },
  { id:32, name:"Tassel Loafer W",     cat:"Women · Loafers",     gender:"women",sub:"loafers",    price:1699, oldPrice:1999, badge:"sale", color:"#8a6a4a", desc:"Classic tassel loafer in soft calf leather. Timeless, tailored, effortlessly chic.", image:"Womens/4.Tassel-Loafer-W.png" },
  { id:33, name:"Boot Ankle Slim W",   cat:"Women · Boots",       gender:"women",sub:"boots",      price:3499, oldPrice:4299, badge:"sale", color:"#3a2a1a", desc:"Slim ankle boot with side zip. Pairs beautifully with both jeans and dresses.", image:"Womens/5.Boot-Ankle-Slim-W.png" },
  { id:34, name:"Chelsea Boot W",      cat:"Women · Boots",       gender:"women",sub:"boots",      price:3199, oldPrice:null, badge:"new",  color:"#4a3a2a", desc:"Classic Chelsea boot in smooth leather with elastic gussets. Iconic British heritage.", image:"Womens/6.Chelsea-Boot-W.png" },
  // ── WOMEN HEELS ──
  { id:35, name:"Heel Sandal Glam",    cat:"Women · Sandals",     gender:"women",sub:"sandals",    price:1999, oldPrice:null, badge:"new",  color:"#c8a050", desc:"Strappy block-heel sandal with gold-tone hardware. Party-ready from dusk to dawn.", image:"Womens/7.Heel-Sandal-Glam.png" },
  { id:36, name:"Ankle Strap Sandal",  cat:"Women · Sandals",     gender:"women",sub:"sandals",    price:1799, oldPrice:2199, badge:"sale", color:"#a08060", desc:"Delicate ankle-strap heel sandal in nude leather. Perfect for summer events.", image:"Womens/8.Ankle-Strap-Sandal.png" },
  { id:37, name:"Pump Luxe",           cat:"Women · Pumps",       gender:"women",sub:"pumps",      price:2399, oldPrice:2999, badge:"sale", color:"#9a1a2a", desc:"Pointed-toe pump in patent leather. A timeless classic that elevates every outfit.", image:"Womens/9.Pump-Luxe.png" },
  { id:38, name:"Nude Kitten Pump",    cat:"Women · Pumps",       gender:"women",sub:"pumps",      price:1999, oldPrice:null, badge:"new",  color:"#c8a890", desc:"Kitten-heel pump in nude patent. Versatile enough for boardroom and brunch.", image:"Womens/10.Nude-Kitten-Pump.png" },
  { id:39, name:"Peep Toe Glam",       cat:"Women · Peep Toes",   gender:"women",sub:"peeptoes",   price:2199, oldPrice:2799, badge:"",     color:"#c0a030", desc:"Glittery peep-toe heel with ankle strap. Designed to make you the center of attention.", image:"Womens/11.Peep-Toe-Glam.png" },
  { id:40, name:"Classic Peep Toe",    cat:"Women · Peep Toes",   gender:"women",sub:"peeptoes",   price:1899, oldPrice:2299, badge:"sale", color:"#9a8030", desc:"Satin-finish peep-toe with a sculpted stiletto heel. Formal elegance at its finest.", image:"Womens/12.Classic-Peep-Toe.png" },
  { id:41, name:"Wedge Garden",        cat:"Women · Wedges",      gender:"women",sub:"wedges",     price:1799, oldPrice:null, badge:"new",  color:"#8a5a3a", desc:"Cork wedge with floral canvas upper. Comfortable height for day-to-night wear.", image:"Womens/13.Wedge-Garden.png" },
  { id:42, name:"Espadrille Wedge",    cat:"Women · Wedges",      gender:"women",sub:"wedges",     price:1599, oldPrice:1899, badge:"sale", color:"#7a6a4a", desc:"Espadrille wedge with jute-wrapped platform. Bohemian summer vibes all day long.", image:"Womens/14.Espadrille-Wedge.png" },
  { id:43, name:"Stiletto Noir",       cat:"Women · Stilettos",   gender:"women",sub:"stilettos",  price:2999, oldPrice:3999, badge:"sale", color:"#1a1a1a", desc:"Elongating 4-inch stiletto with cushioned insole. Walk with confidence at every event.", image:"Womens/15.Stiletto-Noir.png" },
  { id:44, name:"Nude Stiletto",       cat:"Women · Stilettos",   gender:"women",sub:"stilettos",  price:2699, oldPrice:null, badge:"new",  color:"#c8a890", desc:"Nude patent stiletto with pointed toe. The leg-lengthening power shoe.", image:"Womens/16.Nude-Stiletto.png" },
  // ── WOMEN FLIP FLOPS ──
  { id:45, name:"Petal Flip Flop",     cat:"Women · Flip Flops",  gender:"women",sub:"flipflops",  price:399,  oldPrice:599,  badge:"sale", color:"#d4a0a0", desc:"Soft foam flip flop with floral embellishment. Feminine beach-to-brunch charm.", image:"Womens/17.Petal-Flip-Flop.png" },
  { id:46, name:"Crystal Slide W",     cat:"Women · Flip Flops",  gender:"women",sub:"flipflops",  price:699,  oldPrice:null, badge:"new",  color:"#c0b0d0", desc:"Embellished crystal-strap slide for poolside glam. Sparkle everywhere you go.", image:"Womens/18.Crystal-Slide-W.png" },
  // ── WOMEN FLATS ──
  { id:47, name:"Open Toe Flat",       cat:"Women · Open Toes",   gender:"women",sub:"opentoe",    price:999,  oldPrice:null, badge:"",     color:"#c8a87a", desc:"Minimalist open-toe sandal flat in genuine leather. Perfect for warm weather days.", image:"Womens/19.Open-Toe-Flat.png" },
  { id:48, name:"Open Toe Luxe",       cat:"Women · Open Toes",   gender:"women",sub:"opentoe",    price:1299, oldPrice:1499, badge:"sale", color:"#a08060", desc:"Slingback open-toe flat with woven upper. Crafted for all-day wear in warm months.", image:"Womens/20.Open-Toe-Luxe.png" },
  { id:49, name:"One Toe Ring Flat",   cat:"Women · One Toes",    gender:"women",sub:"onetoe",     price:899,  oldPrice:null, badge:"new",  color:"#c8a050", desc:"Single-strap toe-ring flat with a metallic finish. Minimalism meets bohemian chic.", image:"Womens/21.One-Toe-Ring-Flat.png" },
  { id:50, name:"Beaded One Toe",      cat:"Women · One Toes",    gender:"women",sub:"onetoe",     price:799,  oldPrice:999,  badge:"sale", color:"#a08840", desc:"Beaded toe-ring thong sandal in vibrant hues. Bohemian summer at your feet.", image:"Womens/22.Beaded-One-Toe.png" },
  { id:51, name:"Ballerina Soft",      cat:"Women · Ballerinas",  gender:"women",sub:"ballerinas", price:1299, oldPrice:null, badge:"new",  color:"#d4a0a0", desc:"Soft nappa leather ballerina with padded footbed. All-day elegance and comfort.", image:"Womens/23.Ballerina-Soft.png" },
  { id:52, name:"Classic Ballet",      cat:"Women · Ballerinas",  gender:"women",sub:"ballerinas", price:1099, oldPrice:1399, badge:"sale", color:"#2a2a2a", desc:"Timeless black ballet flat with elasticated topline. The French girl's shoe.", image:"Womens/24.Classic-Ballet.png" },
  { id:53, name:"T-Strap Boho",        cat:"Women · T-Strap",     gender:"women",sub:"tstrap",     price:1199, oldPrice:null, badge:"",     color:"#a08060", desc:"Woven T-strap flat with artisan detailing. Bohemian spirit meets minimalist silhouette.", image:"Womens/25.T-Strap-Boho.png" },
  { id:54, name:"T-Strap Luxe",        cat:"Women · T-Strap",     gender:"women",sub:"tstrap",     price:1499, oldPrice:1799, badge:"sale", color:"#2a2a2a", desc:"Patent leather T-strap flat with cushioned footbed. Office-to-event versatility.", image:"Womens/26.T-Strap-Luxe.png" },
  { id:55, name:"Mojari Ethnic",       cat:"Women · Mojaris",     gender:"women",sub:"mojaris",    price:1499, oldPrice:1899, badge:"sale", color:"#8a1a4a", desc:"Hand-embroidered mojari with cushioned insole. Celebrate tradition with style.", image:"Womens/27.Mojari-Ethnic.png" },
  { id:56, name:"Gold Mojari",         cat:"Women · Mojaris",     gender:"women",sub:"mojaris",    price:1699, oldPrice:null, badge:"new",  color:"#c0900a", desc:"Gold-thread embroidered juttis on a cushioned leather sole. Ethnic charm, modern comfort.", image:"Womens/28.Gold-Mojari.png" },
];

const MEN_CATEGORIES = [
  { name:"Casual Shoes",        icon:"fa-shoe-prints",    subs:["Sneakers","Boots","Loafers","Mules","Driving Shoes"],           keys:["sneakers","boots","loafers","mules","driving"] },
  { name:"Formal Shoes",        icon:"fa-briefcase",      subs:["Oxford Shoes","Slip-on Shoes","Monk Shoes","Derby Shoes","Brogue Shoes"], keys:["oxford","slipon","monk","derby","brogue"] },
  { name:"Sports Shoes",        icon:"fa-person-running", subs:["Running Shoes","Walking Shoes"],                                keys:["running","walking"] },
  { name:"Flip Flops & Slides", icon:"fa-droplet",        subs:[],                                                              keys:["flipflops"] },
  { name:"Floaters & Sandals",  icon:"fa-leaf",           subs:[],                                                              keys:["sandals"] },
];
const WOMEN_CATEGORIES = [
  { name:"Casual Shoes",        icon:"fa-star",    subs:["Sneakers","Loafers","Boots"],                               keys:["sneakers","loafers","boots"] },
  { name:"Heels",               icon:"fa-gem",     subs:["Sandals","Pumps","Peep Toes","Wedges","Stilettos"],         keys:["sandals","pumps","peeptoes","wedges","stilettos"] },
  { name:"Flip Flops & Slides", icon:"fa-droplet", subs:[],                                                           keys:["flipflops"] },
  { name:"Flats",               icon:"fa-heart",   subs:["Open Toes","One Toes","Ballerinas","T-Strap Flats","Mojaris"], keys:["opentoe","onetoe","ballerinas","tstrap","mojaris"] },
];

/* ===================================================
   GLOBAL STATE
   =================================================== */
let cart         = JSON.parse(localStorage.getItem('sole-cart')     || '[]');
let wishlist     = new Set(JSON.parse(localStorage.getItem('sole-wishlist') || '[]'));
let promoApplied = false;
let currentModalProduct = null;
let selectedSize = null;
function saveCart()     { localStorage.setItem('sole-cart',     JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('sole-wishlist', JSON.stringify([...wishlist])); }



/* ===================================================
   LOAD PRODUCT IMAGE
   =================================================== */
function loadProductImage(product, imgEl) {
  if (!imgEl) return;
  if (product.image) {
    imgEl.src = product.image;
    imgEl.style.display = 'block';
    const fb = imgEl.closest('.product-img-wrap')?.querySelector('.fallback-svg');
    if (fb) fb.style.display = 'none';
  }
}

/* ===================================================
   PRODUCT CARD HTML
   =================================================== */
function productCardHTML(p) {
  const isWished = wishlist.has(p.id);
  const inCart   = cart.find(i => i.id === p.id);
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return `
  <div class="product-card" id="pcard-${p.id}">
    <div class="product-img-wrap" style="background:${p.color}14;position:relative">
      ${p.badge ? `<div class="product-badge ${p.badge}">${p.badge === 'new' ? 'NEW' : 'SALE'}</div>` : ''}
      <button class="wishlist-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id},this)">
        <i class="${isWished ? 'fas' : 'far'} fa-heart"></i>
      </button>
      <div class="fallback-svg" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:12px;position:absolute;inset:0">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;opacity:0.18"><rect width="200" height="120" fill="${p.color}"/></svg>
      </div>
      <img id="pimg-${p.id}" src="" alt="${p.name}"
           style="display:none;width:100%;height:100%;object-fit:cover;position:absolute;inset:0" />
      <button class="quick-view-btn" onclick="openQuickView(${p.id})">
        <i class="fa fa-eye"></i> Quick View
      </button>
    </div>
    <div class="product-info">
      <div class="product-cat">${p.cat}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price-row">
        <span class="price-new">₹${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="price-old">₹${p.oldPrice.toLocaleString()}</span><span class="price-off">${discount}% off</span>` : ''}
      </div>
      <button class="add-to-cart-btn ${inCart ? 'added' : ''}" id="atc-${p.id}" onclick="addToCart(${p.id})">
        ${inCart ? '<i class="fa fa-check"></i> Added' : '<i class="fa fa-bag-shopping"></i> Add to Cart'}
      </button>
    </div>
  </div>`;
}

/* ===================================================
   FEATURED PRODUCTS
   =================================================== */
function renderFeaturedProducts(filter = 'all') {
  const grid = document.getElementById('featured-grid');
  let list = PRODUCTS;
  if (filter === 'men')   list = PRODUCTS.filter(p => p.gender === 'men');
  if (filter === 'women') list = PRODUCTS.filter(p => p.gender === 'women');
  if (filter === 'new')   list = PRODUCTS.filter(p => p.badge  === 'new');
  if (filter === 'sale')  list = PRODUCTS.filter(p => p.badge  === 'sale');
  const showing = list.slice(0, 8);
  grid.innerHTML = showing.map(p => productCardHTML(p)).join('');
  showing.forEach((p, i) => {
    setTimeout(() => {
      const el = document.getElementById('pimg-' + p.id);
      if (el) loadProductImage(p, el);
    }, i * 300);
  });
}

function filterProducts(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderFeaturedProducts(type);
}

/* ===================================================
   TRENDING CARDS
   =================================================== */
function renderTrendingCards() {
  const picks     = [PRODUCTS[0], PRODUCTS[42], PRODUCTS[11], PRODUCTS[29]];
  const container = document.getElementById('trending-cards');
  container.innerHTML = picks.map(p => `
    <div class="trending-card" onclick="openQuickView(${p.id})">
      <div class="trending-card-img" style="background:${p.color}14;display:flex;align-items:center;justify-content:center;overflow:hidden">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover"/>` : `<span style="font-size:2rem">👟</span>`}
      </div>
      <h4>${p.name}</h4>
      <span>₹${p.price.toLocaleString()}</span>
    </div>`).join('');
}

/* ===================================================
   MENU PAGES (MEN / WOMEN)
   =================================================== */
function renderMenuPage(containerId, categories, gender) {
  const container  = document.getElementById(containerId);
  const genderProds = PRODUCTS.filter(p => p.gender === gender);
  let html = '';
  categories.forEach(cat => {
    const catProds  = genderProds.filter(p => cat.keys.includes(p.sub));
    const displayed = catProds.slice(0, 6);
    html += `
    <div class="category-section">
      <div class="category-section-header">
        <h3>${cat.name}</h3>
        <span class="count">${catProds.length} styles</span>
      </div>
      ${cat.subs.length ? `
      <div class="subcategory-tabs">
        ${cat.subs.map((s, i) => `
          <button class="subcategory-tab ${i === 0 ? 'active' : ''}"
            onclick="filterMenuTab(this,'${gender}','${cat.keys[i] || cat.keys[0]}')">${s}</button>
        `).join('')}
      </div>` : ''}
      <div class="products-grid" id="menugrid-${gender}-${cat.keys[0]}">
        ${displayed.map(p => productCardHTML(p)).join('')}
      </div>
    </div>`;
  });
  container.innerHTML = html;
  // Load images for all rendered products
  genderProds.forEach((p, i) => {
    setTimeout(() => {
      const el = document.getElementById('pimg-' + p.id);
      if (el) loadProductImage(p, el);
    }, i * 100);
  });
}

function filterMenuTab(btn, gender, key) {
  btn.parentElement.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const gridEl = btn.closest('.category-section')
                    .querySelector(`[id^="menugrid-${gender}"]`);
  if (!gridEl) return;
  const filtered = PRODUCTS.filter(p => p.gender === gender && p.sub === key);
  gridEl.innerHTML = filtered.map(p => productCardHTML(p)).join('');
  filtered.forEach((p, i) => {
    setTimeout(() => {
      const el = document.getElementById('pimg-' + p.id);
      if (el) loadProductImage(p, el);
    }, i * 250);
  });
}

/* ===================================================
   QUICK VIEW MODAL
   =================================================== */
function openQuickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  currentModalProduct = p;
  selectedSize = null;

  // Show product image or fallback
  const box = document.getElementById('modal-img-box');
  if (p.image) {
    box.innerHTML = `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover"/>`;
  } else {
    box.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${p.color}10;font-size:4rem">👟</div>`;
  }

  document.getElementById('modal-cat').textContent  = p.cat;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-price').textContent = `₹${p.price.toLocaleString()}`;
  document.getElementById('modal-desc').textContent  = p.desc;
  document.getElementById('modal-sizes').innerHTML   =
    [6, 7, 8, 9, 10, 11, 12].map(s =>
      `<button class="size-btn" onclick="selectSize(this,'UK ${s}')">UK ${s}</button>`
    ).join('');

  const wished = wishlist.has(p.id);
  const wb = document.getElementById('modal-wishlist');
  wb.className = `nav-icon-btn wishlist-btn ${wished ? 'active' : ''}`;
  wb.innerHTML = `<i class="${wished ? 'fas' : 'far'} fa-heart"></i>`;

  document.getElementById('quick-view-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedSize = size;
}

function closeQuickView() {
  document.getElementById('quick-view-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target.id === 'quick-view-modal') closeQuickView();
}

/* ===================================================
   CART
   =================================================== */
function addToCart(id, size) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const s   = size || 'UK 8';
  const idx = cart.findIndex(i => i.id === id && i.size === s);
  if (idx > -1) {
    cart[idx].qty++;
  } else {
    cart.push({ id, name: p.name, cat: p.cat, price: p.price, color: p.color, image: p.image || '', qty: 1, size: s });
  }
  saveCart();
  updateCartCount();
  const btn = document.getElementById('atc-' + id);
  if (btn) { btn.classList.add('added'); btn.innerHTML = '<i class="fa fa-check"></i> Added'; }
  showToast(`${p.name} added to cart!`, 'fa-bag-shopping');
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id, selectedSize);
  closeQuickView();
}

function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-count');
  badge.textContent   = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function renderCartPage() {
  const list  = document.getElementById('cart-items-list');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-subtitle').textContent = `${total} item${total !== 1 ? 's' : ''} in your cart`;

  if (!cart.length) {
    list.innerHTML = `
      <div class="cart-empty">
        <i class="fa fa-bag-shopping"></i>
        <h3>Your cart is empty</h3>
        <p>Browse our collection and find something you love</p>
        <button class="btn-primary" onclick="showPage('home')">
          <i class="fa fa-arrow-left"></i> Continue Shopping
        </button>
      </div>`;
    updateCartSummary();
    return;
  }

  list.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <div style="width:100%;height:100%;background:${item.color}14;display:flex;align-items:center;justify-content:center;overflow:hidden">
          ${item.image
            ? `<img src="${item.image}" style="width:100%;height:100%;object-fit:cover"/>`
            : `<svg viewBox="0 0 80 80" style="width:50px;height:50px"><text x="40" y="50" text-anchor="middle" font-size="32">👟</text></svg>`}
        </div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-cat">${item.cat}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">Size: ${item.size}</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(${i},-1)"><i class="fa fa-minus" style="font-size:.7rem"></i></button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i},1)"><i class="fa fa-plus" style="font-size:.7rem"></i></button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${i})"><i class="fa fa-trash"></i></button>
      </div>
    </div>`).join('');
  updateCartSummary();
}

function changeQty(i, d) { cart[i].qty = Math.max(1, cart[i].qty + d); saveCart(); updateCartCount(); renderCartPage(); }
function removeFromCart(i) { cart.splice(i, 1); saveCart(); updateCartCount(); renderCartPage(); showToast('Item removed', 'fa-trash'); }

function updateCartSummary() {
  const sub  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = promoApplied ? Math.round(sub * 0.1) : 0;
  document.getElementById('sum-subtotal').textContent = `₹${sub.toLocaleString()}`;
  document.getElementById('sum-discount').textContent = `-₹${disc.toLocaleString()}`;
  document.getElementById('sum-total').textContent    = `₹${(sub - disc).toLocaleString()}`;
}

function applyPromo() {
  const code = document.getElementById('promo-code').value.trim().toUpperCase();
  if (code === 'SOLE10') {
    promoApplied = true;
    showToast('10% discount applied! 🎉', 'fa-tag');
    updateCartSummary();
  } else {
    showToast('Invalid promo code', 'fa-xmark');
  }
}

/* ===================================================
   PAYMENT
   =================================================== */
function renderPaymentPage() {
  const list = document.getElementById('order-items-list');
  list.innerHTML = cart.map(item => `
    <div class="order-item">
      <div class="order-item-img">
        ${item.image
          ? `<img src="${item.image}" style="width:100%;height:100%;object-fit:cover"/>`
          : `<div style="width:100%;height:100%;background:${item.color}18;display:flex;align-items:center;justify-content:center">👟</div>`}
      </div>
      <div class="order-item-info">
        <div class="order-item-name">${item.name}</div>
        <div class="order-item-meta">Size: ${item.size} × ${item.qty}</div>
      </div>
      <div class="order-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
    </div>`).join('') || '<p style="color:var(--text3);text-align:center;font-size:.88rem">No items in cart</p>';

  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(sub * 0.05);
  document.getElementById('pay-subtotal').textContent = `₹${sub.toLocaleString()}`;
  document.getElementById('pay-tax').textContent      = `₹${tax.toLocaleString()}`;
  document.getElementById('pay-total').textContent    = `₹${(sub + tax).toLocaleString()}`;
}

function selectMethod(el, m) {
  document.querySelectorAll('.method-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  ['card', 'upi', 'net', 'cod'].forEach(k => {
    const d = document.getElementById('pd-' + k);
    if (d) d.style.display = k === m ? 'block' : 'none';
  });
}

function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function placeOrder() {
  const id = 'SOLE-2025-' + Math.floor(Math.random() * 9000 + 1000);
  document.getElementById('order-id-display').textContent = id;
  document.getElementById('success-modal').classList.add('open');
}

function closeSuccessModal() {
  document.getElementById('success-modal').classList.remove('open');
  cart = [];
  saveCart();
  updateCartCount();
  showPage('home');
}

/* ===================================================
   AUTH
   =================================================== */
function switchAuthTab(tab, el) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.getElementById('form-' + tab).classList.add('active');
}

function handleLogin() {
  const email = document.getElementById('login-email').value;
  const pass  = document.getElementById('login-pass').value;
  let ok = true;
  if (!email || !email.includes('@')) {
    document.getElementById('login-email').classList.add('error');
    document.getElementById('err-login-email').classList.add('show');
    ok = false;
  } else {
    document.getElementById('login-email').classList.remove('error');
    document.getElementById('err-login-email').classList.remove('show');
  }
  if (!pass || pass.length < 6) {
    document.getElementById('login-pass').classList.add('error');
    document.getElementById('err-login-pass').classList.add('show');
    ok = false;
  } else {
    document.getElementById('login-pass').classList.remove('error');
    document.getElementById('err-login-pass').classList.remove('show');
  }
  if (ok) { showToast('Logged in successfully! Welcome back 👋', 'fa-user'); setTimeout(() => showPage('home'), 900); }
}

function handleSignup() {
  const name  = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const pass  = document.getElementById('signup-pass').value;
  let ok = true;
  if (!name)  { document.getElementById('signup-name').classList.add('error');  document.getElementById('err-signup-name').classList.add('show');  ok = false; }
  else        { document.getElementById('signup-name').classList.remove('error'); document.getElementById('err-signup-name').classList.remove('show'); }
  if (!email || !email.includes('@')) { document.getElementById('signup-email').classList.add('error'); document.getElementById('err-signup-email').classList.add('show'); ok = false; }
  else        { document.getElementById('signup-email').classList.remove('error'); document.getElementById('err-signup-email').classList.remove('show'); }
  if (!pass || pass.length < 6) { document.getElementById('signup-pass').classList.add('error'); document.getElementById('err-signup-pass').classList.add('show'); ok = false; }
  else        { document.getElementById('signup-pass').classList.remove('error'); document.getElementById('err-signup-pass').classList.remove('show'); }
  if (ok) { showToast('Account created! Welcome to SOLE ✨', 'fa-star'); setTimeout(() => showPage('home'), 900); }
}

/* ===================================================
   WISHLIST
   =================================================== */
function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast('Removed from wishlist', 'fa-heart');
  } else {
    wishlist.add(id);
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast('Added to wishlist ❤️', 'fa-heart');
  }
  saveWishlist();
}

function toggleWishlistModal() {
  if (!currentModalProduct) return;
  const btn = document.getElementById('modal-wishlist');
  if (wishlist.has(currentModalProduct.id)) {
    wishlist.delete(currentModalProduct.id);
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i>';
  } else {
    wishlist.add(currentModalProduct.id);
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
  }
  saveWishlist();
}

/* ===================================================
   SEARCH
   =================================================== */
function handleSearch(q) {
  if (!q.trim()) return;
  const ql      = q.toLowerCase();
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(ql) ||
    p.cat.toLowerCase().includes(ql)  ||
    p.sub.toLowerCase().includes(ql)
  );
  showPage('home');
  const grid = document.getElementById('featured-grid');
  grid.innerHTML = results.slice(0, 12).map(p => productCardHTML(p)).join('');
  results.slice(0, 12).forEach((p, i) =>
    setTimeout(() => { const el = document.getElementById('pimg-' + p.id); if (el) loadProductImage(p, el); }, i * 250)
  );
  document.querySelector('#page-home .section-header h2').textContent = `"${q}" — Search Results`;
  document.querySelector('#page-home .section-header p').textContent  = `${results.length} products found`;
}

/* ===================================================
   NAVIGATION & UI HELPERS
   =================================================== */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo(0, 0);
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navMap   = { home: 0, men: 1, women: 2, auth: 3 };
  const navLinks = document.querySelectorAll('.nav-links a');
  if (navMap[name] !== undefined && navLinks[navMap[name]])
    navLinks[navMap[name]].classList.add('active');
  if (name === 'cart')    renderCartPage();
  if (name === 'payment') renderPaymentPage();
  closeMobileMenu();
}

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('sole-theme', next);
}

function toggleMobileMenu() {
  const links  = document.getElementById('nav-links');
  const isOpen = links.style.display === 'flex';
  if (isOpen) {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:var(--nav-bg);padding:16px;border-bottom:1px solid var(--border);gap:4px;backdrop-filter:blur(20px);z-index:99';
  }
}

function closeMobileMenu() {
  const links = document.getElementById('nav-links');
  if (window.innerWidth <= 900) links.style.display = 'none';
}

function showToast(msg, icon = 'fa-check') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<i class="fa ${icon}"></i>${msg}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 30 ? '0 4px 20px var(--shadow)' : 'none';
});

/* ===================================================
   INIT ON LOAD
   =================================================== */
// Restore saved theme immediately (before load)
const savedTheme = localStorage.getItem('sole-theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

window.addEventListener('load', () => {
  const msg = document.getElementById('loader-msg');
  let dots = 0;
  const dotAnim = setInterval(() => {
    dots = (dots + 1) % 4;
    msg.textContent = 'Loading experience' + '...'.slice(0, dots + 1);
  }, 400);

  setTimeout(() => {
    clearInterval(dotAnim);
    msg.textContent = 'Ready!';
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
      renderFeaturedProducts();
      renderTrendingCards();
      renderMenuPage('men-body',   MEN_CATEGORIES,   'men');
      renderMenuPage('women-body', WOMEN_CATEGORIES, 'women');
      updateCartCount();
    }, 300);
  }, 2200);
});
