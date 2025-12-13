import Link from "next/link"

const SocialIcon = () => {
   return (
      <ul className="list-wrap">
         <li><Link href="https://x.com/devnot_" target="_blank"><i className="fab fa-twitter"></i>twitter</Link></li>
         <li><Link href="https://www.instagram.com/devnot_com/" target="_blank"><i className="fab fa-instagram"></i>instagram</Link></li>
         <li><Link href="https://www.youtube.com/c/DevnotTV" target="_blank"><i className="fab fa-youtube"></i>youtube</Link></li>
         <li><Link href="https://www.linkedin.com/company/devnotcom/" target="_blank"><i className="fab fa-linkedin-in"></i>LinkedIn</Link></li>
      </ul>
   )
}

export default SocialIcon
