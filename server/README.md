# 📄 Documentação das rotas da API 

## Sobre a API

 * Linguagem : JavaScript
 * Utilizando Node.js (express)
 * REST API


## Users endpoint - docs

| Method  | Endpoint  | Params        | O que faz   |
| --------------------| ------------- | ----------  | ---------- |
| GET     | /v1/users/|               | Lista todos os usuários existentes no banco |
| GET     | /v1/users/|       id      | Lista 1 (um) usuário específico             | 
| POST    | /v1/users/|               | Cria usuários                               | 
| PUT     | /v1/users/|       id      | Edita usuário específico                    | 
| DELETE  | /v1/users/|       id      | Deleta 1 (um) usuário específico            | 

### Body Request (Users)

<details open>
<summary>Example JSON :</summary>
<pre>
  {
	"email": "beLazy@gmail.com",
	"password": "123",
	"username": "beLazyForever"
  }
</pre>
</details>
