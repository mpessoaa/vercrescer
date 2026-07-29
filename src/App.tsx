import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Baby, 
  Camera, 
  Heart, 
  Sparkles, 
  Instagram, 
  Layout, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Calendar,
  User,
  Star,
  CheckCircle2
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Importações originais
import gestante6 from './assets/images/gestante6.jpeg';
import gestante7 from './assets/images/gestante7.jpeg';
import gestante8 from './assets/images/gestante8.jpeg';
import gestante9 from './assets/images/gestante9.jpeg';
import gestante10 from './assets/images/gestante10.jpeg';
import gestante11 from './assets/images/gestante11.jpeg';
import gestante12 from './assets/images/gestante12.jpeg';
import gestante13 from './assets/images/gestante13.jpeg';
import gestante14 from './assets/images/gestante14.jpeg';
import gestante15 from './assets/images/gestante15.jpeg';
import gestante16 from './assets/images/gestante16.jpeg';
import gestante17 from './assets/images/gestante17.jpeg';
import gestante18 from './assets/images/gestante18.jpeg';
import gestante19 from './assets/images/gestante19.jpeg';
import gestante20 from './assets/images/gestante20.jpeg';
import gestante21 from './assets/images/gestante21.jpeg';
import gestante22 from './assets/images/gestante22.jpeg';

import new6 from './assets/images/new6.jpeg';
import new7 from './assets/images/new7.jpeg';
import new8 from './assets/images/new8.jpeg';
import new9 from './assets/images/new9.jpeg';
import new10 from './assets/images/new10.jpeg';
import new11 from './assets/images/new11.jpeg';
import new12 from './assets/images/new12.jpeg';
import new13 from './assets/images/new13.jpeg';
import new14 from './assets/images/new14.jpeg';
import new15 from './assets/images/new15.jpeg';
import new16 from './assets/images/new16.jpeg';

import acom1 from './assets/images/acom1.png';

import equipe1 from './assets/images/equipe1.png';
import equipe2 from './assets/images/equipe2.png';
import equipe3 from './assets/images/equipe3.png';
import equipe4 from './assets/images/equipe4.png';
import equipe5 from './assets/images/equipe5.png';

import parto1 from './assets/images/parto1.png'; 
import parto2 from './assets/images/parto2.png';
import parto3 from './assets/images/parto3.png';
import parto4 from './assets/images/parto4.png';
import parto5 from './assets/images/parto5.png';

import cake1 from './assets/images/cake1.jpeg';
import cake2 from './assets/images/cake2.jpeg';
import cake3 from './assets/images/cake3.jpeg';
import cake4 from './assets/images/cake4.jpeg';
import cake5 from './assets/images/cake5.jpeg';
import cake6 from './assets/images/cake6.jpeg';

import eventos6 from './assets/images/eventos6.jpeg';
import eventos7 from './assets/images/eventos7.jpeg';
import eventos8 from './assets/images/eventos8.jpeg';
import eventos9 from './assets/images/eventos9.jpeg';
import eventos10 from './assets/images/eventos10.jpeg';
import eventos11 from './assets/images/eventos11.jpeg';
import eventos12 from './assets/images/eventos12.jpeg';
import eventos13 from './assets/images/eventos13.jpeg';
import eventos14 from './assets/images/eventos14.jpeg';
import eventos15 from './assets/images/eventos15.jpeg';
import eventos16 from './assets/images/eventos16.jpeg';

import fotoFernanda from './assets/images/fernanda.png';
import fotoTamires from './assets/images/tamires.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState<any>(null);
  const [fotoAmpliada, setFotoAmpliada] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCarouselIndex(0);
  }, [activeService]);

  const services = [
    { 
      title: "Gestante", 
      icon: <User className="w-5 h-5" />, 
      desc: "Cada fotografia é um abraço na sua jornada. Capturando a beleza única desse momento.",
      whatsapp: "5547991322923",
      hero: {
        headline: "Cada fotografia é um abraço na sua jornada.",
        subheadline: "Capturando a beleza única desse momento que será eterno em seu coração."
      },
      about: {
        title: "Prazer, Nanda Cabral",
        text: "Oiie! Sou a Fernanda, mas pode me chamar de Nanda. Sou fotógrafa e apaixonada por contar histórias por meio das lentes. Amo registrar famílias e transformar suas memórias em imagens cheias de significado."
      },
      highlights: ["Sensível", "Atemporal", "Único"],
      packages: [
        { name: "O Essencial", details: ["15 fotos editadas", "1 locação", "1 troca de look", "Até 1h de ensaio"] },
        { name: "O Intermediário", details: ["25 fotos editadas", "Até 2 locais (opção de estúdio)", "3 trocas de look", "Até 1h30 de ensaio"] },
        { name: "O Clássico", details: ["35 fotos editadas", "35 fotos reveladas 10x15", "Até 2 locais (opção de estúdio)", "4 trocas de looks", "2h de ensaio"] },
        { name: "A Experiência Completa", details: ["Todas as fotos (+60 média)", "Álbum fotolivro 20x20 premium", "Até 2 locações", "4 trocas de looks", "2h de ensaio"] }
      ],
      destaque: fotoFernanda,
      images: [
        gestante6,
        gestante7,
        gestante8,
        gestante9,
        gestante10,
        gestante11,
        gestante12,
        gestante13,
        gestante14,
        gestante15,
        gestante16,
        gestante17,
        gestante18,
        gestante19,
        gestante20,
        gestante21,
        gestante22
      ]
    },
    { 
      title: "Parto", 
      icon: <Heart className="w-5 h-5" />, 
      desc: "Fotografia e Filmagem de Nascimentos. Eternize o dia mais lindo e emocionante da sua vida.",
      whatsapp: "5547991322923",
      hero: {
        headline: "Fotografia e Filmagem de Nascimentos.",
        subheadline: "Eternize o dia mais lindo e emocionante de sua vida!"
      },
      about: {
        title: "Olá, somos a Ver Crescer Fotografia e Filmagem!",
        text: `Somos a primeira equipe especializada em fotografia e filmagem da região — e isso transforma completamente a experiência das famílias que confiam em nós. Trabalhar em equipe significa oferecer mais segurança, suporte e tranquilidade: sempre haverá uma profissional disponível para te atender, garantindo que esse momento tão único seja registrado com todo o cuidado que merece. Aqui, você jamais ficará sem seus registros.\n\nToda a nossa equipe de fotógrafas possui também formação como doulas, permitindo um olhar muito mais sensível e profundo sobre cada etapa do nascimento. Mais do que registrar imagens, entendemos os processos, respeitamos o tempo de cada família e acolhemos cada momento com empatia, conhecimento e presença.\n\nHá 10 anos acompanhando histórias inesquecíveis, já tivemos a honra de registrar mais de 1.500 partos, eternizando encontros que transformam vidas. Ao longo dessa trajetória, conquistamos a confiança de centenas de famílias e também o reconhecimento de profissionais da saúde, sendo frequentemente indicadas pelos próprios médicos pela excelência, sensibilidade e comprometimento do nosso trabalho.\n\nBuscamos constantemente evoluir para oferecer toda a excelência que momentos tão divinos merecem, sempre com extrema humanização, respeito e entrega.\n\nNossa história também ultrapassou fronteiras, sendo reconhecida por importantes premiações internacionais, como Outstanding Maternity Award e Family Photojournalist Association. Além disso, tivemos o privilégio de registrar o nascimento dos filhos de diversas personalidades conhecidas, tornando-nos parte de histórias únicas e inesquecíveis.\n\nQuer saber mais? Entre em contato conosco e eternize o dia mais lindo de sua vida - O nascimento de um filho.`
      },
      highlights: ["Humanização", "Respeito", "Entrega"],
      packages: [
        { name: "Bronze", details: ["Todas as fotos do nascimento e cuidados do bebê", "Entregues editadas via link"] },
        { name: "Prata", details: ["Todas as fotos do nascimento e cuidados", "Entregues editadas via link", "Vídeo do parto", "30 fotos reveladas 10x15"] },
          { name: "Ouro", details: ["Todas as fotos do nascimento e cuidados", "Entregues editadas via link", "Vídeo do parto", "ÁLBUM FOTOGRÁFICO - Papel fotográfico Profissional, Fujifilm Crystal Archive, Laminação Verniz UV Fosco, Capa, Fotográfia com laminação poliéster, Estrutura em Papel Hole 10 Páginas/5 lâminas gramatura 800gr/m2 abertura 180º 21x21"] },
        { name: "Rubi", details: ["Ensaio Gestante realizado no estúdio (com opção externo também)", "20 fotos editadas entregues via link", "Todas as fotos do nascimento e cuidado do bebê", "Video do parto"]},
        { name: "Diamante", details: ["Ensaio Gestante realizado no estúdio (com opção externo também)", "20 fotos editadas entregues via link", "Todas as fotos do nascimento e cuidado do bebê", "Video do parto", "ÁLBUM FOTOGRÁFICO - Papel fotográfico Profissional, Fujifilm Crystal Archive, Laminação Verniz UV Fosco, Capa, Fotográfia com laminação poliéster, Estrutura em Papel Hole 10 Páginas/5 lâminas gramatura 800gr/m2 abertura 180º 21x21"] }
      ],
      extraServices: {
        title: "Serviços Adicionais (Opcionais)",
        items: [
          { name: "Ensaio Boas Vindas", detail: "Realizado no quarto da maternidade. Ideal para registros de irmãos, familiares e decoração." },
          { name: "Flash", detail: "Entrega de 20 fotos ainda nas primeiras 24h para anúncio do nascimento." },
          { name: "Doula | Consultoria Cesárea", detail: "Consulta pré-natal, acompanhamento no parto/golden hour e pós-parto." },
          { name: "Doula + Enfermeira | Normal", detail: "Acompanhamento em casa antes do hospital com enfermeira inclusa." },
          { name: "Taping", detail: "Aplicação de taping gestacional ou pós-parto." },
          { name: "Colocação do primeiro brinquinho da bebê", detail: "Furo humanizado realizado por profissional especializada." },
          { name: "Filmagem Avulsa", detail: "Vídeo personalizado dos melhores momentos do nascimento." }
        ]
      },
      faq: [
        { 
          q: "Qual a diferença de valores para parto normal?", 
          a: "Não há diferença de valores. Nosso compromisso é com o registro emocional, independentemente da via de parto. Vale ressaltar que trabalhamos em sistema de sobreaviso 24 horas, com uma equipe composta por quatro fotógrafas. Por essa razão, é imprescindível realizar sua reserva com antecedência para garantir a disponibilidade." 
        },
        { 
          q: "Há mais algum valor além do pacote?", 
          a: <>A taxa de maternidade não está inclusa nos pacotes e é <strong>cobrada somente em maternidades da UNIMED</strong>.</> 
        },
        { 
          q: "Quais maternidades atendemos?", 
          a: "Hospital Santa Luiza Unimed (Balneário Camboriú), Hospital Marieta Konder Bornhausen (Itajaí), Hospital Municipal Ruth Cardoso (Balneário Camboriú), Hospital Nossa Senhora dos Navegantes (Navegantes), Hospital Santo Antônio (Itapema), Hospital Imigrantes (Brusque), Hospital Azambuja (Brusque), Hospital Santo Antônio (Blumenau) e Hospital Santa Catarina Unimed (Blumenau)." 
        },
        { 
          q: "Qual a forma de pagamento?", 
          a: "O pagamento pode ser realizado via Pix ou parcelado no cartão de crédito em até 12x." 
        }
      ],
      destaque: fotoTamires,
      images: [
        parto1,
        parto2,
        parto3,
        parto4,
        parto5,
        gestante2,
        equipe1,
        equipe2,
        equipe3,
        equipe4,
        equipe5
      ]
    },
    {
      title: "Newborn", 
      icon: <Baby className="w-5 h-5" />, 
      desc: "Fotografar recém-nascidos é algo especial e único. Imagens atemporais que refletem a pureza.",
      whatsapp: "5547991322923",
      hero: {
        headline: "Fotografar recém-nascidos é algo especial e único.",
        subheadline: "Busco criar imagens atemporais que reflitam amor, ternura e a pureza dessa fase tão breve e inesquecível."
      },
      about: {
        title: "Nossa Essência",
        text: "Trabalhamos com uma fotografia leve, sensível e atemporal. Meu estilo une o clássico posado, com toda a delicadeza e cuidado que ele exige, a momentos naturais e sensíveis. Nosso maior objetivo é capturar a essência do bebê e a conexão com sua família. Acredito que cada detalhe importa: as mãozinhas pequenas, os sorrisos espontâneos e até aquele jeitinho de se aconchegar."
      },
      highlights: ["Leve", "Sensível", "Atemporal"],
      packages: [
        { name: "1 - A Experiência Completa", details: ["35 fotos digitais", "Fotos enroladinho e no puff", "Acessórios inclusos", "Fotos com pais, irmãos e avós", "Álbum fotolivro 20x20 premium"] },
        { name: "2 - O Intermediário", details: ["20 fotos digitais e reveladas 10x15", "Fotos enroladinho e no puff", "Acessórios inclusos", "Fotos com pais e irmãos"] },
        { name: "3 - O Essencial", details: ["10 fotos digitais", "Fotos enroladinho e no puff", "Acessórios inclusos", "Observação: Não inclui fotos com pais"] }
      ],
      images: [
        new6,
        new7,
        new8,
        new9,
        new10,
        new11,
        new12,
        new13,
        new14,
        new15,
        new16
      ]
    },
    { 
      title: "Acompanhamento", 
      icon: <Calendar className="w-5 h-5" />, 
      desc: "Acompanhamento mensal do bebê no estúdio, de 1 a 12 meses. Registros minimalistas do crescimento.",
      whatsapp: "5547991322923",
      hero: {
        headline: "Acompanhamento Mensal de 1 a 12 Meses",
        subheadline: "Eternizando cada fase do primeiro ano de vida do seu bebê com registros minimalistas e repletos de amor."
      },
      about: {
        title: "Sobre o Acompanhamento",
        text: "Nossos pacotes foram criados com muito carinho, pensando em cada detalhe desse momento singular. Realizamos ensaios minimalistas, com duração média de 40 minutos, focados na essência do seu bebê.\n\nProcesso de entrega:\n- Até 5 dias úteis: Envio da pré-seleção online.\n- Até 3 dias úteis após a seleção: Envio das fotos com a edição final.\n\n*Cada foto extra selecionada além do pacote contratado tem o custo de R$ 10,00."
      },
      highlights: ["Minimalista", "Estúdio", "1 a 12 meses"],
      packages: [
        { name: "Bronze", details: ["Sessão fotográfica", "15 fotos digitais", "Fotos exclusivas do bebê"] },
        { name: "Prata", details: ["Sessão fotográfica", "25 fotos digitais", "Fotos com os pais inclusas"] },
        { name: "Ouro", details: ["Sessão fotográfica", "Todas as fotos digitais", "Fotos com os pais inclusas"] },
        { name: "Diamante (12 meses)", details: ["Pacote especial de 1 ano", "12 sessões fotográficas completas", "Todas as fotos digitais entregues", "Fotos com os pais"] }
      ],
      extraServices: {
        title: "Produtos Físicos",
        items: [
          { name: "Álbum Classic", detail: "Capa fotográfica, laminação UV, papel Fuji, gramatura 830g." },
          { name: "Porta-Retratos", detail: "Revelação em papel fotográfico aplicado sobre painel de MDF." },
          { name: "Álbum Sanfonado", detail: "Capa e contracapa 9,5x9,5cm com 12 páginas internas." }
        ]
      },
      images: [
        acom1
      ]
    },
    { 
      title: "Smash the Cake", 
      icon: <Sparkles className="w-5 h-5" />, 
      desc: "Smash the Cake and Fruit. Capturando a alegria do primeiro aninho!",
      whatsapp: "5547991322923",
      hero: {
        headline: "Smash the Cake and Fruit",
        subheadline: "Capturando a alegria do primeiro aninho!"
      },
      about: {
        title: "Sobre a Sessão",
        text: "O primeiro aniversário é um marco importante e nada celebra melhor do que uma sessão de Smash the Cake. Dividimos nossa experiência em 3 passos: 1) Briefing para entender temas e cores; 2) Alinhamento sobre Bolo ou Frutas (Smash the Fruit) com indicação de parceiros especializados; 3) O dia do ensaio, focado em capturar expressões naturais e autênticas."
      },
      highlights: ["Lúdico", "Divertido", "Inesquecível"],
      packages: [
        { name: "Clean", details: ["Fundo clean minimalista", "Suporte para bolo ou fruta", "20 fotos digitais", "Não inclui bolo/fruta"] },
        { name: "Fruit", details: ["Arco de balão desconstruído", "Letreiro Led 'One'", "20 fotos digitais", "Não inclui frutas"] },
        { name: "Gold", details: ["Cenário com tema escolhido", "Arco de balão e props", "Letreiro Led 'One'", "20 fotos digitais"] },
        { name: "Premium (Completa)", details: ["Cenário temático completo", "Fotos com banheira", "Fotos com a família", "25 fotos digitais"] },
        { name: "Combo (Smash + Festa)", details: ["Pacote Premium completo", "Cobertura de 2h do evento", "Todas as fotos da festa", "Opção de Álbum 20x30"] }
      ],
      extraServices: {
        title: "Extras e Foto-Produtos",
        items: [
          { name: "Fotos Digitais", detail: "Unidades extras além do pacote." },
          { name: "Revelações", detail: "Impressões nos tamanhos 10x15 ou 15x21." },
          { name: "Álbuns", detail: "Fotolivros 20x20 ou Álbuns Premium 25x30." },
          { name: "Decoração", detail: "Quadros, banners e foto-produtos personalizados." }
        ]
      },
      faq: [
        { q: "Qual a forma de pagamento?", a: "50% na reserva e restante no dia. Parcelamento em até 12x no cartão." },
        { q: "Qual o prazo de entrega?", a: "Fotos digitais entregues em até 7 dias úteis fotos do ensaio." },
        { q: "O que levar no dia?", a: "Roupinha para as fotos, toalha e uma troca de roupa extra para o bebê." }
      ],
      images: [
        cake1,
        cake2,
        cake3,
        cake4,
        cake5,
        cake6
      ]
    },
    { 
      title: "Eventos", 
      icon: <Star className="w-5 h-5" />, 
      desc: "Cobertura de Eventos. 'Se você não acha que as fotos são importantes, espere até que seja tudo o que resta.'",
      whatsapp: "5547991322923",
      hero: {
        headline: "Cobertura de Eventos",
        subheadline: "A fotografia é o que ficará com você depois que o dia terminar."
      },
      about: {
        title: "Como funciona a nossa cobertura",
        text: "Nossa cobertura é flexível, baseada no valor por hora contratada (mínimo de 2h). Todas as fotos passam por uma curadoria rigorosa e tratamento de luz, cor e corte. Para acalmar a curiosidade, enviamos prévias no mesmo dia! A entrega final acontece em até 10 dias úteis. Atendemos BC, Itajaí e Camboriú."
      },
      highlights: ["Espontâneo", "Documental", "Ágil"],
      packages: [
        { name: "Sessão por Hora", details: ["Mínimo de 2h de cobertura", "Curadoria rigorosa inclusa", "Edição completa de luz e cor", "Prévias no mesmo dia", "Entrega final em 10 dias úteis"] },
        { 
          name: "Casamento Civil", 
          details: [
            "Valor: R$ 450,00",
            "Cobertura completa cartório",
            "Foto na igreja/cartório, cerimônia e convidados",
            "Edição cor, luz e enquadramento",
            "Todas as fotos entregues",
            "Adicional de recepção (até 1h): R$ 300,00"
          ] 
        },
        { 
          name: "Batizado", 
          details: [
            "Valor: R$ 600,00",
            "Foto na igreja, cerimônia e convidados",
            "Edição cor, luz e enquadramento",
            "Todas as fotos entregues",
            "Com recepção (até 1h): R$ 750,00"
          ] 
        }
      ],
      extraServices: {
        title: "Eternize em Outros Formatos",
        items: [
          { name: "Mini Vídeo (Reels)", detail: "Filmado com celular, profissional exclusivo, edição em 24h (1-2min)." },
          { name: "Álbum Fotolivro", detail: "10 páginas, até 20 fotos diagramadas, acompanha luva personalizada." }
        ]
      },
      faq: [
        { q: "Quais cidades atendem?", a: "Valores válidos para Balneário Camboriú, Itajaí e Camboriú." },
        { q: "Como funciona o pagamento?", a: "O valor da proposta deverá ser quitado até 1 dia antes do evento." }
      ],
      images: [
        eventos6,
        eventos7,
        eventos8,
        eventos9,
        eventos10,
        eventos11,
        eventos12,
        eventos13,
        eventos14,
        eventos15,
        eventos16
      ]
    },
    { 
      title: "Corporativo", 
      icon: <Camera className="w-5 h-5" />, 
      desc: "Corporativo Ver Crescer Fotografias. Posicionamento de imagem e autoridade.",
      whatsapp: "5547991322923",
      hero: {
        headline: "Corporativo Ver Crescer Fotografias",
        subheadline: "Portfólio"
      },
      about: {
        title: "Destaque sua Autoridade",
        text: "O objetivo aqui é transmitir a imagem de profissionalismo e autoridade logo de cara. Realizamos ensaios focados no seu posicionamento de imagem para profissionais e marcas que desejam elevar seu patamar visual."
      },
      highlights: ["Autoridade", "Profissional", "Impacto"],
      packages: [
        { name: "Estúdio", details: ["10 fotos digitais", "1hr de sessão", "Fotos realizadas no nosso estúdio"] },
        { name: "Externo", details: ["10 fotos digitais", "Até 2h de ensaio", "Local de sua escolha ou espaço profissional", "Verificar cidades atendidas"] }
      ],
      images: []
    },
    { 
      title: "Aluguel de Estúdio", 
      icon: <Layout className="w-5 h-5" />, 
      desc: "Espaço amplo, climatizado e equipado para realizar suas produções com qualidade profissional.",
      whatsapp: "5547991322923",
      hero: {
        headline: "Aluguel de Estúdio Profissional",
        subheadline: "O suporte ideal para fotógrafos, videógrafos e criadores de conteúdo."
      },
      about: {
        title: "Sobre este serviço",
        text: "Nosso estúdio profissional está disponível para locação por hora ou diária. Um espaço de 80m², climatizado e totalmente equipado para produções de alto nível. Oferecemos múltiplos cenários, suporte técnico e a infraestrutura necessária para marcas e profissionais que buscam excelência."
      },
      highlights: ["Equipado", "Amplo", "Flexível"],
      packages: [
        { 
          name: "Valores de Locação", 
          details: [
            "R$ 75,00 — a hora",
            "R$ 250,00 — 4 horas",
            "R$ 500,00 — 8 horas",
            "Descontos para locações recorrentes"
          ] 
        },
        { 
          name: "O que está incluso", 
          details: [
            "Equipamentos de iluminação Godox", 
            "Múltiplos cenários e fundos", 
            "Horários flexíveis (inclui finais de semana)", 
            "Suporte técnico disponível"
          ] 
        }
      ],
      extraServices: {
        title: "Diferenciais e Localização",
        items: [
          { name: "Localização Privilegiada", detail: "Estúdio bem localizado com padaria logo abaixo (em horário comercial) e fácil acesso." },
          { name: "Comodidade e Segurança", detail: "Estacionamento próprio no local e portaria com vigilância 24 horas." },
          { name: "Infraestrutura", detail: "Cenários fixos como quarto newborn, branco infinity." },
          { name: "Ideal Para", detail: "Fotógrafos, YouTubers, influenciadores e e-commerces (fotos de produto)." }
        ]
      },
      faq: [
        { q: "Quais os cenários disponíveis?", a: "Quarto newborn, fundo branco infinity." },
        { q: "Precisa levar iluminação?", a: "Não, iluminação Godox profissional já está inclusa no valor da locação." }
      ],
      images: []
    }
  ];

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-[#f9fbf9] text-stone-900 leading-relaxed font-sans overflow-x-hidden w-full">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-emerald-100/30 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {activeService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-md"
              onClick={() => setActiveService(null)}
            />
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-7xl h-auto max-h-[92vh] md:max-h-[95vh] bg-white rounded-[24px] sm:rounded-[40px] shadow-2xl overflow-y-auto overflow-x-hidden scroll-smooth"
            >
              <div className="p-5 sm:p-8 md:p-16">
                <button 
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-100 flex items-center justify-center hover:bg-emerald-100 transition-colors z-10 shadow-sm"
                >
                  <X className="text-stone-900 w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Cabeçalho do Modal */}
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-start mb-8 md:mb-16 pr-12 md:pr-0 w-full">
                   <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] sm:rounded-[32px] bg-emerald-900 text-white flex items-center justify-center shrink-0">
                     {activeService.icon}
                   </div>
                   <div className="space-y-3 sm:space-y-4 w-full min-w-0">
                     <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[10px] font-bold tracking-widest uppercase text-emerald-700">
                        Serviço Especializado
                     </div>
                     <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif tracking-tighter leading-tight break-words w-full">{activeService.title}</h2>
                     {activeService.hero ? (
                       <p className="text-base sm:text-xl md:text-2xl font-serif text-stone-900 italic opacity-80 max-w-3xl leading-snug break-words w-full">{activeService.hero.headline} {activeService.hero.subheadline}</p>
                     ) : (
                       <p className="opacity-50 font-light max-w-lg leading-relaxed text-sm sm:text-base break-words w-full">{activeService.desc}</p>
                     )}
                   </div>
                </div>

                {/* Área Principal: Informações na esquerda, Carrossel na direita */}
                <div className={`mb-12 md:mb-20 grid ${activeService.images && activeService.images.length > 0 ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-8 lg:gap-16 items-start w-full`}>
                  
                  {/* Coluna 1: Textos, Pacotes e Info */}
                  <div className="space-y-10 sm:space-y-12 order-2 lg:order-1 w-full min-w-0">
                    
                    {/* Sobre */}
                    {activeService.about && (
                      <div className="p-6 sm:p-8 md:p-10 bg-emerald-50/50 rounded-[24px] sm:rounded-[40px] w-full">
                        <h3 className="text-xl sm:text-2xl font-serif mb-4 break-words">{activeService.about.title}</h3>
                        <p className="opacity-70 leading-relaxed whitespace-pre-line text-sm sm:text-base break-words">{activeService.about.text}</p>
                        
                        {activeService.highlights && (
                          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                            {activeService.highlights.map((hlt: string, i: number) => (
                              <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-900 shadow-sm border border-emerald-900/5">
                                {hlt}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Pacotes */}
                    {activeService.packages && (
                      <div className="w-full">
                        <h3 className="text-2xl sm:text-3xl font-serif mb-6 sm:mb-8">Nossos Pacotes</h3>
                        <div className="grid gap-4 w-full">
                          {activeService.packages.map((pkg: any, i: number) => (
                            <div key={i} className="p-5 sm:p-6 md:p-8 bg-white border border-stone-100 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-shadow w-full">
                              <h4 className="text-lg sm:text-xl font-bold mb-4 text-emerald-950 break-words">{pkg.name}</h4>
                              <ul className="space-y-3 sm:space-y-4 w-full">
                                {pkg.details.map((detail: string, j: number) => (
                                  <li key={j} className="flex items-start gap-2.5 sm:gap-3 opacity-70 text-xs sm:text-sm w-full">
                                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <span className="flex-1 break-words leading-relaxed">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Serviços Adicionais */}
                    {activeService.extraServices && (
                      <div className="w-full">
                        <h3 className="text-xl sm:text-2xl font-serif mb-6">{activeService.extraServices.title}</h3>
                        <div className="grid gap-3 sm:gap-4 w-full">
                          {activeService.extraServices.items.map((item: any, i: number) => (
                            <div key={i} className="p-4 sm:p-5 bg-stone-50 rounded-xl sm:rounded-2xl w-full">
                              <h4 className="font-bold text-stone-900 text-sm sm:text-base mb-1 break-words">{item.name}</h4>
                              <p className="text-xs sm:text-sm opacity-60 break-words">{item.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FAQ */}
                    {activeService.faq && (
                      <div className="w-full">
                        <h3 className="text-xl sm:text-2xl font-serif mb-6">Dúvidas Frequentes</h3>
                        <div className="space-y-3 sm:space-y-4 w-full">
                          {activeService.faq.map((item: any, i: number) => (
                            <div key={i} className="p-5 sm:p-6 border border-stone-200 rounded-2xl sm:rounded-3xl w-full">
                               <p className="font-bold text-sm sm:text-base mb-2 text-stone-900 break-words">{item.q}</p>
                               <p className="opacity-60 text-xs sm:text-sm leading-relaxed break-words">{item.a}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Coluna 2: Carrossel */}
                  {activeService.images && activeService.images.length > 0 && (
                    <div className="lg:sticky top-8 space-y-4 order-1 lg:order-2 w-full min-w-0">
                      <div className="relative rounded-[24px] sm:rounded-[40px] overflow-hidden bg-stone-100 aspect-[4/5] shadow-xl w-full">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={carouselIndex}
                            src={activeService.images[carouselIndex]}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            alt={`${activeService.title} - foto ${carouselIndex + 1}`}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => setFotoAmpliada(activeService.images[carouselIndex])}
                          />
                        </AnimatePresence>

                        {activeService.images.length > 1 && (
                          <>
                            <button
                              onClick={() =>
                                setCarouselIndex((prev: number) =>
                                  (prev - 1 + activeService.images.length) % activeService.images.length
                                )
                              }
                              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                            >
                              <ChevronLeft className="text-stone-900 w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            <button
                              onClick={() =>
                                setCarouselIndex((prev: number) => (prev + 1) % activeService.images.length)
                              }
                              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                            >
                              <ChevronRight className="text-stone-900 w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                              {activeService.images.map((_: string, i: number) => (
                                <button
                                  key={i}
                                  onClick={() => setCarouselIndex(i)}
                                  className={`h-1.5 sm:h-2 rounded-full transition-all shadow-sm ${
                                    i === carouselIndex ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/60 hover:bg-white'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Miniaturas do Carrossel */}
                      {activeService.images.length > 1 && (
                        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 pt-2 snap-x w-full custom-scrollbar">
                          {activeService.images.map((img: string, i: number) => (
                            <button
                              key={i}
                              onClick={() => setCarouselIndex(i)}
                              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all snap-start ${
                                i === carouselIndex ? 'border-emerald-900 scale-95 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
                              }`}
                            >
                              <img src={img} referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover" alt="" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Chamada para Ação no Final do Modal */}
                <div className="p-6 sm:p-12 md:p-20 bg-emerald-950 text-white rounded-[24px] sm:rounded-[60px] text-center space-y-6 sm:space-y-8 relative overflow-hidden w-full">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />
                   <h4 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight break-words">Vamos eternizar<br/> esse momento?</h4>
                   <p className="opacity-60 max-w-md mx-auto font-light text-sm sm:text-base break-words">Cada clique é único e cheio de significado. Agende sua data hoje mesmo.</p>
                   <div className="pt-2 sm:pt-4 w-full">
                      <a 
                        href={`https://wa.me/${activeService.whatsapp || '5547991322923'}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-4 py-4 sm:px-12 sm:py-6 rounded-2xl sm:rounded-3xl bg-white text-emerald-950 font-bold text-sm sm:text-xl flex flex-wrap sm:inline-flex items-center justify-center gap-2 sm:gap-4 hover:scale-105 active:scale-95 transition-transform text-center shadow-xl"
                      >
                         <span className="break-words">Reserve sua data prevista</span> <MessageCircle size={22} className="shrink-0" />
                      </a>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox da Foto Ampliada */}
      <AnimatePresence>
        {fotoAmpliada && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setFotoAmpliada(null)}
          >
            <button 
              onClick={() => setFotoAmpliada(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-colors z-10"
            >
              <X size={36} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={fotoAmpliada} 
              alt="Foto Ampliada" 
              className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-2 sm:py-3 shadow-xl shadow-black/5' : 'bg-transparent py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center w-full">
          <div className="flex items-center gap-4 group cursor-pointer text-stone-900">
            <div className="h-12 sm:h-16 md:h-20 w-auto min-w-[110px] sm:min-w-[180px] md:min-w-[220px] max-w-[140px] sm:max-w-none rounded-xl overflow-hidden transition-all group-hover:scale-105 flex items-center justify-center p-1.5 sm:p-2 bg-white/40 backdrop-blur-sm">
              <img src="/logo.png" alt="Ver Crescer Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['Estúdio', 'Depoimentos', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold tracking-wide opacity-60 hover:opacity-100 transition-all hover:translate-y-[-1px] text-stone-900">{item}</a>
            ))}
            <a href="https://www.instagram.com/vercrescerfotografia/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-emerald-50 transition-colors text-stone-900 opacity-60 hover:opacity-100"><Instagram size={20} /></a>
            <a href="https://wa.me/5547991322923" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full bg-emerald-900 text-white text-sm font-bold shadow-xl hover:bg-emerald-800 transition-all transform active:scale-95">Agendar Ensaio</a>
          </div>
          <button className="md:hidden text-stone-900 p-2 shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden glass border-t border-black/5 px-6 py-6 flex flex-col gap-5 text-stone-900 shadow-2xl w-full">
            {['Estúdio', 'Depoimentos', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
            <div className="flex items-center gap-6 py-2 border-t border-black/5 w-full">
              <a href="https://www.instagram.com/vercrescerfotografia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-900 font-medium"><Instagram size={20} /><span>Instagram</span></a>
            </div>
            <a href="https://wa.me/5547991322923" target="_blank" rel="noreferrer" className="w-full py-4 rounded-2xl bg-emerald-900 text-white font-bold text-center active:scale-95 shadow-md">Agendar Ensaio</a>
          </motion.div>
        )}
      </nav>

      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto text-center relative z-10 text-stone-900 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-black/5 bg-black/5 backdrop-blur-md text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-10 text-stone-600 break-words"><Sparkles size={12} className="shrink-0" /> Eternizando Momentos Especiais</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter mb-6 md:mb-10 leading-[0.9] text-stone-900 break-words w-full">Cada momento, <br /> <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-stone-500 to-stone-900">uma história.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl opacity-60 font-light mb-10 sm:mb-14 leading-relaxed tracking-tight px-2 break-words w-full">No Estúdio VerCrescer, entregamos dedicação em cada clique. Capturamos a essência da sua família e a força da sua marca.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 px-4 sm:px-0 w-full">
            <a href="https://wa.me/5547991322923" target="_blank" rel="noreferrer" className="group w-full sm:w-auto px-8 py-5 sm:px-12 sm:py-6 rounded-2xl bg-emerald-900 text-white font-bold flex items-center justify-center gap-3 sm:gap-4 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-emerald-900/20 transition-all text-lg sm:text-xl active:scale-95 text-center break-words">Falar no WhatsApp <MessageCircle size={22} className="transition-transform group-hover:scale-110 shrink-0" /></a>
          </motion.div>
        </div>
      </section>

      <a href="https://wa.me/5547991322923" target="_blank" rel="noreferrer" className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[90] w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow" aria-label="Contact on WhatsApp"><MessageCircle size={28} className="sm:w-8 sm:h-8" fill="currentColor" /></a>

      <section className="py-8 sm:py-10 border-y border-emerald-900/5 overflow-hidden whitespace-nowrap bg-emerald-50/30 w-full">
        <div className="flex animate-scroll gap-12 sm:gap-20">
          {[...services, ...services].map((s, i) => (
            <div key={i} className="flex items-center gap-2.5 sm:gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-default text-stone-900">
              <span className="text-stone-600">{s.icon}</span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.1em] uppercase">{s.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="estúdio" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-emerald-50/50 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-20 md:mb-24 max-w-2xl mx-auto w-full">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-8 tracking-tighter break-words">Nossas Especialidades</h2>
            <p className="opacity-60 text-base sm:text-lg font-light px-2 break-words">Desde o primeiro batimento até o primeiro aninho, cada fase merece um olhar único.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {services.map((service, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} onClick={() => setActiveService(service)} className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white border border-black/5 shadow-sm transition-all group cursor-pointer hover:shadow-xl hover:border-stone-200 flex flex-col justify-between w-full">
                <div className="w-full">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/50 flex items-center justify-center mb-6 text-emerald-700/50 group-hover:bg-emerald-900 group-hover:text-white transition-all shrink-0">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-tight break-words">{service.title}</h3>
                  <p className="opacity-50 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 break-words">{service.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 group-hover:text-emerald-900 transition-all shrink-0">Ver Detalhes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white w-full">
        <div className="max-w-7xl mx-auto text-stone-900 w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-12 sm:mb-20 text-center tracking-tighter break-words w-full">O que dizem sobre nós</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            {[
              { name: "Raquel", role: "", text: "Nossa experiência com a Ver Crescer tem sido especial desde os primeiros meses da Analua. Cada mesversário e ensaio foi marcado por fotinhos muito lindas e do jeitinho que sempre sonhamos, com um cenário mais clean, a nossa cara. Sempre nos sentimos acolhidos pela equipe, que tem uma sensibilidade incrível para lidar com os bebês e transformar cada fase em uma lembrança única. Muito obrigada sempre por toda atenção com a nossa família." },
              { name: "Fernanda", role: "", text: "Aproveitando o oportunidade, queria te agradecer mais uma vez por tudo, cada palavra, cada massagem, cada conselho, você estava ali com a gente 1000%, se doou totalmente pra viver aquele momento… você foi além do profissional, super humana, atenciosa, preocupada o tempo todo com a gente, com nosso bem estar, foi muito além da fotografia! Que Deus abençoe sempre sua vida, você é maravilhosaaaaaaaa, e vou eternamente grata" },
              { name: "Bianca", role: "", text: "Antes de fazer meu primeiro ensaio, eu achava que era só sobre ter fotos bonitas. Hoje, vejo que é sobre guardar fases da vida que nunca mais voltam… Depois que tive minhas filhas, isso fez ainda mais sentido para mim, o parto foi um dos dias mais marcantes da minha vida e, no meio de tantas emoções, existem detalhes que a gente acaba nem conseguindo absorver e poder olhar as fotos/videos e reviver aquele momento é algo que eu nunca imaginei que teria tanto valor. Lembro até hoje do meu nervosismo naquela madrugada do parto e foi a primeira vez que eu vi a Thami, nem se conhecíamos e ela foi a pessoa mais importante naquele momento, que esteve comigo todo tempo e me acalmou até mais que o médico e enfermeiras kkkk, nunca vou esquecer disso e de tudo oq ela fez por nós. Existem momentos que passam em questão de horas mas mudam a nossa vida pra sempre, ter tudo registrado me permite reviver cada detalhe que eu jamais conseguiria lembrar com a mesma intensidade… Sem contar que hoje posso mostrar todos os registros pras minhas filhas que ficam encantadas vendo elas nascendo, nos ensaios bebezinhas, aniversários… a Ver Crescer faz parte da nossa vida, dos momentos mais lindos e inesquecíveis que já vivemos, sou muuito grata por isso! confesso que fico ansiosa pra engravidar novamente e poder reviver todos esses registros com vocês. Vocês já são nossa família e eu jamais trocaria o trabalho impecável de vocês que sempre me entregaram além e com tanta excelência, quero que acompanhem todas as fases porque esses momentos passam muito rápido mas essas memórias registradas ficam pra sempre!" }
            ].map((dep, i) => (
              <div key={i} className="bg-emerald-50/30 p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] border border-emerald-900/5 relative shadow-sm flex flex-col justify-between w-full">
                <div className="w-full">
                  <div className="flex gap-1 text-emerald-600 mb-4 sm:mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                  <p className="italic opacity-70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed break-words w-full">"{dep.text}"</p>
                </div>
                <div className="w-full"><p className="font-bold text-base sm:text-lg break-words">{dep.name}</p><p className="text-[10px] sm:text-xs font-bold uppercase opacity-40 tracking-widest leading-none mt-1 break-words">{dep.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 mb-10 sm:mb-20 w-full">
        <div className="max-w-5xl mx-auto bg-emerald-950 text-white rounded-[32px] sm:rounded-[48px] md:rounded-[60px] p-8 sm:p-14 md:p-24 text-center relative overflow-hidden shadow-2xl w-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] -z-10 rounded-full" />
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-8 tracking-tighter break-words">Vamos conversar?</h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl opacity-70 mb-8 sm:mb-12 font-light px-2 break-words">Todo grande momento merece ser registrado com perfeição. Clique abaixo e tire suas dúvidas.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
            <a href="https://wa.me/5547991322923" className="w-full md:w-auto px-8 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-3xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-lg sm:text-xl flex items-center justify-center gap-3 sm:gap-4 transition-all shadow-2xl hover:scale-105 active:scale-95 text-center break-words"><MessageCircle size={24} className="shrink-0" /> Fale com a Maria</a>
            <div className="flex flex-col items-center gap-1 opacity-60 w-full">
               <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase break-words w-full"><MapPin size={16} className="shrink-0" /> Balneário Camboriú, SC</div>
               <p className="text-[10px] font-bold tracking-tighter opacity-100 break-words w-full text-center">Trade Park | Sala 204 | KM 131</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 sm:py-20 px-4 sm:px-6 border-t border-emerald-900/5 bg-[#f5fbf5] w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12 text-center md:text-left text-stone-900 w-full">
          <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-auto">
            <div className="flex items-center gap-4 justify-center md:justify-start group cursor-pointer w-full md:w-auto">
              <div className="h-14 sm:h-16 w-auto min-w-[140px] sm:min-w-[180px] rounded-lg overflow-hidden bg-white/40 flex items-center justify-center p-1.5 sm:p-2 transition-transform group-hover:scale-105">
                <img src="/logo.png" alt="Logo" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="text-xs opacity-50 max-w-xs font-light leading-relaxed break-words w-full">Eternizando momentos no Estúdio ou em Maternidades de Blumenau, Brusque, Itajaí e Balneário Camboriú.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-10 text-[9px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest uppercase opacity-40 w-full md:w-auto">
            <a href="https://www.instagram.com/vercrescerfotografia/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors flex items-center gap-2"><Instagram className="w-3 h-3 shrink-0" /> Instagram</a>
            <a href="mailto:vercrescerfotografia@gmail.com" className="hover:text-stone-900 transition-colors uppercase">E-mail</a>
          </div>
          <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
            <p className="text-[10px] font-bold opacity-30 tracking-wider sm:tracking-widest uppercase mb-1 break-words">© 2026 VERCRESCER FOTOGRAFIAS</p>
            <p className="text-[9px] sm:text-[10px] font-mono opacity-10 break-words">DISPONÍVEL 24H PARA EMERGÊNCIAS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
