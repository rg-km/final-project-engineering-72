package user

import (
	"errors"
)

// bikin kontrak function (interface)
type Service interface {
	RegisterUser(input InputRegister) (User, error)
	LoginUser(input InputLogin) (User, error)
	ProfilUser(input InputProfil) (User, error)
	UserByUsername(username string) (User, error)
}

// bikin struct dengan atribut bertipe Repository
type service struct {
	repository Repository
}

// bikin func newsevice buat di panggil di main
func NewService(repository Repository) *service {
	return &service{repository}
}

// func register
func (s *service) RegisterUser(input InputRegister) (User, error) {
	// tangkap email
	email := input.Email

	// cek apakah email ada apa ngga di db
	user, _ := s.repository.FindUserByEmail(email)

	// jika ada
	if user.Id != 0 {
		return user, errors.New("email telah terdaftar")
	}

	// jika tidak ada maka binding
	var myUser User
	myUser.Email = input.Email
	myUser.UserName = input.Username
	myUser.Password = input.Password

	// simpan data ke database
	newUser, err := s.repository.Save(myUser)
	if err != nil {
		return newUser, err
	}

	return newUser, nil
}

// func login
func (s *service) LoginUser(input InputLogin) (User, error) {

	// cek apakah username daan password ada apa ngga di db
	user, err := s.repository.FindUserByUsername(input.Username)
	if err != nil {
		return user, errors.New("username salah")
	}

	// bandingkan password
	if user.Password != input.Password {
		return user, errors.New("password salah")
	}

	return user, nil
}

// func data_profil
func (s *service) ProfilUser(input InputProfil) (User, error) {

	//binding
	var myUser User
	myUser.Nisn = input.Nisn
	myUser.Nama = input.Nama
	myUser.TanggalLahir = input.TanggalLahir
	myUser.JenisKelamin = input.JenisKelamin
	myUser.Alamat = input.Alamat
	myUser.AsalSekolah = input.AsalSekolah
	myUser.PendidikanTerkahir = input.PendidikanTerkahir
	myUser.NomorTelepon = input.NomorTelepon
	myUser.NamaOrangTua = input.NamaOrangTua
	myUser.PekerjaanOrangTua = input.PekerjaanOrangTua
	myUser.PenghasilanOrangTua = input.PenghasilanOrangTua

	// simpan data ke database
	newUser, err := s.repository.Save(myUser)
	if err != nil {
		return newUser, err
	}

	return newUser, nil
}

func (s *service) UserByUsername(username string) (User, error) {
	// panggil repo
	user, err := s.repository.FindUserByUsername(username)
	if err != nil {
		return user, errors.New("username tidak cocok")
	}

	return user, nil
}
