import './App.css';
import IntroSection from './components/IntroSection';
import CardSection from './components/CardSection';
import ContactSection from './components/ContactSection';

function App() {

    return (
        <div className="bg-white min-h-screen flex items-center">
            <div className='p-6 xl:hidden flex flex-col'>
                <div className='flex flex-col justify-center items-center text-center mb-10'>
                    <IntroSection />
                </div>
                <div className='mb-5'>
                    <CardSection />
                </div>
                <div className='flex flex-col text-center items-center'>
                    <ContactSection />
                </div>
            </div>
            <div className='hidden xl:flex'>
                <div className='flex p-4'>
                    <div className='flex flex-col justify-between w-5/12'>
                        <IntroSection />
                        <ContactSection />
                    </div>
                    <div className='w-7/12 max-w-screen-xl'>
                        <CardSection />
                    </div>
                </div>
            </div>
        </div>
    );
   

}

export default App;
