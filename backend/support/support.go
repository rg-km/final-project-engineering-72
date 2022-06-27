package support

import (
	"fmt"

	"github.com/go-playground/validator/v10"
)

/*
	"meta" : {
		"pesan" : "sukses"
		"code" : 200
	},
	"data"  : {
		"username" : "john",
		"email" : "john@gmail.com",
		"avatar" : "john.JPG"
	}
*/

// struct response api
type responseAPI struct {
	Meta meta        `json:"meta"`
	Data interface{} `json:"data"`
}

type meta struct {
	Pesan string `json:"pesan"`
	Code  int    `json:"code"`
}

func ResponseAPI(pesan string, code int, data interface{}) responseAPI {
	myMeta := meta{
		Pesan: pesan,
		Code:  code,
	}

	return responseAPI{
		Meta: myMeta,
		Data: data,
	}
}

func BindingErr(err error) []string {
	var Err []string

	for _, e := range err.(validator.ValidationErrors) {
		errMSG := fmt.Sprintf("error pada: %v, kondisi: %v", e.Field(), e.ActualTag())
		Err = append(Err, errMSG)
	}

	return Err
}
