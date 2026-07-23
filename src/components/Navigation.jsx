import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/button', label: 'Buttons' },
  { to: '/list', label: 'List' },
  { to: '/modal', label: 'Modal' },
];

function Navigation() {
  return (
    <header className="nav-bar">
      <div className="nav-title">Custom Components</div>
      <nav className="nav-links">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navigation;
