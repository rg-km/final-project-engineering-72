package repository

// bikin struct sebagai representasi dari table user
type User struct {
	Id                  int
	UserName            string
	Password            string
	Role                string
	Nisn                string
	Nama                string
	TanggalLahir        string
	JenisKelamin        string
	Alamat              string
	Email               string
	AsalSekolah         string
	PendidikanTerkahir  string
	NomorTelepon        string
	NamaOrangTua        string
	PekerjaanOrangTua   string
	PenghasilanOrangTua string
}
