export default function HomePage(){
    return(
        <div className="flex flex-col gap-10 text-lg justify-center mt-16">
            <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Compra o Subasta lo que quieras</h1>
            <p>Únete a las decenas de usuarios que ya confían en nosotros
               y subasta tus pertenencias legalmente adquiridas en nuestro
               portal 
            </p>
            <p>También puedes acceder a un amplio catálogo de docenas de productos
               que personas como tú han puesto en subasta 
            </p>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl">¿Quiénes somos?</h1>
                <p>Nosotros somos un humilde pero ambicioso grupo de ideas absurdas
                     que se han asociado en una misma cabeza para montar una 
                     empresa ficticia
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl">¿Cuál es nuestra misión?</h1>
                <p>Nuestro porqué es tu cómo. Es nuestro compromiso servir a nuestros 
                    usuarios de la mejor forma que queramos. Además, nuestro propósito 
                    inquebrantable con la protección del medio ambiente
                </p>
                <p>También queremos aprobar el TFC</p>
            </div>
        </div>
    )
}