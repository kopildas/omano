<div align="center">
<img src="https://i.ibb.co/k6Y8n6q/mobile-25.png" alt="screencapture-localhost-5173-2023-12-07-16-57-05" border="0" />

<br/><br/>

<h1>✍🏻 OMANO</h1>
<p>MERN food ordering and table booking Webapp to edit and preview markdown<p/><br/>

</div>

## ⭐ Features

* Live Preview
* Authentication via JWT
* Category wise product preview
* Sort products by Price (low-high, high-low) and Name (A-Z, Z-A),price range
* Search option in food page
* Grid and list view.
* Add reviews, instantly displayed.


<br/>


<br/>

## ⚙ Setup locally

### Requirements 🍫

- Node.js
- npm
- MongoDb
- Git (optional)

<br/>

### Common setup ⚒ 

Clone the repo and install the dependencies.

<br/>

```bash
git clone https://github.com/kopildas/omano.git
```
```bash
cd omano
```
###### For Backend

```bash
cd server
```
```bash
npm install
```

```bash
npm start
```
###### This will start `server`
<br/>

###### For Frontend

```bash
cd client
```
```bash
npm install
```

```bash
npm run dev
```
###### This will start `frontend` in `http://localhost:3000/`
<br/>




## 🌳 Project Tree
```
omano
├─ client
│  ├─ .env
│  ├─ .eslintrc.cjs
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ api
│  │  │  └─ index.js
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  └─ svg
│  │  │     └─ spinner.svg
│  │  ├─ componennts
│  │  │  ├─ Footer
│  │  │  │  └─ Footer.jsx
│  │  │  ├─ Header
│  │  │  │  └─ Header.jsx
│  │  │  ├─ Home
│  │  │  │  ├─ About us
│  │  │  │  │  └─ About_us.jsx
│  │  │  │  ├─ Cart
│  │  │  │  │  ├─ Add_To_Cart.jsx
│  │  │  │  │  ├─ CartContainer.jsx
│  │  │  │  │  └─ CartitemComponenet.jsx
│  │  │  │  ├─ Data_Lodder.jsx
│  │  │  │  ├─ Hero
│  │  │  │  │  ├─ Hero.jsx
│  │  │  │  │  └─ Icon_Magnetic.jsx
│  │  │  │  ├─ Menu
│  │  │  │  │  └─ Menu.jsx
│  │  │  │  ├─ Resevation
│  │  │  │  │  ├─ Booking_table.jsx
│  │  │  │  │  ├─ Calender.css
│  │  │  │  │  ├─ Calender.jsx
│  │  │  │  │  ├─ Resevation.jsx
│  │  │  │  │  ├─ TablePop.jsx
│  │  │  │  │  └─ TimeRange.jsx
│  │  │  │  └─ RowContainer
│  │  │  │     └─ RowContainer.jsx
│  │  │  └─ Spinner.jsx
│  │  ├─ context
│  │  │  ├─ initialState.js
│  │  │  ├─ reducer.js
│  │  │  └─ StateProvider.jsx
│  │  ├─ firebase.js
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ Auth
│  │  │  │  ├─ Login.jsx
│  │  │  │  └─ Sign_up.jsx
│  │  │  ├─ Home
│  │  │  │  └─ Home.jsx
│  │  │  ├─ Shop
│  │  │  │  ├─ AddReview.jsx
│  │  │  │  ├─ Foods.jsx
│  │  │  │  ├─ Related_Item.jsx
│  │  │  │  ├─ Review.jsx
│  │  │  │  └─ SingleItem.jsx
│  │  │  └─ User
│  │  │     └─ User.jsx
│  │  └─ utils
│  │     ├─ fetchLocalStorageData.js
│  │     └─ firebaseFunctions.js
│  ├─ tailwind.config.js
│  ├─ vercel.json
│  └─ vite.config.js
├─ README.md
└─ server
   ├─ .env
   ├─ config
   │  └─ dbConn.js
   ├─ controllers
   │  ├─ authController.js
   │  ├─ productsController.js
   │  └─ reservationController.js
   ├─ errors
   │  ├─ badREQerror.js
   │  ├─ customAPIerror.js
   │  ├─ index.js
   │  └─ unauthenticated.js
   ├─ index.js
   ├─ middleware
   │  ├─ error-handler.js
   │  └─ not-found.js
   ├─ models
   │  ├─ Products.js
   │  ├─ ProductsMongoDb.js
   │  ├─ Reservation.js
   │  └─ Users.js
   ├─ package-lock.json
   ├─ package.json
   └─ routes
      ├─ authRoutes.js
      ├─ productsRoutes.js
      └─ reservationRoutes.js

```



## ✍🏻 Author
[Kopil Das](https://www.linkedin.com/in/kopildas/)
