import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


const CampoSelecaoCor = (props) => {
  const [aberto, setAberto] = useState(false);
  const [selecionado, setSelecionado] = useState(props.valor);

  const atual = props.item.find((i) => i.nome === selecionado);







  return (
    <div className="CampoSelecaoCor" style={{  }} onClick={() => setAberto(!aberto)}>
      <label>{props.label}</label>

      <div style={{   }} onClick={() => { setAberto(!aberto);}}>
        <span style={{  }}>
          {atual?.nome ?? "Selecione..."}
        </span>
        <MdOutlineKeyboardArrowDown />
      </div>
      {aberto && (
        <div
          style={{

          }}
        >
          <div
            style={{

            }}
          >
            {props.item.map((i) => (
              <div
                key={i.nome}
                onClick={() => {
                  setSelecionado(i.nome);
                  props.aoAlterado(i.nome);
                  setAberto(false);
                }}
                style={{

                }}
              >
                <span
                  style={{

                  }}
                >
                  {i.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CampoSelecaoCor;