package main

import (
	"database/sql"
	"final-project-engineering-72/handler"
	jwttoken "final-project-engineering-72/jwt-token"
	"final-project-engineering-72/support"
	"final-project-engineering-72/user"
	"log"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "database/subaku.db")
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// service
	serviceTokenJWT := jwttoken.NewServiceJWT()

	// repouser
	repoUser := user.NewRepository(db)
	// serviceuser
	serviceUser := user.NewService(repoUser)
	// handler user
	handlerUser := handler.NewHandler(serviceUser, serviceTokenJWT)

	// bikin server
	server := gin.Default()

	// bikin endpoint
	server.POST("/api/register", handlerUser.RegisterUser)
	server.POST("/api/login", handlerUser.LoginUser)
	server.POST("/api/profile", handlerUser.ProfilUser)
	server.GET("/api/admin/dashboard", Authorization(serviceTokenJWT, serviceUser), handlerUser.DashboardAdmin)

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

// authorization
func Authorization(jwtService jwttoken.Service, userService user.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		// ambil header
		header := c.GetHeader("Authorization")

		// cek kata bearer
		if !strings.Contains(header, "Bearer") {
			resp := support.ResponseAPI("Unauthorized", http.StatusUnauthorized, nil)
			c.AbortWithStatusJSON(http.StatusUnauthorized, resp)
			return
		}

		// pisahkan kata bearer dan token nya
		tokenString := ""
		arrayString := strings.Split(header, " ")
		if len(arrayString) == 2 {
			tokenString = arrayString[1]
		}

		// validasi token
		token, err := jwtService.ValidasiJWT(tokenString)
		if err != nil {
			resp := support.ResponseAPI("Unauthorized", http.StatusUnauthorized, nil)
			c.AbortWithStatusJSON(http.StatusUnauthorized, resp)
			return
		}

		// ambil payload
		payload, ok := token.Claims.(*jwt.StandardClaims)
		if !ok || !token.Valid {
			resp := support.ResponseAPI("Unauthorized", http.StatusUnauthorized, nil)
			c.AbortWithStatusJSON(http.StatusUnauthorized, resp)
			return
		}

		// ambil data issuer di payload
		username := payload.Issuer

		// cek siapa username tsb
		user, err := userService.UserByUsername(username)
		if err != nil {
			resp := support.ResponseAPI("Unauthorized", http.StatusUnauthorized, err.Error())
			c.AbortWithStatusJSON(http.StatusUnauthorized, resp)
			return
		}

		// simpan ke context
		c.Set("currentUser", user)

	}
}
