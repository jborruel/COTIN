# COTIN - Control de Tiempo de Dotaciones en Intervención

![COTIN Logo](icon-192x192.png)

## 📋 Descripción

**COTIN** (Control de Tiempo de Dotaciones en Intervención) es una aplicación web progresiva (PWA) diseñada para el control de tiempos y presiones durante intervenciones de equipos de bomberos. La aplicación permite realizar un seguimiento simultáneo de hasta 3 equipos, monitorizando tanto el tiempo transcurrido como las presiones de los equipos de respiración autónoma (ERA).

## ✨ Características Principales

- **Cronómetros Independientes**: Control simultáneo de hasta 3 equipos con cronómetros independientes
- **Alarmas Configurables**: Sistema de alarmas sonoras en múltiples intervalos (1/3, 2/3 y tiempo total)
- **Control de Presiones**: Monitorización de presiones de entrada y salida de los equipos ERA
- **Cálculo Automático**: Cálculo automático de presión de salida (P_out = P_in/2 + 25)
- **Alertas Visuales**: Sistema de colores progresivo (verde → amarillo → naranja → rojo) según el tiempo transcurrido
- **Modo Cuenta Progresiva/Regresiva**: Configurable según las necesidades de la intervención
- **Pantalla Completa**: Optimizado para visualización en modo apaisado (landscape)
- **PWA**: Funciona como aplicación instalable en dispositivos móviles y tablets
- **Funcionamiento Offline**: Gracias al service worker, funciona sin conexión a internet

## 🎯 Uso de la Aplicación

### Configuración Inicial

1. **Configurar Tiempo de Alarma**: En la esquina superior izquierda, seleccionar el tiempo inicial de alarma (de 1 a 120 minutos)
2. **Seleccionar Modo de Cuenta**: Elegir entre cuenta progresiva (↑) o regresiva (↓)

### Durante la Intervención

1. **Identificación del Equipo**: Introducir el nombre/ID del equipo y su asignación/tarea
2. **Inicio del Cronómetro**: Pulsar el botón START para iniciar el cronómetro del equipo correspondiente
3. **Presión Inicial (P0)**: Introducir la presión inicial del ERA (rango: 50-400 bar)
   - La aplicación calculará automáticamente la presión de salida teórica
4. **Control de Presiones Intermedias**:
   - **T1 (1/3 del tiempo)**: Introducir presión al primer tercio del tiempo ⚠️ Alarma amarilla
   - **T2 (2/3 del tiempo)**: Introducir presión al segundo tercio ⚠️ Alarma naranja
   - **T3 (Tiempo total)**: Introducir presión final ⚠️ Alarma roja
5. **Presión Real de Salida**: Registrar la presión final real del equipo
6. **Detener/Resetear**: Utilizar los botones STOP y RESET según sea necesario

### Alarmas Sonoras

- Las alarmas sonoras se activan automáticamente en cada intervalo
- Para silenciar una alarma: **hacer clic sobre el cronómetro parpadeante**
- Los cronómetros parpadean en color rojo durante la alarma

## 🎨 Código de Colores

- 🟢 **Verde**: Tiempo normal de operación
- 🟡 **Amarillo**: Primera alarma (1/3 del tiempo)
- 🟠 **Naranja**: Segunda alarma (2/3 del tiempo)
- 🔴 **Rojo**: Alarma final (tiempo agotado)

## 💻 Requisitos Técnicos

- Navegador web moderno compatible con:
  - HTML5
  - CSS3
  - JavaScript ES6+
  - Service Workers (para funcionalidad PWA)
  - Web Audio API (para alarmas sonoras)
- Dispositivo con pantalla en orientación horizontal (landscape)
- Recomendado: Tablet o pantalla grande para mejor visualización

## 📱 Instalación como PWA

1. Abrir la aplicación en un navegador compatible (Chrome, Edge, Safari)
2. En el menú del navegador, seleccionar "Instalar aplicación" o "Añadir a pantalla de inicio"
3. La aplicación se instalará y podrá ejecutarse como una app nativa

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsive
- **JavaScript**: Lógica de la aplicación
- **Bootstrap 4.5.2**: Framework CSS para diseño
- **Web Fonts**: 
  - Orbitron (Google Fonts)
  - Digital-7 (fuente de display LED)
  - LEDCalculator (fuente de calculadora LED)
- **Service Worker**: Para funcionalidad PWA y cache offline
- **Web Audio API**: Para reproducción de alarmas sonoras

## 📸 Capturas de Pantalla

- **Vista Desktop**: `screenshot-desktop.png`
- **Vista Mobile**: `screenshot-mobile.png`

## 👨‍💻 Autor

**Jesús Borruel**

## 📄 Licencia

Este proyecto está bajo la Licencia GNU General Public License v3.0 (GPL-3.0)

[https://www.gnu.org/licenses/gpl-3.0.txt](https://www.gnu.org/licenses/gpl-3.0.txt)

Basado en material GNU y sonidos disponibles en internet sin ánimo de lucro.

## ⚠️ Nota Importante

Esta aplicación está diseñada específicamente para su uso en **orientación horizontal (landscape)**. Si se intenta usar en modo vertical, se mostrará un mensaje solicitando rotar el dispositivo.

## 🔧 Desarrollo

### Estructura de Archivos

```
COTIN/
├── index.htm              # Archivo principal de la aplicación
├── manifest.json          # Manifiesto PWA
├── service-worker.js      # Service worker para funcionalidad offline
├── stylesheet.css         # Estilos CSS principal
├── stylesheet (1).css     # Copia de estilos CSS (duplicado)
├── digital-7.ttf          # Fuente display LED
├── digital-7-mono.ttf     # Fuente display LED monoespaciada
├── digital-7-webfont.woff # Fuente display LED formato web WOFF
├── digital-7-webfont.woff2 # Fuente display LED formato web WOFF2
├── LEDCalculator.ttf      # Fuente calculadora LED
├── icon-48x48.png         # Icono 48x48px
├── icon-72x72.png         # Icono 72x72px
├── icon-96x96.png         # Icono 96x96px
├── icon-144x144.png       # Icono 144x144px
├── icon-192x192.png       # Icono 192x192px
├── icon-256x256.png       # Icono 256x256px
├── icon-512x512.png       # Icono 512x512px
├── screenshot-desktop.png # Captura de pantalla versión desktop
└── screenshot-mobile.png  # Captura de pantalla versión mobile
```

### Funciones Principales

- `startTimer(timerNumber)`: Inicia el cronómetro especificado
- `stopTimer(timerNumber)`: Detiene el cronómetro especificado
- `resetTimer(timerNumber)`: Reinicia el cronómetro y limpia los datos
- `updateTimer(timerNumber)`: Actualiza el display del cronómetro
- `playAlarmSound(timerNumber, estado)`: Reproduce la alarma sonora
- `stopAlarmSound(timerNumber, estado)`: Detiene la alarma sonora
- `calculoPOut(id)`: Calcula la presión de salida teórica
- `checkPin(id, estado)`: Valida las presiones introducidas
- `checkMissedAlarms()`: Verifica alarmas perdidas cuando la pestaña recupera el foco

## 🆘 Soporte

Para reportar problemas o sugerencias, por favor contacta con el autor o crea un issue en el repositorio del proyecto.

---

**¡Importante para la seguridad!** Esta aplicación es una herramienta de ayuda y no sustituye los protocolos de seguridad establecidos. Siempre sigue los procedimientos operativos estándar de tu servicio de emergencias.
