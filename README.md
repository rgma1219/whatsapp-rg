# 📱 WhatsApp RG - Clon de Mensajería

Proyecto final desarrollado para la cursada de la **Diplomatura en Programación Web Full Stack** - Curso de Programador Web Inicial - Front End Developer.
Esta aplicación web replica la experiencia de usuario de WhatsApp Web, enfocándose en la modularidad de componentes y la gestión eficiente del estado.

## 🚀 Funcionalidades Principales

- **Flujo de Autenticación:** Pantalla de inicio de sesión funcional con validación de estado. Esta pantalla es una simulación al **Login** original de la App.
- **Chat Dinámico:** Navegación entre contactos mediante parámetros de URL (`/contact/:id`) utilizando `React Router`.
- **Estado Global:** Gestión de contactos y mensajes a través de `Context API`.
- **Responsive Design:** Interfaz adaptada para dispositivos móviles y escritorio.
- **Sistema de Temas:** Soporte para Dark/Light mode mediante variables de CSS nativas.

## 🛠️ Tecnologías Utilizadas

- **React.js** (Vite)
- **React Router** (Navegación)
- **Context API** (Estado Global)
- **CSS3** (Flexbox, Grid y Unidades Dinámicas)
- **React Icons** (Librería de iconos Material Design)

## 📐 Decisiones de Desarrollo (Buenas Prácticas)

- **Semántica HTML5:** Uso de etiquetas `<header>`, `<main>`, `<footer>` y `<form>` para accesibilidad.
- **Arquitectura Limpia:** Separación de componentes, estilos y contextos.
- **UX Preventiva:** Los botones y funciones que no forman parte del MVP actual muestran avisos de "En desarrollo" para guiar al usuario y que **la App** no reaccione de forma inesperada al tocar elementos sin funciones.

## 📦 Instalación

1. Clonar el repositorio.
2. Instalar dependencias: `npm install`
3. Correr en desarrollo: `npm run dev`

## 🔗 Deploy en Vercel

Link: [https://whatsapp-rg.vercel.app/](https://whatsapp-rg.vercel.app/)
