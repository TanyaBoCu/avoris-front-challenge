export function Header() {
  return `
    <a class="skip-link" href="#main">Saltar al contenido</a>

    <header class="c-header">
      <div class="c-header__inner">
        <a class="c-header__brand" href="/" aria-label="Waveless, inicio">
          <img src="/img/logo.png" alt="logo Waveless">
        </a>

        <button class="c-header__toggle" aria-label="Abrir men&uacute;" aria-expanded="false" aria-controls="site-menu">
          <span class="c-header__toggle-bar" aria-hidden="true"></span>
        </button>

        <nav id="site-menu" class="c-header__nav" aria-label="Principal">
          <ul>
            <li>
              <a href="#" aria-current="page">
                <span class="c-header__nav-icon c-header__nav-icon--adventure" aria-hidden="true"></span>
                Aventura
              </a>
            </li>
            <li>
              <a href="#">
                <span class="c-header__nav-icon c-header__nav-icon--destinations" aria-hidden="true"></span>
                Destinos
              </a>
            </li>
            <li>
              <a href="#">
                <span class="c-header__nav-icon c-header__nav-icon--accommodation" aria-hidden="true"></span>
                Alojamiento
              </a>
            </li>
            <li><a href="#">Sobre nosotros</a></li>
          </ul>
        </nav>

        <a class="c-header__cta" href="#reserva">Reserva</a>
      </div>
    </header>
  `;
}
