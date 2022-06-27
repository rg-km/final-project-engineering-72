package beasiswa

import (
	"database/sql"
)

type DaftarBeasiswaRepository struct {
	db *sql.DB
}

func NewDaftarRepository(db *sql.DB) *DaftarBeasiswaRepository {
	return &DaftarBeasiswaRepository{db: db}
}

func (a *DaftarBeasiswaRepository) FetchDaftarBeasiswaByID(id int64) (PendaftarBeasiswa, error) {

	// query
	sql := `
		SELECT * FROM pendaftar_beasiswa WHERE id = ?
	;`

	// variabel penampung
	var daftar PendaftarBeasiswa

	// execute query
	datas, err := a.db.Query(sql, id)
	if err != nil {
		return daftar, nil
	}

	// defer
	defer datas.Close()

	// binding
	for datas.Next() {
		datas.Scan(
			&daftar.Id,
			&daftar.Jenisbeasiswa,
			&daftar.Iduser,
			&daftar.Nama,
			&daftar.Nisn,
			&daftar.Nominal,
			&daftar.Keterangan,
		)

		if err != nil {
			return daftar, nil
		}
	}

	return daftar, nil
}
