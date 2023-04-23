# Hamburgueria_NodeJS
API de Hamburgueria feita como projeto da etapa de Onboarding da empresa Byte Seridó JR. 

# Para rodar o projeto:
- Necessita-se de um servidor MySQL instalado
- NodeJS instalado
- Editor de texto
- Insomnia ou apps semelhantes

# Executando:
- Primeiro, clone o respositório
- entre na pasta
- Rode o comando: "npm i" para instalar as depencencias do projeto
- Crie um arquivo .env no diretório raíz do projeto. Dentro dele coloque a seguinte variável: DATABASE_URL="mysql://user:password@localhost:3306/database_name" (user = usuario, password = senha do seu servidor, database_name = nome do banco de dados.
- Execute o comando "npx prisma migrate dev" para puxar seu banco de dados
- Por fim, "npm run dev"
Agora é pro projeto estar rodando no seu computador.

# Para acesso ao banco de dados e funcionalidades:
- Utilize seu Insomnia (ou semelhante) para conectar-se com o link: "http://localhost:3000(padrão do nodejs)"
- Para executar qualquer uma das tabelas, basta colocar seu nome no formato /nome após o 3000 e /funcionalidadeescolhida, ex: http://localhost:3000/clientes/create


#Considerações finais
- Infelizmente não tive tempo para desenvolver mais a fundo a API (Com tecnologias mais avançadas e sistema de autenticação), tendo em vista que eu só tive até 21/04/2023 (Sexta) para desenvolve-la sobre uma tecnologia totalmente nova pra mim, mas fiz o mais completo que consegui.

- Vasco da gama.
![image](https://user-images.githubusercontent.com/67791717/233868935-c503a91c-d3d9-4094-967c-015ef270b02d.png)
