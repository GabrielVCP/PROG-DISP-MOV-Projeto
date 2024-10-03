import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './components/styles';
import ImoveisButton from './components/ImoveisButton/ImoveisButton';
import ClientesButton from './components/ClientesButton/ClientesButton';
import CorretoresButton from './components/CorretoresButton/CorretoresButton';
import CadastroImovelButton from './components/CadastroImovelButton/CadastroImovelButton';
import CadastroClienteButton from './components/CadastroClienteButton/CadastroClienteButton';
import CadastroCorretorButton from './components/CadastroCorretorButton/CadastroCorretorButton';
import CadastroImoveis from './CadastroImoveis/CadastroImoveis'; 
import CadastroCorretor from './CadastroCorretor/CadastroCorretor';
import CadastroCliente from './CadastroCliente/CadastroCliente'; 
import Imoveis from './Imoveis/Imoveis'; 
import Corretores from './Corretores/Corretores'; 
import Clientes from './Clientes/Clientes'; 

export default function App() {
  const [activebutton, setActiveButton] = useState(null);
  const [showCadastroImoveis, setShowCadastroImoveis] = useState(false);
  const [showCadastroCorretor, setShowCadastroCorretor] = useState(false);
  const [showCadastroCliente, setShowCadastroCliente] = useState(false);
  const [showImoveis, setShowImoveis] = useState(false);
  const [showCorretores, setShowCorretores] = useState(false);
  const [showClientes, setShowClientes] = useState(false);

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'Cadastro Imóvel') {
      setShowCadastroImoveis(true);
      setShowCadastroCorretor(false);
      setShowCadastroCliente(false);
      setShowImoveis(false);
      setShowCorretores(false);
      setShowClientes(false);
    } else if (buttonName === 'Cadastro Corretor') {
      setShowCadastroCorretor(true);
      setShowCadastroImoveis(false);
      setShowCadastroCliente(false);
      setShowImoveis(false);
      setShowCorretores(false);
      setShowClientes(false);
    } else if (buttonName === 'Cadastro Cliente') {
      setShowCadastroCliente(true);
      setShowCadastroImoveis(false);
      setShowCadastroCorretor(false);
      setShowImoveis(false);
      setShowCorretores(false);
      setShowClientes(false);
    } else if (buttonName === 'Imóveis') {
      setShowImoveis(true);
      setShowCadastroImoveis(false);
      setShowCadastroCorretor(false);
      setShowCadastroCliente(false);
      setShowCorretores(false);
      setShowClientes(false);
    } else if (buttonName === 'Corretores') {
      setShowCorretores(true);
      setShowCadastroImoveis(false);
      setShowCadastroCorretor(false);
      setShowCadastroCliente(false);
      setShowImoveis(false);
      setShowClientes(false);
    } else if (buttonName === 'Clientes') {
      setShowClientes(true);
      setShowCadastroImoveis(false);
      setShowCadastroCorretor(false);
      setShowCadastroCliente(false);
      setShowImoveis(false);
      setShowCorretores(false);
    } else {
      setShowCadastroImoveis(false);
      setShowCadastroCorretor(false);
      setShowCadastroCliente(false);
      setShowImoveis(false);
      setShowCorretores(false);
      setShowClientes(false);
    }
  };

  const handleLogoPress = () => {
    setActiveButton('Home');
    setShowCadastroImoveis(false);
    setShowCadastroCorretor(false);
    setShowCadastroCliente(false);
    setShowImoveis(false);
    setShowCorretores(false);
    setShowClientes(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleLogoPress}>
          <Text style={styles.logo}>L.A.Rosa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {showCadastroImoveis ? (
          <CadastroImoveis /> 
        ) : showCadastroCorretor ? (
          <CadastroCorretor />
        ) : showCadastroCliente ? (
          <CadastroCliente /> 
        ) : showImoveis ? (
          <Imoveis /> 
        ) : showCorretores ? (
          <Corretores /> 
        ) : showClientes ? (
          <Clientes /> 
        ) : (
          <View style={styles.buttonGrid}>
            <ImoveisButton onPress={() => handleButtonPress('Imóveis')} />
            <ClientesButton onPress={() => handleButtonPress('Clientes')} />
            <CorretoresButton onPress={() => handleButtonPress('Corretores')} />           
            <CadastroImovelButton onPress={() => handleButtonPress('Cadastro Imóvel')} />
            <CadastroClienteButton onPress={() => handleButtonPress('Cadastro Cliente')} />
            <CadastroCorretorButton onPress={() => handleButtonPress('Cadastro Corretor')} />
          </View>
        )}
      </View>
    </View>
  );
}
