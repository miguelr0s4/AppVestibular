import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const [redacao, setRedacao] = useState('');
  const [classe, setClasse] = useState('');
  const [carreiras, setCarreiras] = useState([]);

  const verificarCarreiras = () => {

    const valorRedacao = parseInt(redacao);
    const valorClasse = classe;
    const carreirasDisponiveis = [];

  if(valorClasse.toLowerCase()=='sisu'){
    if (valorRedacao >= 750) {
      carreirasDisponiveis.push('Medicina', 'Odontologia', 'Engenharia Civil', 'Direito', 'Arquitetura e Urbanismo', 'Farmácia');
    } else if (valorRedacao >= 650 && valorRedacao < 750) {
      carreirasDisponiveis.push('Nutrição', 'Psicologia', 'Cinema', 'Jornalismo', 'Enfermagem', 'Biomedicina', 'Publicidade e Propaganda', 'Administração', 'Agronomia', 'Gastronomia', 'Ciências Contábeis', 'Comércio Exterior', 'Filosofia', 'Relações Internacionais', 'Fisioterapia', 'Sistemas de Informação', 'Medicina Veterinária');
    } else if (valorRedacao >= 580 && valorRedacao < 650) {
      carreirasDisponiveis.push('Pedagogia', 'História', 'Geografia', 'Gestão de Recursos Humanos', 'Sistemas de Informação', 'Gestão Financeira', 'Marketing', 'Logística', 'Química', 'Física', 'Análise e Desenvolvimento de Sistemas');
    } else {
      carreirasDisponiveis.push('Não há carreiras disponíveis para essa pontuação na redação.');
    }

  }else if(valorClasse.toLowerCase()=='prouni'){
    if (valorRedacao >= 650) {
      carreirasDisponiveis.push('Medicina', 'Engenharia Civil', 'Direito');
    } else if (valorRedacao >= 550 && valorRedacao < 650) {
      carreirasDisponiveis.push('Psicologia' , 'Engenharia (várias habilitações)', 'Jornalismo', 'Farmácia', 'Arquitetura e Urbanismo', 'Direito', 'Odontologia', 'Nutrição', 'Gastronomia');
    } else if (valorRedacao >= 450  && valorRedacao < 550) {
      carreirasDisponiveis.push(
        'Ciências Aeronáuticas', 'Design de Interiores', 'Pedagogia', 'Dança', 'Administração', 'Ciências Contábeis', 'Educação Física', 'Gestão da Tecnologia da Informação', 'Enfermagem', 'Gestão Financeira', 'Desenho Industrial');
    } else {
      carreirasDisponiveis.push('Não há carreiras disponíveis para essa pontuação na redação.');
    }

  }else if(valorClasse.toLowerCase()=='fies'){
    if (valorRedacao >= 600) {
      carreirasDisponiveis.push('Engenharia Aeronáutica', 'Engenharia Civil', 'Medicina', 'Odontologia', 'Psicologia', 'Enfermagem', 'Engenharia de Produção');
    } else if (valorRedacao >= 450 && valorRedacao < 600) {
      carreirasDisponiveis.push('Jornalismo', 'Administração', 'Pedagogia', 'Direito', 'Economia', 'Jornalismo', 'Nutrição', 'Rádio e TV', 'Publicidade e Propaganda', 'Design de Produto', 'Cinema', 'Estatística');
    } else {
      carreirasDisponiveis.push('Não há carreiras disponíveis para essa pontuação na redação.');
    }
  }else{
    carreirasDisponiveis.push('Não há carreiras disponíveis para essa pontuação na redação.');
  }
    setCarreiras(carreirasDisponiveis);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite a nota da redação:</Text>
      <TextInput
        style={styles.input}
        value={redacao}
        onChangeText={(text) => setRedacao(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Digite a classe:</Text>
      <TextInput
        style={styles.input}
        value={classe}
        onChangeText={(text) => setClasse(text)}
        placeholder="Sisu, Prouni ou FIES"
      />
      <TouchableOpacity style={styles.button} onPress={verificarCarreiras}>
        <Text style={styles.buttonText}>Verificar Carreiras</Text>
      </TouchableOpacity>
      <Text style={styles.resultadoLabel}>Carreiras Disponíveis:</Text>
      <Text style={styles.resultado}>{carreiras.join(', ')}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 16,
    padding: 8,
  },
  resultadoLabel: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 16,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#483D8B',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;