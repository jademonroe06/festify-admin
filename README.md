# Festify Admin

## 📂 Estructura de directorios

## 📂 src/
Aquí está todo el código de la aplicación.

---

### 📂 assets/
Recursos estáticos (imágenes, íconos, fuentes, JSON estáticos, etc.).  
Ejemplo:
- `logo.svg`
- `background.jpg`
- `data.json`

---

### 📂 components/
Componentes **reutilizables** y pequeños bloques de UI.  
Ejemplo:
- `Button.tsx` → Botón genérico con props tipadas (`onClick`, `variant`, etc.).
- `Navbar.tsx` → Barra de navegación.
- `Card.tsx` → Tarjeta reutilizable con props (`title`, `children`, etc.).

> 🔑 Regla: deben ser **genéricos y desacoplados de negocio**.

---

### 📂 layouts/
Componentes que sirven como **estructura general** de las páginas.  
Ejemplo:
- `MainLayout.tsx` → Contiene `Navbar`, `Sidebar`, `Footer`.
- `AuthLayout.tsx` → Layout para pantallas de login/registro.

---

### 📂 pages/
Vistas completas, asociadas a rutas.  
Ejemplo:
- `Home.tsx` → Página de inicio.
- `Login.tsx` → Página de login.
- `Dashboard.tsx` → Panel de usuario.

> 🔑 Regla: una `page` puede importar **components**, **hooks**, **services** y **context**, pero no debería contener lógica de negocio.

---

### 📂 hooks/
Custom hooks para encapsular lógica y reutilizarla.  
Ejemplo:
- `useFetch.ts` → Hook genérico de peticiones a API.
- `useAuth.ts` → Hook para gestión de usuario/logueo.
- `useTheme.ts` → Hook para modo oscuro/claro.

---

### 📂 services/
Funciones de comunicación con APIs externas y lógica de negocio.  
Ejemplo:
- `api.ts` → Configuración de cliente HTTP (`axios` o `fetch` tipado).
- `userService.ts` → Funciones `getUser()`, `login()`, `register()`.
- `productService.ts` → Funciones `getProducts()`, `addProduct()`.

> ✅ Aquí defines **interfaces** para los datos recibidos/enviados al backend.

---

### 📂 context/
Contextos de React para estado global.  
Ejemplo:
- `AuthContext.tsx` → Maneja usuario, token, `login/logout`.
- `ThemeContext.tsx` → Controla el tema.
- `CartContext.tsx` → Estado del carrito.

> ✅ Puedes acompañar cada contexto de un `types.ts` con las interfaces del estado y de las acciones.

---

### 📂 utils/
Helpers y funciones puras reutilizables.  
Ejemplo:
- `formatDate.ts`
- `calculateDiscount.ts`
- `validateEmail.ts`

> 🔑 Regla: no deben depender de React, solo de lógica/TS.

---

### 📂 types/
Definiciones de **tipos globales** e **interfaces compartidas**.  
Ejemplo:
- `user.ts` → `interface User { id: number; name: string; email: string }`
- `product.ts` → `interface Product { id: string; title: string; price: number }`
- `api.ts` → Tipos comunes de respuesta de API.

---

### 📂 router/
Configuración de rutas de la app.  
Ejemplo:
- `index.tsx` → Define `BrowserRouter` y rutas principales.
- `privateRoutes.tsx` → Rutas que requieren autenticación.

---

### 📂 styles/
Estilos globales y configuración de Tailwind.  
Ejemplo:
- `globals.css` → Estilos base (importa tailwind layers).
- `tailwind.css` → Configuración inicial si se usa separada.

---

### Archivos raíz en `src/`
- **`App.tsx`** → Punto de entrada de la aplicación. Suele envolver el router y contextos globales.
- **`main.tsx`** → Renderiza la app dentro de `#root`.

---

## 🌲 Ejemplo de estructura en árbol

```bash
src
├── assets
│   ├── logo.svg
│   └── background.jpg
│
├── components
│   ├── Button.tsx
│   ├── Navbar.tsx
│   └── Card.tsx
│
├── context
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   └── CartContext.tsx
│
├── hooks
│   ├── useAuth.ts
│   ├── useFetch.ts
│   └── useTheme.ts
│
├── layouts
│   ├── MainLayout.tsx
│   └── AuthLayout.tsx
│
├── pages
│   ├── Home.tsx
│   ├── Login.tsx
│   └── Dashboard.tsx
│
├── router
│   ├── index.tsx
│   └── privateRoutes.tsx
│
├── services
│   ├── api.ts
│   ├── userService.ts
│   └── productService.ts
│
├── styles
│   ├── globals.css
│   └── tailwind.css
│
├── types
│   ├── user.ts
│   ├── product.ts
│   └── api.ts
│
├── utils
│   ├── formatDate.ts
│   ├── validateEmail.ts
│   └── calculateDiscount.ts
│
├── App.tsx
└── main.tsxs