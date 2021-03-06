package beasiswa

import (
	"errors"
)

// bikin kontrak function (interface)
type Service interface {
	DataBeasiswa(input InputData) error
	InputData(input InputData) error
}

// bikin struct dengan atribut bertipe Repository
type service struct {
	repository Repository
}

// bikin func newsevice buat di panggil di main
func NewService(repository Repository) *service {
	return &service{repository}
}

// func input
func (s *service) InputData(input InputData) error {
	// tangkap data beasiswa
	jenis_beasiswa := input.Jenis_Beasiswa
	keterangan := input.Keterangan

	// cek apakah data
	beasiswaByJenisBeasiswa, _ := s.repository.FindBeasiswaByJenisBeasiswa(jenis_beasiswa)
	beasiswaByKeterangan, _ := s.repository.FindBeasiswaByKeterangan(keterangan)

	// respon
	if beasiswaByJenisBeasiswa.Id != 0 {
		return errors.New("jenis beasiswa tidak ada")
	}

	//respon
	if beasiswaByKeterangan.Id != 0 {
		return errors.New("data tidak ditemukan ")
	}

	return nil
}

// func data_beasiswa
func (s *service) DataBeasiswa(input InputData) error {

	//binding
	var myBeasiswa Beasiswa
	myBeasiswa.Jenis_Beasiswa = input.Jenis_Beasiswa
	myBeasiswa.Sumber_Beasiswa = input.Sumber_Beasiswa
	myBeasiswa.Tanggal_Penyaluran = input.Tanggal_Penyaluran
	myBeasiswa.Keterangan = input.Keterangan

	// simpan data ke database
	err := s.repository.Save(myBeasiswa)
	if err != nil {
		return err
	}

	return nil
}
