import type {FC, FormEventHandler} from "react";
import {useState} from "react";
import {Logo} from "../components/Logo";
import {Heading} from "../components/Heading";
import {Text} from "../components/Text";
import {TextInput} from "../components/TextInput";
import {Envelope, Lock} from "phosphor-react";
import {Checkbox} from "../components/Checkbox";
import {Button} from "../components/Button";
import axios from 'axios';

export const SignIn: FC = () => {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const handleSignIn: FormEventHandler = async (event) => {
    event.preventDefault();

    await axios.post('/sessions', {});

    setIsUserSignedIn(true);
  }

  return (
    <div className={"bg-gray-900 flex flex-col h-screen items-center justify-center text-gray-100 w-screen"}>
      <header className={"flex flex-col items-center"}>
        <Logo height={120} width={106} />
        <Heading className={"mt-4"} size={"lg"}>Ignite Lab</Heading>
        <Text className={"mt-1 text-gray-400"} size={"lg"}>Faça login e comece a usar</Text>
      </header>
      <form className={"flex flex-col gap-4 items-stretch max-w-sm mt-10 w-full"} onSubmit={handleSignIn}>
        { isUserSignedIn && <Text>Login realizado</Text> }
        <label className={"flex flex-col gap-3"} htmlFor={"email"}>
          <Text className={"font-semibold"}>
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id={"email"} placeholder={"Digite seu e-mail"} type={"email"} />
          </TextInput.Root>
        </label>
        <label className={"flex flex-col gap-3 mt-4"} htmlFor={"password"}>
          <Text className={"font-semibold"}>
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id={"password"} placeholder={"Digite sua senha"} type={"password"} />
          </TextInput.Root>
        </label>
        <label className={"flex gap-2 items-center"} htmlFor={"remember"}>
          <Checkbox id={"remember"} aria-labelledby={"remember-label-text"} />
          <Text className={"text-gray-200"} id={"remember-label-text"} size={"sm"}>
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button className={"mt-4"} type={"submit"}>
          Entrar na plataforma
        </Button>
      </form>
      <footer className={"flex flex-col gap-4 items-center mt-8"}>
        <Text asChild={true} className={"text-gray-400 underline hover:text-gray-200"} size={"sm"}>
          <a href={""}>Esqueceu sua senha?</a>
        </Text>
        <Text asChild={true} className={"text-gray-400 underline hover:text-gray-200"} size={"sm"}>
          <a href={""}>Não possui conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
  )

};
