import { useState, useRef } from 'react'
import './Banner.css'

const Banner = () => {
    const [imagemBanner, setImagemBanner] = useState(null);
    const inputRef = useRef();

    const aoEscolherImagem = (e) => {
        const arquivo = e.target.files[0];
        if (arquivo){
            const url = URL.createObjectURL(arquivo);
            setImagemBanner(url);
        }
    }

    return (
        <div className='banner' style={imagemBanner ? { backgroundImage: `url(${imagemBanner})`} : {}}>
            {!imagemBanner && (
                <>
                    <div className='banner-grid'></div>
                    <div className='banner-content'>
                        <div className='banner-title'>Carteirinha Gamer</div>
                        <div className='banner-sub'>Sua coleção • Histórico • Finalizados</div>
                    </div>
                </> 
            )}
            <button className='banner-upload-btn' onClick={() => inputRef.current.click()}>
                {imagemBanner ? 'Trocar banner' : 'Adicionar banner'}
            </button>

            <input
                ref={inputRef}
                type='file'
                accept='image/*'
                style={{ display: 'none'}}
                onChange={aoEscolherImagem}
            />
        </div>
    );
};

export default Banner;