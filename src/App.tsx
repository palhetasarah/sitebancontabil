import React, { useState } from 'react';
import { Calculator, BarChart as ChartBar, Clock, FileText, Mail, MapPin, Phone, Shield, Users, Building2, LineChart, Command, Lightbulb, RefreshCw, DollarSign, FileBarChart, Settings, TrendingUp, UserCircle, Home, ClipboardCheck, Menu, X, CheckCircle, Lock, UserCog, Users2, BarChart3, Briefcase, Wallet, BookOpen, Video, Target, FileCheck } from 'lucide-react';
import { AnimatedNumber } from './components/AnimatedNumber';
import { FadeInSection } from './components/FadeInSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-white">
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
              <button className="bg-[#ff1744] px-6 py-2 rounded-full hover:bg-[#ff4081] transition">
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
                <button className="bg-[#ff1744] px-6 py-2 rounded-full hover:bg-[#ff4081] transition w-full">
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
        <section id="inicio" className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="container mx-auto px-6 relative z-1 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bem vindo ao nosso site
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              A chave para o sucesso financeiro está na gestão inteligente
            </p>
            <button className="bg-[#ff1744] px-8 py-3 rounded-full text-lg hover:bg-[#ff4081] transition">
              Fale Conosco
            </button>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Sobre a BAN Contábil</h2>
                <p className="text-gray-600 mb-8">
                  Com mais de 10 anos de experiência no mercado, oferecemos soluções contábeis completas e personalizadas para empresas de todos os portes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <Building2 className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Parceria estratégica</h3>
                    <p className="text-gray-600">
                      A BAN Contabilidade é um parceiro estratégico para empresas de diversos segmentos em todo o Brasil, oferecendo soluções personalizadas e de alta qualidade.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <LineChart className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Inovação contínua</h3>
                    <p className="text-gray-600">
                      Com investimentos constantes em tecnologia, buscamos sempre melhorar a qualidade e eficiência dos nossos serviços contábeis.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <Command className="w-6 h-6 text-[#ff1744]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Atendimento personalizado</h3>
                    <p className="text-gray-600">
                      Oferecemos um atendimento personalizado, adaptando nossos serviços contábeis de acordo com as necessidades de cada cliente.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
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
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Equipe BAN Contábil"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Statistics Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1a237e] bg-opacity-90"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <AnimatedNumber key={index} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Áreas de Atuação</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Conheça as áreas em que atuamos, oferecendo soluções completas para a sua empresa.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">
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

        {/* Contact */}
        <section id="contatos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-[#1a237e] mr-4" />
                  <div>
                    <h3 className="font-semibold">Endereço</h3>
                    <p className="text-gray-600">Av. Principal, 1000 - Centro</p>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <Phone className="w-6 h-6 text-[#1a237e] mr-4" />
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-gray-600">(11) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#1a237e] mr-4" />
                  <div>
                    <h3 className="font-semibold">E-mail</h3>
                    <p className="text-gray-600">contato@bancontabil.com.br</p>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
                ></textarea>
                <button className="bg-[#1a237e] text-white px-6 py-2 rounded-lg hover:bg-[#283593] transition w-full">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a237e] text-white py-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">BAN Contábil</h3>
                <p className="text-gray-300">
                  Soluções contábeis inteligentes para o sucesso do seu negócio.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#inicio" className="text-gray-300 hover:text-white">Home</a></li>
                  <li><a href="#sobre" className="text-gray-300 hover:text-white">Sobre</a></li>
                  <li><a href="#servicos" className="text-gray-300 hover:text-white">Serviços</a></li>
                  <li><a href="#contatos" className="text-gray-300 hover:text-white">Contatos</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
                <p className="text-gray-300">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 13h
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300">
                © {new Date().getFullYear()} BAN Contábil. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;