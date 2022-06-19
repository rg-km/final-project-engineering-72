package user

// bikin struct input user
type InputRegister struct {
<<<<<<< HEAD
	Username string `json:"username" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}
type InputLogin struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required,min=6"`
=======
	Username string
	Email    string
	Password string
>>>>>>> 21732ecef3d202f88895732397ca21fabe8fa452
}
