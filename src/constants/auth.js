import { useState, useEffect } from "react";

const CLIENT_ID = '06108a62c9b6496eb46b41193b915681'; // Your client id
const REDIRECT_URI = 'http://localhost:3000/callback'; // Your redirect uri
const AUTH = "https://accounts.spotify.com/authorize"
const SCOPES = ["playlist-modify-public", "playlist-modify-private"]
const SPACE_DELIMITER = "%20"
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER)
const RESPONSE_TYPE = "token"



// http://localhost:3000/callback#access_token=BQARUP-WSdzIFmRlQ69zQz4VWgrxcuPWIS5LWSOWBYUnMoVG6_agmhkVD3SVp7CPS2Sa3RYrvtgc7O3LNuroztEfOZ0Pbwpi1rSfzPanJRmi6OnxxzPy1M-f2gITh7zofJFoE9xoT6pQUUDCAiLwMf9k7yF9Vjj3XVLXwgLdzjAhGQjk_zHpJjHjOtHfb8cvd7IPxJnQY-8frbX93eBhZw&token_type=Bearer&expires_in=3600
export const handleLogin = () => {
    window.location = `${AUTH}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };


export const Authenticate = () => {
    const [token, setToken] = useState("")
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)


    }, [])
}