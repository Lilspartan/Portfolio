const Nav = () => (
    <nav className="nav-animate fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/40 border-b border-white/10">
        <a href="/">
            <svg width="32" height="32" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="navGrad" x1="-320" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%"   stopColor="#c084fc"/>
                        <stop offset="16.6%" stopColor="#e879f9"/>
                        <stop offset="33.3%" stopColor="#a855f7"/>
                        <stop offset="50%"  stopColor="#c084fc"/>
                        <stop offset="66.6%" stopColor="#e879f9"/>
                        <stop offset="83.3%" stopColor="#a855f7"/>
                        <stop offset="100%" stopColor="#c084fc"/>
                        <animateTransform
                            attributeName="gradientTransform"
                            type="translate"
                            from="0 0"
                            to="320 0"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                    </linearGradient>
                    <filter id="navShadow" x="0" y="0" width="320" height="320" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="10"/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
                <g filter="url(#navShadow)">
                    <path d="M310 150C310 179.667 301.203 208.668 284.72 233.335C268.238 258.003 244.811 277.229 217.403 288.582C189.994 299.935 159.834 302.905 130.736 297.118C101.639 291.33 74.9119 277.044 53.934 256.066C32.9562 235.088 18.6701 208.361 12.8823 179.264C7.09449 150.166 10.065 120.006 21.4181 92.5975C32.7713 65.1886 51.9972 41.7618 76.6645 25.2796C101.332 8.79734 130.333 -3.53778e-07 160 0V75C145.166 75 130.666 79.3987 118.332 87.6398C105.999 95.8809 96.3857 107.594 90.7091 121.299C85.0325 135.003 83.5473 150.083 86.4411 164.632C89.335 179.18 96.4781 192.544 106.967 203.033C117.456 213.522 130.82 220.665 145.368 223.559C159.917 226.453 174.997 224.967 188.701 219.291C202.406 213.614 214.119 204.001 222.36 191.668C230.601 179.334 235 164.834 235 150H310Z" fill="url(#navGrad)"/>
                    <path d="M160 75L310 75L310 150H160L160 75Z" fill="url(#navGrad)"/>
                </g>
            </svg>
        </a>
        <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="/#about"    className="text-white/60 hover:text-accent transition duration-200">About</a>
            <a href="/#projects" className="text-white/60 hover:text-accent transition duration-200">Projects</a>
            <a href="/writing"   className="text-white/60 hover:text-accent transition duration-200">Writing</a>
            <a href="/#contact"  className="text-white/60 hover:text-accent transition duration-200">Contact</a>
            <a href="/resume.pdf" target="_blank" className="border border-accent/50 text-accent px-3 py-1 text-xs font-bold hover:bg-accent hover:text-primary transition duration-200">
                Resume
            </a>
        </div>
    </nav>
);

export default Nav;
