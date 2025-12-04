import { Button } from "@/components/ui/button";

const Index = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://cdn.poehali.dev/projects/d262a5fc-d829-49a2-b56e-825bff10de26/files/ff87e973-609c-46a0-992c-106a7175b96d.jpg';
    link.download = 'Los-Santos-Taxi-Logo.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4">
            Логотип Такси Los-Santos
          </h1>
          <p className="text-xl text-gray-300">
            Современный энергичный дизайн с профессиональными тонами
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 mb-8 animate-scale-in">
          <div className="bg-white rounded-xl p-12 flex items-center justify-center min-h-[400px]">
            <img 
              src="https://cdn.poehali.dev/projects/d262a5fc-d829-49a2-b56e-825bff10de26/files/ff87e973-609c-46a0-992c-106a7175b96d.jpg" 
              alt="Логотип Такси Los-Santos" 
              className="max-w-full h-auto hover-scale"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            onClick={handleDownload}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover-scale"
          >
            Скачать логотип
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-white font-semibold text-lg mb-2">Современный дизайн</h3>
            <p className="text-gray-400 text-sm">Энергичный стиль с элементами движения</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-3">🚖</div>
            <h3 className="text-white font-semibold text-lg mb-2">Жёлтое такси</h3>
            <p className="text-gray-400 text-sm">Классический цвет такси в динамике</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-white font-semibold text-lg mb-2">Деловой стиль</h3>
            <p className="text-gray-400 text-sm">Профессиональные сдержанные тона</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;