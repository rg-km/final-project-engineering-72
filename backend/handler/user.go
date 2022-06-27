package handler

import (
	jwttoken "final-project-engineering-72/jwt-token"
	"final-project-engineering-72/support"
	"final-project-engineering-72/user"
	"net/http"

	"github.com/gin-gonic/gin"
)

// bikin struct handlerUser untuk menampung serivce (dependensi)
type handlerUser struct {
	service    user.Service
	jwtService jwttoken.Service
}

// bikin function untuk public handler
func NewHandler(service user.Service, jwtService jwttoken.Service) *handlerUser {
	return &handlerUser{service, jwtService}
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

	// binding data input
	err := c.ShouldBindJSON(&input)
	if err != nil {
		error := support.BindingErr(err)
		resp := support.ResponseAPI("gagal login", http.StatusBadRequest, error)
		c.JSON(http.StatusBadRequest, resp)
		return
	}

	// panggil function login
	newUser, err := h.service.LoginUser(input)
	if err != nil {
		myError := gin.H{
			"error": err.Error(),
		}
		resp := support.ResponseAPI("gagal login", http.StatusBadRequest, myError)
		c.JSON(http.StatusBadRequest, resp)
		return
	}

	// bikin token
	token, err := h.jwtService.GenerateJWT(newUser.UserName)
	if err != nil {
		myError := gin.H{
			"error": err.Error(),
		}
		resp := support.ResponseAPI("gagal membuat token jwt", http.StatusBadRequest, myError)
		c.JSON(http.StatusBadRequest, resp)
		return
	}

	data := gin.H{
		"token_jwt": token,
		"user":      newUser,
	}

	// sukses
	resp := support.ResponseAPI("berhasil login", http.StatusOK, data)
	c.JSON(http.StatusOK, resp)

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

func (h *handlerUser) DashboardAdmin(c *gin.Context) {
	// ambil context
	currentUser := c.MustGet("currentUser").(user.User)
	if currentUser.Role != "admin" {
		errorr := gin.H{
			"error": "role tidak valid - admin only can access",
		}
		resp := support.ResponseAPI("unauthorized", http.StatusUnauthorized, errorr)
		c.JSON(http.StatusUnauthorized, resp)
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "hallo admin",
	})

}
