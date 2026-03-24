export function Header() {
  return `
    <a class="skip-link" href="#main">Saltar al contenido</a>

    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="Waveless, inicio">
          <img src="/img/logo.png" alt="logo Waveless">
        </a>

        <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="site-menu">
          <span class="nav-toggle-bar" aria-hidden="true"></span>
        </button>

        <nav id="site-menu" class="primary-nav" aria-label="Principal">
          <ul>
            <li>
              <a href="#" aria-current="page">
                <span class="nav-icon adventure" aria-hidden="true"></span>
                Aventura
              </a>
            </li>
            <li>
              <a href="#">
                <span class="nav-icon destinations" aria-hidden="true"></span>
                Destinos
              </a>
            </li>
            <li>
              <a href="#">
                <span class="nav-icon accommodation" aria-hidden="true"></span>
                Alojamiento
              </a>
            </li>
            <li><a href="#">Sobre nosotros</a></li>
          </ul>
        </nav>

        <a class="btn-reserva" href="#reserva">Reserva</a>
      </div>
    </header>
  `;
}