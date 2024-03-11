import NavLink from "../NavLink/NavLink"

type PageNavProps = {
  closeMenu?: () => void;
};

const PageNav:React.FC<PageNavProps> = ({closeMenu}) => {
  return (
    <ul className='gap-[48px] flex flex-col items-center justify-center md:flex-row md:gap-[24px] xl:gap-[56px]'>
       <li><NavLink link={"about"} text={"About"} closeMenu={closeMenu}/></li>
       <li><NavLink link={"services"} text={"Services"} closeMenu={closeMenu}/></li>
       <li><NavLink link={"career"} text={"Career"} closeMenu={closeMenu}/></li>
       <li><NavLink link={"gallery"} text={"Gallery"} closeMenu={closeMenu}/></li>
       <li><NavLink link={"contacts"} text={"Contacts"} closeMenu={closeMenu}/></li>
    </ul>
  )
}

export default PageNav