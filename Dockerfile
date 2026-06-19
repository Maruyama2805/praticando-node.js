# Usa a mesma versão do Node que você tem na máquina (Alpine é mais leve e ideal para nuvem)
FROM node:20.20-alpine

# Define a pasta de trabalho lá dentro do contêiner
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (isso deixa o deploy muito mais rápido)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o resto do seu código (js, etc.) para dentro do contêiner
COPY . .

# Expõe a porta que o seu servidor web/API vai rodar (assumindo que seja a 3000)
EXPOSE 3000

# Comando final para iniciar a aplicação (sem o --watch, pois é ambiente de produção)
CMD ["npm", "run", "start"]