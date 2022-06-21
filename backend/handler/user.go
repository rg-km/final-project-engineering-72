package handler

import (
	"final-project-engineering-72/user"
	"net/http"

	"github.com/gin-gonic/gin"
)

// bikin struct handlerUser untuk menampung serivce (dependensi)
type handlerUser struct {
	service user.Service
}

// bikin function untuk public handler
func NewHandler(service user.Service) *handlerUser {
	return &handlerUser{service}
}

// handler untuk register user
func (h *handlerUser) RegisterUser(c *gin.Context) {
	// insiasi struct inputRegister
	var input user.InputRegister

	// binding
	err := c.ShouldBindJSON(&input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "binding data error",
			"status":  "gagal",
		})
		return
	}

	// panggil function register
	_, err = h.service.RegisterUser(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
			"status":  "gagal",
		})
		return
	}

	// sukses
	c.JSON(http.StatusOK, gin.H{
		"message": "register berhasil",
	})
}

// handler untuk login user
func (h *handlerUser) LoginUser(c *gin.Context) {
	// insiasi struct inputlogin
	var input user.InputLogin

	// panggil function register
	_, err := h.service.LoginUser(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
			"status":  "gagal",
		})
		return
	}
	// sukses
	c.JSON(http.StatusOK, gin.H{
		"message": "login berhasil",
	})

}

// handler untuk isi data profil
func (h *handlerUser) ProfilUser(c *gin.Context) {
	// insiasi struct inputlogin
	var input user.InputProfil

	// binding dengan data yang diadapat dari request
	err := c.ShouldBindJSON(&input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "binding data error",
			"status":  "gagal",
		})
		return
	}

	// panggil function register
	_, err = h.service.ProfilUser(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
			"status":  "gagal",
		})
		return
	}
	// sukses
	c.JSON(http.StatusOK, gin.H{
		"message": "input profil berhasil",
	})

}
