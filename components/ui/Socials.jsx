import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord} from 'react-icons/fa';

const socials = [
  {icon: <FaGithub/>, path:"https://github.com/Shuazafen"},
  {icon: <FaLinkedin/>, path:""},
  {icon: <FaTwitter/>, path:""},
  {icon: <FaDiscord/>, path:""},  // add your discord icon here too if you want to include it.
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
