package beasiswa

// bikin struct sebagai representasi dari table beasiswa
type Beasiswa struct {
	Id                int64  `db:"id"`
	JenisBeasiswa     string `db:"jenis_beasiswa"`
	SumberBeasiswa    string `db:"sumber_beasiswa"`
	TanggalPenyaluran string `db:"tanggal_penyaluran"`
	Keterangan        string `db:"keterangan"`
}

type PengumumanBeasiswa struct {
	Id         int64  `db:"id"`
	IdUser     int    `db:"id_user"`
	IdBeasiswa int    `db:"id_beasiswa"`
	Diterima   string `db:"id_diterima"`
}

type PendaftarBeasiswa struct {
	Id            int    `db:"id_beasiswa"`
	Jenisbeasiswa string `db:"jenis_beasiswa"`
	Iduser        int    `db:"id_user"`
	Nama          string `db:"nama"`
	Nisn          int    `db:"nisn"`
	Nominal       int    `db:"nominal"`
	Keterangan    string `db:"keterangan"`
}
