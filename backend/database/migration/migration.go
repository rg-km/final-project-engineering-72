package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func migrate() {
	// ambil koneksi database
	db, err := sql.Open("sqlite3", "database/migration/subaku.db")
	if err != nil {
		panic(err)
	}

	// query
	createTableUser := `
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			user_name VARCHAR(50),
			password TEXT,
			role VARCHAR(20),
			nisn VARCHAR(20),
			nama VARCHAR(50),
			tanggal_lahir DATE,
			jenis_kelamin VARCHAR(10),
			alamat TEXT,
			email VARCHAR(50),
			asal_sekolah VARCHAR(50),
			pendidikan_terkahir VARCHAR(50),
			no_telepon VARCHAR(15),
			nama_ortu VARCHAR(50),
			penghasilan_ortu TEXT,
			pekerjaan_ortu TEXT
		)	
	;`

	// execute query create table
	_, err = db.Exec(createTableUser)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	// query add admin
	addAdmin := `
			INSERT INTO users 
			(user_name,
			password,
			role,
			nisn,
			nama,
			tanggal_lahir,
			jenis_kelamin,
			alamat,
			email,
			asal_sekolah,
			pendidikan_terkahir,
			no_telepon,
			nama_ortu,
			penghasilan_ortu,
			pekerjaan_ortu
		)

			VALUES 
			("admin_kece", "123456789", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ")
	;`

	// execute query create table
	_, err = db.Exec(addAdmin)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
}

func main() {
	migrate()
}
