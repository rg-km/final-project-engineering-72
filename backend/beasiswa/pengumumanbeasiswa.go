package beasiswa

import (
	"database/sql"
	"log"
)

type BeasiswaRepository struct {
	db *sql.DB
}

func NewBeasiswaRepository(db *sql.DB) *BeasiswaRepository {
	return &BeasiswaRepository{db: db}
}

func (a *BeasiswaRepository) FetchPengumumanBeasiswaByID(id int64) (PengumumanBeasiswa, error) {

	// query
	sql := `
		SELECT * FROM pengumuman_beasiswa WHERE id = ?
	;`

	// variabel penampung
	var pengumuman PengumumanBeasiswa

	// execute query
	datas, err := a.db.Query(sql, id)
	if err != nil {
		return pengumuman, nil
	}

	// defer
	defer datas.Close()

	// binding
	for datas.Next() {
		datas.Scan(
			&pengumuman.Id,
			&pengumuman.IdBeasiswa,
			&pengumuman.IdUser,
			&pengumuman.Diterima,
		)

		if err != nil {
			return pengumuman, nil
		}
	}

	return pengumuman, nil
}

func (a *BeasiswaRepository) InsertDiterima(Diterima string) error {

	// query
	sql := `
		INSERT INTO pengumuman_Beasiswa
		(is_diterima))
		VALUES
		(?)
	;`

	_, err := a.db.Exec(sql, Diterima)

	if err != nil {
		log.Fatal("error")
		return err
	}
	log.Println("sukses")

	return nil
}
