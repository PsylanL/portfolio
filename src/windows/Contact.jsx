import WindowControls from '#components/WindowControls';
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'


const Contact = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target='contact'/>
        <h2>Contact Me</h2>
    </div>

    <div className='p-5 space-y-5'>
    <img 
    src='/images/dylan.png' 
    alt='adrian' 
    className='w-40 rounded'/>
   

    <h3>Let's Talk!</h3>
    <p>Do you think I could be useful for your team?. Send me an email.</p>
    <p>dylanlogu03@gmail.com</p>
    <ul>
        {socials.map(({id,bg,icon,link,text})=>(
            <li key={id} style={{backgroundColor:bg}}>
                <a 
                href={link}
                target='_blank'
                rel='noopener noreferrer'>
                    <img src={icon} alt={text} className='size-5' />
                    <p>{text}</p>
                </a>
            </li>
        ))}
    </ul>
     </div>
    
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow;