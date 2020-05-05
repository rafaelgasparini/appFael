import React, {useRef} from 'react';
import {StatusBar, Image} from 'react-native';
import Background from '../../components/Background';
import Logo from '../../assets/logo.png';
import {Container, Form, FormInput, SubmitButton, SignLink, SignLinkText, Imagen} from './styles';

export default function SignIn({navigation}) {
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
                        icon="perm-identity"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu usuário"
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
                    }}>Acessar</SubmitButton>
                </Form>
                <SignLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
