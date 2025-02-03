# Ejercicio formulario React

En este ejercicio tendrás que crear con React un formulario de tres pasos. En cada paso habrá un grupo de campos, y sólo se debe ver un paso a la vez. Pon en cada paso un botón para navegar al siguiente y otro para navegar al anterior (en realidad sólo se deberían ver ambos botones en el segundo paso). En el último paso debe haber un botón "Acceder".

En cada paso, el botón para continuar al siguiente paso debe estar deshabilitado hasta que se rellenen todos los campos del paso.

Utiliza Bootstrap para este ejercicio, instálalo mediante npm.

- Paso 1: Datos personales.
  · Nombre
  · Apellidos
  · Fecha de nacimiento (cuando el usuario introduzca la fecha, al lado de este campo debe aparecer su edad en años)
  · Correo electrónico
- Paso 2: Datos de acceso.
  · Nombre de usuario
  · Contraseña
  · Repetir contraseña
- Paso 3: Login.
  · Nombre de usuario
  · Contraseña
  · Recordar contraseña

En el paso 3, el usuario debe introducir los mismos datos que rellenó en el paso anterior. Si no son correctos debe aparecer un aviso diciéndolo.

Si son correctos, se le debe mostrar una pantalla con todos los datos introducidos en el formulario.
