import toteBagImg from '../assets/img/nu-totebag.jpg';
import notesImg from '../assets/img/id-lace.webp';
import tumblerImg from '../assets/img/baseball-cap.webp';
import lampImg from '../assets/img/champion-shirt.jpg';
import hoodieImg from '../assets/img/nu-jersey.jpg';
import organizerImg from '../assets/img/adidasxbulldogs.jpg';
import lanyardImg from '../assets/img/nu-shoes.jpg';
import carepackImg from '../assets/img/tumbler.avif';

const products = [
  {
    name: 'campus-tote-bag',
    title: 'NU Tote Bag',
    category: 'Bags',
    price: 'PHP 199',
    stock: 'In stock',
    image: toteBagImg,
    content: [
      'A lightweight and durable tote bag perfect for carrying books, gadgets, and daily school essentials.',
      'Designed with strong handles and a simple NU-inspired print for everyday campus use.',
      'Ideal for students who prefer a practical and stylish carry-all bag.',
    ],
  },
  {
    name: 'id-lace-accessories',
    title: 'NU ID Lace',
    category: 'Accessories',
    price: 'PHP 125',
    stock: 'In stock',
    image: notesImg,
    content: [
      'A durable and lightweight ID lace designed for daily campus use.',
      'Keeps your ID secure, visible, and easy to access at all times.',
      'Simple yet reliable accessory for students and staff.',
    ],
  },
  {
    name: 'baseball-cap',
    title: 'NU Cap',
    category: 'Accessories',
    price: 'PHP 299',
    stock: 'Low stock',
    image: tumblerImg,
    content: [
      'A comfortable everyday cap with a clean NU design for casual campus wear.',
      'Made with breathable fabric for sun protection and all-day comfort.',
      'Perfect for students who want a simple and stylish headwear piece.',
    ],
  },
  {
    name: 'shirt',
    title: 'NU Champion Shirt',
    category: 'Apparel',
    price: 'PHP 999',
    stock: 'In stock',
    image: lampImg,
    content: [
      'A premium cotton shirt designed for everyday campus comfort.',
      'Soft, breathable fabric makes it ideal for long school days.',
      'A clean and classic NU-inspired design for casual wear.',
    ],
  },
  {
    name: 'baseball-jersey',
    title: 'Jersey',
    category: 'Apparel',
    price: 'PHP 1,199',
    stock: 'Preorder',
    image: hoodieImg,
    content: [
      'A sporty jersey designed for comfort, movement, and everyday wear.',
      'Made with breathable fabric suitable for active campus lifestyles.',
      'Available for preorder to secure your preferred size early.',
    ],
  },
  {
    name: 'shirt',
    title: 'Adidas x Bulldog Shirt',
    category: 'Apparel',
    price: 'PHP 1,499',
    stock: 'In stock',
    image: organizerImg,
    content: [
      'A limited-edition shirt featuring a bold Adidas x Bulldog collaboration design.',
      'Made with soft fabric for both style and comfort.',
      'Perfect for casual wear and street-style outfits.',
    ],
  },
  {
    name: 'sport-shoes',
    title: 'NU Basketball Shoes',
    category: 'Footwear',
    price: 'PHP 5,999',
    stock: 'In stock',
    image: lanyardImg,
    content: [
      'High-performance basketball shoes built for support, grip, and comfort.',
      'Designed for both training and competitive play.',
      'Perfect for athletes who value stability and durability on the court.',
    ],
  },
  {
    name: 'tumbler',
    title: 'NU Tumbler',
    category: 'Drinkware',
    price: 'PHP 499',
    stock: 'In stock',
    image: carepackImg,
    content: [
      'A durable insulated tumbler that keeps drinks hot or cold for hours.',
      'Perfect for coffee, water, or tea during long school days.',
      'A simple and practical everyday campus essential.',
    ],
  },
];

export default products;