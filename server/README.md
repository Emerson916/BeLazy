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

<br>
<br>

## Films endpoint - docs

| Method  | Endpoint  | Params        | O que faz   |
| --------------------| ------------- | ----------  | ---------- |
| GET     | /v1/films/|               | Lista todos os films existentes no banco |
| GET     | /v1/films/|       id      | Lista 1 (um) film específico             | 
| POST    | /v1/films/|               | Cria films                               | 
| PUT     | /v1/films/|       id      | Edita films específico                   | 
| DELETE  | /v1/films/|       id      | Deleta 1 (um) film específico            | 

### Body Request (Films)

<details open>
<summary>Example JSON :</summary>
<pre>
 {
	"imageCard" : "https://i.pinimg.com/originals/c4/3a/dd/c43add350b0e44f7cdf36fdc36e0946c.png",
  	"imageBanner" : "https://legadodadc.com.br/wp-content/uploads/2021/11/FD1vP6lWQAMNHQl-1.jpg",
	"title_video" : "Venom 2",
	"evaluation" : 1,
	"favorite" : true,
	"releaseYear" : 20,
	"createAt" : 2010,
	"duration" : 220,
	"sinopse" : "O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta."
}
</pre>
</details>
