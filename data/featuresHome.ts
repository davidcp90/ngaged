 import reviewsImg from "../public/images/home/discover.png";
 import retentionImg from "../public/images/home/retention.png";
 import spontaneousImg from "../public/images/home/spontaneous.png";
 import developmentImg from "../public/images/home/development.png";
 import hackathonImg from "../public/images/home/hackathon.png";
 const featuresHome = [{
  title: 'Ngaged 360 Reviews',
  available: false,
  layout: 'row',
  image: reviewsImg,
  description: ['Asses your team periodically with easy to roll up 360 reviews.', 'Create custom forms', 'Track completion', 'Compare with past feedback','Create groups and assign reviews', 'Make it easier with sentiment analysis'],
},
{
  title: 'Ngaged and never lose talent again',
  available: false,
  layout: 'row-reverse',
  image: retentionImg,
  description:['Learn how to retain your team','Save your exit interviews', 'Import previous data', 'Track your turn-over and attrition', 'Advanced turn-over analysis','Identify problems with cohort analysis']
},
{
  title: 'Spontaneous Feedback',
  available: false,
  layout: 'row',
  image: spontaneousImg,
  description: ['Don\'t wait for the next 360 review or 1:1 meeting','Create a culture of learning', 'Share feedback easily via slack', 'Recognize or suggest improvement'],
},
{
  title: 'Ngaged 1-1s with personal development',
  available: false,
  layout: 'row-reverse',
  image: developmentImg,
  description: ['Collect feedback from your 1-1s', 'View past feedback in a glance', 'Create personal development plans', 'Track progress on development plans', 'Help your team grow!']
},
{
  title: 'Ngaged your team with hackathons and events',
  available: false,
  layout: 'row',
  image: hackathonImg,
  description: ['Create beautiful pages for your hackathon', 'Let them book', 'Publish all the details (schedule, venue, rules)', 'Collect proposals', 'Vote propossals and form teams'],
}];

export default featuresHome;
