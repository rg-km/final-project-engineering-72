package user

// bikin struct sebagai representasi dari table user
type User struct {
	Id                  int    `json:"id" db:"id"`
	UserName            string `json:"username" db:"user_name"`
	Password            string `json:"password" db:"password"`
	Role                string `json:"role" db:"role"`
	Nisn                string `json:"nisn" db:"nisn"`
	Nama                string `json:"nama" db:"nama"`
	TanggalLahir        string `json:"tanggallahir" db:"tanggal_lahir"`
	JenisKelamin        string `json:"jeniskelamin" db:"jenis_kelamin"`
	Alamat              string `json:"alamat" db:"alamat"`
	Email               string `json:"email" db:"email"`
	AsalSekolah         string `json:"asalsekolah" db:"asal_sekolah"`
	PendidikanTerkahir  string `json:"pendidikanterakhir" db:"pendidika_terakhir"`
	NomorTelepon        string `json:"notelepon" db:"no_telepon"`
	NamaOrangTua        string `json:"namaortu" db:"nama_ortu"`
	PekerjaanOrangTua   string `json:"pekerjaanortu" db:"pekerjaan_ortu"`
	PenghasilanOrangTua string `json:"penghasilanortu" db:"penghasilan_ortu"`
}
