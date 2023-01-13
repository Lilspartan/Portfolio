import { useRouter } from 'next/router';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiGmail, SiKofi } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className = "flex flex-row justify-center w-full p-4 text-xl">
        <div className = "flex flex-col text-center">
            <span>Made By <span className = "font-bold">Gabe Krahulik</span></span>
            <div className = "flex flex-row justify-center text-3xl mt-4 gap-2">
                <a target = "_new" href="https://ko-fi.com/gabekrahulik"><SiKofi className = "hover:text-kofi transition duration-200 cursor-pointer"/></a>
                <a target = "_new" href="https://twitter.com/gabekrahulik"><FaTwitter className = "hover:text-twitter transition duration-200 cursor-pointer"/></a>
                <a target = "_new" href="https://github.com/LilSpartan"><AiOutlineGithub className = "hover:text-github transition duration-200 cursor-pointer"/></a>
                <a target = "_new" href="mailto:gabekrahulik@gmail.com"><SiGmail className = "hover:text-gmail transition duration-200 cursor-pointer"/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer