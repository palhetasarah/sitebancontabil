import React, { useState } from 'react';
import { Calculator, BarChart as ChartBar, Clock, FileText, Mail, MapPin, Phone, Shield, Users, Building2, LineChart, Command, Lightbulb, RefreshCw, DollarSign, FileBarChart, Settings, TrendingUp, UserCircle, Home, ClipboardCheck, Menu, X, CheckCircle, Lock, UserCog, Users2, BarChart3, Briefcase, Wallet, BookOpen, Video, Target, FileCheck } from 'lucide-react';
import { AnimatedNumber } from './components/AnimatedNumber';
import { FadeInSection } from './components/FadeInSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contatos');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Monta a mensagem com quebras de linha usando %0A
    const message = `*Novo contato do site*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Assunto:* ${formData.subject}%0A*Mensagem:* ${formData.message}`;

    const phoneNumber = "5561998034075";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Limpar formulário após envio
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const statistics = [
    { number: 232, label: 'Clientes' },
    { number: 521, label: 'Projetos' },
    { number: 1453, label: 'Horas em suporte' },
    { number: 32, label: 'Funcionários' },
  ];

  const services = [
    {
      icon: <RefreshCw className="w-8 h-8 text-[#1a237e]" />,
      title: 'Serviços de Recuperação e Reestruturação Financeira',
      description: 'Auxiliamos empresas a se reestruturarem financeiramente, superando dificuldades e alcançando novos patamares de crescimento.'
    },
    {
      icon: <FileBarChart className="w-8 h-8 text-[#1a237e]" />,
      title: 'Preparação e Análise de Demonstrações Financeiras',
      description: 'Realizamos a preparação e análise detalhada das demonstrações financeiras para garantir a saúde financeira de sua empresa.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#1a237e]" />,
      title: 'Gestão de Impostos',
      description: 'Oferecemos uma gestão estratégica de impostos, visando otimizar os tributos e garantir o cumprimento das obrigações fiscais.'
    },
    {
      icon: <Settings className="w-8 h-8 text-[#1a237e]" />,
      title: 'Contabilidade de Custos',
      description: 'Realizamos a contabilidade de custos, ajudando sua empresa a controlar e reduzir custos operacionais.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#1a237e]" />,
      title: 'Consultoria Financeira',
      description: 'Oferecemos consultoria financeira estratégica, ajudando sua empresa a otimizar seus recursos e alcançar seus objetivos financeiros.'
    },
    {
      icon: <UserCircle className="w-8 h-8 text-[#1a237e]" />,
      title: 'Assessoria Contábil',
      description: 'Prestamos assessoria contábil completa, cuidando de todas as suas necessidades fiscais e regulatórias.'
    },
    {
      icon: <Home className="w-8 h-8 text-[#1a237e]" />,
      title: 'Abertura de Empresas',
      description: 'Oferecemos serviços de abertura de empresas, com toda a orientação necessária para o cumprimento de obrigações legais e tributárias.'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-[#1a237e]" />,
      title: 'Serviços de Folha de Pagamento e RH',
      description: 'Gerenciamos a folha de pagamento e os processos trabalhistas, assegurando conformidade e eficiência para sua empresa.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#1a237e]" />,
      title: 'Gestor de Tarefas para BPO Financeiro e Contabilidade',
      description: 'Oferecemos soluções de BPO (Business Process Outsourcing) para gestão de tarefas financeiras e contábeis.'
    },
    {
      icon: <Lock className="w-8 h-8 text-[#1a237e]" />,
      title: 'Auditoria',
      description: 'Realizamos auditorias para garantir a precisão das suas informações financeiras e o cumprimento das normas.'
    },
    {
      icon: <UserCog className="w-8 h-8 text-[#1a237e]" />,
      title: 'Atendimento Personalizado',
      description: 'Oferecemos um atendimento altamente personalizado, garantindo soluções específicas para suas necessidades.'
    },
    {
      icon: <Users2 className="w-8 h-8 text-[#1a237e]" />,
      title: 'Assessoria Trabalhista',
      description: 'Fornecemos assessoria trabalhista, garantindo a conformidade da sua empresa com as leis e regulamentos trabalhistas.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#1a237e]" />,
      title: 'Análise de Dados e Business Intelligence',
      description: 'Utilizamos ferramentas de Business Intelligence e análise de dados para impulsionar decisões estratégicas na sua empresa.'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#1a237e]" />,
      title: 'Educação e Treinamento Empresarial',
      description: 'Oferecemos treinamentos e capacitação para equipes empresariais, promovendo o desenvolvimento contínuo de sua organização.'
    },
    {
      icon: <Wallet className="w-8 h-8 text-[#1a237e]" />,
      title: 'BPO Financeiro',
      description: 'Gerenciamos todos os processos financeiros da sua empresa, proporcionando maior foco no crescimento do seu negócio.'
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#ff1744]" />,
      title: 'E-book Exclusivo',
      description: 'Fornecemos um e-book com dicas para melhorar a eficiência financeira e contábil das empresas!'
    },
    {
      icon: <Video className="w-8 h-8 text-[#ff1744]" />,
      title: 'Webinar',
      description: 'Convidamos empresas a se inscreverem para um webinar sobre atualizações fiscais e regulatórias relevantes para suas operações.'
    },
    {
      icon: <Target className="w-8 h-8 text-[#ff1744]" />,
      title: 'Oportunidades de Negócios',
      description: 'Captamos o contato de empresas interessadas em uma consulta gratuita de avaliação contábil para identificar oportunidades de negócios contábeis.'
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#ff1744]" />,
      title: 'Guia Gratuito',
      description: 'Oferecemos um guia gratuito sobre as melhores práticas contábeis para empresas.'
    }
  ];

  const faqs = [
    {
      question: 'Como a Ban Contabilidade pode me ajudar na abertura da minha empresa?',
      answer: 'Nós oferecemos suporte especializado para a abertura de empresas, cuidando de todos os trâmites burocráticos para que você possa começar seu negócio com segurança e agilidade.'
    },
    {
      question: 'Quais são os benefícios de contar com a Ban Contabilidade para a gestão de impostos?',
      answer: 'Nossa equipe especializada oferece gestão estratégica de impostos, otimizando a carga tributária e garantindo o cumprimento de todas as obrigações fiscais da sua empresa.'
    },
    {
      question: 'Como a Ban Contabilidade pode me auxiliar na área trabalhista?',
      answer: 'Oferecemos suporte completo em questões trabalhistas, incluindo gestão de folha de pagamento, admissões, demissões e cumprimento das obrigações legais.'
    },
    {
      question: 'Qual a importância da consultoria financeira oferecida pela Ban Contabilidade?',
      answer: 'Nossa consultoria financeira ajuda sua empresa a tomar decisões estratégicas, otimizar recursos e alcançar seus objetivos financeiros de forma eficiente.'
    },
    {
      question: 'Como a Ban Contabilidade oferece suporte contínuo e orientação aos clientes?',
      answer: 'Mantemos um canal de comunicação direto e eficiente, oferecendo suporte contínuo e orientação personalizada para todas as necessidades contábeis e financeiras da sua empresa.'
    }
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5561998034075"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#ff1744] text-white px-6 py-3 rounded-full hover:bg-[#ff4081] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
        </svg>
        Fale Conosco
      </a>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1a237e] text-white z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="https://izmzxqzcsnaykofpcjjh.supabase.co/storage/v1/object/public/media/bancontabil/logoazul-Photoroom.png" 
                alt="BAN Contabilidade" 
                className="h-12"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-[#ff1744] transition font-medium">
                Home
              </a>
              <a href="#sobre" className="text-white hover:text-[#ff1744] transition font-medium">
                Sobre
              </a>
              <a href="#servicos" className="text-white hover:text-[#ff1744] transition font-medium">
                Serviços
              </a>
              <a href="#contatos" className="text-white hover:text-[#ff1744] transition font-medium">
                Contatos
              </a>
              <button 
                onClick={scrollToContact}
                className="bg-[#ff1744] px-6 py-2 rounded-full hover:bg-[#ff4081] transition"
              >
                Área do Cliente
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#ff1744] transition"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#inicio"
                  className="text-white hover:text-[#ff1744] transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#sobre"
                  className="text-white hover:text-[#ff1744] transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="text-white hover:text-[#ff1744] transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
                <a
                  href="#contatos"
                  className="text-white hover:text-[#ff1744] transition font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contatos
                </a>
                <button 
                  onClick={scrollToContact}
                  className="bg-[#ff1744] px-6 py-2 rounded-full hover:bg-[#ff4081] transition w-full"
                >
                  Área do Cliente
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content with padding-top to account for fixed nav */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 sm:py-16 md:py-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-1 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Bem vindo ao nosso site
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              A chave para o sucesso financeiro está na gestão inteligente
            </p>
            <a
              href="https://wa.me/5561998034075"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff1744] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg hover:bg-[#ff4081] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
              </svg>
              Fale Conosco
            </a>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Sobre a BAN Contábil</h2>
                <p className="text-gray-600 mb-6 sm:mb-8">
                  Com mais de 10 anos de experiência no mercado, oferecemos soluções contábeis completas e personalizadas para empresas de todos os portes.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <Building2 className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Parceria estratégica</h3>
                    <p className="text-gray-600">
                      A BAN Contabilidade é um parceiro estratégico para empresas de diversos segmentos em todo o Brasil, oferecendo soluções personalizadas e de alta qualidade.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <LineChart className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Inovação contínua</h3>
                    <p className="text-gray-600">
                      Com investimentos constantes em tecnologia, buscamos sempre melhorar a qualidade e eficiência dos nossos serviços contábeis.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <Command className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Atendimento personalizado</h3>
                    <p className="text-gray-600">
                      Oferecemos um atendimento personalizado, adaptando nossos serviços contábeis de acordo com as necessidades de cada cliente.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <Lightbulb className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Compromisso com a transparência</h3>
                    <p className="text-gray-600">
                      Nossos princípios de transparência, conformidade e ética garantem um relacionamento de confiança e de longo prazo com nossos clientes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Equipe BAN Contábil"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative py-12 sm:py-16 md:py-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Statistics Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1a237e] bg-opacity-90"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {statistics.map((stat, index) => (
                <AnimatedNumber key={index} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Áreas de Atuação</h2>
            <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Conheça as áreas em que atuamos, oferecendo soluções completas para a sua empresa.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">{service.title}</h3>
                      <p className="text-gray-600 text-center sm:text-left">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Características e Ofertas</h2>
              <div className="flex justify-center items-center gap-4">
                <div className="w-12 h-1 bg-[#ff1744]"></div>
                <p className="text-xl text-gray-600">
                  Explore as nossas ofertas e recursos exclusivos para melhorar a eficiência financeira e contábil da sua empresa.
                </p>
                <div className="w-12 h-1 bg-[#ff1744]"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <FadeInSection key={index} delay={index * 200}>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Perguntas frequentes</h2>
                <p className="text-gray-600">
                  Nossos serviços de contabilidade de custos visam identificar oportunidades de redução de despesas e maximização de lucros, contribuindo para a eficiência operacional de seu negócio.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    >
                      <span className="font-medium text-[#1a237e]">{faq.question}</span>
                      <span className={`transform transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contatos" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fale Conosco</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Assim que recebermos seu contato, retornaremos o mais rápido possível. Preencha todas as informações do formulário. Obrigado(a)!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      St. Sudoeste Superquadra<br />
                      301 SALAS 31/33/35<br />
                      Sudoeste, Brasília - DF, 70673-602
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ligue nos</h3>
                    <p className="text-gray-600">(61) 98603188</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">contato@bancontabilidade.com.br</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Horário de funcionamento</h3>
                    <div className="text-gray-600">
                      <p>Segunda - Quinta</p>
                      <p>9:00 - 18:00</p>
                      <p>Sexta-Feira</p>
                      <p>09:00 - 00:00</p>
                      <p>Sábado</p>
                      <p>00:00 - 06:00</p>
                      <p>Domingo</p>
                      <p>Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nome"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff1744] focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff1744] focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Assunto"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff1744] focus:border-transparent"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mensagem"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff1744] focus:border-transparent resize-none"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-[#ff1744] text-white px-6 py-3 rounded-lg hover:bg-[#ff4081] transition flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                    </svg>
                    Iniciar conversa
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ban Contabilidade</h3>
                <p className="text-gray-600">
                  A BAN Contabilidade é uma empresa líder no setor, comprometida em fornecer soluções contábeis de alta qualidade e serviços personalizados para empresas em todo o Brasil.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.instagram.com/ban.contabilidade/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors hover:border-[#ff1744] hover:text-[#ff1744]"
                    aria-label="Siga-nos no Instagram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 2.5H8C4.96243 2.5 2.5 4.96243 2.5 8V16C2.5 19.0376 4.96243 21.5 8 21.5H16C19.0376 21.5 21.5 19.0376 21.5 16V8C21.5 4.96243 19.0376 2.5 16 2.5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Links úteis</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Sobre</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Serviços</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Termos de servios</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Políticas de privacidade</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Entre em contato</h3>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    St. Sudoeste Superquadra<br />
                    Sudoeste, Brasília - DF<br />
                    Brasil
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Telefone:</span> (61) 98603188
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Email:</span><br />
                    contato@bancontabilidade.com.br
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200">
              <div className="text-center text-gray-600">
                <p>© Copyright Ban Contabilidade Todos direitos reservados</p>
                <p className="mt-2">Desenvolvido por <a href="https://assessorialpha.com/" target="_blank" rel="noopener noreferrer" className="text-[#ff1744] hover:text-[#ff4081]">Assessoria Alpha</a></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;