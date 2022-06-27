package jwttoken

import (
	"errors"
	"time"

	"github.com/dgrijalva/jwt-go/v4"
)

// interface
type Service interface {
	GenerateJWT(username string) (string, error)
	ValidasiJWT(tokenJwt string) (*jwt.Token, error)
}

// struct
type service struct{}

// newService
func NewServiceJWT() *service {
	return &service{}
}

// secret key
var key = "kfnvjdbjgiudbffbhriuehgihskvhrighek"

func (s *service) GenerateJWT(username string) (string, error) {
	// bikin payload
	expired := time.Now().Add(time.Minute * 30)
	payload := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer: username,
		ExpiresAt: &jwt.Time{
			Time: expired,
		},
	})

	// tandatangan payload
	jwt, err := payload.SignedString([]byte(key))
	if err != nil {
		return jwt, errors.New("gagal signed payload")
	}

	return jwt, nil
}

func (s *service) ValidasiJWT(tokenJwt string) (*jwt.Token, error) {
	jwtToken, err := jwt.ParseWithClaims(tokenJwt, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(key), nil
	})

	if err != nil {
		return jwtToken, err
	}

	return jwtToken, nil
}
