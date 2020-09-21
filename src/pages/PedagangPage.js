import React from 'react'

import './css/PedagangPage.css'

export default function PedagangPage({ user }) {
    return (
        <>
            <h2>Selamat Datang { user.name }</h2>
            <h1 style={{ marginBottom: 50, textAlign: 'center' }}>Pilih Aksi</h1>
            <div className="actions">
                <div className="action">Tambah Barang</div>
                <div className="action">Edit Barang</div>
                <div className="action">Hapus Barang</div>
            </div> 
        </>
    )
}