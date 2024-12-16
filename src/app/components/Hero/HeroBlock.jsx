const pageText = `ЕВРАЗ-ЗСМК — один из крупнейших металлургических заводов России. 
Предприятие с мировым именем, выпускающее продукцию высочайшего качества для ключевых отраслей промышленности. 
Достижения завода включают внедрение инновационных технологий, устойчивое развитие и признание на международном уровне.`

export default function HeroBlock(){
    
    return (
        <div className="bg-white my-auto h-fit w-full md:max-w-[30rem] flex flex-col rounded-r-md">
            <div className="flex flex-col ">
                <div className="w-full bg-[#FBB92F] h-2 rounded-tr-md"></div>
                <div className="w-full bg-[#EE7918] h-2"></div>
                <div className="w-full bg-[#E42213] h-2"></div>
            </div>
            <div className="flex p-5">
                <p className="font-medium">{pageText}</p>
            </div>
        </div>
    )
}