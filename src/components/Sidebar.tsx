import { NavLink } from 'react-router-dom'
import twitterLogo from '../assets/Logo.svg'
import '../components/Sidebar.css'
import { Hash, Bell, House, Envelope, FileText, User, BookmarkSimple, DotsThreeCircle, Pencil } from 'phosphor-react'


export function Sidebar() {
  return (
    <aside className='sidebar'>
    <img className='logo' src={twitterLogo} alt="Logo" />

    <nav className='main-navigation'>
      <NavLink to='/'>
        <House weight='fill' />
        <span>Home</span>
      </NavLink>
      <a href="#">
        <Hash />
        <span>Explore</span>
      </a>
      <a href="#">
        <Bell />
        <span>Notifications</span>
      </a>
      <a href="#">
        <Envelope />
        <span>Messages</span>
      </a>
      <a href="#">
        <BookmarkSimple />
        <span>Bookmarks</span>
      </a>
      <a href="#">
        <FileText />
        <span>Lists</span>
      </a>
      <a href="#">
        <User />
        <span>Profile</span>
      </a>
      <a href="#">
        <DotsThreeCircle />
        <span>More</span>
      </a>
    </nav>

    <button className='new-Tweet'>
      <Pencil />
      <span>Tweet</span>
    </button>
  </aside>
  )
}