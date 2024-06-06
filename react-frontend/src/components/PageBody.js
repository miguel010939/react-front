export default function PageBody({children}){
    return(
        <div>
            <h1>header 1</h1>
            <h2>header 2</h2>
            <div className="flex items-center justify-center mx-20 bg-amber-200">
                {children}
            </div>

        </div>
    )
}