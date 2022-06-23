import React, { Component } from 'react'
import { useEffect, useState } from "react"
import FormListBeasiswa from '../../../Components/FormDaftar/FormListBeasiswa'
import "./DaftarBeasiswa.css"

export default function DaftarBeasiswa() {
  const beasiswaList = [
    {
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      jenisBeasiswa: "Beasiswa Penelitian",
    },
    {
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      jenisBeasiswa: "Beasiswa Penelitian",
    },
    {
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      jenisBeasiswa: "Beasiswa Penelitian",
    },
  ]
  return (
    <div className="daftar-bea-wrapper container">
      <section className="daftar-bea-title">
        <h1>Daftar Beasiswa</h1>
      </section>
      <section className="daftar-bea-list row">
        {beasiswaList.map((item) => {
          return (
            <FormListBeasiswa jenisBeasiswa={item.jenisBeasiswa}/>
          )
        })}
      </section>
    </div>
  )
}