## Permisos

Los permisos deben ser declarados en el `AndroidManifest.xml`.

### Tipos de Permiso

- **Dangerous**: Necesitan la autorización del usuario cuando es información sensible.
- **Normal**: No necesitan la autorización del usuario.
- **Signature**: Necesitan la autorización del usuario y la firma de la aplicación.
- **SignatureOrSystem**: Necesitan la autorización del usuario y la firma de la aplicación o del sistema.

## Componentes

### Tipos de Componentes

- **Activity**: Pantalla.
- **Service**: Proceso en segundo plano.
- **Broadcast Receiver**: Recibe mensajes del sistema.
- **Content Provider**: Compartir información entre aplicaciones.

### Intent

- **Intent**: Mensaje que se envía a través de los componentes de la aplicación.

## Dalvik Virtual Machine

- **Dalvik Virtual Machine**: `.dex` (Dalvik Executable) - Máquina Virtual de Android.

## Desarrollo

### Desarrollo Híbrido

- **Desarrollo Híbrido**: Se desarrolla una vez y se ejecuta varias veces.

### Tipos de Aplicaciones

- **Web Apps**: Aplicaciones que se ejecutan en el navegador.
- **Aplicaciones Nativas**: Aplicaciones que se ejecutan en el sistema operativo específico.
- **Aplicaciones Híbridas**: Aplicaciones que combinan su entorno de desarrollo web con componentes de la UI nativa en Android o iOS.DOS LOS PERMISOS DEBEN SER DECLARADOS EN EL MANIFEST.XML
- En la tienda de aplicaciones se pueden encontrar aplicaciones nativas y híbridas.

### Desarrollo Híbrido con Expo

- **ExpoGO**: Aplicación que permite ejecutar aplicaciones desarrolladas con Expo.
- **ExpoCLI**: Herramienta de línea de comandos para crear y gestionar proyectos de Expo. Permite generar un APK.

### ¿Cómo una app React Native accede a las capacidades del dispositivo?

- **V8** se coloca dentro del dex en android y en JavaScriptCore en iOS
- **Brigde** es el que mapea el código react native con el componente nativo


### Recordatorio de conceptos básicos de React

- **useState**: Se uttiliza para guardar datos que pueden cambiar en el tiempo.
- **useEffect**: Se utiliza para ejecutar código cuando un componente se monta o se actualiza. Tiene dos argumentos, el primero es una función que se ejecuta y el segundo es un arreglo de dependencias. Tiene un parametro el valor inicial del estado.
- **2 Casos en los que no se utiliza el estado en un componente**:
  - La edad de una persona que se puede calcular a partir de su fecha de nacimiento.
  - Cuando se utilizan las props para pasar datos a un componente.


### Instalar el módulo de geo-localización

- expo install expo-location