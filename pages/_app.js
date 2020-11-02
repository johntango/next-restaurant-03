import '../styles/globals.css'
import { useContext, useState } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Layout from "../components/layout"



function MyApp(props){
  var {user, setUser} = useContext(AppContext)
  const { Component, pageProps } = props;
  return (
    <AppContext.Provider value={{isAuthenticated:false,user:null,setUser:()=>{}}}>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
export default MyApp;
