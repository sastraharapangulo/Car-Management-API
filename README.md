# End-point & Notes
## ***superadmin*** <br/>
```
Email: superadmin@gmail.com
Password: challenge6
```
## End-point open-api
- ***Access open api '/api-docs'*** <br/>
[Access to open-api](http://127.0.0.1:8000/api-docs)

# Binar: Express.js

Repository ini ditujukan sebagai boilerplate dalam membuat sebuah HTTP Server menggunakan Express.js
Repository ini menggunakan Service Repository Pattern, yang artinya di dalam repository ini terdapat modul model, controller, service, dan repository.

## Getting Started

Untuk mulai membuat sebuah implementasi dari HTTP Server, mulainya menginspeksi file [`app/index.js`](./app/index.js), dan lihatlah salah satu contoh `controller` yang ada di [`app/controllers/mainController.js`](./app/controllers/mainController.js)

Lalu untuk menjalankan development server, kalian tinggal jalanin salah satu script di package.json, yang namanya `develop`.

```sh
npm install
sequalize db:create
sequelize db:migrate
sequlize db:seed:all
```

## Database Management

Di dalam repository ini sudah terdapat beberapa script yang dapat digunakan dalam memanage database, yaitu:

- `yarn db:create` digunakan untuk membuat database
- `yarn db:drop` digunakan untuk menghapus database
- `yarn db:migrate` digunakan untuk menjalankan database migration
- `yarn db:seed` digunakan untuk melakukan seeding
- `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir
