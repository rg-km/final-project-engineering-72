package user

// bikin struct input user
type InputRegister struct {
	Username string `json:"username" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}
type InputLogin struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required,min=6"`
}

type InputProfil struct {
	Nisn                string `json:"nisn" binding:"required,nisn"`
	Nama                string `json:"nama" binding:"required,nama"`
	TanggalLahir        string `json:"tanggal_lahir" binding:"required,tanggal_lahir"`
	JenisKelamin        string `json:"jenis_kelamin" binding:"required,jenis_kelamin"`
	Alamat              string `json:"alamat" binding:"required,alamat"`
	AsalSekolah         string `json:"asal_sekolah" binding:"required,asal_sekolah"`
	PendidikanTerkahir  string `json:"pendidikan_terakhir" binding:"required,pendidikan_terakhir"`
	NomorTelepon        string `json:"no_telepon" binding:"required,nomor_telepon"`
	NamaOrangTua        string `json:"nama_ortu" binding:"required,nama_ortu"`
	PekerjaanOrangTua   string `json:"pekerjaan_ortu" binding:"required,pekerjaan_ortu"`
	PenghasilanOrangTua string `json:"penghasilan_ortu" binding:"required,penghasilan_ortu"`
}
