import islandhighlights from '../assets/tours/islandhighlights.jpg';
import wildsrilanka from '../assets/tours/wildsrilanka.jpg';
import teatrailshighlands from '../assets/tours/teatrailshighlands.jpg';
import southernescape from '../assets/tours/southernescape.jpg';
import culturalsrilanka from '../assets/tours/culturalsrilanka.jpg';
import grandislandjourney from '../assets/tours/grandislandjourney.jpg';

export const tours = [
  {
    id: 'island-highlights',
    category: 'Signature Journey',
    duration: '7 Days',
    title: 'Island Highlights',
    route: 'Colombo → Sigiriya → Kandy → Ella → Yala → Galle',
    description: "A perfectly paced introduction to Sri Lanka's ancient cities, hill country and southern coast.",
    price: 'from $1,450',
    image: islandhighlights,
    alt: 'Sigiriya rock fortress surrounded by lush jungle',
  },
  {
    id: 'wild-sri-lanka',
    category: 'Wildlife',
    duration: '6 Days',
    title: 'Wild Sri Lanka',
    route: 'Yala → Udawalawe → Wilpattu',
    description: 'A safari-focused adventure tracking leopards, elephants and wetland birdlife across three parks.',
    price: 'from $1,290',
    image: wildsrilanka,
    alt: 'Wild elephant herd crossing a grassland in a Sri Lankan national park',
  },
  {
    id: 'tea-trails-highlands',
    category: 'Highlands',
    duration: '5 Days',
    title: 'Tea Trails & Highlands',
    route: 'Kandy → Nuwara Eliya → Ella',
    description: 'Wind through emerald tea estates, waterfalls and cool colonial hill towns by scenic train.',
    price: 'from $980',
    image: teatrailshighlands,
    alt: 'Workers picking tea on a terraced plantation in the Sri Lankan highlands',
  },
  {
    id: 'southern-escape',
    category: 'Coastal',
    duration: '5 Days',
    title: 'Southern Escape',
    route: 'Galle → Mirissa → Weligama → Bentota',
    description: 'Slow mornings on golden beaches, whale watching and sunset walks along the Dutch fort ramparts.',
    price: 'from $890',
    image: southernescape,
    alt: 'Golden sand beach with palm trees on the southern coast of Sri Lanka',
  },
  {
    id: 'cultural-sri-lanka',
    category: 'Heritage',
    duration: '8 Days',
    title: 'Cultural Sri Lanka',
    route: 'Anuradhapura → Polonnaruwa → Dambulla → Kandy',
    description: 'Explore ancient kingdoms, sacred cave temples and ruined cities of the Cultural Triangle.',
    price: 'from $1,590',
    image: culturalsrilanka,
    alt: 'Ancient stone ruins of a ceremonial site in Polonnaruwa, Sri Lanka',
  },
  {
    id: 'grand-island-journey',
    category: 'Grand Tour',
    duration: '12 Days',
    title: 'The Grand Island Journey',
    route: 'Colombo → Cultural Triangle → Hill Country → South Coast',
    description: 'Our complete Sri Lankan experience — heritage, wildlife, tea country and coast in one grand trip.',
    price: 'from $2,650',
    image: grandislandjourney,
    alt: 'Panoramic view of Sri Lankan countryside with mountains and lakes',
  },
];