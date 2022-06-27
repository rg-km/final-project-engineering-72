package handler

import (
	"final-project-engineering-72/beasiswa"
	"net/http"

	"github.com/gin-gonic/gin" 
)

// bikin struct handlerbeasiswa untuk menampung serivce (dependensi)
type handlerBeasiswa struct {
	service beasiswa.Service
}

// bikin function untuk public handler
func newHandler(service beasiswa.Service) *handlerBeasiswa {
	return &handlerBeasiswa{service}
}

// handler untuk input data
func (h *handlerBeasiswa) InputData(c *gin.Context) {
	// insiasi struct inputData
	var input beasiswa.InputData

	// binding
	err := c.ShouldBindJSON(&input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "binding data error",
			"status":  "gagal",
		})
		return
	}

	// panggil function input
	err = h.service.InputData(input)
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
