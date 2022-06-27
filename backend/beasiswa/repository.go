package beasiswa

import (
	"database/sql"
)

// bikin kontrak function (interface)
type Repository interface {
	Save(beasiswa Beasiswa) error
	FindBeasiswaByJenisBeasiswa(jenis_beasiswa string) (Beasiswa, error)
	FindBeasiswaByKeterangan(keterangan string) (Beasiswa, error)
}

// repo ini butuh koneksi database untuk query
// bikin struct dengan atribut bertipe *sql.DB
type respository struct {
	db *sql.DB
}

// bikin func newrepo buat di panggil di main
func NewRepository(db *sql.DB) *respository {
	return &respository{db}
}

// func save beasiswa data
func (r *respository) Save(beasiswa Beasiswa) error {
	// query
	sql := `
		INSERT INTO beasiswa 
			(jenis_beasiswa,sumber_beasiswa,tanggal_penyaluran,keterangan)
		VALUES 
			(?, ?, ?, ?,)
	;`

	// execute query create table
	_, err := r.db.Exec(sql, beasiswa.Jenis_Beasiswa, beasiswa.Sumber_Beasiswa, beasiswa.Tanggal_Penyaluran, beasiswa.Keterangan)
	if err != nil {
		return err
	}

	return nil
}

// func untuk mencari FindBeasiswaByJenis_Beasiswa
func (r *respository) FindBeasiswaByJenisBeasiswa(jenis_beasiswa string) (Beasiswa, error) {
	// inisiasi struct beasiswa
	var beasiswa Beasiswa

	// query untuk FindBeasiswaByJenis_Beasiswa
	sql := `
		SELECT * FROM beasiswa
		WHERE jenis_beasiswa = ?
	;`

	// exec
	data := r.db.QueryRow(sql, jenis_beasiswa)

	// binding
	err := data.Scan(
		&beasiswa.Id,
		&beasiswa.Jenis_Beasiswa,
		&beasiswa.Sumber_Beasiswa,
		&beasiswa.Tanggal_Penyaluran,
		&beasiswa.Keterangan,
	)

	if err != nil {
		return beasiswa, err
	}

	return beasiswa, nil
}

// func untuk mencari FindBeasiswaByKeterangan
func (r *respository) FindBeasiswaByKeterangan(keterangan string) (Beasiswa, error) {
	// inisiasi struct beasiswa
	var beasiswa Beasiswa

	// query untuk mengambil FindBeasiswaByKeterangan
	sql := `
		SELECT * FROM beasiswa
		WHERE keterangan = ?
	;`

	// exec
	data := r.db.QueryRow(sql, keterangan)

	// binding
	err := data.Scan(
		&beasiswa.Id,
		&beasiswa.Jenis_Beasiswa,
		&beasiswa.Sumber_Beasiswa,
		&beasiswa.Tanggal_Penyaluran,
		&beasiswa.Keterangan,
	)

	if err != nil {
		return beasiswa, err
	}

	return beasiswa, nil
}
