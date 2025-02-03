function App() {
  return (
    <>
      <header>
        <h1>Formulario</h1>
      </header>
      <main>
        <form>
          <h2>Paso 1: Datos personales.</h2>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" />
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text" name="apellidos" id="apellidos" />
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input type="date" name="fechaNacimiento" id="fechaNacimiento" />
          <span> años</span>
          <label htmlFor="correo">Correo electrónico</label>
          <input type="email" name="correo" id="correo" />
          <h2>Paso 2: Datos de acceso.</h2>
          <label htmlFor="nombreUsuario">Nombre de usuario</label>
          <input type="text" name="nombreUsuario" id="nombreUsuario" />
          <label htmlFor="contrasenya">Contraseña</label>
          <input type="password" name="contrasenya" id="contrasenya" />
          <label htmlFor="repetirContrasenya">Repetir contraseña</label>
          <input
            type="password"
            name="repetirContrasenya"
            id="repetirContrasenya"
          />
          <h2>Paso 3: Login.</h2>
          <label htmlFor="nombreUsuarioLogin">Nombre de usuario</label>
          <input
            type="text"
            name="nombreUsuarioLogin"
            id="nombreUsuarioLogin"
          />
          <label htmlFor="contrasenyaLogin">Contraseña</label>
          <input
            type="password"
            name="contrasenyaLogin"
            id="contrasenyaLogin"
          />
          <input
            type="checkbox"
            name="recordarContrasenya"
            id="recordarContrasenya"
          />
          <label htmlFor="recordarContrasenya">Recordar contraseña</label>
          <button type="button" className="btn-paso-anterior btn btn-secondary">
            Anterior
          </button>
          <button type="button" className="btn-paso-siguiente btn btn-primary">
            Siguiente
          </button>
          <button type="button" className="btn-acceder btn btn-success">
            Acceder
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
