# Entity

- Entidade = IDENTIDADE. Isso é possível graças ao ID. Os seus atributos podem mudar, mas o ID não.
- É algo único e que pode ser alterado de forma contínua.

# Value Object

- Trate o Value Object como imutável. É um conjunto de atributos e valores.
- Exemplo: endereço. Usuário não troca só de casa, troca de endereço.
  ```
  Adress: street, city, state, zip code
  ```

# Agregado

- Um agregado é um conjunto de objetos associados que tratamos como uma unidade para propósito de mudança de dados.
- Conjunto de entidades e objetos de valor que fazem sentido juntos.
- Exemplo: quero alterar um pedido, escolho a ordem e faço a mudança.
- Precisa de um nome. Sempre vai ser o ponto de entrada do agregado.

# Exemplo Modelagem
![image](https://user-images.githubusercontent.com/52608531/188514650-a717c9df-f60d-47bb-91ab-5fbd2d1e9862.png)


# Referência

- Domain Driven Design: Agregados, Entidades e Value Objects: https://www.youtube.com/watch?v=3U09ez40oSw
