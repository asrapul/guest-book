import React from 'react';
import telkom from './assets/images/smktelkom.png';
import TelkomSchool from './assets/svgs/TelkomSchool.svg';
import SegitigaAtas from './assets/svgs/SegitigaAtas.svg';
import Image from 'next/image';
import LingkaranKiri from './assets/svgs/LingkaranKiri.svg';
import LingkaranKanan from './assets/svgs/LingkaranKanan.svg';
import SegitigaBawah from './assets/svgs/SegitigaBawah.svg';
import SelamatDatang from './assets/svgs/SelamatDatang.svg';
import DibuatOleh from './assets/svgs/DibuatOleh.svg';
import LogoDokumen from './assets/svgs/IconDocument.svg'
import Link from 'next/link';

function Page() {

  

  return (
    <>
      <div>
        <Image
          src={TelkomSchool}
          alt="tulisan Telkom School"
        />
        <Image
          src={SegitigaAtas}
          alt="Segitiga"
          style={{ marginLeft: '950px', marginTop: '-58px' }}
        />
        <div style={{ position: 'absolute' }}>
          <Image
            src={LingkaranKiri}
            alt="Lingkaran 1"
            style={{ marginTop: '-200px' }}
          />

          <Image
            src={SegitigaBawah}
            alt="Lingkaran 1"
            style={{ marginTop: '81px' }}
          />

          <Image
            src={SelamatDatang}
            alt="Selamat Datang Di SMK TELKOM"
            style={{ marginTop: '-450px', marginLeft: '100px' }}
            width={650}
          />

          <div style={{ marginTop: '20px', marginLeft: '300px' }}>
            
            <Link href="/form">
            <button
              className="
                appearance-none bg-transparent  rounded-full
                text-merah-telkom cursor-pointer font-sans font-semibold
                px-9 py-3 text-center outline-none 
                transition duration-300 ease-[cubic-bezier(.23,1,.32,1)] 
                disabled:pointer-events-none 
                hover:text-merah-telkom  hover:shadow-white hover:-translate-y-1 bg-white
                active:shadow-none active:translate-y-0 flex items-center text-xl
              "
            >
              <Image
                src={LogoDokumen}
                alt="Logo Dokumen"
                style={{ marginRight: '8px' }}
              />
              Isi Formulir
            </button>
            </Link>
          </div>


          <Image
            src={DibuatOleh}
            alt="Dibuat Oleh"
            style={{ marginTop: '250px', marginLeft: '700px' }}
          />
        </div>
        <Image
          src={LingkaranKanan}
          alt="Lingkaran 2"
          style={{ marginTop: '-80px', marginLeft: '660px' }}
        />

        <Image
          src={telkom}
          alt="Gambar Sekolah SMK Telkom Makassar"
          width={663}
          style={{ marginLeft: '873px', marginTop: '-633px', position: 'absolute' }}
          height={500}
        />
      </div>
    </>
  );
}

export default Page;
