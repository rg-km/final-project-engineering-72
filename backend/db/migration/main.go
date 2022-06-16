package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Run This Script for migration db
func main() {
	db, err := sql.Open("sqlite3", "backend/db/subaku.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
    CREATE TABLE IF NOT EXISTS pengumuman_beasiswa (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        nominal NUMERIC NOT NULL,
        is_diterima VARCHAR(50) NOT NULL,
        id_user INTEGER NOT NULL,
        id_beasiswa INTEGER NOT NULL,
        FOREIGN KEY (id) REFERENCES "user"(id),
        FOREIGN KEY (id_beasiswa) REFERENCES beasiswa(id_beasiswa)
    );

    CREATE TABLE IF NOT EXISTS beasiswa (
        id_beasiswa INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        jenis_beasiswa TEXT(50) NOT NULL,
        sumber_beasiswa REAL NOT NULL,
        tanggal_pendaftaran BLOB NOT NULL,
        keterangan TEXT(50) NOT NULL
    );

    CREATE TABLE sqlite_sequence(name,seq)}tableuseruser CREATE TABLE "user" (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        nisn INTEGER NOT NULL,
        email VARCHAR(50) NOT NULL,
        nama VARCHAR(50) NOT NULL,
        tanggal_lahir BLOB NOT NULL,
        jenis_kelamin VARCHAR NOT NULL,
        alamat TEXT(50) NOT NULL,
        asal_sekolah VARCHAR(50) NOT NULL,
        pendidikan_terakhir VARCHAR(50) NOT NULL,
        no_telepon NUMERIC NOT NULL,
        nama_ortu VARCHAR(50) NOT NULL,
        pekerjaan_ortu VARCHAR(50) NOT NULL,
        penghasilan_ortu VARCHAR(50) NOT NULL,
        "role" VARCHAR NOT NULL);
    `)

	if err != nil {
		panic(err)
	}
}
