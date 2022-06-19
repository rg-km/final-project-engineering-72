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
<<<<<<< HEAD
	db, err := sql.Open("sqlite3", "database/subaku.db")
=======
	db, err := sql.Open("sqlite3", "database/migration/subaku.db")
>>>>>>> 21732ecef3d202f88895732397ca21fabe8fa452
	if err != nil {
		log.Fatalf("error: %v", err)
	}

<<<<<<< HEAD
	// repouser
	repoUser := user.NewRepository(db)
	// serviceuser
	seriveUser := user.NewService(repoUser)
	// handler user
	handlerUser := handler.NewHandler(seriveUser)

	// bikin server
	server := gin.Default()

	// bikin endpoint
	server.POST("/api/register", handlerUser.RegisterUser)
	server.POST("/api/login", handlerUser.LoginUser)

	// run server
	server.Run(":8080")
=======
	usersRepo := repository.NewUserRepository(db)

	mainAPI := api.NewAPI(*usersRepo)
	mainAPI.Start()
>>>>>>> 21732ecef3d202f88895732397ca21fabe8fa452
}
