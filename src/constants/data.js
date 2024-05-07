import images from './images';
import { RiUserSettingsLine } from "react-icons/ri";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import { IoAccessibilityOutline } from "react-icons/io5";
import { BiRun } from "react-icons/bi";



const dish = [
  {
    id: 1,
    imgUrl: images.masa,
    title: 'Masa, Shinkafi',
    price: 'N500',
    tags: 'Masa: Fluffy rice pancakes, sweet or savory.',
  },
  {
    id:2,
    imgUrl: images.goldenYam,
    title: 'Golden Yam, ELMAXIO',
    price: 'N1500',
    tags: 'Crispy, golden-fried yam slices a crunchy delight',
  },
  {id: 3,
    imgUrl: images.liverSauce,
    title: 'Liver Sauce, HOTSPOT',
    price: 'N600',
    tags: 'Rich and savory sauce made with tender liver pieces, adding depth to every dish.',

  },
  {
    id:4,
    imgUrl: images.poundo,
    title: 'PoundedYam, Chips Republic',
    price: 'N2400',
    tags: 'PoundedYam: Smooth, velvety yam dough, a Nigerian classic.',
  },
  {
    id:5,
    imgUrl: images.waina,
    title: 'Waina, Amsterdam',
    price: 'N750',
    tags: 'Waina: Savory rice balls, perfect for dipping.',
  },
  {
    id:6,
    imgUrl: images.jollof,
    title: 'Jollof Rice, NIHARI',
    price: 'N450',
    tags: 'A vibrant medley of rice, tomatoes, and spices, bursting with flavor',
  },
  {
    id:7,
    imgUrl: images.poundedyam,
    title: 'PoundedYam, NIHARI',
    price: 'N500',
    tags: 'PoundedYam: Smooth, velvety yam dough, a Nigerian classic.',
  },
  {
    id:8,
    imgUrl: images.yam,
    title: 'Yam and Sauce, Bigmay Catering',
    price: 'N800',
    tags: 'Yam and Sauce: Tender yam slices served with flavorful dipping sauce. ',
  },
];
// {
//   id:9,
//   imgUrl: images.rice,
//   title: 'jollof Rice Blue Delight',
//   price: 'N600',
//   tags: 'A harmonious blend of rice, tomatoes, and aromatic spices, a taste of West African comfort.',
// },

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const services = [
  {
    icon: <RiUserSettingsLine/>,
    title: 'SERVICES',
    text: 'We are always reaady to serve the best for you to feel the best as life is too short to be umhappy. so celebrate with us everyday. we are fast, reliable, and easy accessable.',
  },
  {
    icon: <LiaBusinessTimeSolid/>,
    title: 'TIME MANAGEMENT',
    text: 'The best for you to feel the best as life is too short to be umhappy. so celebrate with us everyday. we are fast, reliable, and easy accessable.',
  },
  {
    icon: <CiDeliveryTruck/>,
    title: 'DELIVERY',
    text: 'We are always ready to serve the best for you to feel the best as life is too short to be unhappy.',
  },
  {
    icon: <MdOutlineSentimentVerySatisfied/>,
    title: 'SATISFACTION',
    text: 'Indulge in the perfect combinationof flavors and textures',
  },
  {
    icon: <BiRun/>,
    title: 'EASY ACCESS',
    text: 'Quickly satisfy your cravings with our convenient and delicious options',
  },
  {
    icon: <IoAccessibilityOutline/>,
    title: 'Efficiency',
    text: 'Experience swift services and delicious dishes with our easy access menu items',
  },
];

export default { dish, cocktails, services };
