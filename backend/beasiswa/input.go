package beasiswa

// bikin struct input data beasiswa
type InputData struct {
	Jenis_Beasiswa     string `json:"jenis_beasiswa" binding:"required"`
	Sumber_Beasiswa    string `json:"sumber_beasiswa" binding:"required"`
	Tanggal_Penyaluran string `json:"tanggal_penyaluran" binding:"required"`
	Keterangan         string `json:"keterangan" binding:"required"`
}
