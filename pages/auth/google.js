import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { useRouter } from "next/router";

const Google = ({ setCookie }) => {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

    // const API = process.env.REACT_APP_API_ENDPOINT;
    // const API = "https://cryptonaukribackendtest.herokuapp.com";              // Will work on LocalHost
    const API = "http://api.luster.network";
    const { code } = router.query
    const sendBackend = async (code) => {
        const response = await Axios.get(`${API}/api/v1/user/googleUserInfo?client=localhost`, {
           params : {code}
          });

          const data = response.data;

        if (data.userLoggedIn) {
          // console.log(data);
          // console.log(response.headers.authorization);
          // setLoginError(data.message);
          setLoading(false);
          const timestamp = new Date().getTime();
          const expire = timestamp + 60 * 60 * 24 * 1000 * 2;
          const expireDate = new Date(expire);
          // console.log(expireDate);
          //document.cookie = `token=${response.headers.authorization}; expires=${expireDate}; path=/; domain=.cryptonaukri.com`;
          try {
            setCookie("token", response.headers.authorization, {
              expires: expireDate,
              path: "/",
              //domain: ".cryptonaukri.com",
            });
          } catch (error) {
            alert(";p");
            console.log(error);
          }

          // below codes to be removed once cookies is applied accross the site
          localStorage.setItem("token", response.headers.authorization);
          localStorage.setItem("cUser", "DEVELOPER");
          localStorage.setItem("login", true);

          if (redirectType === "internship" || redirectType === "job") {
            navigate(`/jobapplication?id=${redirectid}&type=${redirectType}`);
            return;
          }
          if (redirectType === "community") {
            window.location.href = `https://community.cryptonaukri.com${redirectid}`;
            return;
          }

          // navigate("/jobs");
          navigate("/dashboard");
        }

    }
    useEffect(()=>{
        console.log(code)
        sendBackend(code )
    },[])
   

  return (
    <div className='min-h-[70vh] flex items-center justify-center'>
    </div>
  )
}

export default Google