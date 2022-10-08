import { useState } from 'react';
import './app.css'
import { maskCpf, maskPhone, maskCep, maskAccount } from './utils/masks';

function App() {
  const [cpf, setCpf] = useState()
  const [telefone, setTelefone] = useState()
  const [cep, setCep] = useState()
  const [conta, setConta] = useState()

  return (
    <div className='container'>
      <input
        type="text"
        placeholder='Cpf'
        value={cpf}
        onChange={(e) => { setCpf(maskCpf(e.target.value)) }}
      />
      <input
        type="text"
        placeholder='Telefone'
        value={telefone}
        onChange={(e) => { setTelefone(maskPhone(e.target.value)) }}
      />
      <input
        type="text"
        placeholder='Cep'
        value={cep}
        onChange={(e) => { setCep(maskCep(e.target.value)) }}
      />
      <input
        type="text"ya
        placeholder='Conta'
        value={conta}
        onChange={(e) => { setConta(maskAccount(e.target.value)) }}
      />
    </div>
  );
}

export default App;
