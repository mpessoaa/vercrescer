import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Baby, 
  Camera, 
  Heart, 
  Sparkles, 
  Instagram, 
  Layout, 
  Smartphone, 
  Target, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Calendar,
  User,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Importações atualizadas EXATAMENTE de acordo com a sua pasta na imagem
import gestante1 from './assets/images/gestante1.png';
import gestante2 from './assets/images/gestante2.png';
import gestante3 from './assets/images/gestante3.png';
import gestante4 from './assets/images/gestante4.png';
import gestante5 from './assets/images/gestante5.png';

import new1 from './assets/images/new1B.png';
import new2 from './assets/images/new2B.png';
import new3 from './assets/images/new3B.png';
import new4 from './assets/images/newB4.png';
import new5 from './assets/images/new5B.png';

import acom1 from './assets/images/acom1.jpg';
import acom2 from './assets/images/acom2.jpg';
import acom3 from './assets/images/acom3.jpg';
import acom4 from './assets/images/acom4.jpg';
import acom5 from './assets/images/acom5.jpg';

import equipe1 from './assets/images/equipe1.png';
import equipe2 from './assets/images/equipe2.png';
import equipe3 from './assets/images/equipe3.png';
import equipe4 from './assets/images/equipe4.png';
import equipe5 from './assets/images/equipe5.png';

import parto1 from './assets/images/parto1.png'; // Se for PNG, lembre de mudar aqui para .png!
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

import eventos1 from './assets/images/eventos1.png'; // Se for PNG, lembre de mudar aqui para .png!
import eventos2 from './assets/images/eventos2.png';
import eventos3 from './assets/images/eventos3.png';
import eventos4 from './assets/images/eventos4.png';
import eventos5 from './assets/images/eventos5.png';

import fotoFernanda from './assets/images/fernanda.png';
import fotoTamires from './assets/images/tamires.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState<any>(null);
  const [fotoAmpliada, setFotoAmpliada] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
      // Gestante 5 removida daqui
      destaque: fotoFernanda,
      images: [
        gestante1,
        gestante2,
        gestante3,
        gestante4,
        gestante5
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
        text: `Somos a primeira equipe especializada em fotografia e filmagem da região — e isso transforma completamente a experiência das famílias que confiam em nós. Trabalhar em equipe significa oferecer mais segurança, suporte e tranquilidade: sempre haverá uma profissional disponível para te atender, garantindo que esse momento tão único seja registrado com todo o cuidado que merece. Aqui, você jamais ficará sem seus registros.

Toda a nossa equipe de fotógrafas possui também formação como doulas, permitindo um olhar muito mais sensível e profundo sobre cada etapa do nascimento. Mais do que registrar imagens, entendemos os processos, respeitamos o tempo de cada família e acolhemos cada momento com empatia, conhecimento e presença.

Há 10 anos acompanhando histórias inesquecíveis, já tivemos a honra de registrar mais de 1.500 partos, eternizando encontros que transformam vidas. Ao longo dessa trajetória, conquistamos a confiança de centenas de famílias e também o reconhecimento de profissionais da saúde, sendo frequentemente indicadas pelos próprios médicos pela excelência, sensibilidade e comprometimento do nosso trabalho.

Buscamos constantemente evoluir para oferecer toda a excelência que momentos tão divinos merecem, sempre com extrema humanização, respeito e entrega.

Nossa história também ultrapassou fronteiras, sendo reconhecida por importantes premiações internacionais, como Outstanding Maternity Award e Family Photojournalist Association. Além disso, tivemos o privilégio de registrar o nascimento dos filhos de diversas personalidades conhecidas, tornando-nos parte de histórias únicas e inesquecíveis.

Quer saber mais? Entre em contato conosco e eternize o dia mais lindo de sua vida - O nascimento de um filho.`
      },
      highlights: ["Humanização", "Respeito", "Entrega"],
      packages: [
        { name: "Bronze", details: ["Todas as fotos do nascimento e cuidados do bebê", "Entregues editadas via link"] },
        { name: "Prata", details: ["Todas as fotos do nascimento e cuidados", "Vídeo do parto"] },
        { name: "Ouro", details: ["Todas as fotos do nascimento e cuidados", "Vídeo do parto"] },
        { name: "Rubi", details: ["Ensaio Gestante", "Fotografia e Vídeo do Parto"] },
        { name: "Diamante", details: ["Ensaio Gestante", "Fotografia e Vídeo do Parto", "Newborn"] }
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
        { q: "Qual a diferença de valores para parto normal?", a: "Não há diferença de valores. Cobramos pelo registro emocional, independente da via de parto." },
        { q: "Há mais algum valor além do pacote?", a: "A taxa de maternidade não está inclusa nos pacotes e é cobrada somente em maternidades da UNIMED." },
        { q: "Qual a forma de pagamento?", a: "Via Pix ou parcelamento no cartão de crédito em até 12x." }
      ],
      destaque: fotoTamires,
      images: [
        parto1,
        parto2,
        parto3,
        parto4,
        parto5
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
      // Aqui as de newborn estão certas!
      images: [
        new1,
        new2,
        new3,
        new4,
        new5
      ]
    },
    { 
      title: "Acompanhamento", 
      icon: <Calendar className="w-5 h-5" />, 
      desc: "Eternizamos o primeiro ano de seu filho através de nossas lentes! O crescimento registrado mês a mês.",
      whatsapp: "5547991322923",
      hero: {
        headline: "Eternizamos o primeiro ano de seu filho através de nossas lentes!",
        subheadline: "Acompanhamento"
      },
      about: {
        title: "Olá, somos a Ver Crescer Fotografia!",
        text: "Nossa equipe é formada por fotógrafas apaixonadas pelo processo de maternar e pela construção familiar. Nos dedicamos de coração a desempenhar nosso melhor, buscando sempre evoluirmos para oferecermos toda excelência necessária para esses momentos divinos, sempre com extrema humanização e respeito."
      },
      highlights: ["Humanização", "Respeito", "Excelência"],
      packages: [
        { name: "Bronze", details: ["Sessão Fotográfica", "15 fotos digitais", "Somente fotos do bebê"] },
        { name: "Prata", details: ["Sessão Fotográfica", "25 fotos digitais", "Fotos com os pais"] },
        { name: "Ouro", details: ["Sessão Fotográfica", "Todas as fotos digitais", "Fotos com os pais"] },
        { name: "Diamante (12 meses)", details: ["12 sessões fotográficas", "Todas as fotos digitais", "Fotos com os pais", "Pacote especial para 1 ano"] }
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
        acom1,
        acom2,
        acom3,
        acom4,
        acom5
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
        { name: "Combo (Smash + Festa)", details: ["Pacote Premium completo", "Cobertura de 2h do evento", "Todas as fotos da festa", "Opção de Álbum 25x30"] }
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
        { q: "Qual o prazo de entrega?", a: "Fotos digitais entregues em até 7 dias úteis." },
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
        eventos1,
        eventos2,
        eventos3,
        eventos4,
        eventos5
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
      images: [
        
      ]
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
          { name: "Infraestrutura", detail: "Cenários fixos como quarto newborn, branco infinity e jardim externo." },
          { name: "Ideal Para", detail: "Fotógrafos, YouTubers, influenciadores e e-commerces (fotos de produto)." }
        ]
      },
      faq: [
        { q: "Quais os cenários disponíveis?", a: "Quarto newborn, fundo branco infinity e jardim externo decorado." },
        { q: "Precisa levar iluminação?", a: "Não, iluminação Godox profissional já está inclusa no valor da locação." }
      ],
      images: [
        
      ]
    }
  ];

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-[#f9fbf9] text-stone-900 leading-relaxed font-sans">
      {/* Background atmospherics */}
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
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
              className="relative w-full max-w-6xl h-full bg-white rounded-[40px] shadow-2xl overflow-y-auto"
            >
              <div className="p-8 md:p-16">
                <button 
                  onClick={() => setActiveService(null)}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full glass border-black/10 flex items-center justify-center hover:bg-emerald-50 transition-colors z-10"
                >
                  <X className="text-stone-900" />
                </button>

                <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
                   <div className="w-20 h-20 rounded-[32px] bg-emerald-900 text-white flex items-center justify-center shrink-0">
                     {activeService.icon}
                   </div>
                   <div className="space-y-4">
                     <div className="inline-block px-3 py-1 rounded-full bg-stone-100 text-[10px] font-bold tracking-widest uppercase text-stone-500">
                        Serviço Especializado
                     </div>
                     <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none">{activeService.title}</h2>
                     {activeService.hero ? (
                       <p className="text-xl md:text-2xl font-serif text-stone-900 italic opacity-80">{activeService.hero.headline}</p>
                     ) : (
                       <p className="opacity-50 font-light max-w-lg leading-relaxed">{activeService.fullDesc || activeService.desc}</p>
                     )}
                   </div>
                </div>

                {activeService.about && (
                  <div className={`mb-20 grid ${activeService.images && activeService.images.length > 0 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-12 items-center p-10 bg-emerald-50/50 rounded-[50px]`}>
                    
                    {/* Só mostra o quadrado se houver pelo menos 1 imagem na lista */}
                    {activeService.images && activeService.images.length > 0 && (
                      <div className="aspect-square rounded-[40px] overflow-hidden">
                        <img src={activeService.destaque || activeService.images[0]} referrerPolicy="no-referrer" className="w-full h-full object-cover" alt={activeService.about.title} />
                      </div>
                    )}

                    <div className="space-y-6">
                      <h3 className="text-3xl font-serif">{activeService.about.title}</h3>
                      <p className="opacity-60 leading-relaxed font-light whitespace-pre-line">{activeService.about.text}</p>
                      {activeService.highlights && (
                        <div className="flex flex-wrap gap-4">
                          {activeService.highlights.map((h: string, idx: number) => (
                            <span key={idx} className="text-[10px] font-bold uppercase tracking-widest px-3 py-2 bg-white rounded-full border border-stone-200">
                              {h}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeService.packages && (
                  <div className="mb-20 space-y-12">
                    <h3 className="text-3xl font-serif text-center mb-12">Escolha sua Experiência</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {activeService.packages.map((pkg: any, idx: number) => (
                        <div key={idx} className="p-8 rounded-[40px] border border-stone-200 hover:border-stone-900 transition-all group">
                          <h4 className="text-xl font-bold mb-6 tracking-tight">Pacote {pkg.name}</h4>
                          <ul className="space-y-3 mb-8">
                            {pkg.details.map((detail: string, i: number) => (
                              <li key={i} className={`flex items-center gap-3 text-sm ${detail.includes('R$') ? 'opacity-100 font-bold text-stone-900' : 'opacity-50'}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${detail.includes('R$') ? 'bg-emerald-900' : 'bg-stone-400'}`} />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeService.extraServices && (
                  <div className="mb-20 p-10 bg-emerald-50/50 rounded-[50px] space-y-10">
                    <h3 className="text-3xl font-serif text-center">{activeService.extraServices.title}</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                      {activeService.extraServices.items.map((item: any, idx: number) => (
                        <div key={idx} className="space-y-2">
                           <h4 className="text-sm font-bold uppercase tracking-widest">{item.name}</h4>
                           <p className="opacity-50 text-sm font-light">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeService.faq && (
                  <div className="mb-20 max-w-2xl mx-auto space-y-8">
                    <h3 className="text-2xl font-serif text-center mb-10 italic">Informações Importantes</h3>
                    <div className="space-y-4">
                      {activeService.faq.map((item: any, i: number) => (
                        <div key={i} className="p-6 glass border-stone-200 rounded-3xl">
                           <p className="text-xs font-bold uppercase tracking-widest mb-3">{item.q}</p>
                           <p className="opacity-60 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
   {activeService.images.map((img: string, i: number) => (
     <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 * i }}
        key={i} 
        className="aspect-[3/4] rounded-3xl overflow-hidden glass border-black/5 cursor-pointer"
        onClick={() => setFotoAmpliada(img)}
      >
       <img src={img} referrerPolicy="no-referrer" alt={activeService.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
     </motion.div>
   ))}
</div>

                <div className="p-12 md:p-20 bg-emerald-950 text-white rounded-[60px] text-center space-y-8 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />
                   <h4 className="text-3xl md:text-5xl font-serif leading-tight">Vamos eternizar<br/> esse momento?</h4>
                   <p className="opacity-60 max-w-md mx-auto font-light">Cada clique é único e cheio de significado. Agende sua data hoje mesmo.</p>
                   <div className="pt-4">
                      <a 
                        href={`https://wa.me/${activeService.whatsapp || '5547991322923'}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-12 py-6 rounded-3xl bg-white text-emerald-950 font-bold text-xl inline-flex items-center gap-4 hover:scale-105 active:scale-95 transition-transform"
                      >
                         Agendar via WhatsApp <MessageCircle size={24} />
                      </a>
                   </div>
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 pt-8 italic">Até breve! Ver Crescer Fotografias</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
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
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
            >
              <X size={40} />
            </button>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={fotoAmpliada} 
              alt="Foto Ampliada" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-xl shadow-black/5' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer text-stone-900">
            <div className="h-16 w-auto min-w-[180px] rounded-xl overflow-hidden transition-all group-hover:scale-105 flex items-center justify-center p-2 bg-white/40 backdrop-blur-sm">
              <img 
                src="/logo.png" 
                alt="Ver Crescer Logo" 
                className="h-full w-auto object-contain" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/artifacts/a-0";
                }}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Estúdio', 'Depoimentos', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold tracking-wide opacity-60 hover:opacity-100 transition-all hover:translate-y-[-1px] text-stone-900"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/vercrescerfotografia/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-emerald-50 transition-colors text-stone-900 opacity-60 hover:opacity-100"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://wa.me/5547991322923"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full bg-emerald-900 text-white text-sm font-bold shadow-xl hover:bg-emerald-800 transition-all transform active:scale-95"
            >
              Agendar Ensaio
            </a>
          </div>

          <button className="md:hidden text-stone-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden glass border-t border-black/5 px-6 py-8 flex flex-col gap-6 text-stone-900"
          >
            {['Estúdio', 'Depoimentos', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
            <div className="flex items-center gap-6 py-2">
              <a 
                href="https://www.instagram.com/vercrescerfotografia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-900 font-medium"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
            </div>
            <a 
              href="https://wa.me/5547991322923"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-2xl bg-emerald-900 text-white font-bold text-center active:scale-95"
            >
              Agendar Ensaio
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10 text-stone-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-black/5 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase mb-10 text-stone-600"
          >
            <Sparkles size={12} /> Eternizando Momentos Especiais
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-serif tracking-tighter mb-10 leading-[0.9] text-stone-900"
          >
            Cada momento, <br /> 
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-stone-500 to-stone-900">uma história.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-60 font-light mb-14 leading-relaxed tracking-tight"
          >
            No Estúdio VerCrescer, entregamos dedicação em cada clique. 
            Capturamos a essência da sua família e a força da sua marca.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <a 
              href="https://wa.me/5547991322923"
              target="_blank"
              rel="noreferrer"
              className="group px-12 py-6 rounded-2xl bg-emerald-900 text-white font-bold flex items-center justify-center gap-4 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-emerald-900/20 transition-all text-xl active:scale-95"
            >
              Falar no WhatsApp <MessageCircle size={24} className="transition-transform group-hover:scale-110" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5547991322923"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>

      {/* Services Scroller */}
      <section className="py-10 border-y border-emerald-900/5 overflow-hidden whitespace-nowrap bg-emerald-50/30">
        <div className="flex animate-scroll gap-20">
          {[...services, ...services].map((s, i) => (
            <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-default text-stone-900">
              <span className="text-stone-600">{s.icon}</span>
              <span className="text-sm font-bold tracking-[0.1em] uppercase">{s.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-[10px] font-bold tracking-widest uppercase text-emerald-700/70">
                Quem Somos
              </div>
              <h2 className="text-4xl md:text-6xl font-serif leading-[1.1]">
                Equipe apaixonada por <span className="italic font-normal">maternar.</span>
              </h2>
              <p className="text-lg opacity-60 font-light max-w-xl">
                Olá, somos a Ver Crescer Fotografia! Nossa equipe é formada pelas fotógrafas 
                <strong> Thamiris e Nanda</strong>. Somos especialistas em nascimentos, com formação como 
                doulas e consultoras de aleitamento materno.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-stone-100">
                <div>
                  <p className="text-3xl font-serif mb-1">2.3k+</p>
                  <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest">Vidas Fotografadas</p>
                </div>
                <div>
                  <p className="text-3xl font-serif mb-1">Intl.</p>
                  <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest">Premiadas Mundialmente</p>
                </div>
              </div>
              <p className="opacity-50 text-sm italic">
                "Nos dedicamos de coração buscando sempre evoluirmos para oferecer a excelência nesses momentos divinos, sempre com extrema humanização e respeito."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden glass border-stone-200">
                  <img src={equipe1} referrerPolicy="no-referrer" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" alt="Nanda e Thamiris" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden glass border-stone-200">
                   <img src={equipe2} referrerPolicy="no-referrer" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" alt="Nanda e Thamiris" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden glass border-stone-200">
                  <img src={equipe3} referrerPolicy="no-referrer" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" alt="Nanda e Thamiris" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden glass border-stone-200 shadow-2xl">
                   <img src={equipe4} referrerPolicy="no-referrer" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" alt="Nanda e Thamiris" />
                </div>
              </div>
              <div className="hidden md:block space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden glass border-stone-200">
                  <img src={equipe5} referrerPolicy="no-referrer" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" alt="Nanda e Thamiris" />
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="estúdio" className="py-32 px-6 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif mb-8 tracking-tighter">Nossas Especialidades</h2>
            <p className="opacity-60 text-lg font-light">
              Desde o primeiro batimento até o primeiro aninho, cada fase merece um olhar único.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => setActiveService(service)}
                className="p-8 rounded-[32px] bg-white border border-black/5 shadow-sm transition-all group cursor-pointer hover:shadow-xl hover:border-stone-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/50 flex items-center justify-center mb-6 text-emerald-700/50 group-hover:bg-emerald-900 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed mb-8">{service.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 group-hover:text-emerald-900 transition-all">
                   Ver Detalhes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section id="depoimentos" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-stone-900">
          <h2 className="text-4xl md:text-6xl font-serif mb-20 text-center tracking-tighter">O que dizem sobre nós</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Raquel", role: "", text: "Nossa experiência com a Ver Crescer tem sido especial desde os primeiros meses da Analua. Cada mesversário e ensaio foi marcado por fotinhos muito lindas e do jeitinho que sempre sonhamos, com um cenário mais clean, a nossa cara. Sempre nos sentimos acolhidos pela equipe, que tem uma sensibilidade incrível para lidar com os bebês e transformar cada fase em uma lembrança única. Muito obrigada sempre por toda atenção com a nossa família." },
              { name: "Fernanda", role: "", text: "Aproveitando o oportunidade, queria te agradecer mais uma vez por tudo, cada palavra, cada massagem, cada conselho, você estava ali com a gente 1000%, se doou totalmente pra viver aquele momento… você foi além do profissional, super humana, atenciosa, preocupada o tempo todo com a gente, com nosso bem estar, foi muito além da fotografia! Que Deus abençoe sempre sua vida, você é maravilhosaaaaaaaa, e vou eternamente grata" },
              { name: "Bianca", role: "", text: "Antes de fazer meu primeiro ensaio, eu achava que era só sobre ter fotos bonitas. Hoje, vejo que é sobre guardar fases da vida que nunca mais voltam… Depois que tive minhas filhas, isso fez ainda mais sentido para mim, o parto foi um dos dias mais marcantes da minha vida e, no meio de tantas emoções, existem detalhes que a gente acaba nem conseguindo absorver e poder olhar as fotos/videos e reviver aquele momento é algo que eu nunca imaginei que teria tanto valor. Lembro até hoje do meu nervosismo naquela madrugada do parto e foi a primeira vez que eu vi a Thami, nem se conhecíamos e ela foi a pessoa mais importante naquele momento, que esteve comigo todo tempo e me acalmou até mais que o médico e enfermeiras kkkk, nunca vou esquecer disso e de tudo oq ela fez por nós. Existem momentos que passam em questão de horas mas mudam a nossa vida pra sempre, ter tudo registrado me permite reviver cada detalhe que eu jamais conseguiria lembrar com a mesma intensidade… Sem contar que hoje posso mostrar todos os registros pras minhas filhas que ficam encantadas vendo elas nascendo, nos ensaios bebezinhas, aniversários… a Ver Crescer faz parte da nossa vida, dos momentos mais lindos e inesquecíveis que já vivemos, sou muuito grata por isso! confesso que fico ansiosa pra engravidar novamente e poder reviver todos esses registros com vocês. Vocês já são nossa família e eu jamais trocaria o trabalho impecável de vocês que sempre me entregaram além e com tanta excelência, quero que acompanhem todas as fases porque esses momentos passam muito rápido mas essas memórias registradas ficam pra sempre!" }
            ].map((dep, i) => (
              <div key={i} className="bg-emerald-50/30 p-10 rounded-[32px] border border-emerald-900/5 relative shadow-sm">
                <div className="flex gap-1 text-emerald-600 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="italic opacity-70 text-lg mb-8 leading-relaxed">"{dep.text}"</p>
                <div>
                  <p className="font-bold">{dep.name}</p>
                  <p className="text-xs font-bold uppercase opacity-40 tracking-widest leading-none mt-1">{dep.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contato" className="py-32 px-6 mb-20">
        <div className="max-w-5xl mx-auto bg-emerald-950 text-white rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] -z-10 rounded-full" />
          
          <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">Vamos conversar?</h2>
          <p className="max-w-xl mx-auto text-xl opacity-70 mb-12 font-light">
            Todo grande momento merece ser registrado com perfeição. Clique abaixo e tire suas dúvidas.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5547991322923" 
              className="w-full md:w-auto px-12 py-6 rounded-3xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xl flex items-center justify-center gap-4 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <MessageCircle size={28} /> Fale com a Maria
            </a>
            <div className="flex flex-col items-center gap-1 opacity-60">
               <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                 <MapPin size={18} /> Balneário Camboriú, SC
               </div>
               <p className="text-[10px] font-bold tracking-tighter opacity-100">Trade Park | Sala 204 | KM 131</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-emerald-900/5 bg-[#f5fbf5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left text-stone-900">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 justify-center md:justify-start group cursor-pointer">
              <div className="h-16 w-auto min-w-[180px] rounded-xl overflow-hidden transition-all group-hover:scale-105 flex items-center justify-center p-2 bg-white/40 backdrop-blur-sm">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="h-full w-auto object-contain" 
                  referrerPolicy="no-referrer" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/api/artifacts/a-0";
                  }}
                />
              </div>
            </div>
            <p className="text-xs opacity-50 max-w-xs font-light leading-relaxed">
              Eternizando momentos no Estúdio ou em Maternidades de Blumenau, Brusque, Itajaí e Balneário Camboriú.
            </p>
          </div>

          <div className="flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">
            <a 
              href="https://www.instagram.com/vercrescerfotografia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-900 transition-colors flex items-center gap-2"
            >
              <Instagram className="w-3 h-3" />
              Instagram
            </a>
            <a href="mailto:vercrescerfotografia@gmail.com" className="hover:text-stone-900 transition-colors uppercase">E-mail</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold opacity-30 tracking-[0.3em] uppercase mb-1">
              © 2026 VERCRESCER FOTOGRAFIAS
            </p>
            <p className="text-[10px] font-mono opacity-10">
              DISPONÍVEL 24H PARA EMERGÊNCIAS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}