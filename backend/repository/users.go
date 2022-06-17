package repository

import (
	"database/sql"
	"fmt"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) Signup(username string, password string, role string, nisn string, nama string, tanggalLahir string, jenisKelamin string, alamat string, email string, asalSekolah string, pendidikanTerakhir string, notelp string, namaOrtu string, penghasilaOrtu string, pekerjaan string) error {
	_, err := u.db.Exec("INSERT INTO users (user_name, password, role, nisn, nama, tanggal_lahir, jenis_kelamin, alamat, email, asal_sekolah, pendidikan_terkahir, no_telpon, nama_ortu, penghasilan_ortu, pekerjaan_ortu) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", username, password, role, nisn, nama, tanggalLahir, jenisKelamin, alamat, email, asalSekolah, pendidikanTerakhir, notelp, namaOrtu, penghasilaOrtu, pekerjaan)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) FetchUserByID(Id int64) (User, error) {
	var user User

	rows, err := u.db.Query("SELECT * FROM users WHERE Id = ?", Id)
	if err != nil {
		return user, err
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&user.Id, &user.UserName, &user.Password, &user.Role)
		if err != nil {
			return user, err
		}
	}

	return user, nil
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	var users []User

	rows, err := u.db.Query("SELECT * FROM users")
	if err != nil {
		return users, err
	}
	defer rows.Close()

	for rows.Next() {
		var user User
		err := rows.Scan(&user.Id, &user.UserName, &user.Password, &user.Role)
		if err != nil {
			return users, err
		}
		users = append(users, user)
	}

	return users, nil
}

func (u *UserRepository) Login(UserName string, password string) (*string, error) {
	users, err := u.FetchUsers()
	if err != nil {
		return nil, err
	}

	for _, user := range users {
		if user.UserName == UserName && user.Password == password {
			if err != nil {
				return nil, err
			}
			return &user.UserName, nil
		}
	}

	return nil, fmt.Errorf("Login Failed")
}

func (u *UserRepository) FetchUserRole(UserName string) (*string, error) {
	var role string

	rows, err := u.db.Query("SELECT role FROM users WHERE UserName = ?", UserName)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&role)
		if err != nil {
			return nil, err
		}
	}

	return &role, nil
}
