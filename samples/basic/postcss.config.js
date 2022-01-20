module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // 本番環境でminify
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
