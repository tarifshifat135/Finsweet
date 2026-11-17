import { useState } from 'react'
import { Link } from 'react-router-dom'
import { menuData } from '../../dummyData/menuData.js'

function NavLinks({ links, onLinkClick, className = '' }) {
    return (
        <ul className={className}>
            {links.map((item) => (
                <li key={item.id}>
                    <Link to={item.url} onClick={onLinkClick} className="text-xs font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-brand-peach">
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}



function Navbar({ logo = '{finsweet', logoHref = '/', links = menuData, contactLabel = 'Contact Us', contactHref = '#contact' }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <header className="bg-brand-dark text-white">
            <nav aria-label="Main navigation" className="mx-auto flex min-h-20 max-w-[1500px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
                <Link to={logoHref} onClick={closeMenu} className="text-xl font-bold tracking-tight" aria-label={`${logo} home`}>
                    {logo}
                </Link>
                
                <div className="hidden items-center gap-8 lg:flex">
                    <NavLinks links={links} className="flex items-center gap-8" />
                    <Link to={contactHref} className="inline-flex items-center justify-center rounded-md bg-brand-peach px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:bg-brand-peach-hover">
                        {contactLabel}
                    </Link>
                </div>

                <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded p-2 text-white hover:bg-white/10 lg:hidden" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
                    <span className="text-2xl leading-none" aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
                </button>
            </nav>

            {isMenuOpen && (
                <div className="border-t border-white/10 px-6 pb-5 lg:hidden">
                    <NavLinks links={links} onLinkClick={closeMenu} className="flex flex-col gap-4 py-4" />
                    <Link to={contactHref} onClick={closeMenu} className="inline-flex items-center justify-center rounded-md bg-brand-peach px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:bg-brand-peach-hover">
                        {contactLabel}
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Navbar
