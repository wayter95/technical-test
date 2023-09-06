"use client";

import { IAcountModel } from "@/models/account";
import { api } from "@/services/api";
import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type ISignInCredentials = {
  email: string;
  password: string;
}

type ISignUpCredentials = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

type IAuthContextData = {
  signIn: (credentials: ISignInCredentials) => Promise<boolean>;
  signUp: (credentials: ISignUpCredentials) => Promise<boolean>;
  signOut: () => void;
  account: IAcountModel | null;
  loading: boolean;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [account, setAccount] = useState<IAcountModel | null>(null);
  const [loading, setLoading] = useState(true)
  const isAuthenticated = !!account;

  useEffect(() => {
    setLoading(true);

    const getToken = localStorage.getItem('@TECHNICALTEST:token');
    const getAccount = localStorage.getItem('@TECHNICALTEST:account');

    if(getToken && getAccount) {
      api.defaults.headers.common['Authorization'] = `Bearer ${getToken}`;

      const formatAccount = JSON.parse(getAccount);

      setAccount(formatAccount);
    } else {
      signOut();
    }
    setLoading(false);
  }, []);

  const signIn = async ({ email, password }: ISignInCredentials) => {
    try {
      setLoading(true)

      const response = await api.post("/account/signin", { email, password });

      const { token, account } = response.data.data;
      localStorage.setItem("@TECHNICALTEST:token", token);
      localStorage.setItem("@TECHNICALTEST:account", JSON.stringify(account));

      setAccount(account) 

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setLoading(false)
      return true;
    } catch (error) {
      toast.error('E-mail ou senha invalidos!')
      console.log(error);
      setLoading(false)
      return false;
    }
  }

  const signUp = async ({ email, fullName, password, phone }: ISignUpCredentials) => {
    try {
      setLoading(true)

      await api.post("/account/signup", { email, fullName, password, phone });

      toast.success('Cadastro realizado com sucesso, agora logue para continuar!')
      setLoading(false)
      return true;
    } catch (error: any) {
      const apiError = error.response?.data;

      toast.error(apiError.message instanceof Array
        ? apiError.message[0]
        : apiError.message)
      console.log(error);
      setLoading(false)
      return false;
    }
  }

  const signOut = () => {
    setAccount(null);
    localStorage.removeItem("@TECHNICALTEST:token");
    localStorage.removeItem("@TECHNICALTEST:account");
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, signUp, isAuthenticated, account, loading }}>
      {children}
    </AuthContext.Provider>
  )
}