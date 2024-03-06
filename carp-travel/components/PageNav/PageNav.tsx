import NavLink from "../NavLink/NavLink"


const PageNav = () => {
  return (
    <ul className='flex items-center flex-col md:flex-row'>
       <li><NavLink link={"about"} text={"About"}/></li>
       <li><NavLink link={"services"} text={"Services"}/></li>
       <li><NavLink link={"career"} text={"Career"}/></li>
       <li><NavLink link={"gallery"} text={"Gallery"}/></li>
       <li><NavLink link={"contacts"} text={"Contacts"}/></li>
    </ul>
  )
}

export default PageNav