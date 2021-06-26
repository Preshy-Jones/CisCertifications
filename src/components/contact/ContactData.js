import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contactData = {
  address:[
    {
      icon:<FontAwesomeIcon className='contact-icon' icon={['fas', 'map-marker-alt']} />,
      body: 'Unit No – 514, 5th Floor, Vipul Business Park, Sohna Road Sector 48, Gurgaon Haryana -122018, India'
    },
    {
      icon:<FontAwesomeIcon className='contact-icon'  icon={['fas', 'map-marker-alt']} />,
      body: 'Unit No – 312, 3rd Floor, Vipul Business Park, Sohna Road Sector 48, Gurgaon Haryana -122018, India'
    },
    {
      icon:<FontAwesomeIcon className='contact-icon'  icon={['fas', 'envelope']} />,
      body: 'info@siscertifications.co.in'
    },
    {
      icon:<FontAwesomeIcon className='contact-icon'  icon={['fas', 'mobile-alt']} />,
      body: '+91 9643073391,+91-8860610495,0124-4060495'
    },
    {
      icon:<FontAwesomeIcon className='contact-icon'  icon={['fas', 'globe-africa']} />,
      body: 'www.siscertifications.com'
    },
    {
      icon:<FontAwesomeIcon className='contact-icon'  icon={['fab', 'whatsapp']} />,
      body: '+91 8860610495'
    },
    
  
  ],
    form:[
    {
      placeholder:'Your Full Name*',
      type: 'text',
      name:'name',
    }, 
    {
      placeholder:'Email*',
      type: 'text',
      name:'email'
    }, 
    {
      placeholder:'Phone Number*',
      type: 'text',
      name:'phone'
    },
    {
      placeholder:'Location/Country*',
      type: 'text',
      name:'location'
    }
  ]
}

export default contactData