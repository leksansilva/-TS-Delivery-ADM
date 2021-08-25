export const TOKEN_KEY = '&token';
export const EXPIRATION_TOKEN = '&expiration';
export const REFRESH_TOKEN ='&refreshToken';
export const EXPIRATION_REFRESH_TOKEN = '&expirationRefreshToken'; 

export const login = token =>{  localStorage.setItem(TOKEN_KEY,token)};
export const logout = () => {localStorage.clear()};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
console.log(getToken());
export const setExpiration = expiration => localStorage.setItem(EXPIRATION_TOKEN, expiration);
export const expiration = () => localStorage.getItem(EXPIRATION_TOKEN);

export const setRefreshToken = refreshToken => localStorage.setItem(REFRESH_TOKEN, refreshToken);
export const refreshToken = () => localStorage.getItem(REFRESH_TOKEN);

export const setExpirationRefreshToken = expirationRefreshToken => localStorage.setItem(EXPIRATION_REFRESH_TOKEN, expirationRefreshToken);
export const expirationRefreshToken = () => localStorage.getItem(EXPIRATION_REFRESH_TOKEN);