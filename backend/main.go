package main

import (
	"database/sql"
	"final-project-engineering-72/handler"
	"final-project-engineering-72/user"
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "database/subaku.db")
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// repouser
	repoUser := user.NewRepository(db)
	// serviceuser
	serviceUser := user.NewService(repoUser)
	// handler user
	handlerUser := handler.NewHandler(serviceUser)

	// bikin server
	server := gin.Default()

	// bikin endpoint
	server.POST("/api/register", handlerUser.RegisterUser)
	server.POST("/api/login", handlerUser.LoginUser)
	server.POST("/api/profile", handlerUser.ProfilUser)

	// run server
	server.Run(":8080")
}
