package main

import (
	"final-project-engineering-72/database/connection"
)

func main() {

	// ambil koneksi database
	db, err := connection.ConnectToDB()
	if err != nil {
		panic(err)
	}

	// query
	_, err = db.Exec(`
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
	;

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
	;
	CREATE TABLE IF NOT EXISTS beasiswa (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		jenis_beasiswa VARCHAR(50),
		sumber_beasiswa VARCHAR(50),
		tanggal_penyaluran DATE,
		keterangan TEXT
		);

	CREATE TABLE IF NOT EXISTS pendaftar_beasiswa (
		id_beasiswa INTEGER,
		jenis_beasiswa VARCHAR(50),
		id_user INTEGER, 
		nama VARCHAR(50),
		nisn VARCHAR(20),
		nominal INTEGER,
		keterangan TEXT,
		FOREIGN KEY (id_beasiswa) REFERENCES beasiswa(id),
		FOREIGN KEY (id_user) REFERENCES users(id)
		);

	CREATE TABLE IF NOT EXISTS pengumuman_beasiswa (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		id_beasiswa INTEGER,
		id_user INTEGER,
		is_diterima VARCHAR(20),
		FOREIGN KEY (id_beasiswa) REFERENCES beasiswa(id),
		FOREIGN KEY (id_user) REFERENCES users(id));`)

	if err != nil {
		panic(err)
	}
}
