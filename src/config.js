const config = {
    PORT: process.env.PORT || 8000,
    API_ENDPOINT: 
        process.env.API_ENDPOINT || 'http://localhost:8000',
    TOKEN_KEY: 'neighbr-auth-token'
}

export default config;