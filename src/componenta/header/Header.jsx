import'./Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="nav">
            <h1>Ever <span style={{color: 'green'}}>Green</span></h1>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About US</a></li>
              <li><a href="#">Our Service</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pages</a></li>
            </ul>
            <button>Login</button>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header