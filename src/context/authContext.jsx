import { createContext, useContext, useState } from "react";
import { auth } from "../server/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState(null);
  async function login(user, password) {
    return signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        setUser(userCredential);
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("erro", errorMessage, errorCode);
        if (errorCode == "auth/wrong-password") {
          alert("Senha inválida");
          return false;
        }
        if (errorCode == "auth/invalid-email") {
          alert("E-mail inválido");
          return false;
        }
        alert("Falha ao logar");
        return false;
      });
  }
  return (
    <AuthContext.Provider value={{ user, login }}>
      {props.children}
    </AuthContext.Provider>
  );
}
