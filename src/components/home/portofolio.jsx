import {
    dataPortofolio,
    PortofolioFeature,
    PortofolioService
} from '../../constants/data';

export const Portofolio = () => {
    return (
        <div
            id="portofolio"
            className="relative md:h-screen flex flex-col"
        >
            <div className="container mx-auto text-center p-4 md:pt-20">
                <p>
                    {dataPortofolio.tagline}
                </p>
                <h2 className="text-4xl font-bold md:w-2/3 mx-auto my-5">
                    {dataPortofolio.headline}
                </h2>
                <p className="md:w-4/5 mx-auto mb-3">
                    {dataPortofolio.description}
                </p>
            </div>
            <div className="md:flex flex-1 h-full">
                <div className="md:w-72 bg-[#404040] flex items-center justify-center">
                    <h3 className="p-4 text-3xl font-bold text-white">
                        My Portofolio
                    </h3>
                </div>
                <div className="flex-1 md:flex items-center bg-[#302729] text-white p-4 overflow-y-scroll">
                    <div className="md:mx-8">
                        <div className="grid md:grid-cols-2 gap-4">
                            {PortofolioFeature.map((data) => {
                                return (
                                    <div key={data.id} className="md:w-56 bg-[#362A2E] rounded-lg p-4">
                                        <div className="w-12 h-12 bg-[#A8858F] rounded-md mb-5" />
                                        <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                            {data.title}
                                        </h4>
                                        <p className="text-xs">
                                            {data.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex-1 p-4 md:p-8 mt-10 md:mt-0">
                        <div>
                            <h4 className="text-xl font-bold text-[#F57D85] mb-2">
                                Service
                            </h4>
                            <div className="mt-6 space-y-6">
                                {PortofolioService.map((data, i) => {
                                    return (
                                        <p key={i}>
                                            {data}
                                        </p>
                                    );
                                })}
                            </div>
                            <div className="mt-10 md:flex space-y-4 md:space-x-4 md:space-y-0">
                                <a
                                    href="#"
                                    className="flex md:inline-flex rounded-full px-4 py-2 border-2 border-[#F57D85] font-medium hover:bg-[#F57D85] hover:text-white justify-center"
                                >
                                    Download CV
                            </a>
                                <a
                                    href="#"
                                    className="flex md:inline-flex rounded-full px-4 py-2 border-2 border-[#F57D85] font-medium hover:bg-[#F57D85] hover:text-white justify-center"
                                >
                                    Check My Portofolio
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};