# 📌 Wayni Móvil - Prueba Técnica (Node.js + MongoDB)

Esta API REST en **Node.js** permite importar un archivo **TXT** con datos de la Central de Deudores del BCRA y almacenarlos en  **MongoDB** .

## Instalación

### 1. Clonar el repositorio

```sh
git clone https://github.com/jorgeemilianom/wayni-movil.git
cd wayni-movil
```

### 2. Instalar dependencias

```sh
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raiz del proyecto:

```env
PORT=3030
MONGO_PORT=27017
MONGO_URI=mongodb://localhost:27017/wayni_movil
```

### 4. Levantar proyecto

El proyecto fue armado para poder levantarlo con docke y ser autosuficiente.

```sh
docker compose up -d
```

## 🛠 Tecnologías utilizadas

* **Node.js** + **Express** (API REST)
* **MongoDB** + **Mongoose** (Base de datos)

## 📂 Endpoints disponibles

Usar el archivo POSTMAN.json para abrir la colección de endpoints configurada. 

Por defecto, la colección apunto al entorno productivo de la API (`https://wayni-challenge.gesprender.cloud`). Para consumir la APP en entorno de desarrollo, cambia "URL_PROD" por "URL_LOCAL"

### 1️⃣ **Subir archivo TXT**

**POST** `/api/importar`

### 2️⃣ **Obtener deudores**

**GET** `/api/deudores`

### 3️⃣ **Obtener entidades**

**GET** `/api/entidades`

## ✅Testing in Prod

Para testear en prod, podes usar la siguiente URL:

`https://wayni-challenge.gesprender.cloud`


## 🔃Gitflow

master	-> ticket_branch	-> dev	-> testing		-> master

## 🆙Deploy

CI/CD Implementado.

Debe pasar por el flujo normal establecido en el gitflow. Una vez mergeado a master, correrá el Github Action que hará el deploy en el servidor.
