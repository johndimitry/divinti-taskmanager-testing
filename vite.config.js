import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Mantém a porta 3000 exigida no teste do seu Cypress
  }
});
