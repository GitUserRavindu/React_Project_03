import logo from '/assets/logo.png'

export default function Navbar() {
    return (
        <header>
            <img src={logo} alt="world icon" className="header-logo"/>
            <h1 className="header-title">my travel journal</h1>
        </header>
    )
}