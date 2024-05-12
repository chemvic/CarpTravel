import NavLink from "../NavLink/NavLink"

import data from "../../data/header.json";

type PageNavProps = {
  closeMenu?: () => void;
};

const PageNav:React.FC<PageNavProps> = ({closeMenu}) => {

  return (
    <ul className='gap-[48px] flex flex-col items-center justify-center md:flex-row md:gap-[24px] xl:gap-[56px]'>
      {data.map(({link, text}) => (
         <li key={link}><NavLink link={link} text={text} closeMenu={closeMenu}/></li>

      ))}      
    </ul>
  )
}

export default PageNav