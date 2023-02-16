import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { SiGmail, SiKofi } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className = "flex flex-row justify-center w-full text-xl pb-8">
      <div className="text-white flex flex-row justify-center">
        <a className = "group social github" title = "My Github Profile" data-m-delay="1.25" data-m="bounce-left" data-m-duration = "0.75" href="https://github.com/Lilspartan" target="_new"><AiFillGithub className="transition duration-300 mx-2 mt-8 text-4xl group-hover:text-github group-hover:-translate-y-1" /></a>
        <a className = "group social email" title = "Email me!" data-m-delay="1" data-m="bounce-left" data-m-duration = "0.75" href="mailto:gabe@gabekrahulik.dev" target="_new"><SiGmail className="transition duration-300 mx-2 mt-8 text-4xl group-hover:text-gmail group-hover:-translate-y-1" /></a>
        <a className = "group social kofi" title = "Donate on Ko-fi" data-m-delay="0.75" data-m="bounce-down" data-m-duration = "0.75" href="https://ko-fi.com/gabekrahulik" target="_new"><SiKofi className="transition duration-300 ml-2 mt-8 text-4xl group-hover:text-kofi group-hover:-translate-y-1" /></a>
        <a className = "group social linkedin" title = "Check out my LinkedIn page" data-m-delay="1" data-m="bounce-right" data-m-duration = "0.75" href="https://www.linkedin.com/in/gabe-krahulik/" target="_new"><AiFillLinkedin className="transition duration-300 ml-2 mt-8 text-4xl group-hover:text-linkedin group-hover:-translate-y-1" /></a>
        <a className = "group social twitter" title = "Follow me on Twitter" data-m-delay="1.25" data-m="bounce-right" data-m-duration = "0.75" href="https://twitter.com/gabekrahulik" target="_new"><AiOutlineTwitter className="transition duration-300 mx-2 mt-8 text-4xl group-hover:text-twitter group-hover:-translate-y-1" /></a>
      </div>
    </footer>
  )
}

export default Footer