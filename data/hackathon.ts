import { IHackathon } from "../types/hackathon";
const hackatonData: Array<IHackathon> = [{
  slug: 'instaleap-digital-superpowers',
  title: 'Digital Superpowers',
  hostLogo: 'https://s3.tebi.io/ngaged/hackathon/logo-wh.png',
  cover: 'https://s3.tebi.io/ngaged/hackathon/cover-hkt.png',
  host: 'Instaleap',
  colors: {
    primary: '#23b75f',
    secondary: '#002766',
  },
  details: {
    startDate: 'April 26',
    endDate: 'April 28',
    location: 'Bogotá, Colombia',
    venue: 'To be confirmed',
    description: 'Our first DIGITAL SUPERPOWERS hackathon is a space in which all Instaleapers would be able to co-create the next genration of digital superpowers for retailers and consumers.'
  }
}]

export default hackatonData;

