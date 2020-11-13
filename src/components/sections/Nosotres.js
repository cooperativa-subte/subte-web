import React, { useState } from 'react';
import styled from 'styled-components';

import suffleArray from '../utils/utilities';

const StyledNosotresContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  color: black;
  .texto-sobre-nosotres {
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 19px;
    h2 {
      font-weight: 800;
      font-size: 2.25rem;
      width: 100%;
    }
    & > div {
      width: 100%;
    }
  }
  .fotos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    & > div {
      img {
        width: 22.5rem;
        padding-right: 1rem;
      }
      p {
        font-size: 0.85rem;
      }
    }
    @media (min-width: 576px) {
      justify-content: space-between;
    }
  }
  @media (min-width: 576px) {
    .texto-sobre-nosotres {
      h2 {
        width: 50%;
      }
      & > div {
        width: 50%;
      }
    }

    .fotos-container {
      & > div {
        img {
          padding-right: 0;
        }
      }
    }
  }
`;

const Nosotres = () => {
  const [photosArray] = useState(
    suffleArray([
      {
        url:
          'https://res.cloudinary.com/subteuy/image/upload/v1604764416/subte.uy/Nosotres/Nosotres-Web-800x800-Pancho_lub5or.jpg',
        alt: 'Foto Pancho',
        nombre: 'Francisco Cobas',
        key: '1',
      },
      {
        url:
          'https://res.cloudinary.com/subteuy/image/upload/v1604764413/subte.uy/Nosotres/Nosotres-Web-800x800-Nat_wrq0hh.jpg',
        alt: 'Foto Nati',
        nombre: 'Natalia Acosta',
        key: '2',
      },
      {
        url:
          'https://res.cloudinary.com/subteuy/image/upload/v1604764412/subte.uy/Nosotres/Nosotres-Web-800x800-Mar_e0bpaf.jpg',
        alt: 'Foto Mariana',
        nombre: 'Mariana Escobar',
        key: '3',
      },
      {
        url:
          'https://res.cloudinary.com/subteuy/image/upload/v1604764413/subte.uy/Nosotres/Nosotres-Web-800x800-Cata_iph9m6.jpg',
        alt: 'Foto Cata',
        nombre: 'Catalina Alonso',
        key: '4',
      },
      {
        url:
          'https://res.cloudinary.com/subteuy/image/upload/v1604764413/subte.uy/Nosotres/Nosotres-Web-800x800-Joac_j4rnap.jpg',
        alt: 'Foto Joaco',
        nombre: 'Joaquín Cabrera',
        key: '5',
      },
      {
        url:
          'https://res.cloudinary.com/subteuy/image/upload/v1604764413/subte.uy/Nosotres/Nosotres-Web-800x800-Val_rm6gzt.jpg',
        alt: 'Foto Vale',
        nombre: 'Valentina Lasalvia',
        key: '6',
      },
    ]),
  );

  return (
    <StyledNosotresContainer>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="row">
              <div className="col-12">
                <div className="texto-sobre-nosotres">
                  <h2>No somos una agencia</h2>
                  <div>
                    <p>
                      Somos una cooperativa de trabajo enfocada en la
                      comunicación, con una perspectiva popular y colaborativa.
                      Trabajamos con organizaciones sociales, culturales,
                      sindicatos, cooperativas y emprendimientos.
                    </p>
                    <p>
                      Tenemos la convicción de que la construcción de
                      alternativas que aporten a transformaciones sociales se da
                      en el plano económico, político y cultural, pero también
                      en el simbólico y estético. Conformamos este espacio para
                      trabajar y reflexionar articulando estas dimensiones.{' '}
                    </p>
                  </div>
                </div>
                <div className="fotos-container">
                  {photosArray.map((foto) => (
                    <div key={foto.url}>
                      <img src={foto.url} alt={foto.alt} key={foto.key} />
                      <p>{foto.nombre}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledNosotresContainer>
  );
};

export default Nosotres;
