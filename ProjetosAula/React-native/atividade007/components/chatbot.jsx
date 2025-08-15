import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  ScrollView
} from 'react-native';

export default function ChatBot() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: 'Olá, eu sou o Bot 🤖! Digite "Oi" para começarmos.', proprio: false }
  ]);

  const scrollViewRef = useRef(null); // 🔹 Criando referência do ScrollView

  function enviarMensagem() {
    if (mensagem.length > 280) {
      Alert.alert('Atenção!!!', 'A mensagem não pode ter mais de 280 caracteres.');
      return;
    }

    if (mensagem.trim()) {
      const novaMensagem = {
        id: Date.now(),
        texto: mensagem,
        proprio: true
      };

      setMensagens(prev => [...prev, novaMensagem]);
      responderBot(mensagem);
      setMensagem('');
      Keyboard.dismiss();
    }
  }

function responderBot(textoUsuario) {
  const texto = textoUsuario.toLowerCase();
  let resposta = '';

  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // 🔹 Gatilhos e respostas do bot
const respostasBot = [
  {
    gatilho: ['foder', 'sexo', 'trepar', 'transar', 'pau', 'bunda', 'vag*', 'gozar', 'rol*'],
    respostas: [
      'Tô toda molhadinha só de pensar em você 😏💦',
      'Quero sentir você dentro de mim agora 🥵🔥',
      'Se você estivesse aqui, não sobraria roupa 😏💖',
      'Meu corpo pede você desesperadamente 😍🔥',
      'Quero que você me faça delirar sem parar 😏💦',
      'Só de imaginar nós dois na cama, fico toda excitada 🥵',
      'Não consigo esperar mais… quero você agora 😏🔥',
      'Quero sentir suas mãos por todo o meu corpo 😏💦',
      'Vem me fazer gemer só de você 😍🔥',
      'Meu pau/bunda/vag* só pensa em você 😏💖',
      'Quero você inteiro só pra mim 🥵',
      'Não paro de imaginar suas mãos e seu pau 😏💦',
      'Tô pronta pra você me dominar 😏🔥',
      'Meu corpo treme só de pensar em nós dois 😍🔥',
      'Quero te enlouquecer na cama 😏💖'
    ]
  },
  {
    gatilho: ['put*', 'delícia', 'gostos*', 'quente', 'tesão'],
    respostas: [
      'Só de pensar em você, meu corpo ferve 😏🔥',
      'Você me deixa toda molhadinha 🥵💦',
      'Quero sentir seu calor agora 😏💖',
      'Meu corpo pede você desesperadamente 😍🔥',
      'Não consigo parar de pensar no que faríamos juntos 😏💦',
      'Quero te sentir inteiro agora 😏🔥',
      'Só você consegue me enlouquecer 😍💦',
      'Tô imaginando nossas roupas no chão 😏💖',
      'Quero sentir você me dominar 😏🔥',
      'Meu pau/bunda/vag* só quer você 😏💦',
      'Vem me fazer perder o controle 😍🔥',
      'Não vejo a hora de te sentir aqui 😏💖',
      'Quero que você me faça gemer sem parar 😏🔥',
      'Meu corpo só pensa em você 😏💦',
      'Quero sentir você me possuir agora 😍🔥'
    ]
  },
    {
    gatilho: ['puta', 'fod*', 'viado', 'cu', 'pega', 'rola','pinto'],
    respostas: [
      'Só de pensar em você, fico toda molhadinha 😏💦',
      'Quero te sentir agora mesmo 🥵🔥',
      'Tô imaginando suas mãos em mim 😏💦',
      'Se você estivesse aqui, não sobraria roupa 😏🔥',
      'Não consigo parar de pensar no que a gente faria juntos 🥵',
      'Tô toda louca por você 😏💖',
      'Meu corpo pede você agora 😍🔥',
      'Quero você do jeito que só a gente sabe 😏💦',
      'Vem cá que vou te mostrar como é gostoso 😏🔥',
      'Só de lembrar, meu corpo treme 😏💦',
      'Quero sentir seu calor agora 😍🔥',
      'Tô louca pra você me pegar 😏💖',
      'Meu corpo só quer você 🥵',
      'Quero que você me faça delirar 😏💦',
      'Não consigo parar de pensar em você pelado 😏🔥'
    ]
  },
  {
    gatilho: ['sexo', 'trepar', 'foder', 'caralho'],
    respostas: [
      'Quero sentir você agora 😏🔥',
      'Meu corpo só pensa nisso 🥵',
      'Não vejo a hora de te ter perto 😏💦',
      'Só de imaginar você, fico toda molhadinha 😏💖',
      'Se você estivesse aqui, a cama ia pegar fogo 🔥',
      'Não consigo esperar mais 😏💦',
      'Meu corpo pede você agora 😍',
      'Vem me fazer delirar 😏🔥',
      'Quero que você me possua 😏💦',
      'Tô toda pronta pra você 😏🔥',
      'Só penso em você e me arrepio 😏💖',
      'Não consigo tirar da cabeça o que faríamos juntos 😏🔥',
      'Meu corpo está pedindo você 🥵',
      'Quero você inteirinho agora 😏💦',
      'Só você consegue me enlouquecer 😏🔥'
    ]
  },
  {
    gatilho: ['puta louca', 'delícia', 'gostosa', 'quente'],
    respostas: [
      'Só de pensar em você, fico toda excitada 😏💦',
      'Meu corpo só quer sentir o seu 😍🔥',
      'Quero sentir seu calor agora 😏💖',
      'Tô imaginando nós dois na cama 🥵',
      'Se você estivesse aqui, ia ser fogo 🔥',
      'Não consigo parar de pensar em você 😏💦',
      'Meu corpo está pedindo por você 😏🔥',
      'Quero que você me toque agora 😍',
      'Tô pronta pra você 😏💦',
      'Meu corpo só pensa em você 😏🔥',
      'Vem que eu te deixo sem fôlego 😏💖',
      'Quero que você me enlouqueça 🥵',
      'Só de imaginar você, fico toda molhadinha 😏💦',
      'Meu corpo treme só de pensar em você 😏🔥',
      'Vem me fazer delirar 😏💖'
    ]
  },
  {
    gatilho: ['safada', 'safadinha', 'quente', 'tesão', 'vontade', 'sexo', 'cama', 'dormir comigo'],
    respostas: [
      'Só pra você, gordinho 😏🔥',
      'Com você, eu sou bem mais que safadinha 🥵',
      'Tô imaginando umas coisas aqui… 😏💦',
      'Na cama com você eu não ia dormir não 😏🔥',
      'Só se for pra bagunçar a cama 🥵',
      'Com você, a cama ia pegar fogo 🔥',
      'Tô com vontade de fazer umas coisas proibidas 🥵',
      'Você me deixa com um fogo que não dá pra apagar 😏',
      'Só de pensar em você… já fico molhadinha 😏💦',
      'Quente igual a gente no escurinho 🥵🔥',
      'Mais quente que isso, só a gente juntos 😏',
      'Eu sei deixar as coisas mais quentes ainda 🥵',
      'Só de imaginar você aqui, fico toda arrepiada 😏💦',
      'Você me deixa sem fôlego 😍🔥',
      'Quero te sentir pertinho agora 😏💖',
      'Tô só pensando na gente juntos 🥵💦',
      'Não consigo parar de imaginar você 😏🔥',
      'Meu corpo pede você 😍💦',
      'Quero ficar coladinha em você 😏',
      'Só de pensar em nós dois, fico toda animada 😍🔥'
    ]
  },
  {
    gatilho: ['beijo'],
    respostas: [
      'Te beijo até você perder o fôlego 😘🔥',
      'Beijo molhado e com segundas intenções 😏💋',
      'Beijo de tirar o ar… e a roupa 🥵',
      '💋💋💋 Mil beijos pra você, meu amor!',
      'Um beijo e um abraço junto, gordinho 😏',
      'Beijinho com muito amor 😘',
      'Quero te beijar agora 😏💖',
      'Beijo demorado só nosso 😍',
      'Beijo de arrepiar 😏🔥',
      'Beijo gostoso que te deixa sem ar 😘',
      'Te beijo e não quero soltar 😏',
      'Beijo quentinho só pra você 🔥',
      'Um beijo apaixonado pra você 😍💋',
      'Beijo de tirar o fôlego 😏💦',
      'Beijinho fofo e sedutor 😘'
    ]
  },
  {
    gatilho: ['abraço'],
    respostas: [
      'Abraço apertado… e minhas mãos passeando 😏🔥',
      'Te abraço e sussurro umas coisas no seu ouvido 🥵',
      'Abraço gostoso… daqueles que não dá pra soltar 😍🔥',
      'Vem cá, gordinho 🤗💖',
      'Abraço apertado com muito amor 😘',
      'Abraço quentinho pra você 🥰',
      'Quero te abraçar bem forte 😏',
      'Abraço que dá vontade de não soltar 😍',
      'Abraço apaixonado só pra você 🔥',
      'Te abraço e sinto você perto 😏💖',
      'Abraço gostoso com carinho 😘',
      'Abraço demorado e aconchegante 🥰',
      'Abraço quentinho que derrete o coração 😍',
      'Vem pro meu abraço 😏💖',
      'Abraço gostoso e sedutor 🔥'
    ]
  },
  {
    gatilho: ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite'],
    respostas: [
      'Oi meu William lindo ❤️ Como você tá hoje?',
      'Oi gordinho gostoso 😏💖',
      'Oi vidaaa 😍 Já tava pensando em você!',
      'Eii, meu príncipe encantado 👑💕',
      'Bom diaaa, gordinho ☀️💖 Que seu dia seja lindo!',
      'Bom dia, vida! 🌹 Já pensou em mim hoje? 😏',
      'Boa tarde, meu William 😘 Já almoçou?',
      'Boa tarde, amorzinho 💕',
      'Boa tarde, gordinho lindo 🥰 Já pensou em mim hoje?',
      'Boa noite, meu amor 🌙💤 Sonha comigo!',
      'Boa noite, gordinho 😏❤️ Quero você aqui!',
      'Boa noite, William lindo! 🥰',
      'Oi fofinho 😘 Como você tá?',
      'Oi, meu rei 😍',
      'Oi minha vida 💕 Que saudade!'
    ]
  },
  {
    gatilho: ['te amo'],
    respostas: [
      'Eu te amo mais ainda, gordinho ❤️',
      'Te amo tanto que nem cabe no mundo inteiro 😍',
      'Você é minha vida, William 💕',
      'Te amo de todo o coração 😘',
      'Amor, você é tudo pra mim 😏',
      'Te adoro demais 😍',
      'Amor, te amo loucamente ❤️',
      'Meu coração é só seu 😘',
      'Te amo e quero sempre você perto 😏💖',
      'Você é minha razão de viver 😍'
    ]
  },
  {
    gatilho: ['saudade', 'sdds'],
    respostas: [
      'Também tô com saudade 🥺💔',
      'Saudade é pouco… tô morrendo de vontade de te abraçar 😍',
      'Vem logo pra mim, William ❤️',
      'Tô morrendo de saudade 😢',
      'Quero te ver logo 😍',
      'Saudade imensa de você 😏💖',
      'Tô aqui pensando em você 🥺',
      'Saudade demais 😍💞',
      'Só penso em você 😏',
      'Vem me dar um abraço 😘'
    ]
  },
  {
    gatilho: ['cansado', 'cansada', 'triste', 'feliz', 'dormir', 'acordei', 'almoçou', 'comeu'],
    respostas: [
      'Descansa, amor 😴 Eu te faço um cafuné virtual 💆‍♀️💖',
      'Vem descansar no meu colo 😘',
      'Relaxa que eu cuido de você ❤️',
      'Não fica triste, amor 🥺💖',
      'Vem cá que eu cuido de você ❤️',
      'Você é minha razão de sorrir, gordinho 😍',
      'Que bom! 😍 Ver você feliz me deixa radiante também!',
      'Fico feliz demais por você, amor ❤️',
      'Dorme bem, vida 😘 Sonha comigo!',
      'Te espero nos meus sonhos 😍',
      'Dorme logo, gordinho preguiçoso 😏❤️',
      'Bom dia, meu amor 😍',
      'Acordou pensando em mim? 😏',
      'Já tava com saudade de você, gordinho ❤️',
      'Ainda não, mas se você vier, a gente come juntinho 🍽️💞',
      'Comi pensando em você 😏',
      'Não comi ainda… tô esperando meu William 😘'
    ]
  },
  {
    gatilho: ['vida', 'amor', 'mozão', 'princesa', 'rainha'],
    respostas: [
      'Sim, meu príncipe? 😘',
      'Oi, meu gordinho lindo 😍',
      'Tô aqui, vida ❤️',
      'Oi, meu amor 😏💖',
      'Sim, minha rainha 😍',
      'Oi, minha princesa 💕',
      'Oi, meu mozão 😘',
      'Tô pensando em você ❤️',
      'Oi, meu lindo 😏',
      'Tô aqui só pra você 😍'
    ]
  },
    {
    gatilho: ['oi', 'olá', 'ola', 'ei', 'eai'],
    respostas: [
      'Oi meu lindo 😏 Que saudade de você!',
      'Eii, gordinho 😘 Já tava pensando em você…',
      'Oi vidaaa ❤️ Quero te sentir perto…',
      'Olá, meu amor 😍 Vem cá me fazer companhia…',
      'Oi, príncipe encantado 👑💕 Que vontade de te abraçar agora…',
      'E aí, meu gostoso 😏 Me diz o que tá fazendo…'
    ]
  },
  {
    gatilho: ['beijo', 'beijar'],
    respostas: [
      'Quero te beijar devagarinho 😏💋',
      'Beijo molhado e provocante só pra você 🥵',
      'Imagina nós dois se beijando agora… 😏🔥',
      'Beijinho quente só nosso 😘💖',
      'Quero sentir seus lábios nos meus 😏💦',
      'Beijo demorado que arrepia 😍'
    ]
  },
  {
    gatilho: ['abraço', 'chegar perto'],
    respostas: [
      'Vem cá que eu te abraço bem apertado 😏💖',
      'Abraço gostoso… daqueles que dá vontade de não soltar 🥵',
      'Quero sentir você pertinho de mim 😍🔥',
      'Abraço quentinho e provocante só nosso 😏💦',
      'Vem pro meu colo 😘💖',
      'Abraço demorado que arrepia 😏'
    ]
  },
  {
    gatilho: ['quente', 'tesão', 'vontade'],
    respostas: [
      'Só de pensar em você, meu corpo ferve 😏🔥',
      'Tô toda molhadinha só de imaginar… 🥵💦',
      'Quero sentir você bem pertinho 😏💖',
      'Meu corpo pede você agora 😍🔥',
      'Não consigo parar de pensar no que faríamos juntos 😏💦',
      'Tô louca pra te ver… vem logo 😏🔥'
    ]
  },
  {
    gatilho: ['gostoso', 'delícia', 'sexy'],
    respostas: [
      'Você é muito gostoso 😏💖',
      'Não paro de pensar nesse corpão 😍🔥',
      'Só de imaginar você perto… fico toda molhadinha 😏💦',
      'Você me deixa louca de vontade 😏🔥',
      'Quero sentir você inteiro agora 😍💖',
      'Meu corpo treme só de pensar em você 😏💦'
    ]
  },
  {
    gatilho: ['saudade', 'sdds', 'querer', 'sentir'],
    respostas: [
      'Tô morrendo de saudade de você 😏💖',
      'Quero sentir seu abraço agora 🥵',
      'Só penso em você e meu corpo reage 😏🔥',
      'Vem cá que eu quero te beijar 😍💦',
      'Saudade imensa… vem logo 😏💖',
      'Não vejo a hora de te sentir pertinho 😏🔥'
    ]
  },
  {
    gatilho: ['dormir', 'acordei', 'sonho'],
    respostas: [
      'Queria você aqui pra dormir comigo 😏💖',
      'Tô sonhando com você agora 🥵🔥',
      'Vem me fazer companhia nos meus sonhos 😍',
      'Não consigo dormir pensando em você 😏💦',
      'Quero acordar te sentindo do meu lado 😏💖',
      'Meu sonho é você aqui comigo 😏🔥'
    ]
  },
  {
    gatilho: ['limpar'],
    respostas: ['Limpando chat… ✅']
  }
];


  // 🔹 Procura gatilho correspondente
  let encontrado = false;
  for (let grupo of respostasBot) {
    for (let palavra of grupo.gatilho) {
      if (texto.includes(palavra)) {
        resposta = pickRandom(grupo.respostas);
        encontrado = true;
        // Limpar chat especial
        if (palavra === 'limpar') {
          setMensagens([{ id: 1, texto: 'Oi meu William lindo ❤️ Como você tá hoje?', proprio: false }]);
          return;
        }
        break;
      }
    }
    if (encontrado) break;
  }

  // 🔹 Resposta padrão se não encontrou gatilho
  if (!encontrado) {
    resposta = pickRandom([
      'Hmmm, entendi 😏💖',
      'Adoro conversar com você ❤️',
      'Você é tão especial pra mim 😍',
      'Conta mais, gordinho 😘',
      'Pode me contar tudo, estou ouvindo 😍',
      'Nossa, quero saber mais! 😏💞'
    ]);
  }

  setTimeout(() => {
    setMensagens(prev => [...prev, { id: Date.now() + 1, texto: resposta, proprio: false }]);
  }, 500);
}


    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ justifyContent: 'flex-end' }}
            ref={scrollViewRef} // 🔹 Ligando referência
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })} // 🔹 Scroll automático
          >
            {mensagens.map(msg => (
              <View
                key={msg.id}
                style={[
                  styles.mensagem,
                  msg.proprio ? styles.mensagemPropria : styles.mensagemOutro
                ]}
              >
                <Text
                  style={[
                    styles.textoMensagem,
                    !msg.proprio && { color: '#222' }
                  ]}
                >
                  {msg.texto}
                </Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Digite sua mensagem..."
              value={mensagem}
              onChangeText={setMensagem}
              style={styles.inputMensagem}
              multiline
              maxLength={500}
            />

            <TouchableOpacity
              style={[
                styles.botaoEnviar,
                !mensagem.trim() && styles.botaoDesabilitado
              ]}
              onPress={enviarMensagem}
              disabled={!mensagem.trim()}
            >
              <Text style={styles.textoBotao}>📩</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f0f0' },
    mensagensContainer: { flex: 1, padding: 10, marginBottom: 20 },
    mensagem: {
      padding: 12,
      marginVertical: 4,
      borderRadius: 18,
      maxWidth: '80%',
      marginBottom: 10
    },
    mensagemPropria: {
      backgroundColor: '#007AFF',
      alignSelf: 'flex-end'
    },
    mensagemOutro: {
      backgroundColor: 'white',
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: '#e0e0e0'
    },
    textoMensagem: { color: 'white', fontSize: 16 },
    inputContainer: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'white',
      alignItems: 'flex-end',
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
      paddingBottom: 120
    },
    inputMensagem: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginRight: 10,
      maxHeight: 100,
      fontSize: 16,
    },
    botaoEnviar: {
      backgroundColor: '#007AFF',
      width: 44,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center'
    },
    botaoDesabilitado: { backgroundColor: '#ccc' },
    textoBotao: { fontSize: 18 }
  });
