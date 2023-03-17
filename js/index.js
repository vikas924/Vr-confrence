function showhide() {
  const element = document.querySelector('.button');
  const closemenu = document.querySelector('.mobile-menu');
  if (element.style.display !== 'none') {
    element.style.display = 'none';
    closemenu.style.visibility = 'visible';
    closemenu.style.height = '60%';
  } else if (element.style.display === 'none') {
    closemenu.style.height = '0';
    setTimeout(() => {
      closemenu.style.visibility = 'hidden';
      element.style.display = 'block';
    }, 200);
  }
}

const openMenu = document.querySelector('#logo');
openMenu.addEventListener('click', showhide);

const closeMenu = document.querySelector('.menu-button');
closeMenu.addEventListener('click', showhide);

const array = [{
  name: 'Joanna Popper (LA)',
  image: '<img class=speakerbg src="./images/bgimage.png">',
  image2: '<img src="./images/Joannapopper.webp" class="speakerimage">',
  description1: 'Joanna Popper is a Hollywood and Silicon Valley media executive. She recently became HP’s Global Head of Virtual Reality for Location Based Entertainment.',
  description2: 'Joanna Popper is a Hollywood and Silicon Valley media executive. She recently became HP’s Global Head of Virtual Reality for Location Based Entertainment. Prior she was EVP of Media & Marketing at Singularity University and VP Marketing at NBCUniversal. Joanna developed a TV show partnership with NBC and Singularity University for “The Awesome Show,” a new TV series on technology and innovation. Joanna was selected as “50 Women Can Change the World in Media and Entertainment,” “Top Women in Digital: Game Changers,” “101 Women Leading the VR Industry” and is on the Coalition for the Women in XR Fund. Her previous experience includes McKinsey, JP Morgan Chase and DHL. She has degrees from Northwestern University and The Wharton School at the University of Pennsylvania.',
  designation: 'Global Head of VR for Location Based Entertainment, HP',
},
{
  name: 'Darren Bennett (Vancouver)',
  image: '<img class=speakerbg src="./images/bgimage.png">',
  image2: '<img src="./images/Darrenbennet.jpg" class="speakerimage">',
  description1: 'From his first days at Microsoft, Darren has been focused on innovation.',
  description2: "From his first days at Microsoft, Darren has been focused on innovation. His initial prototype contributions to KINECT came early in the platforms development and wowed execs, and he quickly progressed to creative direction of KINECT Adventures. The title offered a new arena for human interaction and was a critical piece in future exploration of human expectation for natural interactions. Darren moved from success at KINECT to leading edge development, from concept to ship, on Microsoft HoloLens. He drove software incubation efforts, creative direction of the experiences portfolio and finally, shipped UX for the first Mixed Reality operating system - Windows Holographic. Today, he's back home in British Columbia and applying the power of Mixed Reality to the modern workplace.",
  designation: 'Creative Director, Microsoft',
}, {
  name: 'Kyle Roche (Seattle)',
  image: '<img class=speakerbg src="./images/bgimage.png">',
  image2: '<img src="./images/kyleroche.avif" class="speakerimage">',
  description1: 'Kyle Roche is the General Manager of Amazon Sumerian. Kyle was the founder of 2lemetry which was acquired by Amazon in 2015',
  description: 'Kyle Roche is the General Manager of Amazon Sumerian. Kyle was the founder of 2lemetry which was acquired by Amazon in 2015 and became AWS IoT. He is a regular speaker at industry events for IoT, AR, and VR. He has authored numerous technical publications on subjects ranging from cloud computing to augmented reality.',
  designation: 'GM,  Amazon',
}, {
  name: 'Elizabeth Baron (Detroit)',
  image: '<img class=speakerbg src="./images/bgimage.png">',
  image2: '<img src="./images/eliza.jpg" class="speakerimage">',
  description1: 'Elizabeth Baron is a Technical Specialist in Virtual Reality and Advanced Visualization at Ford Motor Company.',
  description2: 'Elizabeth Baron is a Technical Specialist in Virtual Reality and Advanced Visualization at Ford Motor Company. She has been the driving force in the development and deployment of immersive vehicle verification technology at Ford Motor Company. She is the principle inventor of the Ford immersive Vehicle Environment (FiVE) process and technology. Elizabeth became the first Virtual Reality Technical Specialist at Ford, a position she asked to create so she could grow the technology within the Company. Since creating FiVE, she has worked to bring immersive storytelling for user experience into Ford with an effective marriage of the virtual and physical worlds. Elizabeth was awarded the highest individual technical award in Ford Motor Company, the Dr. Haren Gandhi Research and Innovation Award, honoring her career in immersive visualization and her technical leadership.',
  designation: 'VR and Advanced Visualization, Ford',
}, {
  name: 'Chris Bobotis (Montreal)',
  image: '<img class=speakerbg src="./images/bgimage.png">',
  image2: '<img src="./images/bobotis.png" class="speakerimage">',
  description1: 'Chris is Director of Immersive at Adobe, overseeing the company’s Immersive Media efforts',
  description2: 'Chris is Director of Immersive at Adobe, overseeing the company’s Immersive Media efforts. Chris is the software architect for the SkyBox suite of 360˚ video and cinematic VR tools, which Adobe recently acquired from Chris’ previous company Mettle. Chris co-founded Mettle in 1992 and was Partner & Creative Director. Mettle transformed the nascent 360˚ VR video industry with their SkyBox software plugins for Adobe Premiere Pro and After Effects, providing a dedicated toolset for editing and manipulating 360˚ video and introducing core features and functionality that had previously been missing from the market. Today, Mettle customers include Facebook, Google, Apple, Samsung, CNN, HBO, New York Times, NASA, and virtually all other professional 360˚ content producers. Chris is an advocate for immersive storytelling, and regular presenter at SIGGRAPH, NAB and IBC conferences. Chris grew up in Montréal, and previously worked as a creative director, art director, illustrator and production manager.',
  designation: 'Director of Immersive, Adobe Systems Inc',
}, {
  name: 'Charlie Fink (NYC)',
  image: '<img class=speakerbg src="./images/bgimage.png">',
  image2: '<img src="./images/charlie.jpg" class="speakerimage">',
  description1: "Charlie Fink is an AR/VR Consultant, Columnist, Speaker and the Author of Charlie Fink's Metaverse, An AR Enabled Guide to VR & AR.",
  description2: "Charlie Fink is an AR/VR Consultant, Columnist, Speaker and the Author of Charlie Fink's Metaverse, An AR Enabled Guide to VR & AR. He is a former Disney, AOL and AG Interactive executive who notably came up with the idea for 'The Lion King' while a junior executive in 1987. In the 90s, Fink was EVP & COO of VR pioneer Virtual World Entertainment. He is a sought-after professional speaker whose numerous appearances include SXSW, CES, and AWE. Fink is the contributing editor of Virtual Reality Pop, a Medium publication for whom he writes a popular weekly column. In addition to his work as head of story development for Disney Feature Animation during the second golden age of Disney animation (‘85-’92), Fink was SVP & CCO of AOL Studios (‘95-’99). His past experience also features successful exits from several startups, including eAgents, which sold to AG Interactive, where he then served as President for three years, and Charlie Company, an SEO/SEM affiliate marketer and consultancy that most notably created 'The Other 98%' for client Moveon.org in 2009, which now has over 6 M followers on Facebook. Charlie Company was sold in a private transaction in 2014. Charlie Fink is also a producer of live theater in NYC. He is the Producing Artistic Director of the New Musical Foundation, a non-profit that supports the development of new musicals and has won over 15 awards for its productions. From 2007-2017 Fink was Chairman of the Drama Desk Award-winning NY Musical Festival.",
  designation: 'VR/AR Consultant, Columnist, Speaker, Author',
},
];

function works(html) {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  return template.content;
}

const section = document.createElement('section');
section.id = 'speakers';
const tar = document.querySelector('#body');
tar.insertBefore(section, tar.childNodes[4]);
const div = document.createElement('div');
div.id = 'sphead';
div.innerHTML = '<h1 class="sphead1">Featured Speakers</h1><hr class="line2">';
document.querySelector('#speakers').appendChild(div);
const div1 = document.createElement('div');
div1.id = 'grid';
document.querySelector('#speakers').appendChild(div1);

for (let i = 0; i < array.length; i += 1) {
  if (i <= 1) {
    const cards = works(`<div class ="speakerdiv pick">${array[i].image}${array[i].image2}
<div class= "speakerdiv1"><h1 class="speakerhead">${array[i].name}</h1>
 <h2 class="speakerhead1">${array[i].designation}</h2><hr class="line3">
 <p class="speakerpara">${array[i].description1}</p>
 </div>
</div>`);
    document.querySelector('#grid').appendChild(cards);
  } else if (i > 1) {
    const cards = works(`<div class ="speakerdiv pick hide toggle">${array[i].image}${array[i].image2}
 <div class= "speakerdiv1"><h1 class="speakerhead">${array[i].name}</h1>
 <h2 class="speakerhead1">${array[i].designation}</h2><hr class="line3">
 <p class="speakerpara">${array[i].description1}</p>
 </div>
</div>`);
    document.querySelector('#grid').appendChild(cards);
  }
}

const button = works('<button id= "spbutton" class=speakerbutton>LESS<i class="fa-solid fa-angle-up up"></i></button>');
document.querySelector('#speakers').appendChild(button);

const button1 = works('<button id= "spbutton1" class=speakerbutton>MORE<i class="fa-solid fa-angle-down up"></i></button>');
document.querySelector('#speakers').appendChild(button1);

function more() {
  const b = document.querySelector('#spbutton');
  const b1 = document.querySelector('#spbutton1');
  const cardo = document.querySelectorAll('.toggle');

  if (b1.style.display !== 'none') {
    b1.style.display = 'none';
    b.style.display = 'flex';
    for (let i = 0; i < cardo.length; i += 1) {
      cardo[i].classList.remove('hide');
    }
  } else if (b1.style.display === 'none') {
    b1.style.display = 'flex';
    b.style.display = 'none';
    for (let i = 0; i < cardo.length; i += 1) {
      cardo[i].classList.add('hide');
    }
  }
}

document.querySelector('#spbutton1').addEventListener('click', more);
document.querySelector('#spbutton').addEventListener('click', more);

// Get a reference to the menu and an array of elements
const menu = document.querySelector('.menu');
const elements = document.querySelectorAll('.pick');

// Add a scroll event listener to the window object
window.addEventListener('scroll', () => {
  let value = false;
  // Loop through each element and check if the menu is covering it
  elements.forEach((element) => {
    // Get the bounding rectangles of the menu and the element
    const menuRect = menu.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    // Check if the menu is covering the element
    const isCovering = (menuRect.top < elementRect.bottom && menuRect.bottom > elementRect.top
       && menuRect.left < elementRect.right && menuRect.right > elementRect.left);
    if (isCovering) {
      value = true;
    }
  });
  if (value === true) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
});
