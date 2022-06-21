package connection

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

// untuk koneksi ke database
func ConnectToDB() (*sql.DB, error) {
	// koneksi ke database
	db, err := sql.Open("sqlite3", "../../../BACKEND/database/subaku.db")
	if err != nil {
		log.Fatal(err)
	}

	return db, nil
}
