package main

import (
	"database/sql"
	"final-project-engineering-72/handler"
	"final-project-engineering-72/user"
	"log"
	"net/http"

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
	server.Run(":3000")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		w.Header().Set("Acces-Control-Allow-Credentials", "true")
		w.Header().Set("Content-Type", "text/html; charset=utf-8")

		if r.Method == "OPTIONS" {
			return
		}

		http.ServeFile(w, r, r.URL.Path[1:])

	})
}
