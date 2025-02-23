
const Footer = () => {
    return (
        <footer>
            <div className="container py-10">
                <div className="flex w-full max-md:flex-col" >
                    <div className=" flex flex-1 flex-wrap items-center justify-center gap-5">
                        <p className="opacity-70"> Copyrigth, Doge Code </p>
                        <div className="flex items-center justify-center sm:ml-auto" >
                            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                                Privacy Policy
                            </p>
                            <p className="text-p5 transition-all duration-500 hover:text-p1">
                                terms of use
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
