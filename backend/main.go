package main

import (
	"database/sql"
	"final-project-engineering-72/user"
	"log"

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
	seriveUser := user.NewService(repoUser)
	input := user.InputRegister{
		Username: "ice",
		Email:    "ice@gmail.com",
		Password: "12345654321",
	}
	user, err := seriveUser.RegisterUser(input)
	if err != nil {
		log.Fatalf("error: %v", err.Error())
	}

	log.Printf("email : %v", user.Email)

}
