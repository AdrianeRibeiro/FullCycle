- Streaming de dados: exemplo: assistir vídeo no youtube/netflix. A informação vem aos poucos, conforme você assiste
- Stream de dados é diferente de mensagem

# Kafka 
  - [X] Consegue fazer o que o RabbitMQ faz (message broker)
  - [X] Possível usá-lo como sistema de mensageria, mas é usado principalmente para stream de dados
  - [X] É um banco de dados: append only, vai para frente/trás
  - [X] Quando usar: se você tem notificação entre sistemas, precisa de replay de dados, tratá-los, fluxo muito grande 
  - [X] É caro, pois funciona em clusters - conjunto de brokers
  - [X] Outro sistema pega os dados dele. O kafka NÃO manda para outros sistemas
  - [X] Não garante ordem. Exemplo: pagamento e estorno. Se a mensagem de estorno chegar antes, vou estornar algo que não foi pago
    - Pulo do gato: mandar as mensagens com a mesma key, pois elas irão cair sempre na mesma partição, onde irão ser consumidas em ordem.

```
_______________________
      
      ->
LOG |1|2|3|  Expiração
          <-
_______________________
```

```
_______________________________________

SISTEMAPAGADOR    TÓPICO      SISTEMA A
                              SISTEMA B
                              SISTEMA C
_______________________________________

```

# Tópico 
- [X] Fica no broker
- [X] Ele tem a partição
- [X] Na partição ficam os dados
- [X] Replication Factor: número de partições por broker
  - útil se um broker cair, pois não perde informações
- [X] 1 consumidor por partição. Se eu tiver 3 partições e um grupo com 4 consumidores, um vai ficar parado

# Garantias de entrega
> 1 - FF (Fire and Forget)
  - Exemplo: receber posição do motorista do uber. Se não em um momento, não tem problema
  - Muito rápido
  
> 2 - Confirmação do Leader
  - Mando a mensagem e aguardo a confirmação do leader
  - Mais lento que o FF

> 3 - Confirmação do Leader e Followers
   - Mando a mensagem e aguardo a confirmação do leader e das réplicas
   - Mais lento de todos, porém com mais garantia