import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'; 

const CadastroCorretor = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
              
            </View>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={styles.title}>Cadastro de Corretor</Text>
                <View style={styles.formContainer}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input} placeholder="Nome" required />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>CPF</Text>
                        <TextInput style={styles.input} placeholder="CPF" required />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>RG</Text>
                        <TextInput style={styles.input} placeholder="RG" required />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput style={styles.input} placeholder="Telefone" required />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Creci</Text>
                        <TextInput style={styles.input} placeholder="Creci" required />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Data de Nascimento</Text>
                        <TextInput style={styles.input} placeholder="Data de Nascimento" required />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default CadastroCorretor;
