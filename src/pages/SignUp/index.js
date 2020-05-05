import React, {useRef} from 'react';
import {StatusBar} from 'react-native';
import Background from '../../components/Background';
import Logo from '../../assets/logo.png';
import {Container, Form, FormInput, SubmitButton, SignLink, SignLinkText, Imagen} from './styles';

export default function SignUp({navigation}) {
    const usuarioRef = useRef();
    const passwordRef = useRef();

    function handleSubmit() {

    }

    return (
        <Background>
            <StatusBar barStyle="light-content" backgroundColor="#000000"/>
            <Container>
                <Imagen source={Logo}/>
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu nome"
                        returnKeyType="next"
                        onSubmitEditing={()=> usuarioRef.current.focus()}
                    />

                    <FormInput
                        icon="perm-identity"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu usuário"
                        ref={usuarioRef}
                        returnKeyType="next"
                        onSubmitEditing={()=> passwordRef.current.focus()}
                    />

                    <FormInput
                        icon="lock"
                        secureTextEntry
                        placeholder="Digite sua senha."
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />
                    <SubmitButton onPress={() => {
                    }}>Cadastrar</SubmitButton>
                </Form>
                <SignLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Já tenho conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
