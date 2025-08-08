import React from "react";
import { ScrollView, Text, View, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";

export default function CardsRecomendados() {

    const conteudos = [
        {
            id: 1,
            titulo: "Bahia",
            descricao: " A Bahia é um estado rico em cultura, história e belezas naturais. Não deixe de conhecer suas praias paradisíacas, como a Praia do Forte e Morro de São Paulo, além do Pelourinho em Salvador, que é Patrimônio Mundial da UNESCO.",
            informaçõesAlert:  "Informações adicionais sobre a Bahia: A Bahia é famosa por sua culinária, música e festas populares, como o Carnaval de Salvador. É um destino imperdível para quem quer conhecer a cultura brasileira.",
            imagem: "https://neon.com.br/aprenda/wp-content/uploads/2023/11/lugares-para-conhecer-no-brasil-1024x542-minbntrhhdgfhdfg.png",
            especial: true,
            backgroundColor: '#f7dc6f'
        },
        {
            id: 2,
            titulo: "Rio de Janeiro",
            descricao: "O Rio de Janeiro é uma cidade linda, com praias de água cristalina, montanhas imponentes e uma vida noturna vibrante. Não deixe de visitar o Cristo Redentor, o Pão de Açúcar e as praias de Copacabana e Ipanema.",
            informaçõesAlert:  "Informações adicionais sobre o Rio de Janeiro: O Rio de Janeiro é conhecido por sua hospitalidade, festas e eventos culturais, como o Carnaval. É um destino imperdível para quem quer conhecer a cultura brasileira.",
            imagem: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/cj6mryoqn9otslfywira?_a=BACADKGT",
            especial: false,
            backgroundColor: '#61dafb'
        },
        {
            id: 3,
            titulo: "Ceará",
            descricao: "O Ceará é um estado lindo, com praias de água cristalina, dunas de areia branca e uma vida noturna vibrante. Não deixe de visitar a Praia de Jericoacoara, a Praia do Futuro e o Beach Park.",
            informaçõesAlert:  "Informações adicionais sobre o Ceará: O Ceará é conhecido por sua hospitalidade, festas e eventos culturais, como o Carnaval. É um destino imperdível para quem quer conhecer a cultura brasileira.",
            imagem: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/09/Lugares-para-Viajar-SP-Capa.jpg",
            especial: false,
            backgroundColor: '#1c9ec2ff'
        },
        {
            id: 4,
            titulo: "Paraná",
            descricao: "O Paraná é um estado lindo, com praias de água cristalina, dunas de areia branca e uma vida noturna vibrante. Não deixe de visitar a Ilha do Cardoso, o Parque Nacional do Iguaçu e a cidade de Curitiba.",
            informaçõesAlert:  "Informações adicionais sobre o Paraná: O Paraná é conhecido por sua diversidade cultural, com influências de imigrantes europeus e uma rica tradição indígena. É um destino imperdível para quem quer conhecer a cultura brasileira.",
            imagem: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/u4emcofpawwoazsqckft?_a=BACADKGT",
            especial: false,
            backgroundColor: '#1c9ec2ff'
        },
        {
            id: 5,
            titulo: "Santa Catarina",
            descricao: "O Santa Catarina é um estado lindo, com praias d 'água cristalina, dunas de areia branca e uma vida noturna vibrante. Não deixe de visitar a Praia de Bombinhas, a Praia do Rosa e a cidade de Florianópolis.",
            informaçõesAlert:  "Informações adicionais sobre o Santa Catarina: O Santa Catarina é conhecido por sua hospitalidade, festas e eventos culturais , como o Carnaval. É um destino imperdível para quem quer conhecer a cultura brasilieira.",
            imagem: "https://guiaviajarmelhor.com.br/wp-content/uploads/2022/03/Lugares-para-viajar-no-Brasil-5.jpg",
            especial: true,
            backgroundColor: '#f7dc6f'
        },
               {
            id: 6,
            titulo: "Pernambuco",
            descricao: "Pernambuco é um estado vibrante, com rica herança cultural, belas praias e um centro histórico impressionante. Visite Porto de Galinhas, Olinda e o Recife Antigo.",
            informaçõesAlert: "Informações adicionais sobre Pernambuco: É conhecido pelo frevo, maracatu e pelo tradicional Carnaval de Olinda. A culinária também é um destaque, com pratos como a buchada e o bolo de rolo.",
            imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/01/porto-de-galinhas-capa2021-02.jpg",
            especial: false,
            backgroundColor: '#61dafb'
        },
        {
            id: 7,
            titulo: "Amazonas",
            descricao: "O Amazonas abriga a maior floresta tropical do mundo e é perfeito para quem busca aventuras na natureza. Conheça o Encontro das Águas e a cidade de Manaus.",
            informaçõesAlert: "Informações adicionais sobre o Amazonas: O estado possui uma biodiversidade riquíssima e comunidades ribeirinhas com culturas fascinantes. Ideal para ecoturismo e turismo sustentável.",
            imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/1a/95/65/manaus.jpg?w=700&h=-1&s=1",
            especial: true,
            backgroundColor: '#f7dc6f'
        },
        {
            id: 8,
            titulo: "Minas Gerais",
            descricao: "Minas Gerais é famoso por suas cidades históricas, como Ouro Preto e Tiradentes, além de sua culinária típica e hospitalidade. Um destino perfeito para quem ama cultura e natureza.",
            informaçõesAlert: "Informações adicionais sobre Minas Gerais: Conhecido por sua arquitetura barroca, o estado também oferece cachoeiras e montanhas belíssimas na Serra da Canastra e no Parque do Ibitipoca.",
            imagem: "https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/08/lugares-para-viajar-em-minas-gerais.jpg",
            especial: false,
            backgroundColor: '#1c9ec2ff'
        },
        {
            id: 9,
            titulo: "Alagoas",
            descricao: "Alagoas é um paraíso nordestino com praias de águas azul-turquesa e piscinas naturais. Maragogi e São Miguel dos Milagres são os principais destaques.",
            informaçõesAlert: "Informações adicionais sobre Alagoas: O estado combina belas paisagens com uma rica cultura local, incluindo festas populares e culinária baseada em frutos do mar.",
            imagem: "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2022/05/maragogi-alagoas.jpg",
            especial: true,
            backgroundColor: '#f7dc6f'
        },
        {
            id: 10,
            titulo: "Goiás",
            descricao: "Goiás é conhecido por suas belezas naturais, como a Chapada dos Veadeiros, e por suas cidades históricas. Um destino ideal para ecoturismo e descanso.",
            informaçõesAlert: "Informações adicionais sobre Goiás: O estado também é famoso por suas festas tradicionais e culinária típica do cerrado, como o empadão goiano.",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Chapada_dos_Veadeiros_-_Goias.jpg/1280px-Chapada_dos_Veadeiros_-_Goias.jpg",
            especial: false,
            backgroundColor: '#61dafb'
        },
        {
            id: 11,
            titulo: "Mato Grosso",
            descricao: "Mato Grosso abriga o Pantanal, um dos maiores biomas do mundo, além do Parque Nacional da Chapada dos Guimarães. Ideal para amantes da natureza e vida selvagem.",
            informaçõesAlert: "Informações adicionais sobre Mato Grosso: É um estado com rica biodiversidade e ótima infraestrutura para ecoturismo, especialmente para observação de animais.",
            imagem: "https://viagemeturismo.abril.com.br/wp-content/uploads/2017/02/pantanal-mato-grosso-brasil.jpeg",
            especial: false,
            backgroundColor: '#1c9ec2ff'
        },
        {
            id: 12,
            titulo: "São Paulo",
            descricao: "São Paulo é um dos maiores centros urbanos do mundo, oferecendo cultura, gastronomia e entretenimento. Mas também possui lindas praias e áreas de natureza como Ilhabela e Campos do Jordão.",
            informaçõesAlert: "Informações adicionais sobre São Paulo: O estado abriga uma das maiores diversidades culturais do Brasil, com eventos internacionais e uma vida noturna agitada.",
            imagem: "https://media.staticontent.com/media/pictures/5e3d2437-3ed1-4f4c-b3a5-40e8ba0c49f4",
            especial: false,
            backgroundColor: '#61dafb'
        },
        {
            id: 13,
            titulo: "Rio Grande do Sul",
            descricao: "O Rio Grande do Sul mistura paisagens naturais incríveis com uma cultura única. Visite a Serra Gaúcha, Gramado, Canela e as vinícolas da região.",
            informaçõesAlert: "Informações adicionais sobre o Rio Grande do Sul: Influenciado por culturas europeias, o estado é conhecido pelo chimarrão, churrasco e festas típicas como a Oktoberfest.",
            imagem: "https://viagemeturismo.abril.com.br/wp-content/uploads/2021/03/gramado-natal.jpg",
            especial: true,
            backgroundColor: '#f7dc6f'
        },
        {
            id: 14,
            titulo: "Tocantins",
            descricao: "Tocantins é o lar do Jalapão, um dos destinos mais exóticos do Brasil, com fervedouros, dunas e paisagens únicas. Perfeito para quem busca aventura e natureza.",
            informaçõesAlert: "Informações adicionais sobre Tocantins: A região vem se destacando no turismo de aventura e ecoturismo. Vale a pena explorar também a cultura local e comunidades tradicionais.",
            imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/08/jalapao-to-capa-820x430.jpg",
            especial: false,
            backgroundColor: '#1c9ec2ff'
        },
        {
            id: 15,
            titulo: "Distrito Federal",
            descricao: "O Distrito Federal abriga a capital do país, Brasília, famosa por sua arquitetura moderna e planejamento urbano. Um destino cheio de história e política.",
            informaçõesAlert: "Informações adicionais sobre o Distrito Federal: Brasília é um Patrimônio Mundial da UNESCO e oferece atrações como a Esplanada dos Ministérios, o Congresso Nacional e o Lago Paranoá.",
            imagem: "https://cdn.brasildefato.com.br/media/88b7753ee9d28c6d9db0c68e5d02cb50.jpeg",
            especial: true,
            backgroundColor: '#f7dc6f'
        }

    ];

    return (
        <ScrollView style={styles.container}>
            <View
                style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 50 }}
            >
                <Text style={styles.titulo}>Recomendados 📚</Text>
                {conteudos.map((item, id) => (
                    <View key={id} style={styles.card}
                        backgroundColor={item.backgroundColor}>
                        <Image source={{ uri: item.imagem }} style={styles.imagem} />
                        <Text style={styles.subtitulo}>
                            {
                                item.especial && ' ⭐ '
                            }
                            {item.titulo}
                            {
                                item.especial && ' ⭐ '
                            }
                        </Text>
                        <Text style={styles.descricao}>{item.descricao}</Text>
                        { item.especial && (
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => Alert.alert(`Mais informações sobre ${item.titulo}`, `${item.informaçõesAlert}`)}
                        >
                            <Text style={{ fontWeight: 'bold' }}>Saiba Mais</Text>
                        </TouchableOpacity>
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffffff",
        padding: 10,
        textAlign: "center",
    },
    card: {
        margin: 10,
        borderRadius: 8,
        padding: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    imagem: {
        width: 250,
        height: 250,
        borderRadius: 8,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 20,
    },
    descricao: {
        fontSize: 12,
        marginVertical: 5,
        margin: 10,
    },
    botao: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#ffffffff",
    },
    subtitulo: {
        fontSize: 22,
        fontWeight: "bold",
        margin: 10,
    },
});