package user

import (
	"database/sql"
)

// bikin kontrak function (interface)
type Repository interface {
	Save(user User) (User, error)
	FindUserByEmail(email string) (User, error)
	FindUserByUsername(username string) (User, error)
	// FindUserByPassword(password string) (User, error)
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

// func save user data
func (r *respository) Save(user User) (User, error) {
	// query
	sql := `
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
			(?, ?, "siswa", ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?)
	;`

	// execute query create table
	_, err := r.db.Exec(sql, user.UserName, user.Password, user.Nisn, user.Nama, user.TanggalLahir, user.JenisKelamin, user.Alamat, user.Email, user.AsalSekolah, user.PendidikanTerkahir, user.NomorTelepon, user.NamaOrangTua, user.PenghasilanOrangTua, user.PekerjaanOrangTua)
	if err != nil {
		return user, err
	}

	return user, nil
}

// func untuk mencari user by email
func (r *respository) FindUserByEmail(email string) (User, error) {
	// inisiasi struct user
	var user User

	// query untuk mengambil user by email
	sql := `
		SELECT * FROM users
		WHERE email = ?
	;`

	// exec
	data := r.db.QueryRow(sql, email)

	// binding
	err := data.Scan(
		&user.Id,
		&user.UserName,
		&user.Password,
		&user.Role,
		&user.Nisn,
		&user.Nama,
		&user.TanggalLahir,
		&user.JenisKelamin,
		&user.Alamat,
		&user.Email,
		&user.AsalSekolah,
		&user.PendidikanTerkahir,
		&user.NomorTelepon,
		&user.NamaOrangTua,
		&user.PekerjaanOrangTua,
		&user.PenghasilanOrangTua,
	)

	if err != nil {
		return user, err
	}

	return user, nil
}

// func untuk mencari user by username
func (r *respository) FindUserByUsername(username string) (User, error) {
	// inisiasi struct user
	var user User

	// query untuk mengambil user by username
	sql := `
		SELECT * FROM users
		WHERE user_name = ?
	;`

	// exec
	data := r.db.QueryRow(sql, username)

	// binding
	err := data.Scan(
		&user.Id,
		&user.UserName,
		&user.Password,
		&user.Role,
		&user.Nisn,
		&user.Nama,
		&user.TanggalLahir,
		&user.JenisKelamin,
		&user.Alamat,
		&user.Email,
		&user.AsalSekolah,
		&user.PendidikanTerkahir,
		&user.NomorTelepon,
		&user.NamaOrangTua,
		&user.PekerjaanOrangTua,
		&user.PenghasilanOrangTua,
	)

	if err != nil {
		return user, err
	}

	return user, nil
}

// func untuk mencari user by password
func (r *respository) FindUserByPassword(password string) (User, error) {
	// inisiasi struct user
	var user User

	// query untuk mengambil user by password
	sql := `
		SELECT * FROM users
		WHERE password = ?
	;`

	// exec
	data := r.db.QueryRow(sql, password)

	// binding
	err := data.Scan(
		&user.Id,
		&user.UserName,
		&user.Password,
		&user.Role,
		&user.Nisn,
		&user.Nama,
		&user.TanggalLahir,
		&user.JenisKelamin,
		&user.Alamat,
		&user.Email,
		&user.AsalSekolah,
		&user.PendidikanTerkahir,
		&user.NomorTelepon,
		&user.NamaOrangTua,
		&user.PekerjaanOrangTua,
		&user.PenghasilanOrangTua,
	)

	if err != nil {
		return user, err
	}

	return user, nil
}

// FE ada tombol register
// 	user memasukan data diri untuk register (username,email,password)
// 	user tekan tombol register
// 	FE bakal manggil API
// 	misal API http://localhost:8080/api/user/register
// 	FE bakal ngirim data yg di input user ke API diatas
// 	BE cek apakah email yang di input user udah ada di db, kalo ada balikin error, kalo ngga lakukan register/simpan data user ke db
