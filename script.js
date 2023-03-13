
    var altura = 0 
    var largura = 0
    var vidas = 1 
    var tempo = 15

    var criarMosquitoTempo = 2000

    var nivel = window.location.search
    nivel = nivel.replace('?', '')
    if(nivel === 'facil'){
        //2000,  2 segundo
        criarMosquitoTempo = 2000
    }
    else if(nivel === 'medio'){
        //1500, 1,5 segundo
        criarMosquitoTempo = 1500
    }
    else if(nivel === 'dificil'){
        //1000, 1 segundo
        criarMosquitoTempo = 1000
    }

    function ajustaTamanhoPalcoJogo(){

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura) //937 1920
    } 
    
    ajustaTamanhoPalcoJogo()
    var cronometro = setInterval(function(){
        tempo -=1
        if(tempo < 0){
            clearInterval(cronometro)
            clearInterval(criarMosquito)
            window.location.href = 'vitoria.html'

        }
        else{
            document.getElementById('cronometro').innerHTML = tempo
          
        }
        
    }, 1000)
        
        // Incluindo função dentro de body para que os parametros sejam lidos e interpretados em execução
        function posicaoRandomica(){

                 // Removendo imagem da tela caso ela ja exista
                    if(document.getElementById('mosquito')){

                    document.getElementById('mosquito').remove()
                    console.log(document.getElementById('mosquito'))

                    // a partir do evento a id 'v+' tem sua imagem alterada
                    // console.log('elemento vidas foi: '+vidas)
                    if(vidas > 3 ){
                        // alert('GAME OVER')
                        window.location.href = 'fim_de_jogo.html'
                    }
                    else{
                        
                        document.getElementById('v'+vidas).src="imagens/coracao_vazio.png"
                        vidas++
                    }
                }

                // Math.floor para arrendondar valores
                var posicaoX = Math.floor(Math.random() * largura) - 90 // - 90 espaçamento da imagem com a tela
                var posicaoY = Math.floor(Math.random() * altura) - 90

                // caso a posiçao x,y sejam INFERIOR a ZERO posição recebe ZERO 
                posicaoX = posicaoX < 0 ? 0 : posicaoX
                posicaoY = posicaoY < 0 ? 0 : posicaoY

                console.log(posicaoX, posicaoY)

                // Criar o elemento html (mosquito) de forma programatica
                var mosquito = document.createElement('img')
                mosquito.id = 'mosquito'
                mosquito.src = 'imagens/mosquito.png'
                
                // ************************************************
                // estilizando elemento criado de forma direta
                
                mosquito.className = tamanhoAleatorio() + ' ' +ladoAleatorio(
                    // espaço em branco para o interpetrador indentificar que são duas funções diferentes
                    // Caso contrario nehuma irá funcionar se estiver ' tamanhoAlatorio() + ladoAleatorio()
                )

                // ************************************************

                //Atribuindo valores randomicos a img
                mosquito.style.left = posicaoX + 'px'
                mosquito.style.top = posicaoY + 'px'
                mosquito.style.position = 'absolute'

                // Evento de click 
                mosquito.onclick = function(){
                    this.remove() // this faz referencia ao propio elemento html que executa a função
                }
                
                //impressão
                document.body.appendChild(mosquito)

                tamanhoAleatorio() // requisição de função tamanho do mosquito
                console.log(tamanhoAleatorio())

                console.log(ladoAleatorio())

                // ******************************************************

               
         }

    // Atribuindo tamanho variavel ao mosquito
    // Variando de 0.1 a 3

    function tamanhoAleatorio(){
        var classe = Math.floor(Math.random() * 5) // Math para arredondar valores
        console.log(classe)

        switch(classe){
            case 0 :
                return 'mosquito1'
            case 1:
                return 'mosquito2'
            case 2:
                return 'mosquito3'
            case 3:
                return 'mosquito4'
            case 4:
                return 'mosquito5'
        }
    }

    // Invertendo imagem do mosquito Aleat

    function ladoAleatorio(){
        var classe = Math.floor(Math.random() * 2) // VALORES SAIRÁ 0 OU 1 
        
        switch(classe){
            case 0:
                return 'ladoA'
            case 1:
                return 'ladoB'
        }
    }