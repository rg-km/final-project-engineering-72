package main

import (
	"final-project-engineering-72/database/connection"
	"log"
)

func migrate() {

	// ambil koneksi database
	db, err := connection.ConnectToDB()
	if err != nil {
		log.Fatal(err)
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
			("admin_kece", "123456789", "admin", " ", "", "", "", "", "", " ", "", "", "", " ", " ")
	;`
	tbBeasiswa := `
	CREATE TABLE IF NOT EXISTS beasiswa (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		jenis_beasiswa VARCHAR(50),
		sumber_beasiswa VARCHAR(50),
		tanggal_penyaluran DATE,
		keterangan TEXT
		);`

	tbPendaftarBeasiswa := `
	CREATE TABLE IF NOT EXISTS pendaftar_beasiswa (
		id_beasiswa INTEGER,
		jenis_beasiswa VARCHAR(50),
		id_user INTEGER, 
		nama VARCHAR(50),
		nisn VARCHAR(20),
		nominal INTEGER,
		keterangan TEXT
		FOREIGN KEY (id_beasiswa) REFERENCES beasiswa(id),
		FOREIGN KEY (id_user) REFERENCES users(id),
		);`


	// execute query create table
	_, err = db.Exec(createTableUser)
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// execute query create table
	_, err = db.Exec(addAdmin)
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// execute query create table
	_, err = db.Exec(tbBeasiswa)
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// execute query create table
	_, err = db.Exec(tbPendaftarBeasiswa)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
}

func main() {
	migrate()
}
