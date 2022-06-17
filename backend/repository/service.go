package repository

import (
	"errors"
)

// bikin kontrak function (interface)
type Service interface {
	RegisterUser(input InputRegister) (User, error)
}

// bikin struct dengan atribut bertipe Repository
type service struct {
	repository Repository
}

// bikin func newservice buat di panggil di main
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
