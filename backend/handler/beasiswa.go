package handler

import (
	"final-project-engineering-72/beasiswa"
	jwttoken "final-project-engineering-72/jwt-token"
	"net/http"

	"github.com/gin-gonic/gin"
)

// bikin struct handlerbeasiswa untuk menampung serivce (dependensi)
type handlerBeasiswa struct {
	service    beasiswa.Service
	jwtService jwttoken.Service
}

// bikin function untuk public handler
func Handler(service beasiswa.Service, jwtService jwttoken.Service) *handlerBeasiswa {
	return &handlerBeasiswa{service, jwtService}
}

func (h *handlerBeasiswa) InputData(c *gin.Context) {
	var input beasiswa.InputData
	err := c.ShouldBindJSON(&input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	_, err = h.service.InputData(input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Data berhasil ditambahkan"})
}
